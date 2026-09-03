import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Sri Balaji Tailoring Centre',
  description: 'Explore our premium tailoring services including designer blouse stitching, bridal Aari embroidery, and tailoring courses in Nenmeli.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/services',
  },
  openGraph: {
    title: 'Services | Sri Balaji Tailoring Centre',
    description: 'Explore our premium tailoring services including designer blouse stitching, bridal Aari embroidery, and tailoring courses in Nenmeli.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/services',
  }
};

import React from 'react';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />
      <h1 className="sr-only">Tailoring Services</h1>

      {/* Services Section */}
      <ServicesSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
