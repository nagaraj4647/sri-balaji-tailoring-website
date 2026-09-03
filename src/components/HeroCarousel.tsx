'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

const CAROUSEL_IMAGES = [
  {
    src: '/media_1788104026022.webp',
    alt: 'Red Bridal Blouse',
    captionTitle: 'Bridal Collection',
    captionSubtitle: 'Exquisite Hand Embroidery',
  },
  {
    src: '/media_1788104368876.webp',
    alt: 'Purple Embroidery Sleeve',
    captionTitle: 'Signature Design',
    captionSubtitle: 'Custom Fitting & Styling',
  },
  {
    src: '/media_1788104544950.webp',
    alt: 'Teal Designer Blouse Back',
    captionTitle: 'Bespoke Patterns',
    captionSubtitle: 'Intricate Back Detailing',
  },
  {
    src: '/media_1788104650047.webp',
    alt: 'Purple Embroidery Sleeve',
    captionTitle: 'Wedding Collection',
    captionSubtitle: 'Traditional Elegance',
  },
  {
    src: '/media_1788104733911.webp',
    alt: 'Green Bridal Blouse',
    captionTitle: 'Modern Patterns',
    captionSubtitle: 'Contemporary Styling',
  },
];

export default function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveIndex((current) => (current + 1) % CAROUSEL_IMAGES.length);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  const handleActiveIndexChange = (idx: number) => {
    if (isAnimating || idx === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(idx);
    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  useEffect(() => {
    if (isPaused || isAnimating) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, isAnimating, nextSlide]);

  const getTransformStyles = (index: number) => {
    const total = CAROUSEL_IMAGES.length;
    let diff = index - activeIndex;

    // Adjust for circular wrap-around
    if (diff < -2) diff += total;
    if (diff > 2) diff -= total;

    // Base styles
    let translateX = '0%';
    let scale = 1;
    let zIndex = 10;
    let opacity = 1;
    let blur = 'blur-0';

    let extraClasses = '';

    if (diff === 0) {
      // Active center
      translateX = '-50%';
      scale = 1;
      zIndex = 30;
      opacity = 1;
    } else if (diff === -1) {
      // Left 1 (Medium)
      translateX = '-85%';
      scale = 0.75;
      zIndex = 20;
      opacity = 0.6;
      blur = 'blur-[2px]';
    } else if (diff === 1) {
      // Right 1 (Medium)
      translateX = '-15%';
      scale = 0.75;
      zIndex = 20;
      opacity = 0.6;
      blur = 'blur-[2px]';
    } else if (diff === -2) {
      // Left 2 (Small)
      translateX = '-110%';
      scale = 0.6;
      zIndex = 10;
      opacity = 0.3;
      blur = 'blur-[3px]';
      extraClasses = 'max-lg:opacity-0 max-lg:pointer-events-none transition-opacity duration-[600ms]';
    } else if (diff === 2) {
      // Right 2 (Small)
      translateX = '10%';
      scale = 0.6;
      zIndex = 10;
      opacity = 0.3;
      blur = 'blur-[3px]';
      extraClasses = 'max-lg:opacity-0 max-lg:pointer-events-none transition-opacity duration-[600ms]';
    }

    return {
      style: {
        transform: `translate3d(${translateX}, 0, 0) scale(${scale})`,
        zIndex,
        opacity,
      },
      blur,
      extraClasses,
    };
  };

  return (
    <div 
      className="relative w-full max-w-[230px] sm:max-w-[280px] lg:max-w-[320px] aspect-[4/5] mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      {/* Ambient glow behind carousel */}
      <div className="absolute inset-4 rounded-[28px] bg-gold-500/15 blur-3xl z-0" />

      {/* Carousel Track */}
      <div className="absolute inset-0 z-10">
        {CAROUSEL_IMAGES.map((img, idx) => {
          const { style, blur, extraClasses } = getTransformStyles(idx);
          const isActive = idx === activeIndex;

          return (
            <div
              key={idx}
              className={`absolute top-0 left-1/2 w-full h-full rounded-2xl overflow-hidden transition-[transform,opacity,filter] duration-[600ms] ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border ${blur} ${extraClasses || ''} ${
                isActive ? 'border-gold-500/30 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.6)]' : 'border-gold-500/10 shadow-lg'
              }`}
              style={{
                ...style,
                transformOrigin: 'center center',
                willChange: 'transform, opacity',
              }}
              onClick={() => handleActiveIndexChange(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                className="object-cover"
                sizes="(max-width: 768px) 280px, 320px"
              />
              
              {/* Gradient for caption legibility - only on active */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/10 to-transparent transition-opacity duration-[600ms] opacity-100" />
              )}

              {/* Caption - only visible on active */}
              {isActive && (
                <div className="absolute bottom-0 left-0 right-0 p-5 transition-all duration-[600ms] delay-100 opacity-100 translate-y-0">
                  <span className="block text-[9px] font-bold text-gold-400 uppercase tracking-[0.2em]">
                    {img.captionTitle}
                  </span>
                  <p className="text-sm font-serif font-semibold text-ivory-100 mt-0.5">
                    {img.captionSubtitle}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

      {/* Pagination Dots */}
      <div className="absolute -bottom-5 left-0 right-0 flex justify-center items-center gap-3 z-20">
        {CAROUSEL_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.stopPropagation();
              handleActiveIndexChange(idx);
            }}
            className="group relative flex items-center justify-center p-1"
            aria-label={`Go to slide ${idx + 1}`}
          >
            <span 
              className={`block rounded-full transition-all duration-500 ${
                idx === activeIndex 
                  ? 'w-6 h-1.5 bg-gold-400' 
                  : 'w-1.5 h-1.5 bg-gold-500/30 group-hover:bg-gold-500/60'
              }`} 
            />
          </button>
        ))}
      </div>
    </div>
  );
}
