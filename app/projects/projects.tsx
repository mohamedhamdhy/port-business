'use client';

import { useState } from 'react';
import Link from 'next/link';

const filters = ['All', 'Web App', 'SaaS', 'Mobile', 'E-Commerce', 'CRM'];

type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  accent: 'blue' | 'teal' | 'purple';
  accentColor: string;
  accentLight: string;
  tags: string[];
  year: string;
  status: 'Live' | 'In Progress' | 'Completed';
  github?: string;
  live?: string;
  mockup: (color: string, light: string) => React.ReactNode;
};

function WebAppMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top right, ${color}18 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect x="0" y="0" width="360" height="200" fill="rgba(11,18,41,0.95)" />
        <rect x="0" y="0" width="360" height="38" fill={`${color}14`} />
        <circle cx="18" cy="19" r="5" fill="#FF5F57" />
        <circle cx="32" cy="19" r="5" fill="#FFBD2E" />
        <circle cx="46" cy="19" r="5" fill="#28C840" />
        <rect x="80" y="12" width="160" height="14" rx="4" fill="rgba(255,255,255,0.06)" stroke={`${color}20`} strokeWidth="0.5" />
        <rect x="88" y="17" width="80" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
        <rect x="310" y="13" width="38" height="12" rx="4" fill={color} opacity="0.5" />
        <rect x="0" y="38" width="80" height="162" fill={`${color}08`} />
        <rect x="8" y="52" width="64" height="26" rx="4" fill={`${color}20`} stroke={`${color}25`} strokeWidth="0.5" />
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="8" y={86+i*22} width="64" height="18" rx="4" fill={i===0?`${color}12`:'rgba(255,255,255,0.03)'} />
        ))}
        <rect x="88" y="48" width="264" height="38" rx="6" fill={`${color}10`} stroke={`${color}15`} strokeWidth="0.5" />
        <rect x="96" y="55" width="100" height="6" rx="1" fill="rgba(255,255,255,0.3)" />
        <rect x="96" y="65" width="70" height="4" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="310" y="54" width="34" height="22" rx="4" fill={color} opacity="0.4" />
        <div />
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x={88+i*90} y={96} width={82} height={96} rx="6" fill="rgba(255,255,255,0.02)" stroke={`${color}12`} strokeWidth="0.5" />
            <rect x={94+i*90} y={102} width={70} height={40} rx="4" fill={`${color}${['18','12','0e'][i]}`} />
            <rect x={94+i*90} y={148} width={50} height={5} rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x={94+i*90} y={156} width={35} height={4} rx="1" fill="rgba(255,255,255,0.1)" />
            <rect x={94+i*90} y={163} width={70} height={20} rx="4" fill={color} opacity={[0.4,0.3,0.25][i]} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function SaaSMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="200" fill="rgba(11,18,41,0.95)" />
        <rect width="72" height="200" fill={`${color}08`} />
        <rect x="6" y="16" width="60" height="28" rx="5" fill={color} opacity="0.25" />
        <text x="36" y="34" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif" opacity="0.7">DASH</text>
        {['Overview','Analytics','Projects','Reports','Settings'].map((l, i) => (
          <g key={l}>
            <rect x="6" y={54+i*24} width="60" height="18" rx="4" fill={i===0?`${color}20`:'rgba(255,255,255,0.03)'} />
            <rect x="14" y={60+i*24} width={[30,36,28,26,32][i]} height="6" rx="1" fill={i===0?'rgba(255,255,255,0.4)':'rgba(255,255,255,0.1)'} />
          </g>
        ))}
        <rect x="80" y="8" width="272" height="28" rx="5" fill={`${color}10`} />
        {[['$124K','Revenue',light],['3.2K','Users','#34D399'],['99.2%','Uptime','#C4B5FD']].map(([v,l,c], i) => (
          <g key={l}>
            <rect x={84+i*88} y={12} width={80} height={20} rx="4" fill="rgba(255,255,255,0.03)" stroke={`${color}15`} strokeWidth="0.5" />
            <text x={94+i*88} y={24} fill={c} fontSize="8" fontWeight="bold" fontFamily="monospace">{v}</text>
            <text x={94+i*88} y={29} fill="rgba(100,116,139,0.7)" fontSize="5" fontFamily="sans-serif">{l}</text>
          </g>
        ))}
        <rect x="80" y="44" width="174" height="90" rx="5" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5" />
        <text x="88" y="58" fill="rgba(100,116,139,0.7)" fontSize="6" fontFamily="sans-serif">Monthly Revenue</text>
        {[28,42,35,55,48,68,58,80].map((h, i) => (
          <rect key={i} x={88+i*20} y={124-h} width={14} height={h} rx="2"
            fill={color} opacity={i===7?0.8:0.2+i*0.05}
            style={i===7?{filter:`drop-shadow(0 0 4px ${color})`}:{}}
          />
        ))}
        <polyline points="95,105 115,92 135,98 155,78 175,85 195,65 215,72 235,52"
          fill="none" stroke="#00C2A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
        <circle cx="235" cy="52" r="2.5" fill="#00C2A0" />
        <rect x="262" y="44" width="90" height="90" rx="5" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5" />
        <text x="270" y="58" fill="rgba(100,116,139,0.7)" fontSize="6" fontFamily="sans-serif">By Plan</text>
        <circle cx="307" cy="98" r="22" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="8" />
        <circle cx="307" cy="98" r="22" fill="none" stroke={color} strokeWidth="8" strokeDasharray="55 83" strokeDashoffset="-8" />
        <circle cx="307" cy="98" r="22" fill="none" stroke="#00C2A0" strokeWidth="8" strokeDasharray="24 114" strokeDashoffset="-63" />
        <circle cx="307" cy="98" r="22" fill="none" stroke="#A78BFA" strokeWidth="8" strokeDasharray="18 121" strokeDashoffset="-87" />
        <rect x="80" y="142" width="272" height="50" rx="5" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5" />
        {[['Alice M.','Pro','$420',light],['Bob K.','Enterprise','$1.2K','#C4B5FD'],['Carol J.','Basic','$99','#34D399'],['Dan R.','Pro','$420',light]].map(([n,p,v,c], i) => (
          <g key={n}>
            <circle cx="92" cy={154+i*11} r="3.5" fill={`${c}40`} />
            <rect x="100" y={150+i*11} width="40" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x="200" y={150+i*11} width="22" height="8" rx="2" fill={`${c}20`} />
            <text x="202" y={157+i*11} fill={c} fontSize="4.5" fontFamily="sans-serif">{p}</text>
            <text x="314" y={156+i*11} fill={c} fontSize="6" fontWeight="bold" fontFamily="monospace">{v}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function MobileMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at center, ${color}12 0%, transparent 70%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="200" fill="rgba(11,18,41,0.95)" />
        {/* Two phones side by side */}
        {[80, 200].map((x, pi) => (
          <g key={pi}>
            <rect x={x} y="12" width="80" height="176" rx="12" fill="rgba(13,21,53,0.95)" stroke={`${color}${pi===0?'40':'20'}`} strokeWidth={pi===0?1.5:1} />
            <rect x={x+2} y="12" width="76" height="14" rx="10" fill={`${color}${pi===0?'20':'10'}`} />
            <rect x={x+28} y="16" width="24" height="6" rx="3" fill="rgba(11,18,41,0.9)" />
            <rect x={x+6} y="32" width="68" height="38" rx="6" fill={`${color}${pi===0?'20':'12'}`} />
            <rect x={x+12} y="40" width="40" height="5" rx="1" fill="rgba(255,255,255,0.4)" />
            <rect x={x+12} y="49" width="28" height="4" rx="1" fill="rgba(255,255,255,0.15)" />
            <rect x={x+12} y="57" width="50" height="8" rx="3" fill={color} opacity={pi===0?0.6:0.35} />
            {[0,1,2].map(i => (
              <g key={i}>
                <rect x={x+6} y={78+i*28} width="68" height="22" rx="5" fill="rgba(255,255,255,0.03)" stroke={`${color}10`} strokeWidth="0.5" />
                <rect x={x+12} y={83+i*28} width="24" height="12" rx="3" fill={`${color}${['20','15','10'][i]}`} />
                <rect x={x+40} y={85+i*28} width="28" height="4" rx="1" fill="rgba(255,255,255,0.2)" />
                <rect x={x+40} y={92+i*28} width="18" height="3" rx="1" fill="rgba(255,255,255,0.08)" />
              </g>
            ))}
            <rect x={x+6} y="163" width="68" height="16" rx="4" fill={`${color}10`} stroke={`${color}15`} strokeWidth="0.5" />
            <rect x={x+14} y="167" width="50" height="4" rx="1" fill={`${color}40`} />
            <rect x={x+14} y="174" width="30" height="3" rx="1" fill={`${color}25`} />
          </g>
        ))}
        {/* Connection beam */}
        <line x1="160" y1="100" x2="200" y2="100" stroke={`${color}30`} strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="180" cy="100" r="3" fill={color} opacity="0.4" />
      </svg>
    </div>
  );
}

function EcommerceMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="200" fill="rgba(11,18,41,0.95)" />
        <rect width="360" height="30" fill={`${color}12`} />
        <rect x="10" y="8" width="60" height="14" rx="3" fill={color} opacity="0.3" />
        <rect x="110" y="10" width="140" height="10" rx="3" fill="rgba(255,255,255,0.06)" stroke={`${color}20`} strokeWidth="0.5" />
        <rect x="310" y="10" width="22" height="10" rx="3" fill={color} opacity="0.4" />
        <rect x="338" y="8" width="14" height="14" rx="3" fill="rgba(255,255,255,0.08)" />
        <rect x="8" y="38" width="100" height="154" rx="5" fill={`${color}06`} stroke={`${color}10`} strokeWidth="0.5" />
        <text x="14" y="54" fill="rgba(100,116,139,0.6)" fontSize="6" fontFamily="sans-serif">CATEGORIES</text>
        {['All Products','Clothing','Electronics','Home','Beauty','Sports'].map((c, i) => (
          <g key={c}>
            <rect x="12" y={60+i*18} width="90" height="14" rx="3" fill={i===0?`${color}20`:'rgba(255,255,255,0.02)'} stroke={i===0?`${color}25`:'transparent'} strokeWidth="0.5" />
            <rect x="18" y={64+i*18} width={[55,40,50,28,35,32][i]} height="6" rx="1" fill={i===0?'rgba(255,255,255,0.35)':'rgba(255,255,255,0.1)'} />
          </g>
        ))}
        {[0,1,2,3,4,5].map(i => (
          <g key={i}>
            <rect x={116+((i%3)*82)} y={38+(Math.floor(i/3)*78)} width={74} height={70} rx="5" fill="rgba(255,255,255,0.025)" stroke={`${color}12`} strokeWidth="0.5" />
            <rect x={120+((i%3)*82)} y={42+(Math.floor(i/3)*78)} width={66} height={36} rx="3" fill={`${color}${['1a','14','10','1a','14','10'][i]}`} />
            <rect x={120+((i%3)*82)} y={82+(Math.floor(i/3)*78)} width={44} height={4} rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x={120+((i%3)*82)} y={89+(Math.floor(i/3)*78)} width={28} height={3} rx="1" fill={color} opacity="0.5" />
            <rect x={120+((i%3)*82)} y={95+(Math.floor(i/3)*78)} width={66} height={8} rx="2" fill={color} opacity={[0.4,0.3,0.25,0.4,0.3,0.25][i]} />
          </g>
        ))}
      </svg>
    </div>
  );
}

function CRMMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom right, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="200" fill="rgba(11,18,41,0.95)" />
        <rect width="70" height="200" fill={`${color}07`} />
        <rect x="5" y="12" width="60" height="22" rx="4" fill={color} opacity="0.2" />
        {['Pipeline','Contacts','Tasks','Reports'].map((l, i) => (
          <g key={l}>
            <rect x="5" y={44+i*26} width="60" height="20" rx="4" fill={i===0?`${color}18`:'rgba(255,255,255,0.03)'} />
            <rect x="12" y={50+i*26} width={[40,36,28,34][i]} height="8" rx="1" fill={i===0?'rgba(255,255,255,0.35)':'rgba(255,255,255,0.1)'} />
          </g>
        ))}
        <rect x="78" y="8" width="274" height="22" rx="4" fill={`${color}10`} />
        <rect x="84" y="12" width="60" height="14" rx="3" fill="rgba(255,255,255,0.06)" />
        <rect x="88" y="16" width="40" height="6" rx="1" fill="rgba(255,255,255,0.2)" />
        {['New','Contacted','Proposal','Won'].map((s, i) => (
          <g key={s}>
            <rect x={78+i*70} y={38} width={62} height={154} rx="5" fill={`${color}0${i+4}`} stroke={`${color}15`} strokeWidth="0.5" />
            <text x={109+i*70} y={52} textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="6" fontFamily="sans-serif">{s}</text>
            {[0,1,i<2?2:-1].filter(n=>n>=0).map(j => (
              <g key={j}>
                <rect x={82+i*70} y={60+j*40} width={54} height={34} rx="4" fill="rgba(255,255,255,0.04)" stroke={`${color}${i===3?'35':'15'}`} strokeWidth="0.5" />
                <circle cx={91+i*70} cy={70+j*40} r="5" fill={`${color}30`} />
                <rect x={100+i*70} y={66+j*40} width={28} height="4" rx="1" fill="rgba(255,255,255,0.2)" />
                <rect x={100+i*70} y={73+j*40} width={18} height="3" rx="1" fill="rgba(255,255,255,0.1)" />
                <rect x={82+i*70} y={81+j*40} width={54} height={8} rx="2" fill={color} opacity={i===3?0.4:0.15} />
              </g>
            ))}
          </g>
        ))}
      </svg>
    </div>
  );
}

function LandingMockup({ color, light }: { color: string; light: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top center, ${color}18 0%, transparent 55%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 200" preserveAspectRatio="xMidYMid slice">
        <rect width="360" height="200" fill="rgba(11,18,41,0.95)" />
        <rect width="360" height="24" fill={`${color}10`} />
        <rect x="10" y="7" width="40" height="10" rx="3" fill={color} opacity="0.35" />
        <rect x="160" y="9" width="40" height="6" rx="1" fill="rgba(255,255,255,0.08)" />
        <rect x="210" y="9" width="30" height="6" rx="1" fill="rgba(255,255,255,0.06)" />
        <rect x="250" y="9" width="30" height="6" rx="1" fill="rgba(255,255,255,0.06)" />
        <rect x="298" y="7" width="52" height="10" rx="4" fill={color} opacity="0.45" />
        <rect x="60" y="34" width="240" height="38" rx="6" fill={`${color}10`} stroke={`${color}15`} strokeWidth="0.5" />
        <rect x="80" y="42" width="200" height="8" rx="2" fill="rgba(255,255,255,0.3)" />
        <rect x="110" y="54" width="140" height="6" rx="1" fill="rgba(255,255,255,0.12)" />
        <rect x="130" y="64" width="60" height="0" rx="0" />
        <rect x="110" y="62" width="60" height="12" rx="4" fill={color} opacity="0.5" />
        <rect x="180" y="62" width="60" height="12" rx="4" fill="rgba(255,255,255,0.08)" stroke={`${color}25`} strokeWidth="0.5" />
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x={10+i*118} y={88} width={108} height={56} rx="5" fill="rgba(255,255,255,0.02)" stroke={`${color}12`} strokeWidth="0.5" />
            <rect x={18+i*118} y={95} width={30} height={20} rx="4" fill={`${color}${['25','18','14'][i]}`} />
            <rect x={18+i*118} y={120} width={72} height="4" rx="1" fill="rgba(255,255,255,0.2)" />
            <rect x={18+i*118} y={128} width={50} height="4" rx="1" fill="rgba(255,255,255,0.1)" />
            <rect x={18+i*118} y={134} width={72} height="6" rx="2" fill={color} opacity="0.25" />
          </g>
        ))}
        <rect x="10" y="154" width="340" height="38" rx="5" fill={`${color}08`} stroke={`${color}12`} strokeWidth="0.5" />
        <rect x="130" y="162" width="100" height="5" rx="1" fill="rgba(255,255,255,0.15)" />
        <rect x="150" y="171" width="60" height="4" rx="1" fill="rgba(255,255,255,0.08)" />
        <rect x="148" y="179" width="64" height="8" rx="3" fill={color} opacity="0.35" />
      </svg>
    </div>
  );
}

const projects: Project[] = [
  {
    id: 'mind-pos',
    title: 'Mind POS Suite',
    subtitle: 'Point of Sale System',
    description:
      'Full-featured POS platform for retail, salon, and travel businesses. Includes inventory management, staff roles, real-time analytics, barcode scanning, and multi-currency payment processing.',
    category: 'Web App',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    year: '2023',
    status: 'Live',
    live: '#',
    github: '#',
    mockup: (c, l) => <WebAppMockup color={c} light={l} />,
  },
  {
    id: 'bamm-saas',
    title: 'BAMM SaaS Platform',
    subtitle: 'Multi-tenant SaaS',
    description:
      'Enterprise-grade multi-tenant SaaS platform with subscription billing via Stripe, role-based access control, analytics dashboards, and modular feature toggles per plan tier.',
    category: 'SaaS',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    tags: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis'],
    year: '2022',
    status: 'Live',
    live: '#',
    mockup: (c, l) => <SaaSMockup color={c} light={l} />,
  },
  {
    id: 'bamm-crm',
    title: 'BAMM CRM',
    subtitle: 'Customer Relationship Manager',
    description:
      'B2B CRM platform with visual Kanban pipeline, lead scoring, activity tracking, team collaboration tools, automated follow-up reminders, and PDF report exports.',
    category: 'CRM',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    tags: ['React', 'Laravel', 'MySQL', 'Docker'],
    year: '2021',
    status: 'Completed',
    github: '#',
    mockup: (c, l) => <CRMMockup color={c} light={l} />,
  },
  {
    id: 'bamm-ecom',
    title: 'BAMM E-Commerce',
    subtitle: 'Multi-vendor Marketplace',
    description:
      'Full-stack multi-vendor e-commerce marketplace with product management, order tracking, Stripe payment integration, vendor dashboards, and a responsive mobile-first storefront.',
    category: 'E-Commerce',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    year: '2022',
    status: 'Live',
    live: '#',
    github: '#',
    mockup: (c, l) => <EcommerceMockup color={c} light={l} />,
  },
  {
    id: 'salon-mobile',
    title: 'Salon App',
    subtitle: 'Mobile Booking Application',
    description:
      'Cross-platform mobile app for salon appointment booking, client history, stylist profiles, push notifications, and loyalty rewards — built with Flutter for iOS and Android.',
    category: 'Mobile',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    tags: ['Flutter', 'Firebase', 'Provider', 'Dart'],
    year: '2023',
    status: 'Live',
    live: '#',
    mockup: (c, l) => <MobileMockup color={c} light={l} />,
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio & Agency Site',
    subtitle: 'Business Landing Page',
    description:
      'Modern business portfolio website with animated hero section, service showcases, project case studies, contact forms, and SEO optimization — built on Next.js 16 with TailwindCSS.',
    category: 'Web App',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Framer'],
    year: '2024',
    status: 'In Progress',
    github: '#',
    mockup: (c, l) => <LandingMockup color={c} light={l} />,
  },
];

const accentMap = {
  blue: {
    cardBorder: 'border-[#1E90FF]/15 hover:border-[#1E90FF]/45',
    glow: 'hover:shadow-[0_0_40px_rgba(30,144,255,0.14)]',
    tagBg: 'bg-[#1E90FF]/8 border-[#1E90FF]/18 text-[#60A5FA]',
    badge: 'bg-[#1E90FF]/10 border-[#1E90FF]/22 text-[#60A5FA]',
    btn: 'bg-[#1E90FF] shadow-[0_0_20px_rgba(30,144,255,0.35)] hover:shadow-[0_0_28px_rgba(30,144,255,0.55)]',
    outlineBtn: 'border-[#1E90FF]/25 text-[#60A5FA] hover:bg-[#1E90FF]/10 hover:border-[#1E90FF]/45',
    divider: 'bg-[#1E90FF]/18',
  },
  teal: {
    cardBorder: 'border-[#00C2A0]/15 hover:border-[#00C2A0]/45',
    glow: 'hover:shadow-[0_0_40px_rgba(0,194,160,0.14)]',
    tagBg: 'bg-[#00C2A0]/8 border-[#00C2A0]/18 text-[#34D399]',
    badge: 'bg-[#00C2A0]/10 border-[#00C2A0]/22 text-[#34D399]',
    btn: 'bg-[#00C2A0] shadow-[0_0_20px_rgba(0,194,160,0.35)] hover:shadow-[0_0_28px_rgba(0,194,160,0.55)]',
    outlineBtn: 'border-[#00C2A0]/25 text-[#34D399] hover:bg-[#00C2A0]/10 hover:border-[#00C2A0]/45',
    divider: 'bg-[#00C2A0]/18',
  },
  purple: {
    cardBorder: 'border-[#A78BFA]/15 hover:border-[#A78BFA]/45',
    glow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.14)]',
    tagBg: 'bg-[#A78BFA]/8 border-[#A78BFA]/18 text-[#C4B5FD]',
    badge: 'bg-[#A78BFA]/10 border-[#A78BFA]/22 text-[#C4B5FD]',
    btn: 'bg-[#A78BFA] shadow-[0_0_20px_rgba(167,139,250,0.35)] hover:shadow-[0_0_28px_rgba(167,139,250,0.55)]',
    outlineBtn: 'border-[#A78BFA]/25 text-[#C4B5FD] hover:bg-[#A78BFA]/10 hover:border-[#A78BFA]/45',
    divider: 'bg-[#A78BFA]/18',
  },
};

const statusStyles: Record<string, { color: string; bg: string; border: string; dot: string }> = {
  Live: { color: '#34D399', bg: 'rgba(0,194,160,0.12)', border: 'rgba(0,194,160,0.28)', dot: '#00C2A0' },
  'In Progress': { color: '#FBBF24', bg: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.25)', dot: '#FBBF24' },
  Completed: { color: '#94A3B8', bg: 'rgba(148,163,184,0.08)', border: 'rgba(148,163,184,0.18)', dot: '#64748B' },
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)' }}
      />

      {/* Ambient orbs */}
      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.07) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.03) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
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
              Work Showcase
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
            Featured{' '}
            <span style={{ color: '#1E90FF' }}>Projects</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            Production-grade digital products built across industries — from
            SaaS platforms to mobile apps and e-commerce solutions.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { val: `${projects.length}+`, label: 'Projects', color: '#60A5FA', bg: 'rgba(30,144,255,0.10)', border: 'rgba(30,144,255,0.22)' },
              { val: `${projects.filter(p => p.status === 'Live').length}`, label: 'Live', color: '#34D399', bg: 'rgba(0,194,160,0.10)', border: 'rgba(0,194,160,0.22)' },
              { val: `${[...new Set(projects.map(p => p.category))].length}`, label: 'Categories', color: '#C4B5FD', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
            ].map(({ val, label, color, bg, border }) => (
              <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: bg, border: `1px solid ${border}` }}>
                <span className="text-sm font-extrabold" style={{ color }}>{val}</span>
                <span className="text-[11px] text-slate-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sm:mb-12">
          {filters.map((f) => {
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="px-4 py-2 rounded-xl text-[11px] font-semibold uppercase tracking-[0.05em] border transition-all duration-200"
                style={{
                  background: isActive ? '#1E90FF' : 'rgba(255,255,255,0.03)',
                  borderColor: isActive ? '#1E90FF' : 'rgba(255,255,255,0.08)',
                  color: isActive ? '#fff' : '#64748B',
                  boxShadow: isActive ? '0 0 20px rgba(30,144,255,0.35)' : 'none',
                }}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Projects grid — 3 cols desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {filtered.map((project) => {
            const a = accentMap[project.accent];
            const st = statusStyles[project.status];

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${a.cardBorder} ${a.glow}`}
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                {/* Mockup area */}
                <div className="relative overflow-hidden" style={{ height: 186 }}>
                  {/* Corner orb */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none z-0"
                    style={{ background: `radial-gradient(circle at top right, ${project.accentColor}18 0%, transparent 70%)` }}
                  />

                  {/* Mockup */}
                  <div className="absolute inset-0 z-0">
                    {project.mockup(project.accentColor, project.accentLight)}
                  </div>

                  {/* Bottom fade */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-16 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #0D1535, transparent)' }}
                  />

                  {/* Status badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className="inline-flex items-center gap-1.5 text-[9px] font-semibold px-2.5 py-1 rounded-full"
                      style={{ background: st.bg, border: `1px solid ${st.border}`, color: st.color }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: st.dot,
                          animation: project.status === 'Live' ? 'hmd-pulse 2s infinite' : undefined,
                        }}
                      />
                      {project.status}
                    </span>
                  </div>

                  {/* Year badge */}
                  <div className="absolute top-3 right-3 z-20">
                    <span
                      className={`text-[9px] font-semibold px-2 py-1 rounded-full border ${a.badge}`}
                    >
                      {project.year}
                    </span>
                  </div>

                  {/* Category badge — bottom of mockup */}
                  <div className="absolute bottom-3 left-3 z-20">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.06em] px-2.5 py-1 rounded-full border ${a.badge}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Title */}
                  <h3
                    className="text-[15px] font-bold text-white leading-tight mb-0.5 transition-colors duration-200 group-hover:text-[var(--ac)]"
                    style={{ '--ac': project.accentLight } as React.CSSProperties}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[10px] font-medium text-slate-500 uppercase tracking-[0.06em] mb-3">
                    {project.subtitle}
                  </p>

                  {/* Divider */}
                  <div className={`h-px mb-3 ${a.divider}`} />

                  {/* Description */}
                  <p className="text-[12px] text-slate-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-semibold uppercase tracking-[0.04em] px-2 py-0.5 rounded-full border ${a.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex items-center gap-2 mt-auto">
                    {project.live && (
                      <Link
                        href={project.live}
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-[11px] font-bold text-white transition-all duration-150 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] ${a.btn}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <svg viewBox="0 0 14 14" fill="none" width={11} height={11}>
                          <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
                          <path d="M7 4v6M4 7h6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                        </svg>
                        Live Demo
                      </Link>
                    )}
                    {project.github && (
                      <Link
                        href={project.github}
                        className={`${project.live ? '' : 'flex-1'} flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-[11px] font-semibold border transition-all duration-150 hover:-translate-y-0.5 ${a.outlineBtn}`}
                        style={{ textDecoration: 'none' }}
                      >
                        <svg viewBox="0 0 16 16" fill="currentColor" width={12} height={12}>
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        GitHub
                      </Link>
                    )}
                    {!project.live && !project.github && (
                      <span className="text-[10px] text-slate-500 italic">Details on request</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className="mt-12 sm:mt-14 rounded-2xl border border-white/6 bg-[#0D1535]/60 px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}
        >
          <div>
            <p className="text-sm sm:text-base font-bold text-white mb-1">
              Want to see more work?
            </p>
            <p className="text-[12px] sm:text-sm text-slate-400">
              More case studies and private projects available on request.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: '#1E90FF',
                boxShadow: '0 0 24px rgba(30,144,255,0.35)',
                textDecoration: 'none',
              }}
            >
              Get in Touch <span>→</span>
            </Link>
            <Link
              href="https://github.com/mohamedhamdhy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 border border-white/12 transition-all duration-150 hover:border-white/25 hover:text-white"
              style={{ textDecoration: 'none' }}
            >
              GitHub ↗
            </Link>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            All projects are production-built ·{' '}
            <span className="text-[#60A5FA]">Real clients, real impact</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hmd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}