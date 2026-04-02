'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  {
    value: 50,
    suffix: '+',
    label: 'Projects Completed',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <rect
          x="2"
          y="3"
          width="16"
          height="12"
          rx="2"
          stroke="#60A5FA"
          strokeWidth="1.4"
        />
        <path
          d="M6 9l3 3 5-5"
          stroke="#60A5FA"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 30,
    suffix: '+',
    label: 'Happy Clients',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <circle cx="10" cy="10" r="7" stroke="#34D399" strokeWidth="1.4" />
        <path
          d="M7 11s1 2 3 2 3-2 3-2"
          stroke="#34D399"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <circle cx="7.5" cy="8.5" r="1" fill="#34D399" />
        <circle cx="12.5" cy="8.5" r="1" fill="#34D399" />
      </svg>
    ),
  },
  {
    value: 90,
    suffix: '%',
    label: 'Client Satisfaction',
    accent: 'purple',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <path
          d="M10 2l2.4 5 5.6.8-4 4 .9 5.6L10 15l-4.9 2.4.9-5.6L2 7.8l5.6-.8L10 2z"
          stroke="#C4B5FD"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    value: 100,
    suffix: '%',
    label: 'On-Time Delivery',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <circle cx="10" cy="10" r="7" stroke="#60A5FA" strokeWidth="1.4" />
        <path
          d="M10 6v4l2.5 2.5"
          stroke="#60A5FA"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 25,
    suffix: '+',
    label: 'Apps Published',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <rect
          x="5"
          y="2"
          width="10"
          height="16"
          rx="2"
          stroke="#34D399"
          strokeWidth="1.4"
        />
        <circle cx="10" cy="15" r="1" fill="#34D399" />
        <path
          d="M7 5h6"
          stroke="#34D399"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    value: 3,
    suffix: '+',
    label: 'Countries Served',
    accent: 'purple',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={16} height={16}>
        <circle cx="10" cy="10" r="7" stroke="#C4B5FD" strokeWidth="1.4" />
        <path
          d="M3 10h14M10 3c-2 2-3 4.5-3 7s1 5 3 7M10 3c2 2 3 4.5 3 7s-1 5-3 7"
          stroke="#C4B5FD"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
];

const accentMap = {
  blue: {
    border: 'border-[#1E90FF]/15 hover:border-[#1E90FF]/40',
    glow: 'hover:shadow-[0_0_30px_rgba(30,144,255,0.12)]',
    numberColor: 'text-[#60A5FA]',
    iconBg: 'bg-[#1E90FF]/10 border-[#1E90FF]/20',
    bar: 'bg-[#1E90FF]',
  },
  teal: {
    border: 'border-[#00C2A0]/15 hover:border-[#00C2A0]/40',
    glow: 'hover:shadow-[0_0_30px_rgba(0,194,160,0.12)]',
    numberColor: 'text-[#34D399]',
    iconBg: 'bg-[#00C2A0]/10 border-[#00C2A0]/20',
    bar: 'bg-[#00C2A0]',
  },
  purple: {
    border: 'border-[#A78BFA]/15 hover:border-[#A78BFA]/40',
    glow: 'hover:shadow-[0_0_30px_rgba(167,139,250,0.12)]',
    numberColor: 'text-[#C4B5FD]',
    iconBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/20',
    bar: 'bg-[#A78BFA]',
  },
};

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

function StatCard({
  value,
  suffix,
  label,
  accent,
  icon,
  started,
}: (typeof stats)[0] & { started: boolean }) {
  const count = useCountUp(value, 1600, started);
  const a = accentMap[accent as keyof typeof accentMap];
  const pct = Math.round((value / 100) * 100);

  return (
    <div
      className={`group relative flex items-center gap-4 rounded-2xl border bg-[#0D1535]/80 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 ${a.border} ${a.glow}`}
    >
      <div
        className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${a.iconBg}`}
      >
        {icon}
      </div>

      <div className="flex-1 min-w-0">
        <div
          className={`text-2xl font-extrabold leading-none tracking-tight ${a.numberColor}`}
        >
          {count}
          {suffix}
        </div>
        <div className="text-[12px] text-slate-400 mt-0.5 leading-tight">
          {label}
        </div>
      </div>

      <div className="w-16 shrink-0">
        <div className="h-1 rounded-full bg-white/5 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1600 ease-out ${a.bar}`}
            style={{ width: started ? `${Math.min(pct, 100)}%` : '0%' }}
          />
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="w-full rounded-2xl overflow-hidden border border-white/8 bg-[#0B1229] shadow-[0_24px_64px_rgba(0,0,0,0.5),0_0_0_1px_rgba(30,144,255,0.08)]">
      <div className="flex items-center gap-2 px-3 py-2.5 bg-[#111936] border-b border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-2.5 py-1 text-[10px] text-slate-500 font-mono">
          app.hmdesign.io/dashboard
        </div>
      </div>

      <div className="flex" style={{ minHeight: 340 }}>
        <div className="w-12 bg-[#0A0F2C] border-r border-white/5 flex flex-col items-center py-4 gap-4 shrink-0">
          <div className="w-7 h-7 rounded-lg bg-[#1E90FF] flex items-center justify-center">
            <div className="w-3 h-3 rounded-sm bg-white/90" />
          </div>
          {[true, false, false, false].map((active, i) => (
            <div
              key={i}
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${active ? 'bg-[#1E90FF]/18' : ''}`}
            >
              <div
                className={`w-4 h-4 rounded-sm ${active ? 'bg-[#60A5FA]/60' : 'bg-white/10'}`}
              />
            </div>
          ))}
        </div>

        <div className="flex-1 p-4 flex flex-col gap-3 overflow-hidden">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[11px] font-bold text-slate-200">
                Analytics Overview
              </div>
              <div className="text-[9px] text-slate-500">Real-time metrics</div>
            </div>
            <div className="text-[9px] text-[#60A5FA] bg-[#1E90FF]/12 border border-[#1E90FF]/20 rounded px-2 py-0.5 font-semibold">
              Last 30 days
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              {
                label: 'Revenue',
                val: '$48.2K',
                color: '#60A5FA',
                change: '↑ 12.4%',
              },
              {
                label: 'Users',
                val: '2,841',
                color: '#34D399',
                change: '↑ 8.1%',
              },
              {
                label: 'Uptime',
                val: '99.9%',
                color: '#C4B5FD',
                change: '↑ 0.2%',
              },
            ].map(({ label, val, color, change }) => (
              <div
                key={label}
                className="rounded-lg p-2 bg-white/3 border border-white/5"
              >
                <div className="text-[7px] text-slate-500 uppercase tracking-wider mb-1">
                  {label}
                </div>
                <div
                  className="text-[13px] font-extrabold leading-none"
                  style={{ color }}
                >
                  {val}
                </div>
                <div className="text-[7px] text-emerald-400 mt-1">{change}</div>
              </div>
            ))}
          </div>

          <div className="flex-1 rounded-xl border border-white/5 bg-white/2 p-3">
            <div className="text-[8px] text-slate-500 mb-2">Monthly Growth</div>
            <div className="flex items-end gap-1.5 h-20">
              {[22, 34, 28, 44, 38, 56, 48, 64, 58, 72, 66, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: h,
                    background:
                      i === 11
                        ? '#1E90FF'
                        : `rgba(30,144,255,${0.15 + i * 0.04})`,
                    boxShadow:
                      i === 11 ? '0 0 8px rgba(30,144,255,0.5)' : undefined,
                  }}
                />
              ))}
            </div>
            <svg
              viewBox="0 0 120 80"
              preserveAspectRatio="none"
              className="w-full h-8 -mt-8 pointer-events-none opacity-70"
            >
              <polyline
                points="5,70 15,58 25,64 35,44 45,52 55,32 65,40 75,20 85,28 95,14 105,20 115,6"
                fill="none"
                stroke="#00C2A0"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="115" cy="6" r="2.5" fill="#00C2A0" />
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { name: 'TechStart', val: '$12K', color: '#1E90FF', w: '85%' },
              { name: 'GrowthCo', val: '$9.4K', color: '#00C2A0', w: '65%' },
              { name: 'Nexus', val: '$6.1K', color: '#A78BFA', w: '45%' },
            ].map(({ name, val, color, w }) => (
              <div
                key={name}
                className="rounded-lg p-2 bg-white/2 border border-white/5"
              >
                <div className="flex items-center gap-1 mb-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: color }}
                  />
                  <div className="text-[7px] text-slate-400 truncate">
                    {name}
                  </div>
                </div>
                <div className="h-1 rounded-full bg-white/5 mb-1">
                  <div
                    className="h-full rounded-full"
                    style={{ width: w, background: color }}
                  />
                </div>
                <div className="text-[8px] font-bold text-slate-200">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ResultsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true);
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)',
        }}
      />

      <div className="absolute top-80 -left-10 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(167,139,250,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-10 -right-10 w-96 h-96 rounded-full pointer-events-none bg-[radial-gradient(circle,rgba(30,144,255,0.08)_0%,transparent_70%)]" />

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
            <span className="w-2 h-2 rounded-full bg-[#00C2A0] animate-[hmd-pulse_2s_infinite]" />
            <span className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-[0.06em]">
              By The Numbers
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
            Results That <span style={{ color: '#1E90FF' }}>Speak</span>{' '}
            <span style={{ color: '#00C2A0' }}>Louder</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            Numbers built through real projects, real clients, and a relentless
            focus on delivering quality — on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <div className="relative">
            <div
              className="absolute pointer-events-none rounded-3xl"
              style={{
                inset: -32,
                background:
                  'radial-gradient(ellipse at 50% 50%, rgba(30,144,255,0.12) 0%, transparent 70%)',
              }}
            />

            <div
              className="absolute z-20 hidden sm:block -top-4 -right-4 rounded-xl px-3 py-2"
              style={{
                background: '#0D1535',
                border: '1px solid rgba(0,194,160,0.35)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="text-[8px] text-slate-500 uppercase tracking-wider">
                Revenue
              </div>
              <div className="text-lg font-extrabold text-[#34D399]">+38%</div>
              <div className="text-[8px] text-[#34D399] opacity-70">
                vs last month
              </div>
            </div>

            <div
              className="absolute z-20 hidden sm:flex items-center gap-2 -bottom-4 -left-4 rounded-xl px-3 py-2"
              style={{
                background: '#0D1535',
                border: '1px solid rgba(167,139,250,0.3)',
                boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
              }}
            >
              <div className="w-7 h-7 rounded-lg bg-[#A78BFA]/15 border border-[#A78BFA]/20 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="#C4B5FD"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 5v3l2 2"
                    stroke="#C4B5FD"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div>
                <div className="text-[11px] font-bold text-[#C4B5FD]">
                  Live Deploy
                </div>
                <div className="text-[8px] text-slate-500">2 mins ago</div>
              </div>
            </div>

            <DashboardMockup />
          </div>

          <div className="flex flex-col gap-3">
            {stats.map((stat) => (
              <StatCard key={stat.label} {...stat} started={started} />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Numbers growing with every project ·{' '}
            <span className="text-[#60A5FA]">
              Let&apos;s add yours to the list
            </span>
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
