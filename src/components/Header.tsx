'use client';

import React from 'react';
import { Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { BOOKING_URL, SHOP_PHONE, SHOP_WHATSAPP_URL } from '@/lib/constants';
import GooeyNav from './GooeyNav';

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/',         label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/gallery',  label: 'Gallery' },
    { href: '/about',    label: 'About' },
    { href: '/reviews',  label: 'Reviews' },
    { href: '/contact',  label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-maroon-950 border-b border-gold-500/20 text-ivory-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 h-[68px] sm:h-[76px] flex items-center justify-between gap-6">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="Sri Balaji Tailoring Centre Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center leading-none">
            <span className="text-[11px] sm:text-[13px] font-serif tracking-[0.18em] font-bold text-gold-400">
              SRI BALAJI
            </span>
            <span className="text-[8px] sm:text-[10px] uppercase tracking-[0.22em] text-ivory-300/70 font-sans mt-0.5">
              TAILORING CENTRE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex flex-1 justify-center text-[13px] font-serif uppercase tracking-wider">
          <GooeyNav
            items={navLinks}
            initialActiveIndex={navLinks.findIndex(l => l.href === pathname) >= 0 ? navLinks.findIndex(l => l.href === pathname) : 0}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]} // uses default colors or add CSS vars for gold/maroon
          />
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Call Shop - desktop */}
          <a
            href={"tel:" + SHOP_PHONE}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gold-500/30 text-gold-400/90 hover:text-gold-300 hover:border-gold-400/60 transition-all text-[11px] font-medium"
            title="Call Shop"
          >
            <Phone className="w-3 h-3" />
            <span className="hidden lg:inline">Call</span>
          </a>

          {/* WhatsApp - desktop */}
          <a
            href={SHOP_WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-700/60 border border-emerald-500/30 text-emerald-100/90 hover:bg-emerald-700 transition-all text-[11px] font-medium"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-3 h-3" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>

          {/* Call - mobile icon only */}
          <a
            href={"tel:" + SHOP_PHONE}
            className="sm:hidden p-2 rounded-full border border-gold-500/30 text-gold-400"
            title="Call Shop"
          >
            <Phone className="w-4 h-4" />
          </a>

          {/* Book Appointment - Primary CTA */}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-gold-500 text-maroon-950 px-3.5 sm:px-5 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-gold-400 transition-colors shadow-sm"
          >
            <span>Book</span>
            <span className="hidden sm:inline">&nbsp;Appointment</span>
          </a>

          {/* Admin */}
          <Link
            href="/admin/login"
            className="p-1.5 text-ivory-400/40 hover:text-gold-400 transition-colors"
            title="Admin Portal"
          >
            <ShieldCheck className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </header>
  );
}
