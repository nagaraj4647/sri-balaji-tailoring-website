import type { Metadata } from "next";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sri Balaji Tailoring Centre | Nenmeli, Sriperumbudur",
  description: "Sri Balaji Tailoring Centre by Master Tailor J. Sundari in Nenmeli, Sriperumbudur. Designer blouse stitching, Aari & Zardosi embroidery, bridal blouses & tailoring courses.",
  keywords: [
    "tailoring shop in Nenmeli",
    "blouse stitching in Nenmeli",
    "blouse stitching in Sriperumbudur",
    "embroidery blouse design",
    "bridal blouse stitching",
    "custom blouse designs",
    "Sri Balaji Tailoring Centre",
    "J Sundari tailor",
    "Aari work blouse Sriperumbudur",
  ],
  authors: [{ name: "J. Sundari" }],
  metadataBase: new URL("https://sri-balaji-tailoring-website-five.vercel.app"),
  openGraph: {
    title: "Sri Balaji Tailoring Centre | Premium Women's Tailoring & Embroidery",
    description: "Beautifully crafted blouses, embroidery and custom designs made with care in Nenmeli, Sriperumbudur by Master Tailor J. Sundari.",
    url: "https://sri-balaji-tailoring-website-five.vercel.app",
    siteName: "Sri Balaji Tailoring Centre",
    images: [
      {
        url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1200",
        width: 1200,
        height: 630,
        alt: "Sri Balaji Tailoring Centre Designer Blouse Embroidery",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "faxlv91qdUnhdOUM4szgjyJW0JgUXE2kuU1JhQmXRTU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Sri Balaji Tailoring Centre",
    "image": "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=1000",
    "@id": "https://sribalajitailoring.com",
    "url": "https://sri-balaji-tailoring-website-five.vercel.app",
    "telephone": "+917010858623",
    "priceRange": "₹350 - ₹12,000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "No.16, Vaniga Valagam, Nenmeli",
      "addressLocality": "Sriperumbudur",
      "addressRegion": "Tamil Nadu",
      "postalCode": "602105",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9696,
      "longitude": 79.9472
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:30",
        "closes": "20:30"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "18:00"
      }
    ],
    "founder": {
      "@type": "Person",
      "name": "J. Sundari",
      "jobTitle": "Master Tailor & Designer"
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${outfit.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory-100 text-stone-900 font-sans antialiased selection:bg-gold-500 selection:text-maroon-950 overflow-x-hidden w-full">
        <GoogleAnalytics gaId="G-HNCE2YYMFL" />
        {children}
      </body>
    </html>
  );
}
