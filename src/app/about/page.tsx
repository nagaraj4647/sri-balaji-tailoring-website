'use client';

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

      {/* About Section */}
      <AboutSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
