import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bridal Blouse Stitching Near Me | Sri Balaji Tailoring',
  description: 'Custom bridal blouse stitching by Master Tailor J. Sundari — 15+ years of Aari & Zardosi embroidery, 5,000+ blouses crafted. Book your appointment today.',
  alternates: {
    canonical: 'https://sri-balaji-tailoring-website-five.vercel.app/',
  },
  openGraph: {
    title: 'Bridal Blouse Stitching Near Me | Sri Balaji Tailoring',
    description: 'Custom bridal blouse stitching by Master Tailor J. Sundari — 15+ years of Aari & Zardosi embroidery, 5,000+ blouses crafted. Book your appointment today.',
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

      {/* SEO Content Section */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-12 sm:py-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-stone-700 font-sans border-t border-gold-500/20">
        
        <div className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-maroon-950">Our Bridal Blouse Stitching Services</h2>
          <p className="text-sm leading-relaxed">
            Looking for bridal blouse stitching near you in Nenmeli or Sriperumbudur? Book an appointment for a custom fitting. 
            We specialize in custom blouse stitching, ensuring a perfect fit and elegant design tailored to your unique style. 
            Our bridal blouse stitching services are designed to make your special day unforgettable.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-maroon-950">Aari & Zardosi Hand Embroidery Work</h2>
          <p className="text-sm leading-relaxed">
            Elevate your wedding attire with our exquisite Aari embroidery and Zardosi embroidery. 
            Every intricate detail is crafted by hand, bringing timeless beauty and heavy embellishments to your bridal blouses.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-maroon-950">Why Brides in Sriperumbudur Choose Sri Balaji</h2>
          <p className="text-sm leading-relaxed">
            As a leading tailoring centre, Sri Balaji Tailoring Centre is trusted by clients across the region. 
            Our expertise in bridal blouse stitching in Sriperumbudur ensures top-tier quality, on-time delivery, and master craftsmanship.
          </p>
        </div>

        <div className="space-y-3">
          <h2 className="text-xl font-serif font-bold text-maroon-950">How to Book Your Bridal Blouse Appointment</h2>
          <p className="text-sm leading-relaxed">
            Ready to design your dream blouse? Experience the finest bridal blouse stitching in Nenmeli. 
            Contact us today to schedule your personalized consultation and fitting with Master Tailor J. Sundari.
          </p>
        </div>

      </section>

      {/* Footer */}
      <Footer />

      {/* Mobile Fixed App Bottom Navigation Bar */}
      <MobileBottomNav />

    </main>
  );
}
