'use client';

import { useEffect, useRef } from 'react';
import HeroBackground from './heroBackground';
import HeroLeft from './heroLeft';
import DashboardMockup from './dashboardMockup';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <section
      style={{ background: '#0A0F2C' }}
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      <HeroBackground />
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col lg:flex-row items-center flex-1 gap-1 md:gap-8 xl:gap-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 xl:px-10 pt-3 sm:pt-3 lg:pt-3 pb-5"
      >
        <HeroLeft />
        <DashboardMockup />
      </div>
    </section>
  );
}
