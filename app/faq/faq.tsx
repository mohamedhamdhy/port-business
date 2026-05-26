'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What services do you offer?',
    answer:
      'I offer end-to-end digital solutions including Full-Stack Web Development (MERN), SaaS platform development, CRM systems, E-Commerce stores, Mobile App Development (Flutter & React Native), and AI-powered automation tools. Whether you need a landing page, a complex multi-tenant platform, or an internal business tool — I cover the full spectrum from design to deployment.',
    accent: 'blue',
  },
  {
    id: 2,
    question: 'Are you available for freelance projects right now?',
    answer:
      'Yes — I am currently open to freelance projects and full-time opportunities. I am based in the UAE and work with clients globally. Whether you need a short-term engagement, a long-term partnership, or a dedicated full-time engineer, feel free to reach out and we can discuss your requirements.',
    accent: 'teal',
  },
  {
    id: 3,
    question: 'What is your typical project process?',
    answer:
      'Every project follows a structured 5-phase process: Discovery (requirements, scope, timeline), Design & Architecture (UI/UX, tech stack, system design), Development (iterative sprints with regular updates), Testing & QA (unit, integration, and end-to-end), and Deployment (CI/CD pipelines, live monitoring). You get full transparency at every step — no surprises.',
    accent: 'purple',
  },
  {
    id: 4,
    question: 'What technologies do you specialize in?',
    answer:
      'My core stack is MERN (MongoDB, Express, React, Node.js) with Next.js for production-grade web apps. On the mobile side I work with Flutter and React Native. For backend services I also use NestJS, FastAPI, and Laravel. Infrastructure-wise I handle AWS, Docker, CI/CD pipelines, and zero-downtime deployments. I choose the right tool for the right problem — not just what I know.',
    accent: 'blue',
  },
  {
    id: 5,
    question: 'How long does a typical project take?',
    answer:
      'Timelines depend on scope and complexity. A landing page or simple web app typically takes 1–2 weeks. A full SaaS platform or CRM system ranges from 6–12 weeks. Mobile apps average 8–14 weeks. I always provide a detailed project timeline during the Discovery phase so you know exactly what to expect before a single line of code is written.',
    accent: 'teal',
  },
  {
    id: 6,
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      'Absolutely. I offer flexible post-launch support packages covering bug fixes, performance monitoring, feature iterations, security patches, and infrastructure maintenance. Think of it as having a dedicated engineer on call — your product keeps improving as your business grows. Ongoing maintenance retainers are available on a monthly basis.',
    accent: 'purple',
  },
  {
    id: 7,
    question: 'Can you work with an existing codebase or team?',
    answer:
      'Yes — I am comfortable jumping into existing projects, reviewing codebases, and collaborating with in-house or distributed teams. I follow clean code principles, proper Git workflows (branching, PRs, code reviews), and agile/sprint methodologies. Whether you need an extra senior developer or someone to lead a feature build, I adapt to your workflow.',
    accent: 'blue',
  },
  {
    id: 8,
    question: 'How do we get started?',
    answer:
      'Simply reach out via the Contact section with a brief description of your project — what you are building, your timeline, and your budget range. I will respond within 24 hours with initial thoughts and schedule a discovery call. From there we scope the project, agree on terms, and kick off within days. No lengthy back-and-forth — just clean, direct communication.',
    accent: 'teal',
  },
];

const accentMap = {
  blue: {
    border: 'border-[#1E90FF]/15',
    activeBorder: 'border-[#1E90FF]/45',
    glow: 'shadow-[0_0_32px_rgba(30,144,255,0.12)]',
    numColor: 'text-[#60A5FA]',
    numBg: 'bg-[#1E90FF]/10 border-[#1E90FF]/20',
    btnActive: 'bg-[#1E90FF] border-[#1E90FF] text-white shadow-[0_0_16px_rgba(30,144,255,0.5)]',
    btnIdle: 'bg-white/4 border-white/10 text-slate-400 hover:bg-[#1E90FF]/12 hover:border-[#1E90FF]/30 hover:text-[#60A5FA]',
    divider: 'bg-[#1E90FF]/20',
    qColor: 'group-hover:text-[#60A5FA]',
    dot: '#1E90FF',
  },
  teal: {
    border: 'border-[#00C2A0]/15',
    activeBorder: 'border-[#00C2A0]/45',
    glow: 'shadow-[0_0_32px_rgba(0,194,160,0.12)]',
    numColor: 'text-[#34D399]',
    numBg: 'bg-[#00C2A0]/10 border-[#00C2A0]/20',
    btnActive: 'bg-[#00C2A0] border-[#00C2A0] text-white shadow-[0_0_16px_rgba(0,194,160,0.5)]',
    btnIdle: 'bg-white/4 border-white/10 text-slate-400 hover:bg-[#00C2A0]/12 hover:border-[#00C2A0]/30 hover:text-[#34D399]',
    divider: 'bg-[#00C2A0]/20',
    qColor: 'group-hover:text-[#34D399]',
    dot: '#00C2A0',
  },
  purple: {
    border: 'border-[#A78BFA]/15',
    activeBorder: 'border-[#A78BFA]/45',
    glow: 'shadow-[0_0_32px_rgba(167,139,250,0.12)]',
    numColor: 'text-[#C4B5FD]',
    numBg: 'bg-[#A78BFA]/10 border-[#A78BFA]/20',
    btnActive: 'bg-[#A78BFA] border-[#A78BFA] text-white shadow-[0_0_16px_rgba(167,139,250,0.5)]',
    btnIdle: 'bg-white/4 border-white/10 text-slate-400 hover:bg-[#A78BFA]/12 hover:border-[#A78BFA]/30 hover:text-[#C4B5FD]',
    divider: 'bg-[#A78BFA]/20',
    qColor: 'group-hover:text-[#C4B5FD]',
    dot: '#A78BFA',
  },
};

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(null);

  const toggle = (id: number) => setActive((prev) => (prev === id ? null : id));

  return (
    <section
      id="faq"
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
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)' }}
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
              Got Questions?
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
            Frequently Asked{' '}
            <span style={{ color: '#1E90FF' }}>Questions</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            Everything you need to know before we start working together —
            clear answers, no fluff.
          </p>
        </div>

        {/* FAQ Grid — 2 columns on md+, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-5">
          {faqs.map((faq) => {
            const isOpen = active === faq.id;
            const a = accentMap[faq.accent as keyof typeof accentMap];

            return (
              <div
                key={faq.id}
                className={`group rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                  isOpen ? `${a.activeBorder} ${a.glow}` : `${a.border} hover:border-white/15`
                }`}
                style={{ boxShadow: isOpen ? undefined : '0 4px 20px rgba(0,0,0,0.3)' }}
              >
                {/* Question row — clickable */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 xl:px-6 xl:py-5 text-left"
                >
                  {/* Number badge */}
                  <span
                    className={`text-[10px] font-bold tabular-nums px-2 py-0.5 rounded-md border flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? a.numBg : 'bg-white/3 border-white/8 text-slate-500'
                    } ${isOpen ? a.numColor : ''}`}
                  >
                    {String(faq.id).padStart(2, '0')}
                  </span>

                  {/* Question text */}
                  <span
                    className={`flex-1 text-sm sm:text-[15px] font-semibold leading-snug transition-colors duration-300 ${
                      isOpen ? 'text-white' : `text-slate-300 ${a.qColor}`
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Plus / X button */}
                  <div
                    className={`w-8 h-8 rounded-xl border flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen ? a.btnActive : a.btnIdle
                    }`}
                  >
                    <svg
                      viewBox="0 0 14 14"
                      fill="none"
                      width={12}
                      height={12}
                      className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}
                    >
                      <path
                        d="M7 1v12M1 7h12"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* Answer — animated expand */}
                <div
                  className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{ maxHeight: isOpen ? 300 : 0 }}
                >
                  <div className="px-5 pb-5 xl:px-6 xl:pb-6">
                    <div className={`h-px mb-4 ${a.divider}`} />
                    <p className="text-[13px] sm:text-sm text-slate-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div
          className="mt-12 sm:mt-14 rounded-2xl border border-white/6 bg-[#0D1535]/60 px-6 py-7 sm:px-8 sm:py-8 flex flex-col sm:flex-row items-center justify-between gap-5"
          style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}
        >
          <div>
            <p className="text-sm sm:text-base font-bold text-white mb-1">
              Still have questions?
            </p>
            <p className="text-[12px] sm:text-sm text-slate-400">
              Reach out directly — I reply within 24 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all duration-150 hover:-translate-y-0.5 flex-shrink-0"
            style={{
              background: '#1E90FF',
              boxShadow: '0 0 24px rgba(30,144,255,0.35)',
              textDecoration: 'none',
            }}
          >
            Get in Touch <span className="text-base">→</span>
          </a>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-10 sm:mt-12">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Transparent communication ·{' '}
            <span className="text-[#60A5FA]">No question is too small</span>
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