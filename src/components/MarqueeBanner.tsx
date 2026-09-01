'use client';

import React from 'react';
import { Award, Star, Scissors, Sparkles, CheckCircle } from 'lucide-react';

export default function MarqueeBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-gold-500 via-gold-400 to-gold-500 py-1.5 sm:py-2 overflow-hidden z-20 border-t border-b border-gold-600/50 flex">
      {/* Track 1 */}
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0">
        {[...Array(2)].map((_, i) => (
          <div key={`t1-${i}`} className="flex items-center gap-6 sm:gap-12 px-3 sm:px-6">
            <div className="flex items-center gap-2 text-maroon-950">
              <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">100% PERFECT FIT</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maroon-950" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">BRIDAL BLOUSES</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">AARI EMBROIDERY</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">ZARDOSI WORK</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">ON-TIME DELIVERY</span>
            </div>
          </div>
        ))}
      </div>
      {/* Track 2 (Identical for seamless looping) */}
      <div className="flex animate-marquee whitespace-nowrap min-w-full shrink-0" aria-hidden="true">
        {[...Array(2)].map((_, i) => (
          <div key={`t2-${i}`} className="flex items-center gap-6 sm:gap-12 px-3 sm:px-6">
            <div className="flex items-center gap-2 text-maroon-950">
              <Scissors className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">100% PERFECT FIT</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-maroon-950" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">BRIDAL BLOUSES</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">AARI EMBROIDERY</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">ZARDOSI WORK</span>
            </div>
            <div className="flex items-center gap-2 text-maroon-950">
              <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span className="font-sans font-bold text-[9px] sm:text-[10px] tracking-[0.2em]">ON-TIME DELIVERY</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
