'use client';

function DegreeMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at top right, ${color}18 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="15" y="10" width="210" height="110" rx="8" fill="rgba(13,21,53,0.85)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="15" y="10" width="210" height="28" rx="8" fill={`${color}12`}/>
        <rect x="15" y="30" width="210" height="8" rx="0" fill={`${color}12`}/>
        <circle cx="40" cy="24" r="10" fill={`${color}25`} stroke={`${color}35`} strokeWidth="1"/>
        <text x="40" y="28" textAnchor="middle" fill={color} fontSize="8" fontWeight="bold" fontFamily="sans-serif">CS</text>
        <rect x="58" y="16" width="80" height="4" rx="1" fill="rgba(255,255,255,0.35)"/>
        <rect x="58" y="23" width="55" height="3" rx="1" fill="rgba(255,255,255,0.15)"/>
        <rect x="155" y="18" width="60" height="12" rx="4" fill={`${color}30`} stroke={`${color}40`} strokeWidth="0.5"/>
        <text x="185" y="27" textAnchor="middle" fill={color} fontSize="6" fontWeight="bold" fontFamily="sans-serif">2018–2022</text>
        <rect x="22" y="46" width="58" height="66" rx="5" fill="rgba(255,255,255,0.02)" stroke={`${color}15`} strokeWidth="0.5"/>
        <text x="51" y="58" textAnchor="middle" fill="rgba(100,116,139,0.6)" fontSize="5" fontFamily="sans-serif">GPA</text>
        <text x="51" y="70" textAnchor="middle" fill={color} fontSize="14" fontWeight="bold" fontFamily="monospace">3.8</text>
        <text x="51" y="79" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4.5" fontFamily="sans-serif">out of 4.0</text>
        <rect x="26" y="84" width="50" height="22" rx="3" fill={`${color}15`}/>
        <text x="51" y="97" textAnchor="middle" fill={color} fontSize="5.5" fontWeight="bold" fontFamily="sans-serif">First Class</text>
        <rect x="86" y="46" width="134" height="30" rx="4" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5"/>
        <text x="90" y="57" fill="rgba(100,116,139,0.6)" fontSize="5" fontFamily="sans-serif">Core Modules</text>
        {['Data Structures', 'Algorithms', 'Web Dev', 'Databases', 'OS', 'Networks'].map((m, i) => (
          <g key={m}>
            <rect x={90+(i%3)*44} y={62+(Math.floor(i/3)*10)} width={40} height={7} rx="2" fill={`${color}${i%2===0?'20':'12'}`}/>
            <text x={92+(i%3)*44} y={67+(Math.floor(i/3)*10)} fill="rgba(255,255,255,0.4)" fontSize="4" fontFamily="sans-serif">{m}</text>
          </g>
        ))}
        <rect x="86" y="82" width="134" height="26" rx="4" fill="rgba(255,255,255,0.02)" stroke={`${color}10`} strokeWidth="0.5"/>
        <text x="90" y="93" fill="rgba(100,116,139,0.6)" fontSize="5" fontFamily="sans-serif">Skills Gained</text>
        {['JavaScript','Python','React','Node.js','SQL','Git'].map((s, i) => (
          <g key={s}>
            <rect x={90+(i%3)*44} y={97+(Math.floor(i/3)*0)} width={40} height={6} rx="2" fill={`${color}15`}/>
            <text x={92+(i%3)*44} y={102} fill={color} fontSize="3.8" fontFamily="sans-serif" opacity="0.8">{s}</text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function FinalProjectMockup({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0" style={{ background: `radial-gradient(ellipse at bottom left, ${color}15 0%, transparent 60%)` }} />
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 130" preserveAspectRatio="xMidYMid slice">
        <rect x="10" y="8" width="220" height="114" rx="6" fill="rgba(13,21,53,0.9)" stroke={`${color}20`} strokeWidth="0.5"/>
        <rect x="10" y="8" width="220" height="20" rx="6" fill={`${color}15`}/>
        <rect x="10" y="22" width="220" height="6" rx="0" fill={`${color}15`}/>
        <rect x="14" y="12" width="8" height="8" rx="2" fill={color} opacity="0.5"/>
        <rect x="26" y="14" width="60" height="4" rx="1" fill="rgba(255,255,255,0.3)"/>
        <rect x="185" y="13" width="38" height="6" rx="2" fill={color} opacity="0.4"/>
        {[0,1,2].map(i => (
          <g key={i}>
            <rect x={14+i*74} y={34} width={68} height={80} rx="5" fill="rgba(255,255,255,0.025)" stroke={`${color}18`} strokeWidth="0.5"/>
            <rect x={18+i*74} y={38} width={60} height={35} rx="3" fill={`${color}${['20','14','10'][i]}`}/>
            <rect x={18+i*74} y={78} width={45} height={4} rx="1" fill="rgba(255,255,255,0.2)"/>
            <rect x={18+i*74} y={85} width={30} height={3} rx="1" fill="rgba(255,255,255,0.1)"/>
            <rect x={18+i*74} y={91} width={20} height={3} rx="1" fill={color} opacity="0.4"/>
            <rect x={18+i*74} y={99} width={60} height={10} rx="3" fill={color} opacity={[0.4, 0.3, 0.25][i]}/>
          </g>
        ))}
      </svg>
    </div>
  );
}

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

const AwardIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <circle cx="8" cy="7" r="5" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5.5 12l2.5 3 2.5-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const BookIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" width={12} height={12}>
    <path d="M3 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M5 6h6M5 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

const universities = [
  {
    id: 'nsbm',
    name: 'NSBM Green University',
    nameShort: 'NSBM Green University',
    degree: 'BSc (Hons) in Computer Science',
    faculty: 'Faculty of Computing',
    affiliation: 'Affiliated to Plymouth University, UK',
    duration: '4 Years',
    period: '2018 – 2022',
    location: 'Colombo, Sri Lanka',
    gpa: '3.8 / 4.0',
    classification: 'First Class Honours',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    highlights: [
      'Full-Stack Web Development',
      'Data Structures & Algorithms',
      'Database Systems',
      'Software Engineering',
      'Cloud Computing',
      'AI & Machine Learning',
    ],
    projects: [
      {
        id: 'final-year',
        title: 'Final Year Project',
        tag: 'Capstone',
        description:
          'Developed a full-stack AI-powered job matching platform using React, Node.js, and MongoDB — connecting graduates with employers through intelligent skills-based filtering and real-time chat.',
        mockup: (color: string) => <FinalProjectMockup color={color} />,
      },
      {
        id: 'degree-overview',
        title: 'Degree Overview',
        tag: 'Academic',
        description:
          'Four-year BSc programme covering core CS fundamentals, software engineering principles, web technologies, databases, networks, and applied AI — graduating with First Class Honours.',
        mockup: (color: string) => <DegreeMockup color={color} />,
      },
    ],
  },
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="relative overflow-hidden py-20 sm:py-24 lg:py-28 xl:py-32"
      style={{ background: '#0A0F2C' }}
    >
      {/* Top separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)' }}
      />

      {/* Ambient orbs */}
      <div className="absolute -top-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.07) 0%, transparent 70%)' }} />
      <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16 lg:mb-20">
          <div
            className="inline-flex items-center gap-2 mb-5"
            style={{
              background: 'rgba(167,139,250,0.12)',
              border: '1px solid rgba(167,139,250,0.28)',
              borderRadius: 100,
              padding: '6px 16px',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#A78BFA]" style={{ animation: 'hmd-pulse 2s infinite' }} />
            <span className="text-[11px] text-[#C4B5FD] font-semibold uppercase tracking-[0.06em]">Academic Background</span>
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
            Education &{' '}
            <span style={{ color: '#A78BFA' }}>Qualifications</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            A strong academic foundation in Computer Science — built with rigorous
            coursework, hands-on projects, and a First Class Honours degree.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div
            className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-px pointer-events-none hidden sm:block"
            style={{ background: 'linear-gradient(180deg, rgba(167,139,250,0.5), rgba(167,139,250,0.1))' }}
          />

          <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
            {universities.map((uni) => (
              <div key={uni.id} className="relative">

                {/* Timeline node — desktop */}
                <div className="hidden sm:flex absolute top-6 left-6 lg:left-1/2 -translate-x-1/2 items-center justify-center z-10">
                  <div
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center"
                    style={{
                      background: '#0A0F2C',
                      borderColor: uni.accentColor,
                      boxShadow: `0 0 16px ${uni.accentColor}70`,
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: uni.accentColor }} />
                  </div>
                </div>

                {/* Mobile node */}
                <div className="sm:hidden flex items-center gap-3 mb-5">
                  <div
                    className="w-4 h-4 rounded-full border-2 flex-shrink-0"
                    style={{ borderColor: uni.accentColor, background: '#0A0F2C', boxShadow: `0 0 10px ${uni.accentColor}50` }}
                  />
                  <div className="h-px flex-1 opacity-30" style={{ background: uni.accentColor }} />
                </div>

                {/* Two-column layout */}
                <div className="sm:pl-16 lg:pl-0 lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 items-start">

                  {/* LEFT — University detail card */}
                  <div className="mb-8 lg:mb-0 lg:text-right lg:flex lg:flex-col lg:items-end lg:pt-1">
                    <div
                      className="rounded-2xl border bg-[#0D1535]/90 backdrop-blur-sm p-5 xl:p-6 w-full transition-all duration-300"
                      style={{
                        borderColor: `${uni.accentColor}25`,
                        boxShadow: `0 4px 32px rgba(0,0,0,0.3), 0 0 0 1px ${uni.accentColor}10`,
                      }}
                    >
                      {/* University identity */}
                      <div className="flex lg:flex-row-reverse items-start gap-3 mb-4">
                        <div
                          className="w-12 h-12 rounded-xl border flex items-center justify-center flex-shrink-0"
                          style={{ background: `${uni.accentColor}15`, borderColor: `${uni.accentColor}30` }}
                        >
                          <svg viewBox="0 0 24 24" fill="none" width={22} height={22}>
                            <path d="M12 2L2 7l10 5 10-5-10-5z" stroke={uni.accentColor} strokeWidth="1.4" strokeLinejoin="round"/>
                            <path d="M2 17l10 5 10-5" stroke={uni.accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M2 12l10 5 10-5" stroke={uni.accentColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div className="lg:text-right">
                          <div className="text-[10px] font-bold uppercase tracking-[0.1em] mb-0.5" style={{ color: uni.accentLight }}>
                            {uni.nameShort}
                          </div>
                          <div className="text-[9px] text-slate-500 italic">{uni.affiliation}</div>
                        </div>
                      </div>

                      {/* Degree */}
                      <div className="text-base sm:text-lg font-bold text-white mb-1 leading-tight">
                        {uni.degree}
                      </div>
                      <div className="text-[11px] text-slate-400 mb-4">{uni.faculty}</div>

                      {/* Meta info */}
                      <div className="flex flex-col gap-2 mb-4">
                        {[
                          { icon: <CalendarIcon />, text: `${uni.period} · ${uni.duration}` },
                          { icon: <LocationIcon />, text: uni.location },
                          { icon: <AwardIcon />, text: `${uni.gpa} · ${uni.classification}` },
                          { icon: <BookIcon />, text: `${uni.highlights.length} Core Modules` },
                        ].map(({ icon, text }) => (
                          <div key={text} className="flex lg:flex-row-reverse items-center gap-2">
                            <span style={{ color: uni.accentLight }}>{icon}</span>
                            <span className="text-[11px] text-slate-400">{text}</span>
                          </div>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="border-t border-white/5 pt-4">
                        <div className="text-[9px] font-semibold uppercase tracking-[0.1em] text-slate-500 mb-2.5 lg:text-right">
                          Key Modules
                        </div>
                        <div className="flex flex-wrap lg:justify-end gap-1.5">
                          {uni.highlights.map((h) => (
                            <span
                              key={h}
                              className="text-[9px] font-medium px-2 py-0.5 rounded-full"
                              style={{
                                background: `${uni.accentColor}12`,
                                border: `1px solid ${uni.accentColor}22`,
                                color: uni.accentLight,
                              }}
                            >
                              {h}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Period badge */}
                      <div className="mt-4 flex lg:justify-end">
                        <div
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-semibold"
                          style={{
                            background: `${uni.accentColor}15`,
                            border: `1px solid ${uni.accentColor}30`,
                            color: uni.accentLight,
                          }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full" style={{ background: uni.accentColor }} />
                          Graduated {uni.period.split('–')[1].trim()}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT — Projects (1/2 width, 2 stacked) */}
                  <div className="flex flex-col gap-4 lg:pt-1">
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.1em] font-semibold mb-1 flex items-center gap-2">
                      <div className="w-4 h-px" style={{ background: uni.accentColor }} />
                      Academic Projects
                    </div>

                    {uni.projects.map((project) => (
                      <div
                        key={project.id}
                        className="group relative rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                        style={{
                          border: `1px solid ${uni.accentColor}18`,
                          minHeight: 130,
                          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${uni.accentColor}50`;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 28px ${uni.accentColor}20`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLDivElement).style.borderColor = `${uni.accentColor}18`;
                          (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.3)';
                        }}
                      >
                        {/* Mockup bg */}
                        <div className="absolute inset-0">
                          {project.mockup(uni.accentColor)}
                        </div>

                        {/* Gradient overlay */}
                        <div
                          className="absolute inset-0 transition-all duration-300 group-hover:opacity-80"
                          style={{ background: `linear-gradient(to top, #0A0F2C 0%, #0A0F2Cdd 50%, transparent 100%)` }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col justify-end h-full p-4 min-h-[130px]">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span className="text-sm font-bold text-white leading-tight">{project.title}</span>
                            <span
                              className="text-[9px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full flex-shrink-0"
                              style={{
                                background: `${uni.accentColor}20`,
                                border: `1px solid ${uni.accentColor}30`,
                                color: uni.accentLight,
                              }}
                            >
                              {project.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors duration-300 line-clamp-2 group-hover:line-clamp-none">
                            {project.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline end node */}
          <div className="hidden sm:flex absolute bottom-0 left-6 lg:left-1/2 -translate-x-1/2 flex-col items-center">
            <div className="w-3 h-3 rounded-full border border-white/10 bg-[#0A0F2C]" />
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-16 sm:mt-20">
          <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]" />
          <p className="text-[11px] text-slate-500">
            Graduated with{' '}
            <span className="text-[#C4B5FD]">First Class Honours</span> ·
            BSc Computer Science · Plymouth University, UK
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hmd-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .group-hover\\:line-clamp-none:hover .line-clamp-2,
        .group:hover .group-hover\\:line-clamp-none {
          display: block;
          -webkit-line-clamp: unset;
          overflow: visible;
        }
      `}</style>
    </section>
  );
}