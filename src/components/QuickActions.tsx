'use client';

import React from 'react';
import { Calendar, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { BOOKING_URL, SHOP_PHONE, SHOP_WHATSAPP_URL } from '@/lib/constants';

export default function QuickActions() {
  return (
    <section className="relative z-20 -mt-6 sm:-mt-10 max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-6">
        
        {/* Card 1: Book Appointment */}
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-left p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-maroon-900 via-maroon-950 to-maroon-900 border border-gold-500/40 shadow-maroon hover:border-gold-400 transition-all duration-300 active:scale-98 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
              <Calendar className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-gold-400">Online Appointment</p>
              <h3 className="text-base sm:text-lg font-serif font-bold text-ivory-50 group-hover:text-gold-300 transition-colors">
                Book Appointment
              </h3>
              <p className="text-[11px] text-ivory-300/80">Select date & available slot</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-maroon-800/80 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>

        {/* Card 2: WhatsApp Us */}
        <a
          href={SHOP_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group text-left p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 border border-emerald-500/40 shadow-lg hover:border-emerald-400 transition-all duration-300 active:scale-98 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 text-emerald-950 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
              <MessageCircle className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-emerald-400">Instant Chat</p>
              <h3 className="text-base sm:text-lg font-serif font-bold text-ivory-50 group-hover:text-emerald-300 transition-colors">
                WhatsApp Us
              </h3>
              <p className="text-[11px] text-emerald-200/80">Direct chat with J. Sundari</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-emerald-900/80 border border-emerald-400/30 flex items-center justify-center text-emerald-300 group-hover:bg-emerald-400 group-hover:text-emerald-950 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>

        {/* Card 3: Call Now */}
        <a
          href={`tel:${SHOP_PHONE}`}
          className="group text-left p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-maroon-900 via-maroon-950 to-maroon-900 border border-gold-500/40 shadow-maroon hover:border-gold-400 transition-all duration-300 active:scale-98 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3.5">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-400 to-gold-600 text-maroon-950 flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform">
              <Phone className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider font-semibold text-gold-400">Call Directly</p>
              <h3 className="text-base sm:text-lg font-serif font-bold text-ivory-50 group-hover:text-gold-300 transition-colors">
                Call Now
              </h3>
              <p className="text-[11px] text-ivory-300/80">+91 98401 23456 (Nenmeli)</p>
            </div>
          </div>
          <div className="w-8 h-8 rounded-full bg-maroon-800/80 border border-gold-500/30 flex items-center justify-center text-gold-400 group-hover:bg-gold-500 group-hover:text-maroon-950 transition-colors">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </a>

      </div>
    </section>
  );
}
