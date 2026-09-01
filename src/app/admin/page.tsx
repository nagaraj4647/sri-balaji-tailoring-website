'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  ShieldCheck, Scissors, Grid, Star, Settings, 
  LogOut, Plus, Trash2, ExternalLink, MapPin, Phone, MessageCircle
} from 'lucide-react';
import { DataStore } from '@/lib/store';
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
  const [newServiceName, setNewServiceName] = useState('');
  const [newServicePrice, setNewServicePrice] = useState('');
  const [newServiceDesc, setNewServiceDesc] = useState('');
  const [newServiceImg, setNewServiceImg] = useState('');
  const [newServiceDuration, setNewServiceDuration] = useState('3-5 Days');

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
    refreshData();
  }, [router]);

  const refreshData = () => {
    setServices(DataStore.getServices());
    setGallery(DataStore.getGallery());
    setReviews(DataStore.getReviews());
  };

  const handleLogout = () => {
    DataStore.setAdminLoggedIn(false);
    router.push('/admin/login');
  };

  // Service Actions
  const handleAddService = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newServiceName || !newServicePrice) return;
    const newSrv: ServiceItem = {
      id: `srv-${Date.now()}`,
      name: newServiceName,
      category: 'Blouse Stitching',
      priceRange: newServicePrice,
      duration: newServiceDuration,
      description: newServiceDesc || 'Custom tailoring with guaranteed fit.',
      imageUrl: newServiceImg || 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    };
    const updated = [...services, newSrv];
    DataStore.saveServices(updated);
    setServices(updated);
    setIsServiceModalOpen(false);
    setNewServiceName('');
    setNewServicePrice('');
    setNewServiceDesc('');
    setNewServiceImg('');
  };

  const handleDeleteService = (id: string) => {
    const updated = services.filter(s => s.id !== id);
    DataStore.saveServices(updated);
    setServices(updated);
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

          <button
            onClick={handleLogout}
            className="px-3.5 py-2 rounded-xl bg-maroon-900 border border-gold-500/30 text-gold-400 text-xs font-semibold hover:bg-gold-500 hover:text-maroon-950 transition-colors flex items-center gap-1.5"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      {/* Main Admin Body */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6">
        
        {/* Navigation Tabs Bar */}
        <div className="flex overflow-x-auto no-scrollbar gap-2 pb-2 border-b border-stone-800">
          {[
            { id: 'services', label: `Services (${services.length})`, icon: Scissors },
            { id: 'gallery', label: `Gallery Portfolio (${gallery.length})`, icon: Grid },
            { id: 'reviews', label: `Customer Reviews (${reviews.length})`, icon: Star },
            { id: 'settings', label: 'Store Info & Settings', icon: Settings },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-none px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  isActive
                    ? 'bg-gold-500 text-maroon-950 shadow-gold'
                    : 'bg-stone-800/80 text-stone-300 hover:bg-stone-800 hover:text-gold-400'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: SERVICES MANAGER */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-serif font-bold text-gold-400">Shop Tailoring Services</h3>
              <button
                onClick={() => setIsServiceModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold text-xs uppercase tracking-wider shadow-gold hover:bg-gold-400 flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Service</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((srv) => (
                <div key={srv.id} className="p-5 rounded-3xl bg-stone-950 border border-stone-800 space-y-3 flex flex-col justify-between">
                  <div>
                    <h4 className="text-lg font-serif font-bold text-gold-400">{srv.name}</h4>
                    <p className="text-xs text-stone-400 mt-1">{srv.description}</p>
                  </div>
                  <div className="pt-3 border-t border-stone-800 flex justify-between items-center text-xs">
                    <span className="font-bold text-emerald-400">{srv.priceRange}</span>
                    <button
                      onClick={() => handleDeleteService(srv.id)}
                      className="p-2 rounded-lg bg-red-950 text-red-400 hover:bg-red-900"
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

      </div>

      {/* MODAL: ADD SERVICE */}
      {isServiceModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <form onSubmit={handleAddService} className="bg-stone-900 border border-gold-500/40 p-6 rounded-3xl w-full max-w-md space-y-4 text-xs">
            <h3 className="text-lg font-serif font-bold text-gold-400">Add New Service</h3>
            <input
              type="text"
              placeholder="Service Name"
              required
              value={newServiceName}
              onChange={(e) => setNewServiceName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <input
              type="text"
              placeholder="Price Range (e.g. ₹500 - ₹1,200)"
              required
              value={newServicePrice}
              onChange={(e) => setNewServicePrice(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <input
              type="url"
              placeholder="Image URL"
              value={newServiceImg}
              onChange={(e) => setNewServiceImg(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <textarea
              placeholder="Short Description"
              value={newServiceDesc}
              onChange={(e) => setNewServiceDesc(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-stone-950 border border-stone-700 text-white outline-none"
            />
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setIsServiceModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-stone-800 text-stone-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 rounded-xl bg-gold-500 text-maroon-950 font-bold"
              >
                Save Service
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
