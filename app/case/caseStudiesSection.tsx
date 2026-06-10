'use client';

import Link from 'next/link';

/* ─── Mini mockup components ─────────────────────────────── */

function SaasMockup() {
  return (
    <div className="w-full h-full flex">
      {/* Sidebar */}
      <div className="w-10 bg-[#0A0F2C] border-r border-white/5 flex flex-col items-center py-3 gap-3 flex-shrink-0">
        <div className="w-6 h-6 rounded-md bg-[#1E90FF] flex items-center justify-center">
          <div className="w-3 h-3 rounded-sm bg-white/80" />
        </div>
        {[true, false, false, false].map((a, i) => (
          <div key={i} className={`w-6 h-6 rounded-md flex items-center justify-center ${a ? 'bg-[#1E90FF]/20' : ''}`}>
            <div className={`w-3 h-3 rounded-sm ${a ? 'bg-[#60A5FA]/60' : 'bg-white/10'}`} />
          </div>
        ))}
      </div>
      {/* Main */}
      <div className="flex-1 p-3 flex flex-col gap-2 overflow-hidden">
        <div className="flex justify-between items-center">
          <div className="space-y-1">
            <div className="w-24 h-2 rounded-full bg-white/20" />
            <div className="w-16 h-1.5 rounded-full bg-white/8" />
          </div>
          <div className="w-14 h-4 rounded bg-[#1E90FF]/30 border border-[#1E90FF]/30" />
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {[['$48K', '#60A5FA'], ['2.8K', '#34D399'], ['99%', '#C4B5FD']].map(([v, c]) => (
            <div key={v} className="rounded-lg p-2 bg-white/3 border border-white/5">
              <div className="text-[9px] font-bold" style={{ color: c }}>{v}</div>
              <div className="w-full h-1 rounded-full bg-white/8 mt-1" />
            </div>
          ))}
        </div>
        <div className="flex-1 rounded-lg border border-white/5 bg-white/2 p-2">
          <div className="text-[7px] text-slate-500 mb-2">Monthly Growth</div>
          <div className="flex items-end gap-1 h-12">
            {[20, 30, 24, 40, 34, 50, 44, 60].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: h, background: i === 7 ? '#1E90FF' : `rgba(30,144,255,${0.15 + i * 0.04})` }} />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1">
          {['Lead', 'Proposal', 'Closed'].map((s, i) => (
            <div key={s} className="rounded p-1 bg-white/3 border border-white/5">
              <div className="text-[6px] text-slate-500">{s}</div>
              <div className="text-[8px] font-bold text-[#C4B5FD]">{['12', '7', '4'][i]}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealEstateMockup() {
  const listings = [
    { label: 'Villa · Dubai', price: '$2.4M', color: '#00C2A0' },
    { label: 'Apt · Abu Dhabi', price: '$890K', color: '#60A5FA' },
    { label: 'Studio · Sharjah', price: '$340K', color: '#C4B5FD' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Search bar */}
      <div className="flex items-center gap-2 rounded-lg bg-white/5 border border-white/8 px-3 py-1.5">
        <div className="w-3 h-3 rounded-full border border-white/20 flex-shrink-0" />
        <div className="flex-1 h-1.5 rounded-full bg-white/10" />
        <div className="w-8 h-3.5 rounded bg-[#00C2A0]/40 flex-shrink-0" />
      </div>
      {/* Map placeholder */}
      <div className="flex-1 rounded-xl border border-white/8 bg-[#0A1628] relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(0,194,160,0.3) 1px, transparent 1px)', backgroundSize: '18px 18px' }} />
        {[[40, 35], [70, 55], [55, 70], [25, 65], [80, 30]].map(([x, y], i) => (
          <div key={i} className="absolute w-3 h-3 rounded-full border-2 border-[#00C2A0] bg-[#00C2A0]/30" style={{ left: `${x}%`, top: `${y}%` }}>
            <div className="absolute inset-0 rounded-full bg-[#00C2A0]/20 animate-ping" />
          </div>
        ))}
        <div className="absolute top-2 right-2 bg-[#0D1535]/90 border border-white/8 rounded-lg px-2 py-1">
          <div className="text-[7px] text-[#34D399] font-bold">42 listings</div>
        </div>
      </div>
      {/* Listing cards */}
      <div className="flex flex-col gap-1">
        {listings.map(({ label, price, color }) => (
          <div key={label} className="flex items-center gap-2 rounded-lg px-2 py-1.5 bg-white/3 border border-white/5">
            <div className="w-8 h-8 rounded-lg flex-shrink-0" style={{ background: `${color}18`, border: `1px solid ${color}25` }}>
              <div className="w-full h-full rounded-lg" style={{ background: `${color}15` }} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[8px] text-slate-300 truncate">{label}</div>
              <div className="text-[7px] text-slate-500">3 bed · 2 bath</div>
            </div>
            <div className="text-[8px] font-bold flex-shrink-0" style={{ color }}>{price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EcommerceMockup() {
  const products = [
    { name: 'Pro Watch', price: '$299', color: '#60A5FA', badge: 'New' },
    { name: 'Bag', price: '$149', color: '#34D399', badge: 'Sale' },
    { name: 'Sneakers', price: '$199', color: '#C4B5FD', badge: '' },
    { name: 'Sunglasses', price: '$89', color: '#F97316', badge: 'Hot' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="w-14 h-3 rounded-full bg-white/20" />
        <div className="flex gap-1.5">
          <div className="w-5 h-1.5 rounded-full bg-white/10" />
          <div className="w-5 h-1.5 rounded-full bg-white/10" />
          <div className="w-6 h-1.5 rounded bg-[#F97316]/50" />
        </div>
      </div>
      {/* Category pills */}
      <div className="flex gap-1.5 overflow-hidden">
        {['All', 'Fashion', 'Tech', 'Lifestyle'].map((c, i) => (
          <div key={c} className={`px-2 py-0.5 rounded-full text-[7px] font-semibold flex-shrink-0 ${i === 0 ? 'bg-[#F97316] text-white' : 'bg-white/5 text-slate-500 border border-white/8'}`}>{c}</div>
        ))}
      </div>
      {/* Product grid */}
      <div className="grid grid-cols-2 gap-1.5 flex-1">
        {products.map(({ name, price, color, badge }) => (
          <div key={name} className="rounded-xl bg-white/3 border border-white/5 p-2 flex flex-col gap-1 relative overflow-hidden">
            {badge && (
              <div className="absolute top-1.5 right-1.5 px-1.5 py-0.5 rounded-full text-[6px] font-bold" style={{ background: `${color}25`, color }}>{badge}</div>
            )}
            <div className="flex-1 rounded-lg flex items-center justify-center" style={{ background: `${color}10`, minHeight: 32 }}>
              <div className="w-8 h-8 rounded-full" style={{ background: `${color}20`, border: `1px solid ${color}30` }} />
            </div>
            <div className="text-[7px] text-slate-300 font-medium truncate">{name}</div>
            <div className="flex items-center justify-between">
              <div className="text-[8px] font-bold" style={{ color }}>{price}</div>
              <div className="w-4 h-4 rounded bg-white/8 border border-white/10 flex items-center justify-center">
                <div className="w-2 h-0.5 bg-white/40" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PortfolioMockup() {
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Nav */}
      <div className="flex items-center justify-between">
        <div className="w-8 h-3 rounded-full bg-white/25" />
        <div className="flex gap-2">
          {['About', 'Work', 'Contact'].map((n) => (
            <div key={n} className="text-[6px] text-slate-500">{n}</div>
          ))}
          <div className="px-2 py-0.5 rounded bg-white text-[6px] font-bold text-[#0A0F2C]">Hire</div>
        </div>
      </div>
      {/* Hero */}
      <div className="rounded-xl border border-white/8 bg-gradient-to-br from-[#1E90FF]/10 to-[#A78BFA]/10 p-3 flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1E90FF] to-[#A78BFA] flex-shrink-0" />
        <div className="flex-1 space-y-1">
          <div className="w-20 h-2.5 rounded-full bg-white/25" />
          <div className="w-28 h-1.5 rounded-full bg-white/12" />
          <div className="flex gap-1.5 mt-1">
            <div className="px-2 py-0.5 rounded-full bg-[#1E90FF]/20 border border-[#1E90FF]/30 text-[6px] text-[#60A5FA]">Available</div>
          </div>
        </div>
      </div>
      {/* Work grid */}
      <div className="grid grid-cols-3 gap-1 flex-1">
        {[['#1E90FF', '↑ 38%'], ['#00C2A0', 'Live'], ['#A78BFA', 'New'], ['#F97316', '5★'], ['#60A5FA', '→'], ['#34D399', '✓']].map(([c, l], i) => (
          <div key={i} className="rounded-lg border border-white/5 flex flex-col items-center justify-center gap-1" style={{ background: `${c}0D`, minHeight: 28 }}>
            <div className="text-[8px] font-bold" style={{ color: c as string }}>{l}</div>
            <div className="w-6 h-1 rounded-full bg-white/8" />
          </div>
        ))}
      </div>
    </div>
  );
}

function AutomationMockup() {
  const flows = [
    { from: 'Trigger', to: 'Filter', color: '#60A5FA' },
    { from: 'Filter', to: 'Action', color: '#34D399' },
    { from: 'Action', to: 'Notify', color: '#C4B5FD' },
  ];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      <div className="flex items-center justify-between">
        <div className="text-[8px] font-bold text-slate-300">Workflow Builder</div>
        <div className="px-2 py-0.5 rounded-full text-[6px] font-semibold bg-[#34D399]/15 border border-[#34D399]/25 text-[#34D399]">Running</div>
      </div>
      {/* Flow nodes */}
      <div className="flex-1 flex flex-col justify-center gap-1">
        {['Webhook Trigger', 'Data Filter', 'API Action', 'Slack Notify'].map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className="flex-1 rounded-lg px-2 py-1.5 border flex items-center gap-2"
              style={{ background: `${['#1E90FF', '#00C2A0', '#A78BFA', '#F97316'][i]}10`, borderColor: `${['#1E90FF', '#00C2A0', '#A78BFA', '#F97316'][i]}25` }}
            >
              <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: ['#60A5FA', '#34D399', '#C4B5FD', '#FB923C'][i] }} />
              <div className="text-[7px] text-slate-300 flex-1">{label}</div>
              <div className="text-[6px] font-semibold" style={{ color: ['#60A5FA', '#34D399', '#C4B5FD', '#FB923C'][i] }}>{['Active', 'Matched', 'Done', 'Sent'][i]}</div>
            </div>
            {i < 3 && <div className="w-2 text-[8px] text-slate-600 flex-shrink-0">↓</div>}
          </div>
        ))}
      </div>
      {/* Stats row */}
      <div className="grid grid-cols-3 gap-1">
        {[['1.2K', 'Runs', '#60A5FA'], ['98%', 'Success', '#34D399'], ['0.3s', 'Avg', '#C4B5FD']].map(([v, l, c]) => (
          <div key={l} className="rounded-lg p-1.5 bg-white/3 border border-white/5 text-center">
            <div className="text-[8px] font-bold" style={{ color: c as string }}>{v}</div>
            <div className="text-[6px] text-slate-500">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeedbackMockup() {
  const ratings = [5, 4, 3, 2, 1];
  const counts = [68, 20, 8, 3, 1];
  return (
    <div className="w-full h-full flex flex-col gap-2 p-3 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="text-[8px] font-bold text-slate-300">Feedback Analytics</div>
        <div className="text-[7px] text-[#60A5FA] bg-[#1E90FF]/12 border border-[#1E90FF]/20 rounded px-1.5 py-0.5">Live</div>
      </div>
      {/* Score */}
      <div className="rounded-xl border border-white/8 bg-white/3 p-2 flex items-center gap-3">
        <div className="text-center flex-shrink-0">
          <div className="text-3xl font-extrabold text-[#34D399]">4.8</div>
          <div className="flex gap-0.5 justify-center mt-0.5">
            {[1,2,3,4,5].map(i => <div key={i} className={`w-2 h-2 ${i <= 5 ? 'text-[#34D399]' : 'text-white/10'}`}>★</div>)}
          </div>
          <div className="text-[6px] text-slate-500 mt-0.5">Overall</div>
        </div>
        <div className="flex-1 flex flex-col gap-0.5">
          {ratings.map((r, i) => (
            <div key={r} className="flex items-center gap-1">
              <div className="text-[6px] text-slate-500 w-2">{r}</div>
              <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                <div className="h-full rounded-full bg-[#34D399]" style={{ width: `${counts[i]}%`, opacity: 0.6 + i * 0.05 }} />
              </div>
              <div className="text-[6px] text-slate-500 w-4 text-right">{counts[i]}%</div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent reviews */}
      <div className="flex flex-col gap-1 flex-1">
        {[['Great product, highly recommend!', '#34D399', '5★'], ['Very smooth experience.', '#60A5FA', '5★'], ['Solid and reliable.', '#C4B5FD', '4★']].map(([text, color, stars]) => (
          <div key={text as string} className="flex items-center gap-2 rounded-lg px-2 py-1.5 bg-white/3 border border-white/5">
            <div className="w-5 h-5 rounded-full flex-shrink-0" style={{ background: `${color}20` }} />
            <div className="flex-1 min-w-0">
              <div className="text-[6px] text-slate-400 truncate">{text}</div>
            </div>
            <div className="text-[6px] font-bold flex-shrink-0" style={{ color: color as string }}>{stars}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Projects data ───────────────────────────────────────── */

const projects = [
  {
    id: 'saas',
    title: 'HMD SaaS',
    description: 'Multi-tenant SaaS platform with analytics, billing, and role-based access.',
    industry: 'SaaS Platform',
    accent: 'blue',
    mockup: <SaasMockup />,
    href: '#',
  },
  {
    id: 'realestate',
    title: 'HMD Real Estate',
    description: 'Property listings platform with map search and dynamic filtering.',
    industry: 'Real Estate',
    accent: 'teal',
    mockup: <RealEstateMockup />,
    href: '#',
  },
  {
    id: 'ecommerce',
    title: 'HMD E-Commerce',
    description: 'Full-stack storefront with cart, payments, and product management.',
    industry: 'E-Commerce',
    accent: 'orange',
    mockup: <EcommerceMockup />,
    href: '#',
  },
  {
    id: 'portfolio',
    title: 'HMD Portfolio',
    description: 'Modern personal branding site with project showcase and contact flow.',
    industry: 'Personal Branding',
    accent: 'purple',
    mockup: <PortfolioMockup />,
    href: '#',
  },
  {
    id: 'automation',
    title: 'HMD Automation Tools',
    description: 'Visual workflow builder for automating multi-step business processes.',
    industry: 'Automation',
    accent: 'teal',
    mockup: <AutomationMockup />,
    href: '#',
  },
  {
    id: 'feedback',
    title: 'HMD Feedback',
    description: 'Customer feedback & NPS analytics dashboard with real-time insights.',
    industry: 'Analytics',
    accent: 'blue',
    mockup: <FeedbackMockup />,
    href: '#',
  },
];

const accentMap = {
  blue: {
    border: 'hover:border-[#1E90FF]/50',
    glow: 'hover:shadow-[0_0_40px_rgba(30,144,255,0.18)]',
    badge: 'bg-[#1E90FF]/15 border-[#1E90FF]/25 text-[#60A5FA]',
    overlayFrom: 'from-[#060C1E]',
    dot: 'bg-[#1E90FF]',
    arrowColor: 'text-[#60A5FA]',
  },
  teal: {
    border: 'hover:border-[#00C2A0]/50',
    glow: 'hover:shadow-[0_0_40px_rgba(0,194,160,0.18)]',
    badge: 'bg-[#00C2A0]/15 border-[#00C2A0]/25 text-[#34D399]',
    overlayFrom: 'from-[#041410]',
    dot: 'bg-[#00C2A0]',
    arrowColor: 'text-[#34D399]',
  },
  purple: {
    border: 'hover:border-[#A78BFA]/50',
    glow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.18)]',
    badge: 'bg-[#A78BFA]/15 border-[#A78BFA]/25 text-[#C4B5FD]',
    overlayFrom: 'from-[#0D0818]',
    dot: 'bg-[#A78BFA]',
    arrowColor: 'text-[#C4B5FD]',
  },
  orange: {
    border: 'hover:border-[#F97316]/50',
    glow: 'hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]',
    badge: 'bg-[#F97316]/15 border-[#F97316]/25 text-[#FB923C]',
    overlayFrom: 'from-[#140A04]',
    dot: 'bg-[#F97316]',
    arrowColor: 'text-[#FB923C]',
  },
};

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      {/* Separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)' }}
      />

      {/* Ambient orbs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section header */}
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
              Case Studies
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
            Our Latest{' '}
            <span style={{ color: '#1E90FF' }}>Case</span>{' '}
            <span style={{ color: '#00C2A0' }}>Studies</span>
          </h2>

          <p
            className="max-w-xl"
            style={{ fontSize: 'clamp(14px, 1.4vw, 17px)', color: '#94A3B8', lineHeight: 1.7 }}
          >
            Projects I&apos;m actively building and refining — focused on performance,
            scalability, and real-world impact.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {projects.map(({ id, title, description, industry, accent, mockup, href }) => {
            const a = accentMap[accent as keyof typeof accentMap];
            return (
              <Link
                key={id}
                href={href}
                className={`group relative flex flex-col rounded-2xl border border-white/8 bg-[#0D1535]/90 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] ${a.border} ${a.glow}`}
                style={{ textDecoration: 'none', boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                {/* Mockup area */}
                <div className="relative overflow-hidden bg-[#0A0F2C]" style={{ height: 220 }}>
                  {/* Corner accent glow */}
                  <div
                    className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle at top right, ${accent === 'blue' ? 'rgba(30,144,255,0.12)' : accent === 'teal' ? 'rgba(0,194,160,0.10)' : accent === 'purple' ? 'rgba(167,139,250,0.10)' : 'rgba(249,115,22,0.10)'} 0%, transparent 70%)` }}
                  />

                  {/* Mockup content */}
                  <div className="absolute inset-0">
                    {mockup}
                  </div>

                  {/* Bottom gradient overlay */}
                  <div className={`absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t ${a.overlayFrom} to-transparent pointer-events-none`} />
                </div>

                {/* Content overlay */}
                <div className="flex flex-col gap-2 p-4 flex-1">
                  {/* Industry badge */}
                  <span className={`self-start text-[9px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${a.badge}`}>
                    {industry}
                  </span>

                  {/* Title + description */}
                  <div className="flex-1">
                    <h3
                      className="text-[15px] font-bold text-white mb-1 leading-tight group-hover:text-white transition-colors duration-200"
                      style={{ letterSpacing: '-0.01em' }}
                    >
                      {title}
                    </h3>
                    <p className="text-[12px] text-slate-400 leading-relaxed">
                      {description}
                    </p>
                  </div>

                  {/* CTA row */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-1">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-1.5 h-1.5 rounded-full ${a.dot}`} />
                      <span className="text-[10px] text-slate-500">View Case Study</span>
                    </div>
                    <span className={`text-sm font-bold transition-transform duration-200 group-hover:translate-x-0.5 ${a.arrowColor}`}>
                      →
                    </span>
                  </div>
                </div>

                {/* Top-right shine on hover */}
                <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${accent === 'blue' ? 'rgba(30,144,255,0.08)' : accent === 'teal' ? 'rgba(0,194,160,0.07)' : accent === 'purple' ? 'rgba(167,139,250,0.07)' : 'rgba(249,115,22,0.07)'} 0%, transparent 70%)` }}
                />
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="flex flex-col items-center gap-4 mt-14 sm:mt-16">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              background: 'rgba(30,144,255,0.12)',
              border: '1px solid rgba(30,144,255,0.35)',
              boxShadow: '0 0 24px rgba(30,144,255,0.15)',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 40px rgba(30,144,255,0.35)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(30,144,255,0.6)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 0 24px rgba(30,144,255,0.15)';
              (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(30,144,255,0.35)';
            }}
          >
            <span>Explore More</span>
            <span className="text-base">→</span>
          </Link>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
            <p className="text-[11px] text-slate-500">
              More projects available on request ·{' '}
              <span className="text-[#60A5FA]">Let&apos;s build yours next</span>
            </p>
          </div>
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