'use client';
import ServiceCard from './servicesCard';
import ServicesHeader from './servicesHeader';
import ServicesFooter from './servicesFooter';
import { services } from './servicesData';

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      <div className="absolute top-60 -right-10 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-20 -left-10 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(30,144,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <ServicesHeader />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <ServicesFooter />
      </div>

      <style>{`
        @keyframes hmd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
      `}</style>
    </section>
  );
}
