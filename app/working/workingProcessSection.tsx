'use client';

import { useState } from 'react';

const steps = [
  {
    id: 1,
    num: '01',
    title: 'Discovery Phase',
    description:
      'Gathering requirements and understanding the needs of the project to develop a clear roadmap for success. We align on goals, timelines, and technical scope before a single line of code is written.',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <circle cx="9" cy="9" r="5.5" stroke="currentColor" strokeWidth="1.4" />
        <path
          d="M13 13l3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M9 7v4M7 9h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    num: '02',
    title: 'Design & Development',
    description:
      'Designing the user interface and developing the software with a relentless focus on functionality and user experience. Clean architecture, scalable code, and pixel-perfect implementation.',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <rect
          x="3"
          y="5"
          width="14"
          height="10"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M7 9l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    num: '03',
    title: 'Testing & QA',
    description:
      'Comprehensive testing and quality assurance guarantee that the software is reliable, performant, and meets all specifications before launch. Zero compromises on quality.',
    accent: 'purple',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <path
          d="M5 4h10l-1 8H6L5 4z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M8 16h4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M10 12v4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M8 8l2 2 3-3"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 4,
    num: '04',
    title: 'Deployment',
    description:
      'Releasing the software into the production environment with a smooth, zero-downtime transition. CI/CD pipelines, server configuration, and live monitoring all handled seamlessly.',
    accent: 'blue',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <path
          d="M10 3v10M10 3l-3 3M10 3l3 3"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 13v2a2 2 0 002 2h8a2 2 0 002-2v-2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 5,
    num: '05',
    title: 'Maintenance',
    description:
      'Post-launch support and maintenance ensure the software continues to perform optimally and remains up-to-date. Ongoing updates, monitoring, and feature iterations as your business grows.',
    accent: 'teal',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <path
          d="M10 3a7 7 0 100 14A7 7 0 0010 3z"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path
          d="M10 7v3l2 2"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const accentMap = {
  blue: {
    border: 'border-[#1E90FF]/20',
    activeBorder: 'border-[#1E90FF]/50',
    glow: 'shadow-[0_0_30px_rgba(30,144,255,0.12)]',
    numColor: 'text-[#60A5FA]',
    iconColor: 'text-[#60A5FA]',
    iconBg: 'bg-[#1E90FF]/10 border-[#1E90FF]/20',
    nodeFill: '#1E90FF',
    nodeGlow: 'rgba(30,144,255,0.5)',
    lineColor: '#1E90FF',
    badge: 'bg-[#1E90FF]/10 border-[#1E90FF]/20 text-[#60A5FA]',
  },
  teal: {
    border: 'border-[#00C2A0]/20',
    activeBorder: 'border-[#00C2A0]/50',
    glow: 'shadow-[0_0_30px_rgba(0,194,160,0.12)]',
    numColor: 'text-[#34D399]',
    iconColor: 'text-[#34D399]',
    iconBg: 'bg-[#00C2A0]/10 border-[#00C2A0]/20',
    nodeFill: '#00C2A0',
    nodeGlow: 'rgba(0,194,160,0.5)',
    lineColor: '#00C2A0',
    badge: 'bg-[#00C2A0]/10 border-[#00C2A0]/20 text-[#34D399]',
  },
  purple: {
    border: 'border-[#A78BFA]/20',
    activeBorder: 'border-[#A78BFA]/50',
    glow: 'shadow-[0_0_30px_rgba(167,139,250,0.12)]',
    numColor: 'text-[#C4B5FD]',
    iconColor: 'text-[#C4B5FD]',
    iconBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/20',
    nodeFill: '#A78BFA',
    nodeGlow: 'rgba(167,139,250,0.5)',
    lineColor: '#A78BFA',
    badge: 'bg-[#A78BFA]/10 border-[#A78BFA]/20 text-[#C4B5FD]',
  },
};

const CX = 140;
const CY = 140;
const R = 100;

function nodePosition(index: number, total: number) {
  const angle = (index / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: CX + R * Math.cos(angle),
    y: CY + R * Math.sin(angle),
  };
}

function ProcessVisualization({ active }: { active: number }) {
  const total = steps.length;

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          background:
            'radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)',
        }}
      />

      <svg
        width={280}
        height={280}
        viewBox="0 0 280 280"
        className="relative z-10"
      >
        <defs>
          <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#00C2A0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.3" />
          </linearGradient>
          <filter id="nodeGlow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="arcGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.6">
              <animate
                attributeName="offset"
                values="0;0.5;0"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="#00C2A0" stopOpacity="0.8">
              <animate
                attributeName="offset"
                values="0.5;1;0.5"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.6">
              <animate
                attributeName="offset"
                values="1;1.5;1"
                dur="3s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1.5"
        />

        <circle
          cx={CX}
          cy={CY}
          r={R}
          fill="none"
          stroke="url(#arcGrad)"
          strokeWidth="1.5"
          strokeDasharray="8 6"
          strokeLinecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${CX} ${CY}`}
            to={`360 ${CX} ${CY}`}
            dur="20s"
            repeatCount="indefinite"
          />
        </circle>

        {steps.map((_, i) => {
          const from = nodePosition(i, total);
          const to = nodePosition((i + 1) % total, total);
          const isActive = i === active || (i + 1) % total === active;
          return (
            <line
              key={`line-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={
                isActive
                  ? accentMap[steps[active].accent as keyof typeof accentMap]
                      .lineColor
                  : 'rgba(255,255,255,0.06)'
              }
              strokeWidth={isActive ? '1.5' : '1'}
              strokeDasharray={isActive ? '4 3' : '3 4'}
              opacity={isActive ? 0.6 : 0.4}
              style={{ transition: 'all 0.5s ease' }}
            />
          );
        })}

        <circle
          cx={CX}
          cy={CY}
          r={38}
          fill="rgba(13,21,53,0.9)"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
        <text
          x={CX}
          y={CY - 6}
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize="9"
          fontWeight="700"
          fontFamily="sans-serif"
        >
          PROCESS
        </text>
        <text
          x={CX}
          y={CY + 7}
          textAnchor="middle"
          fill="#475569"
          fontSize="7"
          fontFamily="sans-serif"
        >
          Step {steps[active].num}
        </text>

        {steps.map((step, i) => {
          const { x, y } = nodePosition(i, total);
          const isActive = i === active;
          const a = accentMap[step.accent as keyof typeof accentMap];
          const r = isActive ? 18 : 13;

          return (
            <g key={step.id} style={{ cursor: 'pointer' }}>
              {isActive && (
                <circle
                  cx={x}
                  cy={y}
                  r={r + 4}
                  fill="none"
                  stroke={a.nodeFill}
                  strokeWidth="1"
                  opacity="0.3"
                >
                  <animate
                    attributeName="r"
                    values={`${r + 2};${r + 8};${r + 2}`}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              )}

              <circle
                cx={x}
                cy={y}
                r={r}
                fill={isActive ? a.nodeFill : 'rgba(13,21,53,0.95)'}
                stroke={a.nodeFill}
                strokeWidth={isActive ? '2' : '1.5'}
                filter={isActive ? 'url(#nodeGlow)' : undefined}
                style={{ transition: 'all 0.4s ease' }}
              />

              <text
                x={x}
                y={y + 4}
                textAnchor="middle"
                fill={isActive ? '#fff' : a.nodeFill}
                fontSize={isActive ? '9' : '8'}
                fontWeight="700"
                fontFamily="sans-serif"
                style={{ transition: 'all 0.4s ease' }}
              >
                {step.num}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export default function WorkingProcessSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="process"
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
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)',
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
              How I Work
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
            My Working <span style={{ color: '#1E90FF' }}>Process</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            A structured, transparent workflow that takes your idea from
            discovery to deployment — with zero surprises along the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <div
                className="rounded-3xl border border-white/6 bg-[#0D1535]/60 p-8"
                style={{ boxShadow: '0 24px 64px rgba(0,0,0,0.4)' }}
              >
                <ProcessVisualization active={active} />
              </div>

              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full px-4 py-2"
                style={{
                  background: '#0D1535',
                  border: `1px solid ${accentMap[steps[active].accent as keyof typeof accentMap].nodeFill}40`,
                  boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    background:
                      accentMap[steps[active].accent as keyof typeof accentMap]
                        .nodeFill,
                  }}
                />
                <span className="text-[11px] font-semibold text-slate-300">
                  {steps[active].title}
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 mt-8 lg:mt-0">
            {steps.map((step, i) => {
              const isOpen = i === active;
              const a = accentMap[step.accent as keyof typeof accentMap];

              return (
                <div
                  key={step.id}
                  className={`rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? `${a.activeBorder} ${a.glow}`
                      : `${a.border} hover:border-white/15`
                  }`}
                >
                  <button
                    className="w-full flex items-center gap-4 px-5 py-4 text-left"
                    onClick={() => setActive(i)}
                  >
                    <span
                      className={`text-[11px] font-bold tabular-nums shrink-0 ${a.numColor}`}
                    >
                      {step.num}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                        isOpen ? a.iconBg : 'bg-white/3 border-white/8'
                      } ${isOpen ? a.iconColor : 'text-slate-500'}`}
                    >
                      {step.icon}
                    </div>

                    <span
                      className={`flex-1 text-sm font-semibold transition-colors duration-300 ${
                        isOpen ? 'text-white' : 'text-slate-400'
                      }`}
                    >
                      {step.title}
                    </span>

                    <div
                      className={`w-6 h-6 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? `${a.iconBg} ${a.iconColor} border-current`
                          : 'bg-white/5 border-white/10 text-slate-500'
                      }`}
                    >
                      <svg
                        viewBox="0 0 12 12"
                        fill="none"
                        width={10}
                        height={10}
                        className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      >
                        <path
                          d="M6 2v8M2 6h8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                    style={{ maxHeight: isOpen ? 200 : 0 }}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-white/5 mb-4" />
                      <p className="text-[13px] text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                      <div className="mt-3">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${a.badge}`}
                        >
                          Phase {step.num}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-16 sm:mt-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Every project follows this exact process ·{' '}
            <span className="text-[#60A5FA]">
              Transparent from start to finish
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
