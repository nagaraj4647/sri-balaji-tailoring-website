'use client';

import React from 'react';
import { Home, Scissors, Grid, Calendar, MapPin } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BOOKING_URL } from '@/lib/constants';

export default function MobileBottomNav() {
  const pathname = usePathname();

  const navItems = [
    { id: 'home',     label: 'Home',    icon: Home,     href: '/' },
    { id: 'services', label: 'Services', icon: Scissors, href: '/services' },
    { id: 'gallery',  label: 'Gallery',  icon: Grid,     href: '/gallery' },
    { id: 'booking',  label: 'Book',     icon: Calendar, href: BOOKING_URL, isExternal: true },
    { id: 'contact',  label: 'Contact',  icon: MapPin,   href: '/contact' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-maroon-900/95 backdrop-blur-md border-t border-gold-500/30 px-1 pb-safe pt-1 shadow-[0_-4px_20px_-10px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between w-full max-w-md mx-auto h-[60px]">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          const baseClasses = `flex-1 flex flex-col items-center justify-center h-full transition-all duration-200 ${
            isActive
              ? 'text-gold-400 font-semibold scale-105'
              : 'text-ivory-300/80 hover:text-ivory-100'
          }`;

          if (item.isExternal) {
            return (
              <a
                key={item.id}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={baseClasses}
                aria-label="Book Appointment"
              >
                <Icon className="w-[22px] h-[22px] mb-1 transition-transform stroke-[1.8]" />
                <span className="text-[10px] tracking-wider leading-none">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.id}
              href={item.href}
              className={baseClasses}
            >
              <Icon className={`w-[22px] h-[22px] mb-1 transition-transform ${isActive ? 'stroke-[2.2]' : 'stroke-[1.8]'}`} />
              <span className="text-[10px] tracking-wider leading-none">{item.label}</span>
              {isActive && (
                <span className="absolute bottom-1 w-1 h-1 bg-gold-400 rounded-full shadow-gold"></span>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
