'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const testimonials = [
  {
    name: 'James Donovan',
    role: 'CEO, TechStart Inc.',
    review:
      'Delivered our SaaS platform ahead of schedule with exceptional quality. Revenue grew 38% in the first quarter post-launch. Highly recommended.',
    href: 'https://techstart.io',
    site: 'techstart.io',
    accent: 'blue',
    initials: 'JD',
    stars: 5,
  },
  {
    name: 'Sara Kim',
    role: 'Founder, GrowthCo',
    review:
      'Our e-commerce conversion rate doubled after the redesign. Clean code, clear communication, and zero revisions needed. Truly world-class work.',
    href: 'https://growthco.io',
    site: 'growthco.io',
    accent: 'teal',
    initials: 'SK',
    stars: 5,
  },
  {
    name: 'Marco Reyes',
    role: 'CTO, Nexus Labs',
    review:
      'Built our entire CRM from scratch — scalable, fast, and exactly what we envisioned. Our team productivity jumped 60% from day one.',
    href: 'https://nexuslabs.io',
    site: 'nexuslabs.io',
    accent: 'purple',
    initials: 'MR',
    stars: 5,
  },
];

const accentMap = {
  blue: {
    border: 'border-[#1E90FF]/15 hover:border-[#1E90FF]/40',
    glow: 'hover:shadow-[0_0_40px_rgba(30,144,255,0.10)]',
    avatarBg: 'bg-[#1E90FF]',
    linkColor: 'text-[#60A5FA] hover:text-[#1E90FF]',
    quoteColor: 'text-[#1E90FF]/30',
    starColor: 'text-[#60A5FA]',
    tagBg: 'bg-[#1E90FF]/10 border-[#1E90FF]/20 text-[#60A5FA]',
  },
  teal: {
    border: 'border-[#00C2A0]/15 hover:border-[#00C2A0]/40',
    glow: 'hover:shadow-[0_0_40px_rgba(0,194,160,0.10)]',
    avatarBg: 'bg-[#00C2A0]',
    linkColor: 'text-[#34D399] hover:text-[#00C2A0]',
    quoteColor: 'text-[#00C2A0]/30',
    starColor: 'text-[#34D399]',
    tagBg: 'bg-[#00C2A0]/10 border-[#00C2A0]/20 text-[#34D399]',
  },
  purple: {
    border: 'border-[#A78BFA]/15 hover:border-[#A78BFA]/40',
    glow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.10)]',
    avatarBg: 'bg-[#A78BFA]',
    linkColor: 'text-[#C4B5FD] hover:text-[#A78BFA]',
    quoteColor: 'text-[#A78BFA]/30',
    starColor: 'text-[#C4B5FD]',
    tagBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/20 text-[#C4B5FD]',
  },
};

function GrowthMockup({ animated }: { animated: boolean }) {
  const linePoints = [
    [0, 88], [10, 82], [20, 78], [30, 70], [40, 65], [50, 55],
    [60, 48], [70, 38], [80, 28], [90, 18], [100, 8],
  ];

  const toSvgPoints = (pts: number[][]) =>
    pts.map(([x, y]) => `${(x / 100) * 260 + 20},${y}`).join(' ');

  const bars = [
    { label: 'Q1', h: 30, color: 'rgba(30,144,255,0.25)' },
    { label: 'Q2', h: 46, color: 'rgba(30,144,255,0.35)' },
    { label: 'Q3', h: 62, color: 'rgba(30,144,255,0.50)' },
    { label: 'Q4', h: 80, color: '#1E90FF', glow: true },
  ];

  const metrics = [
    { label: 'Clients Growth', value: '+85%', color: '#60A5FA', pct: 85 },
    { label: 'Revenue Increase', value: '+120%', color: '#34D399', pct: 100 },
    { label: 'Conversion Rate', value: '+64%', color: '#C4B5FD', pct: 64 },
  ];

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-white/8 bg-[#0B1229]"
      style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(30,144,255,0.08)' }}
    >
      <div className="flex items-center justify-between px-4 py-3 bg-[#111936] border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <span className="text-[10px] text-slate-500 font-mono ml-1">growth.analytics</span>
        </div>
        <div className="text-[9px] text-[#60A5FA] bg-[#1E90FF]/12 border border-[#1E90FF]/20 rounded px-2 py-0.5 font-semibold">
          Live
        </div>
      </div>

      <div className="p-5 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[12px] font-bold text-slate-200">Client Growth Overview</div>
            <div className="text-[9px] text-slate-500 mt-0.5">Post-delivery performance</div>
          </div>
          <div className="text-[10px] font-semibold text-[#34D399] bg-[#00C2A0]/10 border border-[#00C2A0]/20 rounded-full px-2.5 py-1">
            ↑ All-time high
          </div>
        </div>

        <div className="relative rounded-xl border border-white/5 bg-white/2 p-3 overflow-hidden">
          <div className="text-[8px] text-slate-500 mb-2 uppercase tracking-wider">Revenue Trend</div>
          <svg
            viewBox="0 0 300 100"
            className="w-full"
            style={{ height: 90 }}
            preserveAspectRatio="none"
          >
            {[25, 50, 75].map((y) => (
              <line key={y} x1="20" y1={y} x2="280" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            ))}

            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#1E90FF" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon
              points={`20,96 ${toSvgPoints(linePoints)} 280,96`}
              fill="url(#lineGrad)"
            />

            <polyline
              points={toSvgPoints(linePoints)}
              fill="none"
              stroke="#1E90FF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.9"
            />

            <circle cx="280" cy="8" r="4" fill="#1E90FF" />
            <circle cx="280" cy="8" r="8" fill="#1E90FF" opacity="0.2" />

            {/* Peak label */}
            <rect x="234" y="0" width="40" height="14" rx="4" fill="#1E90FF" />
            <text x="254" y="10" textAnchor="middle" fill="white" fontSize="7" fontWeight="700">Peak ↑</text>
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/5 bg-white/2 p-3">
            <div className="text-[8px] text-slate-500 mb-3 uppercase tracking-wider">Quarterly</div>
            <div className="flex items-end gap-2 h-16">
              {bars.map(({ label, h, color, glow }) => (
                <div key={label} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm transition-all duration-700"
                    style={{
                      height: animated ? h : 4,
                      background: color,
                      boxShadow: glow ? '0 0 10px rgba(30,144,255,0.6)' : undefined,
                    }}
                  />
                  <div className="text-[7px] text-slate-500">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/5 bg-white/2 p-3 flex flex-col justify-between">
            {metrics.map(({ label, value, color, pct }) => (
              <div key={label}>
                <div className="flex items-center justify-between mb-1">
                  <div className="text-[7px] text-slate-500">{label}</div>
                  <div className="text-[8px] font-bold" style={{ color }}>{value}</div>
                </div>
                <div className="h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${pct}%` : '0%',
                      background: color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)' }}
      />

      <div
        className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 lg:mb-20">
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              background: 'rgba(30,144,255,0.12)',
              border: '1px solid rgba(30,144,255,0.28)',
              borderRadius: 100,
              padding: '6px 16px',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#00C2A0]" style={{ animation: 'hmd-pulse 2s infinite' }} />
            <span className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-[0.06em]">
              Client Feedback
            </span>
          </div>

          <h2
            className="mb-4"
            style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.12,
              letterSpacing: '-0.02em',
            }}
          >
            Trusted by{' '}
            <span style={{ color: '#1E90FF' }}>Clients</span>{' '}
            <span style={{ color: '#00C2A0' }}>Worldwide</span>
          </h2>

          <p
            className="max-w-xl"
            style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', color: '#94A3B8', lineHeight: 1.7 }}
          >
            Real feedback from real clients — every project backed by measurable
            results and long-term relationships.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">

          <div className="flex flex-col gap-4">
            {testimonials.map(({ name, role, review, href, site, accent, initials, stars }) => {
              const a = accentMap[accent as keyof typeof accentMap];
              return (
                <div
                  key={name}
                  className={`group relative flex flex-col gap-4 rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm p-5 xl:p-6 transition-all duration-300 hover:-translate-y-1 ${a.border} ${a.glow}`}
                >
                  <div className={`absolute top-4 right-5 text-5xl font-serif leading-none select-none pointer-events-none ${a.quoteColor}`}>
                    "
                  </div>

                  <div className={`flex gap-0.5 ${a.starColor}`}>
                    {Array.from({ length: stars }).map((_, i) => (
                      <svg key={i} viewBox="0 0 12 12" fill="currentColor" width={12} height={12}>
                        <path d="M6 1l1.4 3h3.1l-2.5 1.8.9 3L6 7.2l-2.9 1.6.9-3L1.5 4H4.6z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-[13px] xl:text-sm text-slate-300 leading-relaxed">
                    "{review}"
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold text-white flex-shrink-0 ${a.avatarBg}`}>
                        {initials}
                      </div>
                      <div>
                        <div className="text-[12px] font-bold text-white">{name}</div>
                        <div className="text-[10px] text-slate-500">{role}</div>
                      </div>
                    </div>

                    <Link
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[10px] font-semibold flex items-center gap-1 transition-all duration-150 hover:-translate-y-0.5 ${a.linkColor}`}
                      style={{ textDecoration: 'none' }}
                    >
                      {site} <span className="text-xs">↗</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="relative lg:sticky lg:top-8">
            <div
              className="absolute pointer-events-none rounded-3xl"
              style={{
                inset: -32,
                background: 'radial-gradient(ellipse at 50% 50%, rgba(30,144,255,0.10) 0%, transparent 70%)',
              }}
            />

            <div
              className="absolute z-20 hidden sm:flex items-center gap-1.5 -top-4 -right-4 rounded-xl px-3 py-2"
              style={{
                background: '#0D1535',
                border: '1px solid rgba(0,194,160,0.35)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
              <div className="text-[11px] font-bold text-[#34D399]">+40% Clients</div>
            </div>

            <div
              className="absolute z-20 hidden sm:flex items-center gap-1.5 -bottom-4 -left-4 rounded-xl px-3 py-2"
              style={{
                background: '#0D1535',
                border: '1px solid rgba(167,139,250,0.3)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="flex gap-0.5 text-[#C4B5FD]">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} viewBox="0 0 10 10" fill="currentColor" width={8} height={8}>
                    <path d="M5 1l1 2.5h2.5l-2 1.5.7 2.5L5 6l-2.2 1.5.7-2.5-2-1.5H3.9z" />
                  </svg>
                ))}
              </div>
              <div className="text-[11px] font-bold text-[#C4B5FD]">5★ Feedback</div>
            </div>

            <GrowthMockup animated={animated} />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Every review is from a real client ·{' '}
            <span className="text-[#60A5FA]">Your success story starts here</span>
          </p>
        </div>
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