'use client';

import React from 'react';
import Header from '@/components/Header';
import ReviewsSection from '@/components/ReviewsSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function ReviewsPage() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
