'use client';

import React from 'react';
import { MapPin, Phone, MessageCircle, Instagram, Navigation, Clock, Sparkles } from 'lucide-react';
import { SHOP_PHONE, SHOP_WHATSAPP_URL } from '@/lib/constants';

export default function ContactSection() {
  const shopAddress = "No.16, Vaniga Valagam, Nenmeli, Sriperumbudur, Tamil Nadu – 602105";
  const mapSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Sri Balaji Tailoring Centre No 16 Vaniga Valagam Nenmeli Sriperumbudur Tamil Nadu 602105")}`;

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 bg-maroon-950 text-ivory-50 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-14 relative z-10">
        
        {/* Title */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-400/30 text-gold-300 text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>Visit Our Boutique</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold tracking-tight">
            LOCATION & <span className="gold-gradient-text">CONTACT INFO</span>
          </h2>
          <p className="text-xs sm:text-base text-ivory-300/80 max-w-xl mx-auto font-sans">
            Drop by our shop in Nenmeli, Sriperumbudur for fabric consultations, body measurements, and custom embroidery fittings.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Contact Information Card */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-maroon-900 via-maroon-950 to-maroon-900 border border-gold-500/40 p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-maroon">
            
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-gold-400 block">Master Tailor</span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-ivory-50">J. SUNDARI</h3>
                <p className="text-xs text-gold-300 font-serif">SRI BALAJI TAILORING CENTRE</p>
              </div>

              {/* Address */}
              <div className="p-4 rounded-2xl bg-maroon-950/80 border border-gold-500/20 space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold text-gold-400 tracking-wider">Shop Address</p>
                    <p className="text-xs sm:text-sm text-ivory-200 leading-relaxed">
                      {shopAddress}
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="p-4 rounded-2xl bg-maroon-950/80 border border-gold-500/20 space-y-2">
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-xs uppercase font-bold text-gold-400 tracking-wider">Operating Hours</p>
                    <p className="text-xs sm:text-sm text-ivory-200">
                      Monday – Saturday: 09:30 AM – 08:30 PM <br />
                      Sunday: 10:00 AM – 06:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gold-500/20">
              
              {/* Call */}
              <a
                href={`tel:${SHOP_PHONE}`}
                className="py-3 px-3 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 text-maroon-950 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold hover:brightness-110 transition-all"
              >
                <Phone className="w-4 h-4 stroke-[2.2]" />
                <span>Call Shop</span>
              </a>

              {/* WhatsApp */}
              <a
                href={SHOP_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-emerald-700/80 text-emerald-100 border border-emerald-400/40 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/sri_balaji.tailoring"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-maroon-900 border border-gold-500/30 text-ivory-100 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-gold-400 transition-all"
              >
                <Instagram className="w-4 h-4 text-gold-400" />
                <span>Instagram</span>
              </a>

              {/* Google Maps Directions */}
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-3 rounded-2xl bg-maroon-900 border border-gold-500/30 text-ivory-100 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:border-gold-400 transition-all"
              >
                <Navigation className="w-4 h-4 text-gold-400" />
                <span>Directions</span>
              </a>

            </div>

          </div>

          {/* Interactive Google Map Box */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden gold-border shadow-maroon min-h-[360px] relative bg-maroon-900">
            <iframe
              title="Sri Balaji Tailoring Centre Location Map"
              src="https://maps.google.com/maps?q=Sriperumbudur%20Nenmeli%20Tamil%20Nadu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full min-h-[380px] border-0 filter contrast-105 opacity-90"
              loading="lazy"
              allowFullScreen
            />
            
            {/* Map Overlay Badge */}
            <div className="absolute bottom-4 left-4 glass-maroon p-3 rounded-2xl border border-gold-500/40 max-w-xs">
              <div className="flex items-center gap-2 text-xs font-bold text-gold-300 font-serif">
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Nenmeli, Sriperumbudur Hub</span>
              </div>
              <p className="text-[10px] text-ivory-200 mt-0.5">
                Located right at No.16, Vaniga Valagam commercial complex.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
