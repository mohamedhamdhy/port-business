'use client';

import Link from 'next/link';

function JourneyBackground() {
  const points = [
    [10, 75],
    [22, 65],
    [34, 55],
    [46, 42],
    [58, 35],
    [70, 22],
    [82, 12],
  ];
  const toPath = (pts: number[][]) =>
    pts
      .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x * 2.8 + 4} ${y}`)
      .join(' ');

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(30,144,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(30,144,255,0.15) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 240 90"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="journeyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0" />
            <stop offset="50%" stopColor="#1E90FF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#00C2A0" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="journeyFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon
          points={`${points.map(([x, y]) => `${x * 2.8 + 4},${y}`).join(' ')} 236,90 4,90`}
          fill="url(#journeyFill)"
        />
        <path
          d={toPath(points)}
          fill="none"
          stroke="url(#journeyGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {points.map(([x, y], i) => (
          <circle
            key={i}
            cx={x * 2.8 + 4}
            cy={y}
            r={i === points.length - 1 ? 3.5 : 2}
            fill={i === points.length - 1 ? '#00C2A0' : '#1E90FF'}
            opacity={i === points.length - 1 ? 1 : 0.4 + i * 0.1}
          >
            {i === points.length - 1 && (
              <animate
                attributeName="r"
                values="3.5;5.5;3.5"
                dur="2s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
        {['2018', '2020', '2022', '2024'].map((yr, i) => (
          <text
            key={yr}
            x={20 + i * 65}
            y={88}
            fill="rgba(100,116,139,0.6)"
            fontSize="6"
            fontFamily="monospace"
          >
            {yr}
          </text>
        ))}
      </svg>
      <div className="absolute top-3 right-3 flex flex-col gap-1.5">
        {[
          ['🎓 Graduated', '#60A5FA'],
          ['🚀 First SaaS', '#34D399'],
          ['🌍 Global Clients', '#C4B5FD'],
        ].map(([label, color]) => (
          <div
            key={label as string}
            className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-white/5 border border-white/8 backdrop-blur-sm"
          >
            <div
              className="w-1 h-1 rounded-full flex-shrink-0"
              style={{ background: color as string }}
            />
            <span className="text-[7px] text-slate-400">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function MissionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 240 140"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle
          cx="120"
          cy="55"
          r="50"
          fill="none"
          stroke="rgba(30,144,255,0.12)"
          strokeWidth="1"
        />
        <circle
          cx="120"
          cy="55"
          r="35"
          fill="none"
          stroke="rgba(30,144,255,0.18)"
          strokeWidth="1"
        />
        <circle
          cx="120"
          cy="55"
          r="20"
          fill="none"
          stroke="rgba(30,144,255,0.25)"
          strokeWidth="1"
        />
        <circle cx="120" cy="55" r="8" fill="rgba(30,144,255,0.3)" />
        <circle cx="120" cy="55" r="4" fill="#1E90FF">
          <animate
            attributeName="r"
            values="4;6;4"
            dur="2s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="1;0.6;1"
            dur="2s"
            repeatCount="indefinite"
          />
        </circle>
        <line
          x1="120"
          y1="5"
          x2="120"
          y2="105"
          stroke="rgba(30,144,255,0.08)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
        <line
          x1="70"
          y1="55"
          x2="170"
          y2="55"
          stroke="rgba(30,144,255,0.08)"
          strokeWidth="0.5"
          strokeDasharray="3 4"
        />
      </svg>
      <div className="absolute bottom-3 left-3 right-3 grid grid-cols-3 gap-1.5">
        {[
          ['100%', 'Precision', '#60A5FA'],
          ['0', 'Bugs', '#34D399'],
          ['∞', 'Drive', '#C4B5FD'],
        ].map(([v, l, c]) => (
          <div
            key={l as string}
            className="rounded-lg px-2 py-1.5 bg-white/4 border border-white/6 text-center"
          >
            <div
              className="text-[9px] font-bold"
              style={{ color: c as string }}
            >
              {v}
            </div>
            <div className="text-[6px] text-slate-500 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function VisionBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        className="absolute top-4 left-8 w-20 h-20 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.35) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute bottom-6 right-6 w-16 h-16 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,160,0.30) 0%, transparent 70%)',
          filter: 'blur(6px)',
        }}
      />
      <div
        className="absolute top-8 right-12 w-10 h-10 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(30,144,255,0.40) 0%, transparent 70%)',
          filter: 'blur(5px)',
        }}
      />
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 240 140"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="visionLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00C2A0" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        {[
          [40, 30, 120, 55],
          [120, 55, 190, 35],
          [40, 30, 80, 80],
          [190, 35, 170, 90],
          [80, 80, 170, 90],
          [120, 55, 140, 100],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="url(#visionLine)"
            strokeWidth="0.5"
            opacity={0.4}
          />
        ))}
        {[
          [40, 30, '#A78BFA'],
          [120, 55, '#1E90FF'],
          [190, 35, '#00C2A0'],
          [80, 80, '#C4B5FD'],
          [170, 90, '#34D399'],
          [140, 100, '#60A5FA'],
        ].map(([x, y, c], i) => (
          <circle
            key={i}
            cx={x as number}
            cy={y as number}
            r={i === 1 ? 4 : 2.5}
            fill={c as string}
            opacity={0.8}
          >
            {i === 1 && (
              <animate
                attributeName="opacity"
                values="0.8;0.4;0.8"
                dur="2.5s"
                repeatCount="indefinite"
              />
            )}
          </circle>
        ))}
      </svg>
      <div className="absolute top-3 right-3 flex flex-col gap-1">
        {[
          ['AI-Driven', '#A78BFA'],
          ['Scalable', '#1E90FF'],
          ['Global', '#00C2A0'],
        ].map(([label, color]) => (
          <div
            key={label as string}
            className="px-2 py-0.5 rounded-full text-[6px] font-semibold border"
            style={{
              background: `${color}15`,
              borderColor: `${color}30`,
              color: color as string,
            }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
}

const philosophy = [
  {
    id: 'journey',
    title: 'Journey',
    description:
      'Started with a curiosity for how digital products work — evolved into a full-stack engineer shipping production systems across SaaS, e-commerce, and automation.',
    accent: 'blue',
    bg: <JourneyBackground />,
  },
  {
    id: 'mission',
    title: 'Mission',
    description:
      'To build software that solves real problems — clean in architecture, precise in execution, and built to scale with the businesses it serves.',
    accent: 'teal',
    bg: <MissionBackground />,
  },
  {
    id: 'vision',
    title: 'Vision',
    description:
      'A future where every business — regardless of size — has access to world-class digital infrastructure that empowers growth without limits.',
    accent: 'purple',
    bg: <VisionBackground />,
  },
];

const stats = [
  { value: '3+', label: 'Years Experience', color: '#60A5FA' },
  { value: '5+', label: 'Projects Shipped', color: '#34D399' },
  { value: '6+', label: 'Happy Clients', color: '#C4B5FD' },
];

const accentMap = {
  blue: {
    cardBorder: 'hover:border-[#1E90FF]/50',
    cardGlow: 'hover:shadow-[0_0_40px_rgba(30,144,255,0.15)]',
    titleColor: 'text-[#60A5FA]',
    overlayFrom: 'from-[#06091A]',
    dot: '#1E90FF',
  },
  teal: {
    cardBorder: 'hover:border-[#00C2A0]/50',
    cardGlow: 'hover:shadow-[0_0_40px_rgba(0,194,160,0.15)]',
    titleColor: 'text-[#34D399]',
    overlayFrom: 'from-[#031410]',
    dot: '#00C2A0',
  },
  purple: {
    cardBorder: 'hover:border-[#A78BFA]/50',
    cardGlow: 'hover:shadow-[0_0_40px_rgba(167,139,250,0.15)]',
    titleColor: 'text-[#C4B5FD]',
    overlayFrom: 'from-[#0D0818]',
    dot: '#A78BFA',
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
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

      <div
        className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(30,144,255,0.06) 0%, transparent 70%)',
        }}
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
            <span
              className="w-2 h-2 rounded-full bg-[#00C2A0]"
              style={{ animation: 'hmd-pulse 2s infinite' }}
            />
            <span className="text-[11px] text-[#93C5FD] font-semibold uppercase tracking-[0.06em]">
              About Me
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
            Who <span style={{ color: '#1E90FF' }}>I</span>{' '}
            <span style={{ color: '#00C2A0' }}>Am</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            A Full-Stack Developer based in the UAE — building scalable digital
            products that help startups and growing businesses succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center mb-16 sm:mb-20 lg:mb-24">
          <div className="flex justify-center">
            <div className="relative">
              <div
                className="absolute -inset-6 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle, rgba(30,144,255,0.12) 0%, transparent 70%)',
                }}
              />

              <div
                className="relative rounded-3xl p-px"
                style={{
                  background:
                    'linear-gradient(135deg, rgba(30,144,255,0.5), rgba(0,194,160,0.3), rgba(167,139,250,0.5))',
                }}
              >
                <div
                  className="relative rounded-3xl overflow-hidden bg-[#0D1535]"
                  style={{ width: 280, height: 320 }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'radial-gradient(ellipse at 50% 0%, rgba(30,144,255,0.18) 0%, transparent 60%)',
                    }}
                  />

                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                    <div className="relative">
                      <div
                        className="w-24 h-24 rounded-full border-2 border-[#1E90FF]/40 flex items-center justify-center"
                        style={{
                          background:
                            'linear-gradient(135deg, rgba(30,144,255,0.25), rgba(167,139,250,0.2))',
                        }}
                      >
                        <span className="text-4xl font-extrabold text-white select-none">
                          HMD
                        </span>
                      </div>
                      <div className="absolute -inset-2 rounded-full border border-[#1E90FF]/20 animate-ping" />
                    </div>

                    <div className="text-center px-4">
                      <div className="text-[15px] font-bold text-white">
                        Mohamed Al Hamdhy
                      </div>
                      <div className="text-[11px] text-[#60A5FA] mt-0.5">
                        Full-Stack Developer
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {stats.map(({ value, color }) => (
                        <div
                          key={value}
                          className="px-2 py-1 rounded-lg bg-white/5 border border-white/8 text-center"
                        >
                          <div
                            className="text-[10px] font-bold"
                            style={{ color }}
                          >
                            {value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#1E90FF]/30 rounded-tl-lg" />
                  <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#1E90FF]/30 rounded-tr-lg" />
                  <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#1E90FF]/30 rounded-bl-lg" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#1E90FF]/30 rounded-br-lg" />
                </div>
              </div>

              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
                style={{
                  background: '#0D1535',
                  border: '1px solid rgba(0,194,160,0.35)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#00C2A0]"
                  style={{ animation: 'hmd-pulse 2s infinite' }}
                />
                <span className="text-[11px] font-semibold text-[#34D399]">
                  Available for Projects
                </span>
              </div>

              <div
                className="absolute -top-4 -right-6 flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                style={{
                  background: '#0D1535',
                  border: '1px solid rgba(167,139,250,0.3)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div className="text-[10px] font-bold text-[#C4B5FD]">
                  MERN Stack
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-6 h-px bg-[#00C2A0]" />
              <span className="text-[14px] font-semibold text-[#34D399] uppercase tracking-wider">
                Full-Stack Developer · UAE
              </span>
            </div>

            <h3
              className="mb-5"
              style={{
                fontSize: 'clamp(22px, 3vw, 36px)',
                fontWeight: 800,
                color: '#fff',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}
            >
              Mohamed <span style={{ color: '#1E90FF' }}>Al Hamdhy</span>
            </h3>

            <p
              className="mb-7 max-w-lg"
              style={{
                fontSize: 'clamp(14px, 1.4vw, 16px)',
                color: '#94A3B8',
                lineHeight: 1.8,
              }}
            >
              I build scalable, high-performance digital products — from SaaS
              platforms and CRM systems to e-commerce stores and AI-powered
              automation tools. My focus is always on clean architecture,
              pixel-perfect execution, and measurable results that move
              businesses forward.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              {stats.map(({ value, label, color }) => (
                <div
                  key={label}
                  className="flex flex-col rounded-xl px-4 py-3 border border-white/6 bg-white/3"
                >
                  <span
                    className="text-xl font-extrabold leading-none"
                    style={{ color }}
                  >
                    {value}
                  </span>
                  <span className="text-[10px] text-slate-500 mt-0.5">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5"
                style={{
                  background: '#1E90FF',
                  boxShadow: '0 0 24px rgba(30,144,255,0.35)',
                  textDecoration: 'none',
                }}
              >
                Let&apos;s Work Together <span>→</span>
              </Link>
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 border border-white/12 transition-all duration-150 hover:border-[#1E90FF]/40 hover:text-[#60A5FA]"
                style={{ textDecoration: 'none' }}
              >
                View My Work <span>↗</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-6">
          {philosophy.map(({ id, title, description, accent, bg }) => {
            const a = accentMap[accent as keyof typeof accentMap];
            return (
              <div
                key={id}
                className={`group relative rounded-2xl border border-white/8 bg-[#0D1535]/90 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] ${a.cardBorder} ${a.cardGlow}`}
                style={{
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                  minHeight: 240,
                }}
              >
                <div className="absolute inset-0">{bg}</div>

                <div
                  className={`absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t ${a.overlayFrom} to-transparent pointer-events-none`}
                />

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div
                    className={`text-[10px] font-bold uppercase tracking-widest mb-1.5 ${a.titleColor}`}
                  >
                    {title}
                  </div>
                  <p className="text-[12px] text-slate-400 leading-relaxed">
                    {description}
                  </p>
                </div>

                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider"
                  style={{
                    background: `${a.dot}18`,
                    border: `1px solid ${a.dot}30`,
                    color: a.dot,
                  }}
                >
                  {title}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Based in UAE · Available for freelance &amp; full-time ·{' '}
            <span className="text-[#60A5FA]">
              Open to opportunities worldwide
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
