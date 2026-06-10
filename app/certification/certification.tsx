'use client';

import Image from 'next/image';
import { useState } from 'react';

const certifications = [
  {
    id: 'aws-solutions',
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    issued: 'Jan 2024',
    expires: 'Jan 2027',
    credentialId: 'AWS-SAA-2024-001',
    image: '/images/cert-aws-solutions.png',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    category: 'Cloud',
    tags: ['EC2', 'S3', 'RDS', 'IAM', 'VPC'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M13.527 15.665h-3.054c-.148 0-.271.12-.271.271v1.23c0 .148.123.271.271.271h1.194v.88h-1.194c-.148 0-.271.12-.271.271v1.23c0 .148.123.271.271.271h3.054c.148 0 .271-.12.271-.271v-1.23c0-.148-.123-.271-.271-.271h-1.194v-.88h1.194c.148 0 .271-.12.271-.271v-1.23c0-.148-.123-.271-.271-.271zm7.62-4.5c-.12-3.69-2.49-6.87-5.79-8.1-.27-.09-.57.03-.69.3l-.39.93c-.12.27 0 .57.27.69 2.7 1.02 4.59 3.6 4.59 6.51v.3c0 .15.12.27.27.27h1.47c.15 0 .27-.12.27-.27v-.3c0-.09 0-.21-.03-.33zm-7.62-7.77c-.12-.27-.42-.39-.69-.27-3.3 1.23-5.67 4.41-5.79 8.1-.03.12-.03.24-.03.33v.3c0 .15.12.27.27.27h1.47c.15 0 .27-.12.27-.27v-.3c0-2.91 1.89-5.49 4.59-6.51.27-.12.39-.42.27-.69l-.36-.96z"/>
      </svg>
    ),
  },
  {
    id: 'meta-react',
    title: 'Meta Front-End Developer',
    issuer: 'Meta (Facebook)',
    issued: 'Mar 2023',
    expires: 'No Expiry',
    credentialId: 'META-FE-2023-442',
    image: '/images/cert-meta-react.png',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    category: 'Frontend',
    tags: ['React', 'JavaScript', 'CSS', 'UX'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.957 6.628c.195-.007.386.036.555.126.62.327.879 1.252.599 2.378a6.87 6.87 0 0 1-.296.863 12.06 12.06 0 0 0-1.67-.178c-.359-.499-.74-.972-1.14-1.416.433-.44.874-.836 1.31-1.178.22-.168.44-.31.642-.395zM12 9.133c.37.399.726.82 1.065 1.258-.708.056-1.42.055-2.13 0 .34-.437.695-.858 1.065-1.258zm-4.957-.505c.196-.007.387.036.556.126.432.228.71.793.736 1.562a5.36 5.36 0 0 1-.14 1.305 12.08 12.08 0 0 0-1.67.178 11.52 11.52 0 0 1-.296-.863c-.28-1.126-.021-2.051.599-2.378.07-.036.143-.063.215-.083a.972.972 0 0 1 0 0z"/>
      </svg>
    ),
  },
  {
    id: 'google-project',
    title: 'Google Project Management',
    issuer: 'Google',
    issued: 'Jun 2023',
    expires: 'No Expiry',
    credentialId: 'GOOGLE-PM-2023-881',
    image: '/images/cert-google-pm.png',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    category: 'Management',
    tags: ['Agile', 'Scrum', 'Jira', 'Planning'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 110-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0012.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z"/>
      </svg>
    ),
  },
  {
    id: 'mongodb-dev',
    title: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    issued: 'Sep 2023',
    expires: 'Sep 2026',
    credentialId: 'MDB-DEV-2023-337',
    image: '/images/cert-mongodb.png',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    category: 'Database',
    tags: ['MongoDB', 'Aggregation', 'Atlas', 'Indexing'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.052-1.633-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/>
      </svg>
    ),
  },
  {
    id: 'docker-k8s',
    title: 'Docker & Kubernetes Fundamentals',
    issuer: 'Linux Foundation',
    issued: 'Nov 2023',
    expires: 'No Expiry',
    credentialId: 'LF-DK8S-2023-119',
    image: '/images/cert-docker.png',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    category: 'DevOps',
    tags: ['Docker', 'Kubernetes', 'CI/CD', 'Linux'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186"/>
      </svg>
    ),
  },
  {
    id: 'react-advanced',
    title: 'Advanced React & TypeScript',
    issuer: 'Udemy / Zero to Mastery',
    issued: 'Feb 2024',
    expires: 'No Expiry',
    credentialId: 'ZTM-REACT-TS-2024',
    image: '/images/cert-react-ts.png',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    category: 'Frontend',
    tags: ['React', 'TypeScript', 'Hooks', 'Redux'],
    issuerIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16}>
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm-.687 19.438c-.438 0-.875-.063-1.312-.187l2.125-6.188c.063.063.063.125.063.188 0 .687-.25 1.375-.75 1.812a2.3 2.3 0 01-1.375.563l1.25 3.812zm3.875-1c-.5.437-1.125.687-1.812.75l-1.25-3.813c.437 0 .875-.062 1.312-.187l1.75 3.25zm1.625-5.813c0 .563-.125 1.063-.375 1.5l-1.75-3.25c.437-.125.875-.187 1.312-.187.25 0 .5.062.75.125-.063.562-.062 1.188.063 1.812z"/>
      </svg>
    ),
  },
];

const categoryColors: Record<string, { color: string; bg: string; border: string }> = {
  Cloud: { color: '#60A5FA', bg: 'rgba(30,144,255,0.10)', border: 'rgba(30,144,255,0.22)' },
  Frontend: { color: '#C4B5FD', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
  Management: { color: '#34D399', bg: 'rgba(0,194,160,0.10)', border: 'rgba(0,194,160,0.22)' },
  Database: { color: '#34D399', bg: 'rgba(0,194,160,0.10)', border: 'rgba(0,194,160,0.22)' },
  DevOps: { color: '#C4B5FD', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
};

const accentMap = {
  blue: {
    cardBorder: 'border-[#1E90FF]/15 hover:border-[#1E90FF]/45',
    glow: 'hover:shadow-[0_0_36px_rgba(30,144,255,0.14)]',
    tagBg: 'bg-[#1E90FF]/8 border-[#1E90FF]/15 text-[#60A5FA]',
    divider: 'bg-[#1E90FF]/20',
    idBg: 'bg-[#1E90FF]/8 border-[#1E90FF]/15 text-[#60A5FA]',
  },
  teal: {
    cardBorder: 'border-[#00C2A0]/15 hover:border-[#00C2A0]/45',
    glow: 'hover:shadow-[0_0_36px_rgba(0,194,160,0.14)]',
    tagBg: 'bg-[#00C2A0]/8 border-[#00C2A0]/15 text-[#34D399]',
    divider: 'bg-[#00C2A0]/20',
    idBg: 'bg-[#00C2A0]/8 border-[#00C2A0]/15 text-[#34D399]',
  },
  purple: {
    cardBorder: 'border-[#A78BFA]/15 hover:border-[#A78BFA]/45',
    glow: 'hover:shadow-[0_0_36px_rgba(167,139,250,0.14)]',
    tagBg: 'bg-[#A78BFA]/8 border-[#A78BFA]/15 text-[#C4B5FD]',
    divider: 'bg-[#A78BFA]/20',
    idBg: 'bg-[#A78BFA]/8 border-[#A78BFA]/15 text-[#C4B5FD]',
  },
};

export default function CertificationsSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="certifications"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(30,144,255,0.25), transparent)' }}
      />

      {/* Ambient orbs */}
      <div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 70%)' }}
      />

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
            <span
              className="w-2 h-2 rounded-full bg-[#00C2A0]"
              style={{ animation: 'hmd-pulse 2s infinite' }}
            />
            <span className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-[0.06em]">
              Credentials
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
            Licences &{' '}
            <span style={{ color: '#1E90FF' }}>Certifications</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            Industry-recognised credentials validating expertise across cloud,
            frontend, backend, databases, and DevOps.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { val: `${certifications.length}`, label: 'Certifications', color: '#60A5FA', bg: 'rgba(30,144,255,0.10)', border: 'rgba(30,144,255,0.22)' },
              { val: `${[...new Set(certifications.map(c => c.issuer))].length}`, label: 'Issuers', color: '#34D399', bg: 'rgba(0,194,160,0.10)', border: 'rgba(0,194,160,0.22)' },
              { val: `${[...new Set(certifications.map(c => c.category))].length}`, label: 'Categories', color: '#C4B5FD', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
            ].map(({ val, label, color, bg, border }) => (
              <div
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full"
                style={{ background: bg, border: `1px solid ${border}` }}
              >
                <span className="text-sm font-extrabold" style={{ color }}>{val}</span>
                <span className="text-[11px] text-slate-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Grid — 3 columns desktop, 2 tablet, 1 mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-6">
          {certifications.map((cert) => {
            const a = accentMap[cert.accent as keyof typeof accentMap];
            const catStyle = categoryColors[cert.category] ?? categoryColors['Cloud'];
            const isHovered = hovered === cert.id;

            return (
              <div
                key={cert.id}
                className={`group relative flex flex-col rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:-translate-y-1.5 ${a.cardBorder} ${a.glow}`}
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
                onMouseEnter={() => setHovered(cert.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Certificate image area */}
                <div
                  className="relative overflow-hidden"
                  style={{ height: 180 }}
                >
                  {/* Corner orb */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none z-0"
                    style={{ background: `radial-gradient(circle at top right, ${cert.accentColor}18 0%, transparent 70%)` }}
                  />

                  {/* Certificate image */}
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => {}}
                  />

                  {/* Gradient overlay on image */}
                  <div
                    className="absolute inset-0 z-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom, transparent 30%, #0D1535 100%)`,
                      opacity: isHovered ? 0.85 : 0.6,
                    }}
                  />

                  {/* Fallback placeholder shown when image missing */}
                  <div
                    className="absolute inset-0 z-0 flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${cert.accentColor}12, rgba(13,21,53,0.9))` }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{ background: `${cert.accentColor}20`, border: `1px solid ${cert.accentColor}30` }}
                    >
                      <svg viewBox="0 0 32 32" fill="none" width={28} height={28}>
                        <rect x="4" y="6" width="24" height="20" rx="3" stroke={cert.accentColor} strokeWidth="1.5" />
                        <path d="M10 13h12M10 17h8" stroke={cert.accentColor} strokeWidth="1.4" strokeLinecap="round" />
                        <circle cx="16" cy="26" r="0" fill={cert.accentColor} />
                        <path d="M12 24l4 4 4-4" stroke={cert.accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>

                  {/* Category badge — top left */}
                  <div className="absolute top-3 left-3 z-20">
                    <span
                      className="text-[9px] font-bold uppercase tracking-[0.08em] px-2.5 py-1 rounded-full"
                      style={{ background: catStyle.bg, border: `1px solid ${catStyle.border}`, color: catStyle.color }}
                    >
                      {cert.category}
                    </span>
                  </div>

                  {/* Validity badge — top right */}
                  <div className="absolute top-3 right-3 z-20">
                    <span
                      className="text-[9px] font-semibold px-2 py-1 rounded-full"
                      style={{
                        background: cert.expires === 'No Expiry' ? 'rgba(0,194,160,0.15)' : 'rgba(255,255,255,0.08)',
                        border: cert.expires === 'No Expiry' ? '1px solid rgba(0,194,160,0.3)' : '1px solid rgba(255,255,255,0.1)',
                        color: cert.expires === 'No Expiry' ? '#34D399' : '#94A3B8',
                      }}
                    >
                      {cert.expires === 'No Expiry' ? '✓ Lifetime' : `Exp ${cert.expires}`}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="flex flex-col flex-1 p-5">
                  {/* Issuer row */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <div
                      className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                      style={{ background: `${cert.accentColor}15`, border: `1px solid ${cert.accentColor}25`, color: cert.accentLight }}
                    >
                      {cert.issuerIcon}
                    </div>
                    <span className="text-[10px] font-semibold text-slate-400 truncate">{cert.issuer}</span>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm sm:text-[15px] font-bold text-white leading-snug mb-3 transition-colors duration-200"
                    style={{ color: isHovered ? cert.accentLight : '#fff' }}
                  >
                    {cert.title}
                  </h3>

                  {/* Divider */}
                  <div className={`h-px mb-3 ${a.divider}`} />

                  {/* Issued / Credential ID */}
                  <div className="flex items-center justify-between mb-3 gap-2">
                    <div className="flex items-center gap-1.5">
                      <svg viewBox="0 0 12 12" fill="none" width={10} height={10}>
                        <rect x="1" y="2" width="10" height="9" rx="1.5" stroke="#475569" strokeWidth="1"/>
                        <path d="M4 1v2M8 1v2M1 5h10" stroke="#475569" strokeWidth="1" strokeLinecap="round"/>
                      </svg>
                      <span className="text-[10px] text-slate-500">Issued {cert.issued}</span>
                    </div>
                    <span
                      className={`text-[9px] font-mono px-2 py-0.5 rounded-md border truncate max-w-[120px] ${a.idBg}`}
                    >
                      {cert.credentialId}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[9px] font-semibold uppercase tracking-[0.04em] px-2 py-0.5 rounded-full border ${a.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Continuously upskilling ·{' '}
            <span className="text-[#60A5FA]">New certifications added regularly</span>
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