import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Sri Balaji Tailoring Centre',
  description: 'Get in touch with Sri Balaji Tailoring Centre in Nenmeli, Sriperumbudur. Book an appointment for designer blouse stitching or bridal embroidery.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/contact',
  },
  openGraph: {
    title: 'Contact | Sri Balaji Tailoring Centre',
    description: 'Get in touch with Sri Balaji Tailoring Centre in Nenmeli, Sriperumbudur. Book an appointment for designer blouse stitching or bridal embroidery.',
    url: 'https://sri-balaji-tailoring-website-five.vercel.app/contact',
  }
};

import React from 'react';
import Header from '@/components/Header';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import MobileBottomNav from '@/components/MobileBottomNav';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-ivory-100 flex flex-col relative pb-16 md:pb-0">

      {/* Header */}
      <Header />
      <h1 className="sr-only">Contact Sri Balaji Tailoring Centre</h1>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
