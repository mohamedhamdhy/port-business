'use client';

import {
  SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiJavascript,
  SiTailwindcss, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiDocker, SiGit, SiGithub, SiPython,
  SiPhp, SiFastapi, SiLaravel, SiFlutter, SiGraphql,
  SiJenkins, SiNestjs, SiStripe, SiLinux, SiNginx,
  SiHtml5, SiCss, SiBootstrap, SiFirebase, SiGitlab,
} from 'react-icons/si';
import { TbBrandReactNative, TbApi, TbDatabase, TbCloud, TbShield, 
  TbServer, TbNetwork, TbMail, TbDeviceMobile, TbPrinter, 
  TbGps, TbCamera, TbPhone, TbUsers, TbChartBar, 
  TbClock, TbLock, TbCertificate, TbFileReport, TbTestPipe } from 'react-icons/tb';
import { FaAws } from 'react-icons/fa';

const categories = [
  {
    id: 'frontend',
    label: 'Frontend Development',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TailwindCSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
      { name: 'Laravel', icon: SiLaravel, color: '#FF2D20' },
      { name: 'PHP', icon: SiPhp, color: '#777BB4' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
      { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
      { name: 'REST API', icon: TbApi, color: '#00C2A0' },
    ],
  },
  {
    id: 'database',
    label: 'Database Systems',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
      { name: 'Backup & Recovery', icon: TbDatabase, color: '#60A5FA' },
      { name: 'Query Optimization', icon: TbDatabase, color: '#34D399' },
      { name: 'Security & Auditing', icon: TbLock, color: '#C4B5FD' },
    ],
  },
  {
    id: 'devops-cloud',
    label: 'DevOps & Cloud',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    skills: [
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Jenkins', icon: SiJenkins, color: '#D33833' },
      { name: 'CI/CD Pipelines', icon: SiGitlab, color: '#FC6D26' },
      { name: 'Nginx', icon: SiNginx, color: '#009639' },
      { name: 'Linux', icon: SiLinux, color: '#FCC624' },
      { name: 'Load Balancers', icon: TbCloud, color: '#34D399' },
      { name: 'Zero Downtime', icon: TbClock, color: '#60A5FA' },
    ],
  },
  {
    id: 'security-networking',
    label: 'Security & Networking',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    skills: [
      { name: 'Firewall Rules', icon: TbShield, color: '#FF4444' },
      { name: 'VPN', icon: TbLock, color: '#60A5FA' },
      { name: 'SSL Certificates', icon: TbCertificate, color: '#34D399' },
      { name: 'DNS Management', icon: TbNetwork, color: '#C4B5FD' },
      { name: 'Security Audits', icon: TbShield, color: '#FF9900' },
      { name: 'Server Hardening', icon: TbServer, color: '#00C2A0' },
      { name: 'Disaster Recovery', icon: TbCloud, color: '#A78BFA' },
      { name: 'Bandwidth Monitoring', icon: TbChartBar, color: '#61DAFB' },
    ],
  },
  {
    id: 'monitoring-logging',
    label: 'Monitoring & Logging',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    skills: [
      { name: 'Log Management', icon: TbFileReport, color: '#60A5FA' },
      { name: 'Website Monitoring', icon: TbChartBar, color: '#34D399' },
      { name: 'KPI Dashboards', icon: TbChartBar, color: '#C4B5FD' },
      { name: 'BI Reports', icon: TbFileReport, color: '#FF9900' },
      { name: 'Database Monitoring', icon: TbDatabase, color: '#00C2A0' },
      { name: 'Alerting', icon: TbClock, color: '#FF4444' },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    skills: [
      { name: 'Flutter', icon: SiFlutter, color: '#02569B' },
      { name: 'React Native', icon: TbBrandReactNative, color: '#61DAFB' },
    ],
  },
  {
    id: 'it-infrastructure',
    label: 'IT Infrastructure',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    skills: [
      { name: 'Active Directory', icon: TbUsers, color: '#00C2A0' },
      { name: 'CCTV & NVR', icon: TbCamera, color: '#60A5FA' },
      { name: 'Fleet GPS', icon: TbGps, color: '#34D399' },
      { name: 'Printers & Scanners', icon: TbPrinter, color: '#C4B5FD' },
      { name: 'UPS & Power', icon: TbDeviceMobile, color: '#FF9900' },
      { name: 'Hardware Inventory', icon: TbServer, color: '#61DAFB' },
      { name: 'Telephone System', icon: TbPhone, color: '#00C2A0' },
    ],
  },
  {
    id: 'communication',
    label: 'Communication & Collaboration',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    skills: [
      { name: 'Help Desk', icon: TbUsers, color: '#60A5FA' },
      { name: 'Team Meetings', icon: TbUsers, color: '#34D399' },
      { name: 'IT Support', icon: TbClock, color: '#C4B5FD' },
      { name: 'On-call Rotation', icon: TbClock, color: '#FF9900' },
      { name: 'Mentoring', icon: TbUsers, color: '#00C2A0' },
      { name: 'Vendor Management', icon: TbUsers, color: '#A78BFA' },
    ],
  },
  {
    id: 'email-marketing',
    label: 'Email & Marketing',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    skills: [
      { name: 'Email Marketing', icon: TbMail, color: '#60A5FA' },
      { name: 'Email Servers', icon: TbMail, color: '#34D399' },
      { name: 'Mail Reports', icon: TbFileReport, color: '#C4B5FD' },
      { name: 'BI Reports', icon: TbChartBar, color: '#FF9900' },
    ],
  },
  {
    id: 'telecom-billing',
    label: 'Telecom & Billing',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    skills: [
      { name: 'du Telecom', icon: TbPhone, color: '#00C2A0' },
      { name: 'Etisalat', icon: TbPhone, color: '#34D399' },
      { name: 'Bill Management', icon: TbFileReport, color: '#60A5FA' },
      { name: 'Domain Registrations', icon: TbCertificate, color: '#C4B5FD' },
      { name: 'Renewal Calendar', icon: TbClock, color: '#FF9900' },
    ],
  },
  {
    id: 'version-control',
    label: 'Version Control',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#ffffff' },
      { name: 'GitLab', icon: SiGitlab, color: '#FC6D26' },
      { name: 'Code Review', icon: TbUsers, color: '#60A5FA' },
      { name: 'Release Mgmt', icon: TbClock, color: '#34D399' },
    ],
  },
  {
    id: 'testing-qa',
    label: 'Testing & QA',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    skills: [
      { name: 'Unit Testing', icon: TbTestPipe, color: '#60A5FA' },
      { name: 'QA Testing', icon: TbTestPipe, color: '#34D399' },
      { name: 'Test Environments', icon: TbServer, color: '#C4B5FD' },
      { name: 'Quality Gates', icon: TbShield, color: '#FF9900' },
    ],
  },
  {
    id: 'payments',
    label: 'Payments',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    skills: [
      { name: 'Stripe', icon: SiStripe, color: '#635BFF' },
      { name: 'Webhooks', icon: TbApi, color: '#60A5FA' },
      { name: 'Subscriptions', icon: TbChartBar, color: '#34D399' },
    ],
  },
  {
    id: 'realtime',
    label: 'Real-time',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    skills: [
      { name: 'WebSockets', icon: TbApi, color: '#60A5FA' },
      { name: 'Socket.io', icon: TbApi, color: '#00C2A0' },
      { name: 'Real-time Updates', icon: TbClock, color: '#C4B5FD' },
    ],
  },
];

const accentMap = {
  blue: {
    cardBorder: 'border-[#1E90FF]/15 hover:border-[#1E90FF]/45',
    glow: 'hover:shadow-[0_0_32px_rgba(30,144,255,0.12)]',
    labelBg: 'bg-[#1E90FF]/10 border-[#1E90FF]/20 text-[#60A5FA]',
    headerLine: '#1E90FF',
    iconWrap: 'bg-[#1E90FF]/8 border-[#1E90FF]/15 group-hover:bg-[#1E90FF]/16 group-hover:border-[#1E90FF]/30',
  },
  teal: {
    cardBorder: 'border-[#00C2A0]/15 hover:border-[#00C2A0]/45',
    glow: 'hover:shadow-[0_0_32px_rgba(0,194,160,0.12)]',
    labelBg: 'bg-[#00C2A0]/10 border-[#00C2A0]/20 text-[#34D399]',
    headerLine: '#00C2A0',
    iconWrap: 'bg-[#00C2A0]/8 border-[#00C2A0]/15 group-hover:bg-[#00C2A0]/16 group-hover:border-[#00C2A0]/30',
  },
  purple: {
    cardBorder: 'border-[#A78BFA]/15 hover:border-[#A78BFA]/45',
    glow: 'hover:shadow-[0_0_32px_rgba(167,139,250,0.12)]',
    labelBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/20 text-[#C4B5FD]',
    headerLine: '#A78BFA',
    iconWrap: 'bg-[#A78BFA]/8 border-[#A78BFA]/15 group-hover:bg-[#A78BFA]/16 group-hover:border-[#A78BFA]/30',
  },
};

const allSkillCount = categories.reduce((acc, c) => acc + c.skills.length, 0);

export default function TechStackSection() {
  return (
    <section
      id="stack"
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
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.07) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.04) 0%, transparent 70%)' }}
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
              Tools & Technologies
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
            My{' '}
            <span style={{ color: '#1E90FF' }}>Tech</span>{' '}
            <span style={{ color: '#00C2A0' }}>Stack</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            A comprehensive toolkit spanning frontend, backend, mobile, DevOps, 
            IT infrastructure, security, and more — built for enterprise-grade solutions.
          </p>

          {/* Stat pills */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[
              { val: `${allSkillCount}+`, label: 'Technologies', color: '#60A5FA', bg: 'rgba(30,144,255,0.10)', border: 'rgba(30,144,255,0.22)' },
              { val: `${categories.length}`, label: 'Categories', color: '#34D399', bg: 'rgba(0,194,160,0.10)', border: 'rgba(0,194,160,0.22)' },
              { val: '8+', label: 'Years Experience', color: '#C4B5FD', bg: 'rgba(167,139,250,0.10)', border: 'rgba(167,139,250,0.22)' },
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

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 xl:gap-6">
          {categories.map((cat) => {
            const a = accentMap[cat.accent as keyof typeof accentMap];
            return (
              <div
                key={cat.id}
                className={`rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm p-5 xl:p-6 transition-all duration-300 hover:-translate-y-1 ${a.cardBorder} ${a.glow}`}
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
              >
                {/* Category header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="w-1 h-5 rounded-full"
                      style={{ background: a.headerLine }}
                    />
                    <h3 className="text-sm font-bold text-white tracking-tight">
                      {cat.label}
                    </h3>
                  </div>
                  <span
                    className={`text-[10px] font-semibold uppercase tracking-[0.05em] px-2.5 py-1 rounded-full border ${a.labelBg}`}
                  >
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-4 gap-2">
                  {cat.skills.map(({ name, icon: Icon, color }) => (
                    <div
                      key={name}
                      className={`group flex flex-col items-center gap-1.5 p-2.5 rounded-xl border transition-all duration-200 cursor-default hover:-translate-y-0.5 ${a.iconWrap}`}
                    >
                      <Icon
                        size={22}
                        style={{ color, filter: `drop-shadow(0 0 6px ${color}40)` }}
                        className="transition-transform duration-200 group-hover:scale-110"
                      />
                      <span className="text-[8px] text-slate-400 group-hover:text-slate-300 font-medium text-center leading-tight transition-colors duration-200 w-full truncate">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Full skills marquee strip */}
        <div className="mt-12 sm:mt-14 overflow-hidden relative">
          <div
            className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, #0A0F2C, transparent)' }}
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
            style={{ background: 'linear-gradient(270deg, #0A0F2C, transparent)' }}
          />
          <div className="flex gap-3 animate-hmd-marquee whitespace-nowrap">
            {[
              'Active Directory', 'AWS EC2/S3/RDS', 'CI/CD Pipelines', 'Docker', 'DNS Management',
              'CCTV & NVR', 'Firewall Rules', 'Fleet GPS', 'VPN', 'Load Balancers',
              'SSL Certificates', 'WebSockets', 'Redis Caching', 'Zero Downtime Deploy',
              'Jenkins', 'Server Hardening', 'Disaster Recovery', 'API Gateway',
              'Stripe Webhooks', 'Query Optimization', 'BI Reports', 'Mentoring',
              'Backup Systems', 'Bandwidth Monitoring', 'Cloud Storage', 'Code Review',
              'Database Backup', 'Domain Registrations', 'Email Marketing', 'IT Support',
              'KPI Dashboards', 'Log Management', 'Network Security', 'On-call Rotation',
              'Release Management', 'Renewal Calendar', 'Security Audits', 'Telecom Bills',
              'Testing Environments', 'User Management', 'Vendor Management', 'Website Monitoring',
            ].map((skill, i) => {
              const colors = ['#60A5FA', '#34D399', '#C4B5FD'];
              const borderColors = ['rgba(30,144,255,0.22)', 'rgba(0,194,160,0.22)', 'rgba(167,139,250,0.22)'];
              const bgColors = ['rgba(30,144,255,0.08)', 'rgba(0,194,160,0.08)', 'rgba(167,139,250,0.08)'];
              const idx = i % 3;
              return (
                <span
                  key={`${skill}-${i}`}
                  className="inline-flex items-center gap-1.5 text-[10px] font-semibold px-3 py-1.5 rounded-full shrink-0"
                  style={{
                    color: colors[idx],
                    background: bgColors[idx],
                    border: `1px solid ${borderColors[idx]}`,
                  }}
                >
                  <span
                    className="w-1 h-1 rounded-full shrink-0"
                    style={{ background: colors[idx] }}
                  />
                  {skill}
                </span>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-12 sm:mt-14">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Continuously learning & adding to the stack ·{' '}
            <span className="text-[#60A5FA]">Always production-ready</span>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hmd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        @keyframes hmd-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-hmd-marquee {
          animation: hmd-marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
}