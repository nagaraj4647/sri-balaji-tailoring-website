'use client';

import React, { useState, useEffect } from 'react';
import { Scissors, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { DataStore } from '@/lib/store';
import { ServiceItem } from '@/lib/types';

export default function ServicesSection() {
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    setServices(DataStore.getServices());
  }, []);

  return (
    <section id="services" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      
      {/* Section Header */}
      <div className="text-center space-y-3 mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest">
          <Scissors className="w-3.5 h-3.5 text-gold-600" />
          <span>Tailoring & Craftsmanship</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-maroon-950">
          OUR EXCLUSIVE <span className="gold-gradient-text">SERVICES</span>
        </h2>
        <p className="text-xs sm:text-base text-stone-600 max-w-xl mx-auto font-sans">
          From classic South Indian silk blouses to extravagant bridal Aari embroidery, we deliver unmatched precision and luxurious fit.
        </p>
      </div>

      {/* Services Horizontal Scroll on Mobile / Grid on Desktop */}
      <div className="flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-x-0 md:gap-8 md:pb-0 no-scrollbar">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex-none w-[85vw] max-w-[340px] sm:w-auto snap-center rounded-3xl bg-gradient-to-b from-ivory-50 to-ivory-100 border border-gold-500/30 shadow-md hover:shadow-gold transition-all duration-300 flex flex-col justify-between group overflow-hidden"
          >
            {/* Top Image Container */}
            <div className="relative h-48 sm:h-56 w-full overflow-hidden">
              <Image
                src={service.imageUrl}
                alt={service.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 85vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent" />
              
              {/* Category Tag Badge */}
              <div className="absolute top-3 left-3 bg-maroon-950/90 text-gold-300 text-[10px] uppercase font-semibold tracking-wider px-2.5 py-1 rounded-full border border-gold-500/40 backdrop-blur-sm">
                {service.category}
              </div>


            </div>

            {/* Content Container */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-maroon-950 group-hover:text-gold-700 transition-colors">
                  {service.name}
                </h3>
                <p className="text-xs text-stone-600 mt-2 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>


            </div>
          </div>
        ))}
      </div>

      {/* Swipe Indicator Notice on Mobile */}
      <div className="mt-4 text-center md:hidden flex items-center justify-center gap-1.5 text-stone-400 text-xs">
        <Sparkles className="w-3.5 h-3.5 text-gold-500" />
        <span>Swipe left to view all services</span>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16 sm:mt-24 pt-12 sm:pt-16 border-t border-gold-500/20">
        <div className="text-center space-y-3 mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-maroon-950">
            WHY <span className="gold-gradient-text">CHOOSE US?</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center space-y-3 p-6 sm:p-8 rounded-3xl bg-ivory-50 border border-gold-500/30 shadow-md hover:shadow-gold transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gold-700">Personal Attention</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">Every design is created based on your requirements.</p>
          </div>
          <div className="text-center space-y-3 p-6 sm:p-8 rounded-3xl bg-ivory-50 border border-gold-500/30 shadow-md hover:shadow-gold transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gold-700">Neat Finishing</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">Careful stitching and finishing for a clean, elegant look.</p>
          </div>
          <div className="text-center space-y-3 p-6 sm:p-8 rounded-3xl bg-ivory-50 border border-gold-500/30 shadow-md hover:shadow-gold transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-serif font-bold text-gold-700">Custom Designs</h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">Your design, your style, your measurements.</p>
          </div>
        </div>
      </div>

    </section>
  );
}
