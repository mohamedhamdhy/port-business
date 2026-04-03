'use client';

import { useState } from 'react';

const LocationIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <path d="M8 1.5a4.5 4.5 0 0 1 4.5 4.5c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z" stroke="currentColor" strokeWidth="1.2"/>
    <circle cx="8" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>
);

const CalendarIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <rect x="2" y="3" width="12" height="11" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 1.5v3M11 1.5v3M2 7h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const BriefcaseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <rect x="1.5" y="5" width="13" height="9" rx="2" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5.5 5V3.5A1.5 1.5 0 0 1 7 2h2a1.5 1.5 0 0 1 1.5 1.5V5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M1.5 9.5h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M8 2c-2 2-2 8 0 12M8 2c2 2 2 8 0 12M2 8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

function POSMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top right, ${color}18 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="20" y="15" width="140" height="90" rx="6" fill="rgba(13,21,53,0.9)" stroke={`${color}30`} strokeWidth="1"/>
        <rect x="20" y="15" width="140" height="18" rx="6" fill={`${color}20`}/>
        <rect x="20" y="24" width="140" height="9" rx="0" fill={`${color}20`}/>
        <circle cx="28" cy="24" r="3" fill={color} opacity="0.5"/>
        <circle cx="37" cy="24" r="3" fill={color} opacity="0.3"/>
        <circle cx="46" cy="24" r="3" fill={color} opacity="0.2"/>
        <rect x="27" y="40" width="40" height="28" rx="3" fill={`${color}15`} stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="30" y="43" width="30" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
        <rect x="30" y="49" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="30" y="54" width="25" height="8" rx="2" fill={color} opacity="0.4"/>
        <rect x="72" y="40" width="40" height="28" rx="3" fill={`${color}15`} stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="75" y="43" width="30" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
        <rect x="75" y="49" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="75" y="54" width="25" height="8" rx="2" fill={color} opacity="0.3"/>
        <rect x="117" y="40" width="36" height="28" rx="3" fill={`${color}15`} stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="120" y="43" width="26" height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
        <rect x="120" y="49" width="18" height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
        <rect x="120" y="54" width="22" height="8" rx="2" fill={color} opacity="0.35"/>
        <rect x="27" y="76" width="126" height="22" rx="3" fill={`${color}10`} stroke={`${color}15`} strokeWidth="0.5"/>
        <rect x="30" y="80" width="50" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
        <rect x="30" y="86" width="35" height="2" rx="1" fill="rgba(255,255,255,0.08)"/>
        <rect x="110" y="79" width="36" height="12" rx="2" fill={color} opacity="0.5"/>
        <rect x="175" y="20" width="45" height="80" rx="4" fill="rgba(13,21,53,0.95)" stroke={`${color}25`} strokeWidth="1"/>
        <rect x="178" y="24" width="38" height="5" rx="1" fill={color} opacity="0.3"/>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="178" y={33+i*12} width="38" height="9" rx="2" fill={`${color}${i===0?'30':'12'}`} stroke={`${color}15`} strokeWidth="0.5"/>
        ))}
      </svg>
    </div>
  );
}

function SalonMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="15" y="10" width="210" height="110" rx="8" fill="rgba(13,21,53,0.8)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="15" y="10" width="55" height="110" rx="8" fill={`${color}08`} stroke={`${color}15`} strokeWidth="0.5"/>
        <rect x="18" y="18" width="46" height="20" rx="4" fill={color} opacity="0.25"/>
        <rect x="21" y="22" width="28" height="3" rx="1" fill="rgba(255,255,255,0.5)"/>
        <rect x="21" y="28" width="18" height="2" rx="1" fill="rgba(255,255,255,0.2)"/>
        {['Today','Mon','Tue','Wed'].map((d, i) => (
          <g key={d}>
            <rect x="18" y={45+i*16} width="46" height="13" rx="3" fill={i===0 ? `${color}30` : 'rgba(255,255,255,0.04)'} stroke={i===0 ? `${color}40` : 'transparent'} strokeWidth="0.5"/>
            <rect x="22" y={48+i*16} width="20" height="2" rx="1" fill={i===0 ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.2)'}/>
            <rect x="22" y={53+i*16} width="14" height="1.5" rx="1" fill="rgba(255,255,255,0.1)"/>
          </g>
        ))}
        <rect x="75" y="14" width="145" height="14" rx="3" fill={`${color}12`}/>
        {['9am','10am','11am','12pm','1pm','2pm','3pm'].map((t, i) => (
          <text key={t} x={80+i*20} y={24} fill="rgba(100,116,139,0.7)" fontSize="5" fontFamily="monospace">{t}</text>
        ))}
        {[
          [80,30,38,22,0.5,'Cut & Style'], [120,46,55,18,0.35,'Color'], [80,52,28,18,0.4,'Blowout'],
          [145,30,45,18,0.3,'Massage'],[183,46,30,34,0.45,'Facial'],
        ].map(([x, y, w, h, op, label], i) => (
          <g key={i}>
            <rect x={x as number} y={y as number} width={w as number} height={h as number} rx="3" fill={color} opacity={op as number}/>
            <text x={(x as number)+3} y={(y as number)+8} fill="rgba(255,255,255,0.7)" fontSize="4.5" fontFamily="sans-serif">{label as string}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function TravelMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="10" y="8" width="220" height="114" rx="8" fill="rgba(13,21,53,0.85)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="10" y="8" width="220" height="22" rx="8" fill={`${color}15`}/>
        <rect x="10" y="22" width="220" height="8" rx="0" fill={`${color}15`}/>
        <circle cx="20" cy="19" r="3" fill={color} opacity="0.4"/>
        <circle cx="29" cy="19" r="3" fill={color} opacity="0.25"/>
        <circle cx="38" cy="19" r="3" fill={color} opacity="0.15"/>
        <rect x="60" y="13" width="80" height="12" rx="3" fill="rgba(255,255,255,0.06)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="63" y="17" width="40" height="4" rx="1" fill="rgba(255,255,255,0.15)"/>
        <rect x="175" y="14" width="48" height="10" rx="4" fill={color} opacity="0.5"/>
        <rect x="178" y="17" width="30" height="4" rx="1" fill="rgba(255,255,255,0.5)"/>
        {[
          [14, 35, 68, 88, 'Dubai → London', 'EK001', '#60A5FA'],
          [88, 35, 68, 88, 'Dubai → NYC', 'EK203', '#34D399'],
          [162, 35, 68, 88, 'Dubai → Paris', 'EK075', '#C4B5FD'],
        ].map(([x, y, w, h, route, flight, c]) => (
          <g key={flight as string}>
            <rect x={x as number} y={y as number} width={w as number} height={h as number} rx="5" fill="rgba(255,255,255,0.03)" stroke={`${color}18`} strokeWidth="0.8"/>
            <rect x={(x as number)+4} y={(y as number)+6} width={(w as number)-8} height="28" rx="3" fill={`${c}15`}/>
            <circle cx={(x as number)+12} cy={(y as number)+20} r="6" fill={`${c}30`}/>
            <rect x={(x as number)+4} y={(y as number)+38} width={(w as number)-8} height="3" rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x={(x as number)+4} y={(y as number)+44} width={(w as number)-20} height="2" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x={(x as number)+4} y={(y as number)+50} width={(w as number)-8} height="1" rx="0.5" fill={`${color}20`}/>
            <rect x={(x as number)+4} y={(y as number)+54} width={(w as number)-8} height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x={(x as number)+4} y={(y as number)+60} width={(w as number)-8} height="16" rx="3" fill={color} opacity="0.25"/>
            <text x={(x as number)+8} y={(y as number)+72} fill="rgba(255,255,255,0.5)" fontSize="5" fontFamily="sans-serif">Book Now</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function CRMMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top right, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="10" y="8" width="48" height="114" rx="5" fill="rgba(11,18,41,0.95)" stroke={`${color}20`} strokeWidth="0.5"/>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x="15" y={18+i*18} width="38" height="13" rx="3" fill={i===0 ? `${color}25` : 'rgba(255,255,255,0.03)'} stroke={i===0 ? `${color}30` : 'transparent'} strokeWidth="0.5"/>
        ))}
        <rect x="63" y="8" width="177" height="114" rx="5" fill="rgba(13,21,53,0.8)" stroke={`${color}15`} strokeWidth="0.5"/>
        <rect x="67" y="14" width="80" height="10" rx="2" fill={`${color}15`}/>
        <rect x="70" y="17" width="50" height="4" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="200" y="14" width="35" height="10" rx="4" fill={color} opacity="0.4"/>
        {[
          ['Alice M.','Deal Closed','$12K','#34D399'],
          ['Bob K.','Proposal','$8.5K','#60A5FA'],
          ['Carol J.','Follow Up','$6K','#C4B5FD'],
          ['Dan R.','New Lead','$4K','#FBBF24'],
        ].map(([name,stage,val,c], i) => (
          <g key={name as string}>
            <rect x="67" y={30+i*20} width="169" height="17" rx="3" fill="rgba(255,255,255,0.025)" stroke={`${color}10`} strokeWidth="0.5"/>
            <circle cx="77" cy={39+i*20} r="5" fill={`${c}30`}/>
            <rect x="86" y={35+i*20} width="30" height="3" rx="1" fill="rgba(255,255,255,0.3)"/>
            <rect x="86" y={41+i*20} width="20" height="2" rx="1" fill="rgba(255,255,255,0.12)"/>
            <rect x="148" y={35+i*20} width="28" height="10" rx="3" fill={`${c}20`}/>
            <text x="152" y={42+i*20} fill={c as string} fontSize="4.5" fontFamily="sans-serif">{stage as string}</text>
            <text x="206" y={41+i*20} fill={c as string} fontSize="6" fontWeight="bold" fontFamily="monospace">{val as string}</text>
          </g>
        ))}
        <rect x="67" y="115" width="169" height="4" rx="2" fill={`${color}10`}/>
        <rect x="67" y="115" width="90" height="4" rx="2" fill={color} opacity="0.4"/>
      </svg>
    </div>
  );
}

function EcommerceMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom right, ${color}12 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="10" y="8" width="220" height="16" rx="4" fill={`${color}12`}/>
        <rect x="13" y="12" width="50" height="8" rx="2" fill={color} opacity="0.25"/>
        <rect x="130" y="12" width="60" height="8" rx="3" fill="rgba(255,255,255,0.06)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="196" y="12" width="30" height="8" rx="3" fill={color} opacity="0.4"/>
        {[
          [10,28,68,95], [82,28,68,95], [154,28,68,95],
        ].map(([x,y,w,h], i) => (
          <g key={i}>
            <rect x={x as number} y={y as number} width={w as number} height={h as number} rx="5" fill="rgba(13,21,53,0.9)" stroke={`${color}15`} strokeWidth="0.5"/>
            <rect x={(x as number)+4} y={(y as number)+4} width={(w as number)-8} height="50" rx="3" fill={`${color}${['18','12','10'][i]}`}/>
            <rect x={(x as number)+4} y={(y as number)+58} width={(w as number)-8} height="4" rx="1" fill="rgba(255,255,255,0.25)"/>
            <rect x={(x as number)+4} y={(y as number)+65} width={(w as number)-20} height="3" rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x={(x as number)+4} y={(y as number)+71} width="30" height="3" rx="1" fill={color} opacity="0.6"/>
            <rect x={(x as number)+4} y={(y as number)+78} width={(w as number)-8} height="12" rx="3" fill={color} opacity="0.3"/>
            <text x={(x as number)+8} y={(y as number)+88} fill="rgba(255,255,255,0.5)" fontSize="5">Add to Cart</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function SaaSMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="10" y="8" width="220" height="114" rx="6" fill="rgba(13,21,53,0.85)" stroke={`${color}18`} strokeWidth="0.5"/>
        <rect x="14" y="12" width="60" height="106" rx="4" fill={`${color}08`} stroke={`${color}12`} strokeWidth="0.5"/>
        {[0,1,2,3].map(i => (
          <rect key={i} x="17" y={18+i*22} width="54" height="16" rx="3" fill={i===0 ? `${color}25` : 'rgba(255,255,255,0.03)'} stroke={i===0 ? `${color}30` : 'transparent'} strokeWidth="0.5"/>
        ))}
        <rect x="78" y="12" width="148" height="28" rx="4" fill={`${color}10`}/>
        {[['$48K','Revenue','#60A5FA'],['2.8K','Users','#34D399'],['98%','Uptime','#C4B5FD']].map(([v,l,c], i) => (
          <g key={l as string}>
            <rect x={82+i*46} y={16} width={40} height={20} rx="3" fill="rgba(255,255,255,0.04)" stroke={`${color}15`} strokeWidth="0.5"/>
            <text x={84+i*46} y={28} fill={c as string} fontSize="7" fontWeight="bold" fontFamily="monospace">{v as string}</text>
            <text x={84+i*46} y={33} fill="rgba(100,116,139,0.7)" fontSize="4.5" fontFamily="sans-serif">{l as string}</text>
          </g>
        ))}
        <rect x="78" y="44" width="148" height="45" rx="4" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5"/>
        <text x="82" y="54" fill="rgba(100,116,139,0.6)" fontSize="5" fontFamily="sans-serif">Monthly Growth</text>
        {[18,28,22,36,30,44,38,52].map((h, i) => (
          <rect key={i} x={82+i*17} y={84-h} width={12} height={h} rx="2" fill={color} opacity={i===7 ? 0.7 : 0.2+i*0.04}/>
        ))}
        <rect x="78" y="93" width="148" height="24" rx="4" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5"/>
        {[['Basic','$29/mo','#475569'],['Pro','$79/mo',color],['Enterprise','Custom','#A78BFA']].map(([plan,price,c], i) => (
          <g key={plan as string}>
            <rect x={82+i*46} y={96} width={40} height={18} rx="3" fill={i===1 ? `${color}25` : 'rgba(255,255,255,0.03)'} stroke={i===1 ? `${color}35` : 'transparent'} strokeWidth="0.5"/>
            <text x={84+i*46} y={105} fill={c as string} fontSize="5" fontFamily="sans-serif">{plan as string}</text>
            <text x={84+i*46} y={111} fill="rgba(255,255,255,0.3)" fontSize="4.5" fontFamily="monospace">{price as string}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

const companies = [
  {
    id: 'bait',
    name: 'BAIT ALAYOUB MARKETING MANAGEMENT',
    nameShort: 'Bait Alayoub',
    role: 'Mid-Level Software Engineer',
    duration: '3 Years',
    period: '2021 – 2024',
    location: 'Dubai, UAE',
    mode: 'Hybrid',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    projects: [
      {
        id: 'pos-clothing',
        title: 'Mind POS Clothing',
        tag: 'POS System',
        description: 'Full-featured point-of-sale system for retail clothing stores — inventory management, barcode scanning, staff roles, and real-time sales analytics.',
        mockup: (color: string) => <POSMockup color={color} />,
      },
      {
        id: 'pos-salon',
        title: 'Minds POS Salon',
        tag: 'Booking & POS',
        description: 'Salon management platform combining appointment scheduling, client history, staff commissions, and integrated POS for seamless daily operations.',
        mockup: (color: string) => <SalonMockup color={color} />,
      },
      {
        id: 'pos-travel',
        title: 'Mind POS Travel',
        tag: 'Travel Platform',
        description: 'Travel agency management tool handling flight bookings, package management, customer invoicing, and multi-currency payment processing.',
        mockup: (color: string) => <TravelMockup color={color} />,
      },
    ],
  },
  {
    id: 'alpha',
    name: 'ALPHA MINDS',
    nameShort: 'Alpha Minds',
    role: 'Junior Software Engineer',
    duration: '1 Year',
    period: '2020 – 2021',
    location: 'Colombo, Sri Lanka',
    mode: 'Remote',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    projects: [
      {
        id: 'bamm-crm',
        title: 'BAMM CRM',
        tag: 'CRM System',
        description: 'Customer relationship management platform with pipeline tracking, lead scoring, activity logs, and team collaboration tools for growing sales teams.',
        mockup: (color: string) => <CRMMockup color={color} />,
      },
      {
        id: 'bamm-ecom',
        title: 'BAMM E-Commerce',
        tag: 'E-Commerce',
        description: 'Multi-vendor e-commerce platform with product management, order tracking, payment gateway integration, and a responsive storefront.',
        mockup: (color: string) => <EcommerceMockup color={color} />,
      },
      {
        id: 'bamm-saas',
        title: 'BAMM SaaS',
        tag: 'SaaS Platform',
        description: 'Multi-tenant SaaS platform with subscription billing, role-based access, analytics dashboard, and modular feature toggles per plan tier.',
        mockup: (color: string) => <SaaSMockup color={color} />,
      },
    ],
  },
];

export default function ExperienceSection() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <section
      id="experience"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)' }}
      />

      <div className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)' }} />

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
            <span className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-[0.06em]">Career Path</span>
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
            Work{' '}
            <span style={{ color: '#1E90FF' }}>Experience</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            A track record of delivering production-grade software across industries —
            from retail POS systems to SaaS platforms and CRM tools.
          </p>
        </div>

        <div className="relative">

          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px pointer-events-none hidden sm:block"
            style={{ background: 'linear-gradient(180deg, rgba(30,144,255,0.4), rgba(0,194,160,0.4), rgba(30,144,255,0.1))' }} />

          <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
            {companies.map((company, ci) => {
              const isLeft = ci % 2 === 0;
              return (
                <div key={company.id} className="relative">

                  <div className={`hidden sm:flex absolute top-6 items-center justify-center z-10 ${isLeft ? 'lg:left-1/2' : 'lg:left-1/2'} left-6 -translate-x-1/2`}>
                    <div
                      className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                      style={{
                        background: '#0A0F2C',
                        borderColor: company.accentColor,
                        boxShadow: `0 0 14px ${company.accentColor}60`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full" style={{ background: company.accentColor }} />
                    </div>
                  </div>

                  <div className="sm:hidden flex items-center gap-3 mb-5">
                    <div
                      className="w-4 h-4 rounded-full border-2 flex-shrink-0"
                      style={{ borderColor: company.accentColor, background: '#0A0F2C', boxShadow: `0 0 10px ${company.accentColor}50` }}
                    />
                    <div className="h-px flex-1 opacity-30" style={{ background: company.accentColor }} />
                  </div>

                  <div className={`sm:pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start`}>

                    <div className={`${isLeft ? 'lg:order-1 lg:text-right lg:flex lg:flex-col lg:items-end' : 'lg:order-2'} mb-6 lg:mb-0 lg:pt-1`}>
                      <div
                        className="inline-block rounded-2xl border bg-[#0D1535]/90 backdrop-blur-sm p-5 xl:p-6 w-full lg:max-w-sm transition-all duration-300"
                        style={{
                          borderColor: `${company.accentColor}25`,
                          boxShadow: `0 4px 32px rgba(0,0,0,0.3), 0 0 0 1px ${company.accentColor}10`,
                        }}
                      >
                        <div
                          className="text-[10px] font-bold uppercase tracking-[0.12em] mb-1"
                          style={{ color: company.accentLight }}
                        >
                          {company.nameShort}
                        </div>
                        <div className="text-[8px] text-slate-500 uppercase tracking-[0.08em] mb-3">
                          {company.name}
                        </div>

                        <div className="text-base sm:text-lg font-bold text-white mb-4 leading-tight">
                          {company.role}
                        </div>

                        <div className="flex flex-col gap-2">
                          {[
                            { icon: <CalendarIcon />, text: `${company.period} · ${company.duration}` },
                            { icon: <LocationIcon />, text: company.location },
                            { icon: <GlobeIcon />, text: company.mode },
                            { icon: <BriefcaseIcon />, text: `${company.projects.length} Projects Delivered` },
                          ].map(({ icon, text }) => (
                            <div key={text} className="flex items-center gap-2">
                              <span style={{ color: company.accentLight }}>{icon}</span>
                              <span className="text-[11px] text-slate-400">{text}</span>
                            </div>
                          ))}
                        </div>

                        <div
                          className="mt-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold"
                          style={{
                            background: `${company.accentColor}15`,
                            border: `1px solid ${company.accentColor}30`,
                            color: company.accentLight,
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: company.accentColor }} />
                          {company.period}
                        </div>
                      </div>
                    </div>

                    <div className={`${isLeft ? 'lg:order-2' : 'lg:order-1'} flex flex-col gap-4`}>
                      <div className="text-[10px] text-slate-500 uppercase tracking-[0.1em] font-semibold mb-1 flex items-center gap-2">
                        <div className="w-4 h-px" style={{ background: company.accentColor }} />
                        Projects
                      </div>

                      {company.projects.map((project) => {
                        const isActive = activeProject === project.id;
                        return (
                          <div
                            key={project.id}
                            className="group relative rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                            style={{
                              border: `1px solid ${isActive ? company.accentColor + '50' : company.accentColor + '18'}`,
                              boxShadow: isActive ? `0 0 28px ${company.accentColor}20` : '0 4px 16px rgba(0,0,0,0.3)',
                              minHeight: 130,
                            }}
                            onMouseEnter={() => setActiveProject(project.id)}
                            onMouseLeave={() => setActiveProject(null)}
                          >
                            <div className="absolute inset-0">
                              {project.mockup(company.accentColor)}
                            </div>

                            <div
                              className="absolute inset-0"
                              style={{
                                background: `linear-gradient(to top, #0A0F2C 0%, #0A0F2C${isActive ? 'cc' : 'ee'} 45%, transparent 100%)`,
                              }}
                            />

                            <div className="relative z-10 flex flex-col justify-end h-full p-4 min-h-[130px]">
                              <div className="flex items-center justify-between gap-2 mb-1">
                                <span className="text-sm font-bold text-white leading-tight">{project.title}</span>
                                <span
                                  className="text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0"
                                  style={{
                                    background: `${company.accentColor}20`,
                                    border: `1px solid ${company.accentColor}30`,
                                    color: company.accentLight,
                                  }}
                                >
                                  {project.tag}
                                </span>
                              </div>
                              <p
                                className="text-[11px] leading-relaxed transition-all duration-300"
                                style={{
                                  color: isActive ? '#94A3B8' : '#64748B',
                                  maxHeight: isActive ? 60 : 32,
                                  overflow: 'hidden',
                                }}
                              >
                                {project.description}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden sm:flex absolute bottom-0 left-6 lg:left-1/2 -translate-x-1/2 flex-col items-center">
            <div className="w-3 h-3 rounded-full border border-white/10 bg-[#0A0F2C]" />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-16 sm:mt-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            4+ Years of professional experience ·{' '}
            <span className="text-[#60A5FA]">6 production projects delivered</span>
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