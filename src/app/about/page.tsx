import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Sri Balaji Tailoring Centre',
  description: 'Learn about Master Tailor J. Sundari and the 15+ years of experience behind Sri Balaji Tailoring Centre in Nenmeli, Sriperumbudur.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/about',
  },
  openGraph: {
    title: 'About | Sri Balaji Tailoring Centre',
    description: 'Learn about Master Tailor J. Sundari and the 15+ years of experience behind Sri Balaji Tailoring Centre in Nenmeli, Sriperumbudur.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/about',
  }
};

import React from 'react';
import Header from '@/components/Header';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />
      <h1 className="sr-only">About Sri Balaji Tailoring Centre</h1>

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
