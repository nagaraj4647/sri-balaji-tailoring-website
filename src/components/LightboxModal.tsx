'use client';

import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Clock } from 'lucide-react';
import Image from 'next/image';
import { GalleryItem } from '@/lib/types';
import { BOOKING_URL } from '@/lib/constants';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelectNext: () => void;
  onSelectPrev: () => void;
}

export default function LightboxModal({
  item,
  items,
  onClose,
  onSelectNext,
  onSelectPrev,
}: LightboxModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onSelectNext();
      if (e.key === 'ArrowLeft') onSelectPrev();
    };
    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose, onSelectNext, onSelectPrev]);

  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-maroon-950/95 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Top Controls Bar */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between">
        <div className="px-3 py-1 rounded-full bg-maroon-900/80 border border-gold-500/40 text-gold-300 text-xs font-semibold tracking-wider">
          {currentIndex + 1} / {items.length} • {item.category}
        </div>
        <button
          onClick={onClose}
          className="w-10 h-10 rounded-full bg-maroon-900/90 border border-gold-500/40 text-ivory-100 hover:text-gold-400 hover:bg-gold-500/20 transition-all flex items-center justify-center shadow-lg"
          aria-label="Close viewer"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Navigation Arrows */}
      <button
        onClick={onSelectPrev}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-maroon-950 transition-all flex items-center justify-center shadow-gold"
        aria-label="Previous Image"
      >
        <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
      </button>

      <button
        onClick={onSelectNext}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-maroon-900/90 border border-gold-500/40 text-gold-400 hover:bg-gold-500 hover:text-maroon-950 transition-all flex items-center justify-center shadow-gold"
        aria-label="Next Image"
      >
        <ChevronRight className="w-6 h-6 stroke-[2.5]" />
      </button>

      {/* Main Content Modal Container */}
      <div className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-gradient-to-b from-maroon-900 to-maroon-950 border border-gold-500/50 shadow-maroon p-4 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        
        {/* Image Showcase */}
        <div className="md:col-span-7 relative aspect-[4/5] sm:aspect-square w-full rounded-2xl overflow-hidden border border-gold-500/30 group">
          <Image
            src={item.imageUrl}
            alt={item.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, 600px"
          />
        </div>

        {/* Details & CTA Column */}
        <div className="md:col-span-5 space-y-4 text-ivory-50">
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-gold-500/20 text-gold-300 border border-gold-400/30 text-[11px] font-bold uppercase tracking-wider mb-2">
              {item.category}
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50 leading-tight">
              {item.title}
            </h2>
          </div>

          {item.description && (
            <p className="text-xs sm:text-sm text-ivory-200/90 font-sans leading-relaxed">
              {item.description}
            </p>
          )}



          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {item.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[10px] px-2.5 py-0.5 rounded-md bg-maroon-800 text-ivory-300 border border-gold-500/20"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* External Booking Trigger */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-maroon-950 font-bold text-sm uppercase tracking-wider shadow-gold hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 mt-4"
          >
            <Calendar className="w-4 h-4 stroke-[2.2]" />
            <span>Book Appointment</span>
          </a>
        </div>

      </div>

    </div>
  );
}
