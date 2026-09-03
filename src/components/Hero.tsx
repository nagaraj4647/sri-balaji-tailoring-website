import React from 'react';
import { Calendar, ArrowRight, Award, Star, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from './HeroCarousel';
import MarqueeBanner from './MarqueeBanner';
import { BOOKING_URL } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center maroon-gradient-bg text-ivory-50 overflow-hidden"
    >
      {/* Subtle Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-maroon-800/40 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-maroon-600/20 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-10 lg:gap-8 items-start">

          {/* LEFT: Text Content */}
          <div className="space-y-5 text-center lg:text-left">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-400/20 text-gold-300 text-[11px] font-semibold tracking-[0.2em] uppercase">
              <span className="w-1 h-1 rounded-full bg-gold-400 inline-block" />
              YOUR STYLE &bull; OUR DESIGN
            </div>

            {/* Heading */}
            <div className="space-y-1">
              <h1 className="text-[2.6rem] sm:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-serif font-bold tracking-tight text-ivory-50 leading-[1.06]">
                SRI BALAJI
              </h1>
              <div className="text-[2.6rem] sm:text-5xl lg:text-[3rem] xl:text-[3.25rem] font-serif font-bold tracking-tighter leading-[1.06]">
                <span className="gold-gradient-text">TAILORING CENTRE</span>
              </div>
            </div>

            {/* Sub-line */}
            <p className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-[10px] sm:text-[11px] text-gold-400/80 font-sans font-semibold tracking-[0.16em] uppercase">
              <span className="flex items-center gap-1.5">
                <Award className="w-3 h-3 text-gold-500 shrink-0" />
                Master Tailor: J. Sundari
              </span>
              <span className="text-ivory-500/40">&bull;</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-gold-500 shrink-0" />
                Nenmeli, Sriperumbudur
              </span>
            </p>

            {/* Description */}
            <p className="text-sm text-ivory-200/70 max-w-md mx-auto lg:mx-0 font-sans leading-[1.75]">
              Beautifully crafted blouses, bridal Aari &amp; Zardosi embroidery, and
              custom designs &mdash; made with 15+ years of dedicated master
              craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gold-500 text-maroon-950 font-bold text-sm uppercase tracking-wider hover:bg-gold-400 active:scale-95 transition-all shadow-gold"
              >
                <Calendar className="w-4 h-4" />
                Book Appointment
              </a>

              <Link
                href="/gallery"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-ivory-50/20 text-ivory-100/80 hover:border-gold-400/50 hover:text-gold-300 font-medium text-sm tracking-wide transition-all"
              >
                View Designs
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>

            {/* Stats */}
            <div className="pt-8 flex items-center justify-center lg:justify-start gap-8 sm:gap-10">
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-serif font-bold text-gold-400">100%</p>
                <p className="text-[10px] text-ivory-300/50 mt-0.5 tracking-wider uppercase">Custom Fit</p>
              </div>
              <div className="w-px h-7 bg-gold-500/15" />
              <div className="text-center lg:text-left">
                <p className="text-xl sm:text-2xl font-serif font-bold text-gold-400">5000+</p>
                <p className="text-[10px] text-ivory-300/50 mt-0.5 tracking-wider uppercase">Blouses Crafted</p>
              </div>
              <div className="w-px h-7 bg-gold-500/15" />
              <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                <p className="text-xl sm:text-2xl font-serif font-bold text-gold-400 flex items-center gap-1">
                  5.0 <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
                </p>
                <p className="text-[10px] text-ivory-300/50 mt-0.5 tracking-wider uppercase">Client Rating</p>
              </div>
            </div>

          </div>

          {/* RIGHT: Hero Visual */}
          <div className="relative flex justify-center lg:justify-end lg:pr-4">
              <HeroCarousel />
          </div>

        </div>
      </div>
      
      {/* Marquee Banner placed at the bottom edge of the hero section */}
      <div className="w-full mt-5">
        <MarqueeBanner />
      </div>
    </section>
  );
}
