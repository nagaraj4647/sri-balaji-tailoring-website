'use client';

import React, { useState, useEffect } from 'react';
import { Star, MessageSquare, ExternalLink, Sparkles, MapPin, Quote } from 'lucide-react';
import { DataStore } from '@/lib/store';
import { Review } from '@/lib/types';

export default function ReviewsSection() {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    setReviews(DataStore.getReviews());
  }, []);

  return (
    <section id="reviews" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      
      {/* Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest">
          <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
          <span>Client Testimonials</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-maroon-950">
          WHAT OUR <span className="gold-gradient-text">CUSTOMERS SAY</span>
        </h2>
        <p className="text-xs sm:text-base text-stone-600 max-w-xl mx-auto font-sans">
          Trusted by women across Nenmeli, Sriperumbudur, and nearby districts for flawless fit, exquisite Aari embroidery, and punctual wedding delivery.
        </p>
      </div>

      {/* Swipeable Reviews Container on Mobile / Grid on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 md:space-x-0 md:gap-6 md:pb-0 no-scrollbar">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex-none w-[82vw] max-w-[320px] sm:w-auto snap-center rounded-3xl bg-ivory-50 border border-gold-500/30 p-6 shadow-md hover:shadow-gold transition-all flex flex-col justify-between relative group"
          >
            <Quote className="absolute top-4 right-4 w-8 h-8 text-gold-500/15 group-hover:text-gold-500/30 transition-colors pointer-events-none" />

            <div className="space-y-4">
              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < rev.rating
                        ? 'fill-gold-500 text-gold-500'
                        : 'text-stone-300'
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-xs sm:text-sm text-stone-700 font-sans italic leading-relaxed line-clamp-5">
                &ldquo;{rev.comment}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="pt-4 border-t border-gold-500/20 mt-4 space-y-1">
              <h4 className="text-sm font-serif font-bold text-maroon-950">
                {rev.customerName}
              </h4>
              <div className="flex items-center justify-between text-[11px] text-stone-500">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-gold-600" />
                  <span>{rev.location || 'Sriperumbudur'}</span>
                </span>
                <span>{rev.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Button */}
      <div className="mt-12 text-center flex flex-col items-center space-y-10">
        <a
          href="https://g.page/r/CZnb9mqIW1jkEBM/review"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-maroon-950 text-gold-300 border border-gold-500/40 text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-gold-500 hover:text-maroon-950 transition-all shadow-md"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Write a Google Review</span>
          <ExternalLink className="w-3.5 h-3.5 ml-1" />
        </a>

        {/* QR Code Section */}
        <div className="flex flex-col items-center space-y-4 pt-4 border-t border-gold-500/15 w-full max-w-sm mx-auto">
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gold-400/40 shadow-xl hover:shadow-gold transition-all duration-300">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=256x256&data=https://g.page/r/CZnb9mqIW1jkEBM/review"
              alt="Scan to leave a Google Review QR Code"
              className="w-36 h-36 sm:w-44 sm:h-44 object-contain"
              loading="lazy"
            />
          </div>
          <div className="space-y-1 mt-2 text-center">
            <h4 className="text-[13px] sm:text-sm font-serif font-bold text-maroon-950 tracking-widest">
              SCAN TO LEAVE A GOOGLE REVIEW
            </h4>
            <p className="text-[11px] sm:text-xs text-stone-600 font-sans">
              Your feedback helps us serve you better.
            </p>
          </div>
        </div>
      </div>

    </section>
  );
}
