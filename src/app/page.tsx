import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Balaji Tailoring Centre | Master Tailor J. Sundari',
  description: 'Sri Balaji Tailoring Centre by Master Tailor J. Sundari in Nenmeli, Sriperumbudur. Designer blouse stitching, Aari & Zardosi embroidery, bridal blouses & tailoring courses.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/',
  },
  openGraph: {
    title: 'Sri Balaji Tailoring Centre | Master Tailor J. Sundari',
    description: 'Sri Balaji Tailoring Centre by Master Tailor J. Sundari in Nenmeli, Sriperumbudur. Designer blouse stitching, Aari & Zardosi embroidery, bridal blouses & tailoring courses.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/',
  }
};

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />

      {/* Hero */}
      <Hero />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
