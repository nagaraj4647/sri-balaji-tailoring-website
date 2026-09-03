'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, Scissors, Grid, Star, Settings, 
  LogOut, Plus, Trash2, ExternalLink, MapPin, Phone, MessageCircle
} from 'lucide-react';
import { DataStore, INITIAL_SERVICES } from '@/lib/store';
import { db, storage } from '@/lib/firebase';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, serverTimestamp, doc } from 'firebase/firestore';
import { ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';
import { ServiceItem, GalleryItem, Review, GalleryCategory } from '@/lib/types';
import { BOOKING_URL, SHOP_PHONE, SHOP_ADDRESS } from '@/lib/constants';

export default function AdminDashboardPage() {
  const router = useRouter();

  // Active Tab
  const [activeTab, setActiveTab] = useState<'services' | 'gallery' | 'reviews' | 'settings'>('services');

  // Core Datasets for Main Website Content
  const [services, setServices] = useState<ServiceItem[]>([]);
  const [gallery, setGallery] = useState<GalleryItem[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);

  // Service Modal State
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [newServiceName, setNewServiceName] = useState('');
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newServiceFile, setNewServiceFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState('');

  // Gallery Modal State
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [newGalTitle, setNewGalTitle] = useState('');
  const [newGalCategory, setNewGalCategory] = useState<GalleryCategory>('Bridal');
  const [newGalImg, setNewGalImg] = useState('');
  const [newGalPrice, setNewGalPrice] = useState('');

  // Review Modal State
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newRevName, setNewRevName] = useState('');
  const [newRevRating, setNewRevRating] = useState(5);
  const [newRevComment, setNewRevComment] = useState('');
  const [newRevLocation, setNewRevLocation] = useState('Sriperumbudur');

  useEffect(() => {
    // Auth Check
    if (!DataStore.isAdminLoggedIn()) {
      router.push('/admin/login');
      return;
    }
    
    setGallery(DataStore.getGallery());
    setReviews(DataStore.getReviews());

    const unsubscribe = onSnapshot(collection(db, 'services'), (snapshot) => {
      const svcs: ServiceItem[] = [];
      snapshot.forEach((docSnap) => {
        svcs.push({ id: docSnap.id, ...docSnap.data() } as ServiceItem);
      });
      setServices(svcs);
    }, (error) => {
      console.error('Firestore Error:', error);
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = () => {
    DataStore.setAdminLoggedIn(false);
    router.push('/admin/login');
  };

  // Service Actions
  const openEditServiceModal = (srv: ServiceItem) => {
    setEditingServiceId(srv.id);
    setNewServiceName(srv.name);
    setNewServiceDesc(srv.description);
    setNewServiceFile(null);
    setUploadError('');
    setIsServiceModalOpen(true);
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceName || !newServiceDesc) return;
    if (!editingServiceId && !newServiceFile) {
      setUploadError('Please select an image for the new service.');
      return;
    }
    if (newServiceFile && newServiceFile.size > 5 * 1024 * 1024) {
      setUploadError('Image size exceeds 5MB limit.');
      return;
    }

    setIsUploading(true);
    setUploadError('');
    setUploadProgress(0);

    try {
      let finalImageUrl = '';
      let finalImagePath = '';

      if (newServiceFile) {
        const fileExt = newServiceFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `services/${fileName}`;
        const storageRef = ref(storage, filePath);
        
        const uploadTask = uploadBytesResumable(storageRef, newServiceFile);
        
        await new Promise<void>((resolve, reject) => {
          uploadTask.on('state_changed', 
            (snapshot) => {
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              setUploadProgress(Math.round(progress));
            }, 
            (error) => reject(error), 
            () => resolve()
          );
        });
        
        finalImageUrl = await getDownloadURL(storageRef);
        finalImagePath = filePath;
      }

      if (editingServiceId) {
        // Edit existing
        const oldService = services.find(s => s.id === editingServiceId);
        const updateData: any = {
          name: newServiceName,
          description: newServiceDesc,
          updatedAt: serverTimestamp()
        };
        
        if (finalImageUrl) {
          updateData.imageUrl = finalImageUrl;
          updateData.imagePath = finalImagePath;
        }

        await updateDoc(doc(db, 'services', editingServiceId), updateData);

        // Delete old image if a new one was uploaded and old had an imagePath
        if (finalImageUrl && oldService?.imagePath) {
          try {
            await deleteObject(ref(storage, oldService.imagePath));
          } catch (err) {
            console.error('Failed to delete old image', err);
          }
        }
      } else {
        // Add new
        await addDoc(collection(db, 'services'), {
          name: newServiceName,
          category: 'Blouse Stitching', // Default category
          description: newServiceDesc,
          imageUrl: finalImageUrl,
          imagePath: finalImagePath,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }

      setIsServiceModalOpen(false);
      setEditingServiceId(null);
      setNewServiceName('');
      setNewServiceDesc('');
      setNewServiceFile(null);
    } catch (err: any) {
      console.error(err);
      setUploadError(err.message || 'Failed to save service.');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  const handleDeleteService = async (srv: ServiceItem) => {
    if (!window.confirm('Are you sure you want to delete this service?')) return;
    try {
      await deleteDoc(doc(db, 'services', srv.id));
      if (srv.imagePath) {
        await deleteObject(ref(storage, srv.imagePath)).catch(err => console.error('Error deleting image', err));
      }
    } catch (err) {
      console.error('Failed to delete service', err);
      alert('Failed to delete service');
    }
  };

  const handleMigrateInitial = async () => {
    if (!window.confirm('Migrate INITIAL_SERVICES to Firestore? This should only be done once.')) return;
    try {
      for (const srv of INITIAL_SERVICES) {
        await addDoc(collection(db, 'services'), {
          name: srv.name,
          category: srv.category,
          description: srv.description,
          imageUrl: srv.imageUrl,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp()
        });
      }
      alert('Migration successful!');
    } catch (err) {
      console.error(err);
      alert('Migration failed.');
    }
  };

  // Gallery Actions
  const handleAddGallery = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGalTitle || !newGalImg) return;
    const newItem: GalleryItem = {
      id: `gal-${Date.now()}`,
      title: newGalTitle,
      category: newGalCategory,
      imageUrl: newGalImg,
      stitchPrice: newGalPrice || '₹1,800',
      timeRequired: '3-5 Days',
      featured: true,
      createdAt: new Date().toISOString().split('T')[0],
    };
    const updated = [newItem, ...gallery];
    DataStore.saveGallery(updated);
    setGallery(updated);
    setIsGalleryModalOpen(false);
    setNewGalTitle('');
    setNewGalImg('');
    setNewGalPrice('');
  };

  const handleDeleteGallery = (id: string) => {
    const updated = gallery.filter(g => g.id !== id);
    DataStore.saveGallery(updated);
    setGallery(updated);
  };

  // Review Actions
  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRevName || !newRevComment) return;
    const newRev = DataStore.addReview({
      customerName: newRevName,
      rating: Number(newRevRating),
      comment: newRevComment,
      location: newRevLocation,
    });
    setReviews([newRev, ...reviews]);
    setIsReviewModalOpen(false);
    setNewRevName('');
    setNewRevComment('');
  };

  return (
    <div className="min-h-screen bg-stone-900 text-ivory-50 flex flex-col font-sans">
      
      {/* Top Admin Header Bar */}
      <header className="bg-maroon-950 border-b border-gold-500/30 px-4 sm:px-8 py-4 flex items-center justify-between shadow-maroon">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gold-500 text-maroon-950 flex items-center justify-center font-bold shadow-gold">
            <ShieldCheck className="w-6 h-6 stroke-[2.2]" />
          </div>
          <div>
            <h1 className="text-base sm:text-lg font-serif font-bold text-gold-400">
              SRI BALAJI TAILORING CENTRE
            </h1>
            <p className="text-[11px] text-ivory-300">Website Content Management Portal • J. Sundari</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold hover:bg-gold-500/20"
          >
            <span>Booking System</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="flex gap-2">
                <button
                  onClick={handleMigrateInitial}
                  className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300 font-bold text-xs uppercase tracking-wider hover:bg-stone-700"
                >
                  Migrate Data
                </button>
                <button
                  onClick={() => {
                    setEditingServiceId(null);
                    setNewServiceName('');
                    setNewServiceDesc('');
                    setNewServiceFile(null);
                    setUploadError('');
                    setIsServiceModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:bg-gold-400 flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add New Service</span>
                </button>
              </div>
            </div>
      </header>

      <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
        {/* TAB 1: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((srv) => (
                <div key={srv.id} className="p-5 rounded-3xl bg-stone-950 border border-stone-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-gold-400">{srv.name}</h4>
                    <p className="text-xs text-stone-400 mt-1">{srv.description}</p>
                  </div>
                  <div className="pt-3 border-t border-stone-800 flex justify-end items-center gap-2 text-xs">
                    <button
                      onClick={() => openEditServiceModal(srv)}
                      className="px-3 py-1.5 rounded-lg bg-stone-800 text-gold-400 hover:bg-stone-700 font-bold"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteService(srv)}
                      className="p-1.5 rounded-lg bg-red-950 text-red-400 hover:bg-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 2: GALLERY MANAGER */}
        {activeTab === 'gallery' && (
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-gold-400">Fashion Portfolio Photos</h3>
              <button
                onClick={() => setIsGalleryModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:bg-gold-400 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Portfolio Photo</span>
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {gallery.map((g) => (
                <div key={g.id} className="relative aspect-square rounded-2xl overflow-hidden border border-stone-800 bg-stone-950 group">
                  <img src={g.imageUrl} alt={g.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-stone-950/70 p-3 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <div>
                      <span className="text-[9px] bg-gold-500 text-maroon-950 font-bold px-1.5 py-0.5 rounded">{g.category}</span>
                      <h5 className="text-xs font-bold text-white mt-1">{g.title}</h5>
                    </div>
                    <button
                      onClick={() => handleDeleteGallery(g.id)}
                      className="self-end p-2 rounded-lg bg-red-950 text-red-400 hover:bg-red-900"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 3: REVIEWS MANAGER */}
        {activeTab === 'reviews' && (
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-gold-400">Customer Testimonials</h3>
              <button
                onClick={() => setIsReviewModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:bg-gold-400 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Testimonial</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reviews.map((rev) => (
                <div key={rev.id} className="p-5 rounded-3xl bg-stone-950 border border-stone-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif font-bold text-gold-300">{rev.customerName}</h4>
                    <span className="text-xs text-gold-400">{'★'.repeat(rev.rating)}</span>
                  </div>
                  <p className="text-xs text-stone-300 italic">&ldquo;{rev.comment}&rdquo;</p>
                  <p className="text-[10px] text-stone-500 pt-2">{rev.location} • {rev.date}</p>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* TAB 4: STORE SETTINGS */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            
            <div className="p-6 rounded-3xl bg-stone-950 border border-stone-800 space-y-4 max-w-2xl">
              <h3 className="text-lg font-serif font-bold text-gold-400">Business Information</h3>
              
              <div className="space-y-3 text-xs">
                <div>
                  <p className="text-stone-400 font-bold uppercase">Boutique Name</p>
                  <p className="text-white font-serif font-bold text-sm">SRI BALAJI TAILORING CENTRE</p>
                </div>

                <div>
                  <p className="text-stone-400 font-bold uppercase">Master Tailor</p>
                  <p className="text-gold-300 font-bold">J. Sundari</p>
                </div>

                <div>
                  <p className="text-stone-400 font-bold uppercase">Shop Address</p>
                  <p className="text-stone-200">{SHOP_ADDRESS}</p>
                </div>

                <div>
                  <p className="text-stone-400 font-bold uppercase">Phone Number</p>
                  <p className="text-stone-200">+91 {SHOP_PHONE}</p>
                </div>

                <div className="pt-2 border-t border-stone-800">
                  <p className="text-stone-400 font-bold uppercase mb-1">External Appointment Booking Website</p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold-400 underline font-mono text-xs flex items-center gap-1"
                  >
                    <span>{BOOKING_URL}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        )}

      </main>

      {/* MODAL: ADD SERVICE */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <form onSubmit={handleSaveService} className="bg-stone-900 border border-gold-500/40 p-6 rounded-3xl w-full max-w-md space-y-4 text-xs">
            <h3 className="text-lg font-serif font-bold text-gold-400">
              {editingServiceId ? 'Edit Service' : 'Add New Service'}
            </h3>
            
            {uploadError && (
              <div className="p-2 rounded bg-red-950/50 border border-red-500 text-red-300">
                {uploadError}
              </div>
            )}

            <div>
              <label className="block text-stone-400 font-bold mb-1">Service Name</label>
              <input
                type="text"
                required
                value={newServiceName}
                onChange={(e) => setNewServiceName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
              />
            </div>
            
            <div>
              <label className="block text-stone-400 font-bold mb-1">Service Image (JPG/PNG/WEBP, Max 5MB)</label>
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => setNewServiceFile(e.target.files?.[0] || null)}
                className="w-full text-stone-300 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-gold-500 file:text-maroon-950 hover:file:bg-gold-400"
              />
              {newServiceFile && (
                <p className="mt-2 text-gold-400">Selected: {newServiceFile.name}</p>
              )}
            </div>

            <div>
              <label className="block text-stone-400 font-bold mb-1">Short Description</label>
              <textarea
                required
                rows={3}
                value={newServiceDesc}
                onChange={(e) => setNewServiceDesc(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
              />
            </div>

            {isUploading && (
              <div className="w-full bg-stone-800 rounded-full h-2">
                <div className="bg-gold-500 h-2 rounded-full transition-all" style={{ width: `${uploadProgress}%` }}></div>
              </div>
            )}

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(false)}
                disabled={isUploading}
                className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isUploading}
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold disabled:opacity-50"
              >
                {isUploading ? 'Saving...' : 'Save Service'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: ADD GALLERY PHOTO */}
      {isGalleryModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <form onSubmit={handleAddGallery} className="bg-stone-900 border border-gold-500/40 p-6 rounded-3xl w-full max-w-md space-y-4 text-xs">
            <h3 className="text-lg font-serif font-bold text-gold-400">Add Portfolio Design Photo</h3>
            <input
              type="text"
              placeholder="Design Title (e.g. Peacock Aari Blouse)"
              required
              value={newGalTitle}
              onChange={(e) => setNewGalTitle(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <select
              value={newGalCategory}
              onChange={(e) => setNewGalCategory(e.target.value as GalleryCategory)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            >
              <option value="New Designs">New Designs</option>
              <option value="Bridal">Bridal</option>
              <option value="Embroidery">Embroidery</option>
              <option value="Traditional">Traditional</option>
              <option value="Modern">Modern</option>
            </select>
            <input
              type="url"
              placeholder="Image URL"
              required
              value={newGalImg}
              onChange={(e) => setNewGalImg(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Estimated Stitch Price"
              value={newGalPrice}
              onChange={(e) => setNewGalPrice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsGalleryModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold"
              >
                Add Photo
              </button>
            </div>
          </form>
        </div>
      )}

      {/* MODAL: ADD REVIEW */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <form onSubmit={handleAddReview} className="bg-stone-900 border border-gold-500/40 p-6 rounded-3xl w-full max-w-md space-y-4 text-xs">
            <h3 className="text-lg font-serif font-bold text-gold-400">Add Customer Testimonial</h3>
            <input
              type="text"
              placeholder="Customer Name"
              required
              value={newRevName}
              onChange={(e) => setNewRevName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Location (e.g. Nenmeli, Sriperumbudur)"
              value={newRevLocation}
              onChange={(e) => setNewRevLocation(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <textarea
              placeholder="Customer Review"
              required
              value={newRevComment}
              onChange={(e) => setNewRevComment(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold"
              >
                Save Review
              </button>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
