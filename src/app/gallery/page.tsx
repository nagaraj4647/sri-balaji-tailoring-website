import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Sri Balaji Tailoring Centre',
  description: 'View our gallery of stunning designer blouses, bridal collections, and exquisite Aari embroidery work crafted by Master Tailor J. Sundari.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/gallery',
  },
  openGraph: {
    title: 'Gallery | Sri Balaji Tailoring Centre',
    description: 'View our gallery of stunning designer blouses, bridal collections, and exquisite Aari embroidery work crafted by Master Tailor J. Sundari.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/gallery',
  }
};

import React from 'react';
import Header from '@/components/Header';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />
      <h1 className="sr-only">Blouse & Embroidery Gallery</h1>

      {/* Gallery Section */}
      <GallerySection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
