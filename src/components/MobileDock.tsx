'use client';

import React from 'react';
import { Home, Scissors, Grid, Calendar, MapPin } from 'lucide-react';
import Dock from './Dock';
import { usePathname } from 'next/navigation';
import { BOOKING_URL } from '@/lib/constants';

export default function MobileDock() {
  const pathname = usePathname();

  const dockItems = [
    { 
      icon: <Home size={22} />, 
      label: 'Home', 
      href: '/',
      className: pathname === '/' ? 'active' : ''
    },
    { 
      icon: <Scissors size={22} />, 
      label: 'Services', 
      href: '/services',
      className: pathname === '/services' ? 'active' : ''
    },
    { 
      icon: <Grid size={22} />, 
      label: 'Gallery', 
      href: '/gallery',
      className: pathname === '/gallery' ? 'active' : ''
    },
    { 
      icon: <Calendar size={22} />, 
      label: 'Book', 
      onClick: () => window.open(BOOKING_URL, '_blank'),
      className: ''
    },
    { 
      icon: <MapPin size={22} />, 
      label: 'Contact', 
      href: '/contact',
      className: pathname === '/contact' ? 'active' : ''
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden pointer-events-none pb-4 flex justify-center">
      <div className="pointer-events-auto">
        <Dock 
          items={dockItems} 
          panelHeight={64}
          baseItemSize={48}
          magnification={60}
          distance={100}
        />
      </div>
    </div>
  );
}
