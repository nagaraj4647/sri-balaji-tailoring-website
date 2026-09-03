'use client';

import React from 'react';
import { Sparkles, Heart, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-maroon-950 text-ivory-300 pt-8 pb-24 md:pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-3 md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2">
              <div className="w-12 h-12 relative flex-shrink-0 drop-shadow-md">
                <Image
                  src="/logo.webp"
                  alt="Sri Balaji Tailoring Centre Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-serif font-bold text-gold-400">
                SRI BALAJI TAILORING CENTRE
              </span>
            </div>
            <p className="text-xs text-ivory-300/80 max-w-md font-sans leading-relaxed">
              Master Tailor <strong>J. Sundari</strong> &bull; Specializing in bridal blouse stitching, Aari embroidery, custom blouse designs, and professional 3-month tailoring courses.
            </p>
            <p className="text-xs text-gold-400/90 font-mono">
              📍 No.16, Vaniga Valagam, Nenmeli, Sriperumbudur, Tamil Nadu &ndash; 602105
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs uppercase font-bold text-gold-400 tracking-wider font-sans">
              Quick Navigation
            </h4>
            <ul className="space-y-1.5 text-xs flex flex-col items-center md:items-start">
              <li><Link href="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-gold-300 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-gold-300 transition-colors">Fashion Gallery</Link></li>
              <li><Link href="/about" className="hover:text-gold-300 transition-colors">About J. Sundari</Link></li>
              <li><Link href="/contact" className="hover:text-gold-300 transition-colors">Contact &amp; Location</Link></li>
            </ul>
          </div>

          {/* Col 3: Business & Portal */}
          <div className="space-y-2 flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="text-xs uppercase font-bold text-gold-400 tracking-wider font-sans">
              Tailoring Centre
            </h4>
            <ul className="space-y-1.5 text-xs flex flex-col items-center md:items-start">
              <li className="text-ivory-300">Mon - Sat: 9:30 AM - 8:30 PM</li>
              <li className="text-ivory-300">Sunday: 10:00 AM - 6:00 PM</li>
              <li className="pt-2">
                <Link
                  href="/admin/login"
                  className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg bg-maroon-900 border border-gold-500/30 text-gold-400 hover:bg-gold-500 hover:text-maroon-950 transition-colors font-semibold"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Portal</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-6 border-t border-gold-500/20 text-center text-[11px] text-ivory-400/70 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Sri Balaji Tailoring Centre (J. Sundari). All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed with</span>
            <Heart className="w-3 h-3 fill-gold-500 text-gold-500" />
            <span>for Premium Women&apos;s Fashion</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
