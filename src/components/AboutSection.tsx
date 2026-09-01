'use client';

import React from 'react';
import { Award, ShieldCheck, Heart, MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 max-w-7xl mx-auto w-full overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Column: Portrait Showcase */}
        <div className="lg:col-span-5 relative flex justify-center">
          <div className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] rounded-3xl overflow-hidden gold-border shadow-maroon">
            <Image
              src="/sundari.png"
              alt="Master Tailor J. Sundari at Sri Balaji Tailoring Centre"
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-transparent to-transparent" />
            
            {/* Experience Tag */}
            <div className="absolute bottom-4 left-4 right-4 glass-maroon p-4 rounded-2xl border border-gold-500/40 text-ivory-50">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500 text-maroon-950 font-bold font-serif text-xl flex items-center justify-center shadow-gold">
                  15+
                </div>
                <div>
                  <h4 className="text-sm font-bold font-serif text-gold-300">Years of Master Tailoring</h4>
                  <p className="text-[11px] text-ivory-200">Serving Sriperumbudur & Nenmeli clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Master Story */}
        <div className="lg:col-span-7 space-y-6 text-stone-800">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-maroon-800/10 border border-gold-500/30 text-maroon-900 text-xs font-semibold uppercase tracking-widest">
              <Award className="w-3.5 h-3.5 text-gold-600" />
              <span>Master Craftsmanship</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-maroon-950">
              MEET MASTER TAILOR <span className="gold-gradient-text">J. SUNDARI</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-gold-700 uppercase tracking-wider flex items-start gap-1.5">
              <MapPin className="w-4 h-4 text-gold-600 mt-0.5 shrink-0" />
              <span>No.16, Vaniga Valagam, Nenmeli, Sriperumbudur</span>
            </p>
          </div>

          <p className="text-xs sm:text-base text-stone-700 leading-relaxed font-sans">
            At <strong>Sri Balaji Tailoring Centre</strong>, founded and managed by Master Tailor <strong>J. Sundari</strong>, we believe every saree deserves a perfectly fitted, beautifully crafted blouse. With over 15 years of dedicated practice in custom pattern drafting, neck design innovations, and heavy bridal Aari embroidery, we bring your dream blouse vision to reality.
          </p>

          {/* Key Value Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-ivory-100 border border-gold-500/20 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-serif text-maroon-950">100% Perfect Fit Guarantee</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">Accurate body measurements & trial adjustments.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-ivory-100 border border-gold-500/20 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-serif text-maroon-950">Handicraft Embroidery</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">Exquisite Zardosi, Kundan, and Maggam thread work.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-ivory-100 border border-gold-500/20 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-serif text-maroon-950">On-Time Wedding Delivery</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">Priority scheduling for brides & festive occasions.</p>
              </div>
            </div>

            <div className="p-3.5 rounded-2xl bg-ivory-100 border border-gold-500/20 flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-gold-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs sm:text-sm font-bold font-serif text-maroon-950">Professional Certification</h4>
                <p className="text-[11px] text-stone-600 mt-0.5">3-Month hands-on blouse tailoring course.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
