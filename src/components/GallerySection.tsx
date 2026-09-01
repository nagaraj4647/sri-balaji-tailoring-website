'use client';

import React, { useState, useEffect } from 'react';
import { Grid, Eye } from 'lucide-react';
import Image from 'next/image';
import { DataStore } from '@/lib/store';
import { GalleryItem } from '@/lib/types';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    setItems(DataStore.getGallery());
  }, []);

  const categories: string[] = ['All', 'Bridal', 'Embroidery', 'Traditional', 'Modern'];

  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter((item) => item.category === selectedCategory);

  const handleNextLightbox = () => {
    if (!selectedLightboxItem) return;
    const idx = filteredItems.findIndex((i) => i.id === selectedLightboxItem.id);
    const nextIdx = (idx + 1) % filteredItems.length;
    setSelectedLightboxItem(filteredItems[nextIdx]);
  };

  const handlePrevLightbox = () => {
    if (!selectedLightboxItem) return;
    const idx = filteredItems.findIndex((i) => i.id === selectedLightboxItem.id);
    const prevIdx = (idx - 1 + filteredItems.length) % filteredItems.length;
    setSelectedLightboxItem(filteredItems[prevIdx]);
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 px-4 bg-maroon-950 text-ivory-50 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <Grid className="w-3.5 h-3.5 text-gold-400" />
            <span>Fashion Portfolio</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            EXQUISITE <span className="gold-gradient-text">DESIGN GALLERY</span>
          </h2>
          <p className="text-xs sm:text-base text-ivory-300/80 max-w-xl mx-auto font-sans">
            Tap any blouse design to view high-resolution embroidery details and book a similar custom tailored piece.
          </p>
        </div>

        {/* Filter Category Tabs (Horizontal Scroll on Mobile) */}
        <div className="flex overflow-x-auto no-scrollbar justify-start sm:justify-center items-center gap-2 pb-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex-none px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-maroon-950 shadow-gold font-bold scale-105'
                    : 'bg-maroon-900/80 text-ivory-300 border border-gold-500/20 hover:border-gold-400/50 hover:text-gold-300'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* 2-Column Grid on Mobile / 4-Column on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedLightboxItem(item)}
              className="group cursor-pointer relative aspect-[4/5] rounded-2xl overflow-hidden border border-gold-500/30 shadow-md hover:border-gold-400 hover:shadow-gold transition-all duration-300 bg-maroon-900"
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950 via-maroon-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Category Badge */}
              <div className="absolute top-2.5 left-2.5 bg-maroon-950/90 text-gold-300 text-[9px] uppercase font-bold px-2 py-0.5 rounded-md border border-gold-500/30">
                {item.category}
              </div>

              {/* View Icon Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-10 h-10 rounded-full bg-gold-500 text-maroon-950 flex items-center justify-center shadow-gold">
                  <Eye className="w-5 h-5" />
                </div>
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 space-y-0.5">
                <h3 className="text-xs sm:text-sm font-serif font-bold text-ivory-100 group-hover:text-gold-300 transition-colors line-clamp-1">
                  {item.title}
                </h3>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={selectedLightboxItem}
        items={filteredItems}
        onClose={() => setSelectedLightboxItem(null)}
        onSelectNext={handleNextLightbox}
        onSelectPrev={handlePrevLightbox}
      />

    </section>
  );
}
