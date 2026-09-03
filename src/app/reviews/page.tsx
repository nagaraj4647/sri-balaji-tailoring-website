import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reviews | Sri Balaji Tailoring Centre',
  description: 'Read reviews and testimonials from our happy customers in Nenmeli and Sriperumbudur who love our perfect fit tailoring.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/reviews',
  },
  openGraph: {
    title: 'Reviews | Sri Balaji Tailoring Centre',
    description: 'Read reviews and testimonials from our happy customers in Nenmeli and Sriperumbudur who love our perfect fit tailoring.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/reviews',
  }
};

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
      <h1 className="sr-only">Customer Reviews</h1>

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
