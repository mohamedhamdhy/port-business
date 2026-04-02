import Link from 'next/link';
import WebMockup from './webMockup';
import MobileMockup from './mobileMockup';
import SaasMockup from './saasMockup';
import { accentMap } from './accentMap';

export default function ServiceCard({ service }: { service: any }) {
  const a = accentMap[service.accent as keyof typeof accentMap];

  return (
    <div
      className={`group relative flex flex-col rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm p-6 xl:p-7 transition-all duration-300 hover:-translate-y-1.5 ${a.border} ${a.glow}`}
    >
      <div
        className={`absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none bg-radial-[circle] bg-gradient-to-br ${a.orb} opacity-60`}
        style={{
          background: `radial-gradient(circle at top right, ${
            service.accent === 'blue'
              ? 'rgba(30,144,255,0.12)'
              : service.accent === 'teal'
                ? 'rgba(0,194,160,0.10)'
                : 'rgba(167,139,250,0.10)'
          } 0%, transparent 70%)`,
        }}
      />

      <div className="relative mb-5 sm:mb-6">
        {service.mockup === 'web' && <WebMockup />}
        {service.mockup === 'mobile' && <MobileMockup />}
        {service.mockup === 'saas' && <SaasMockup />}
      </div>

      <div className="flex flex-col flex-1 gap-3">
        <h3
          className="text-lg xl:text-xl font-bold text-white leading-tight"
          style={{ letterSpacing: '-0.01em' }}
        >
          {service.title}
        </h3>

        <p className="text-sm xl:text-[15px] text-slate-400 leading-relaxed">
          {service.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-1">
          {service.tags.map((tag: string) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full border ${a.badge}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Link
            href="#contact"
            className={`inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-white px-5 py-2.5 rounded-xl transition-all duration-150 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98] ${a.btn}`}
            style={{ textDecoration: 'none' }}
          >
            {service.cta}
            <span className="text-sm">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
