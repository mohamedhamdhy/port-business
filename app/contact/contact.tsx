'use client';

import { useState } from 'react';

const contactInfo = [
  {
    id: 'email',
    label: 'Email',
    value: 'mohamedalhamdhy@gmail.com',
    href: 'mailto:mohamedalhamdhy@gmail.com',
    accent: 'blue',
    accentColor: '#1E90FF',
    accentLight: '#60A5FA',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+971 50 551 4612',
    href: 'https://wa.me/+971505514612',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohamedalhamdhy',
    href: 'https://www.linkedin.com/in/mohamedalhamdhy/',
    accent: 'blue',
    accentColor: '#0A66C2',
    accentLight: '#60A5FA',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'github.com/mohamedhamdhy',
    href: 'https://github.com/mohamedhamdhy',
    accent: 'purple',
    accentColor: '#A78BFA',
    accentLight: '#C4B5FD',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width={18} height={18}>
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    id: 'location',
    label: 'Location',
    value: 'Dubai, United Arab Emirates',
    href: 'https://maps.google.com/?q=Dubai,UAE',
    accent: 'teal',
    accentColor: '#00C2A0',
    accentLight: '#34D399',
    icon: (
      <svg viewBox="0 0 20 20" fill="none" width={18} height={18}>
        <path d="M10 2a6 6 0 0 1 6 6c0 4-6 11-6 11S4 12 4 8a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
];

const services = [
  'Web Development',
  'Mobile App',
  'SaaS Platform',
  'CRM System',
  'E-Commerce',
  'AI Automation',
  'Other',
];

type FormState = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    await new Promise((r) => setTimeout(r, 1800));
    setStatus('sent');
  };

  const inputBase =
    'w-full bg-white/3 border rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition-all duration-200';
  const inputIdle = 'border-white/8 hover:border-white/15';
  const inputFocused = 'border-[#1E90FF]/50 shadow-[0_0_0_3px_rgba(30,144,255,0.08)]';

  return (
    <section
      id="contact"
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
        className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(30,144,255,0.08) 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,160,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/2 right-0 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.05) 0%, transparent 70%)' }}
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
              Let&apos;s Work Together
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
            Get in{' '}
            <span style={{ color: '#1E90FF' }}>Touch</span>
          </h2>

          <p
            className="max-w-xl"
            style={{
              fontSize: 'clamp(14px, 1.4vw, 17px)',
              color: '#94A3B8',
              lineHeight: 1.7,
            }}
          >
            Have a project in mind or want to discuss an opportunity?
            I&apos;d love to hear from you — I respond within 24 hours.
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">

          {/* LEFT — Contact form */}
          <div
            className="rounded-2xl border border-white/8 bg-[#0D1535]/80 backdrop-blur-sm p-6 xl:p-8"
            style={{ boxShadow: '0 4px 32px rgba(0,0,0,0.3)' }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-1 h-5 rounded-full bg-[#1E90FF]" />
              <h3 className="text-sm font-bold text-white tracking-tight">Send a Message</h3>
            </div>

            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ background: 'rgba(0,194,160,0.15)', border: '1px solid rgba(0,194,160,0.3)' }}
                >
                  <svg viewBox="0 0 24 24" fill="none" width={28} height={28}>
                    <path d="M5 13l4 4L19 7" stroke="#00C2A0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-base font-bold text-white mb-1">Message Sent!</p>
                  <p className="text-sm text-slate-400">I&apos;ll get back to you within 24 hours.</p>
                </div>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', service: '', budget: '', message: '' }); }}
                  className="text-[11px] text-[#60A5FA] hover:text-white transition-colors duration-200 underline underline-offset-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em]">
                      Full Name <span className="text-[#1E90FF]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Mohamed Al Hamdhy"
                      className={`${inputBase} ${focusedField === 'name' ? inputFocused : inputIdle}`}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em]">
                      Email Address <span className="text-[#1E90FF]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="you@company.com"
                      className={`${inputBase} ${focusedField === 'email' ? inputFocused : inputIdle}`}
                    />
                  </div>
                </div>

                {/* Service + Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em]">
                      Service Needed
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('service')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputBase} ${focusedField === 'service' ? inputFocused : inputIdle} cursor-pointer`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} style={{ background: '#0D1535' }}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em]">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('budget')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputBase} ${focusedField === 'budget' ? inputFocused : inputIdle} cursor-pointer`}
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" disabled>Select budget</option>
                      {['< $1,000', '$1,000 – $5,000', '$5,000 – $15,000', '$15,000 – $30,000', '$30,000+', 'Discuss'].map((b) => (
                        <option key={b} value={b} style={{ background: '#0D1535' }}>{b}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-[0.06em]">
                    Message <span className="text-[#1E90FF]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Tell me about your project — what you're building, your timeline, and any specific requirements..."
                    rows={5}
                    className={`${inputBase} resize-none ${focusedField === 'message' ? inputFocused : inputIdle}`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{
                    background: status === 'sending' ? 'rgba(30,144,255,0.6)' : '#1E90FF',
                    boxShadow: status === 'sending' ? 'none' : '0 0 28px rgba(30,144,255,0.35)',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <svg className="animate-spin" viewBox="0 0 20 20" fill="none" width={16} height={16}>
                        <circle cx="10" cy="10" r="8" stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
                        <path d="M10 2a8 8 0 0 1 8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
                        <path d="M2 8h12M9 4l5 4-5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-[10px] text-slate-500 text-center">
                  No spam. Your information is kept private and never shared.
                </p>
              </form>
            )}
          </div>

          {/* RIGHT — Contact info + availability */}
          <div className="flex flex-col gap-5">

            {/* Availability card */}
            <div
              className="rounded-2xl border bg-[#0D1535]/80 backdrop-blur-sm p-5 xl:p-6"
              style={{
                borderColor: 'rgba(0,194,160,0.25)',
                boxShadow: '0 0 32px rgba(0,194,160,0.08), 0 4px 24px rgba(0,0,0,0.3)',
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 rounded-full bg-[#00C2A0]" />
                  <h3 className="text-sm font-bold text-white">Availability</h3>
                </div>
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold"
                  style={{ background: 'rgba(0,194,160,0.12)', border: '1px solid rgba(0,194,160,0.28)', color: '#34D399' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" style={{ animation: 'hmd-pulse 2s infinite' }} />
                  Open to Work
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Freelance', status: 'Available', color: '#34D399', bg: 'rgba(0,194,160,0.08)', border: 'rgba(0,194,160,0.18)' },
                  { label: 'Full-Time', status: 'Available', color: '#60A5FA', bg: 'rgba(30,144,255,0.08)', border: 'rgba(30,144,255,0.18)' },
                  { label: 'Response Time', status: '< 24 hrs', color: '#C4B5FD', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.18)' },
                  { label: 'Time Zone', status: 'UAE (GST+4)', color: '#FBBF24', bg: 'rgba(251,191,36,0.08)', border: 'rgba(251,191,36,0.18)' },
                ].map(({ label, status: s, color, bg, border }) => (
                  <div key={label} className="rounded-xl px-3 py-2.5" style={{ background: bg, border: `1px solid ${border}` }}>
                    <div className="text-[9px] text-slate-500 uppercase tracking-[0.06em] mb-0.5">{label}</div>
                    <div className="text-[11px] font-bold" style={{ color }}>{s}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact links */}
            <div
              className="rounded-2xl border border-white/8 bg-[#0D1535]/80 backdrop-blur-sm p-5 xl:p-6"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-5 rounded-full bg-[#A78BFA]" />
                <h3 className="text-sm font-bold text-white">Direct Contact</h3>
              </div>
              <div className="flex flex-col gap-2.5">
                {contactInfo.map(({ id, label, value, href, accentColor, accentLight, icon }) => (
                  <a
                    key={id}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-3 p-3 rounded-xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-200 hover:-translate-y-0.5"
                    style={{
                      ['--ac' as string]: accentColor,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = `${accentColor}35`;
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 0 20px ${accentColor}12`;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                      style={{ background: `${accentColor}15`, border: `1px solid ${accentColor}25`, color: accentLight }}
                    >
                      {icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[9px] font-semibold uppercase tracking-[0.06em] text-slate-500 mb-0.5">{label}</div>
                      <div
                        className="text-[11px] font-medium truncate transition-colors duration-200 group-hover:text-white text-slate-300"
                      >
                        {value}
                      </div>
                    </div>
                    <svg viewBox="0 0 12 12" fill="none" width={10} height={10} className="flex-shrink-0 text-slate-600 group-hover:text-slate-400 transition-colors duration-200">
                      <path d="M2 10L10 2M10 2H5M10 2v5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Mini map / location card */}
            <div
              className="rounded-2xl border border-white/8 bg-[#0D1535]/80 backdrop-blur-sm overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              {/* Decorative map */}
              <div className="relative h-28 overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(30,144,255,0.06) 0%, rgba(0,194,160,0.04) 100%)' }} />
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 112" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <pattern id="mapgrid" width="28" height="28" patternUnits="userSpaceOnUse">
                      <path d="M 28 0 L 0 0 0 28" fill="none" stroke="rgba(30,144,255,0.07)" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="400" height="112" fill="url(#mapgrid)" />
                  {/* Simplified UAE coastline shape */}
                  <path d="M160 70 Q180 55 210 58 Q230 55 250 62 Q260 58 265 65 Q270 72 260 80 Q240 85 220 82 Q190 85 165 80 Z"
                    fill="rgba(30,144,255,0.08)" stroke="rgba(30,144,255,0.2)" strokeWidth="0.8" />
                  {/* Dubai dot */}
                  <circle cx="232" cy="66" r="4" fill="#1E90FF" opacity="0.9">
                    <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.9;0.4;0.9" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="232" cy="66" r="2" fill="#60A5FA" />
                  <text x="240" y="63" fill="rgba(96,165,250,0.8)" fontSize="6" fontFamily="sans-serif" fontWeight="bold">Dubai</text>
                  {/* Connection lines to other regions */}
                  {[[80,40],[320,35],[350,75],[100,90]].map(([x,y], i) => (
                    <g key={i}>
                      <line x1="232" y1="66" x2={x} y2={y} stroke="rgba(30,144,255,0.12)" strokeWidth="0.5" strokeDasharray="3 4" />
                      <circle cx={x} cy={y} r="1.5" fill="rgba(30,144,255,0.3)" />
                    </g>
                  ))}
                </svg>
                <div className="absolute inset-x-0 bottom-0 h-10" style={{ background: 'linear-gradient(to top, #0D1535, transparent)' }} />
              </div>
              <div className="px-5 py-4 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-bold text-white">Dubai, United Arab Emirates</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Available for remote & on-site work worldwide</div>
                </div>
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[9px] font-semibold"
                  style={{ background: 'rgba(0,194,160,0.10)', border: '1px solid rgba(0,194,160,0.22)', color: '#34D399' }}
                >
                  <span className="w-1 h-1 rounded-full bg-[#00C2A0]" />
                  GST +4
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
          <p className="text-[11px] text-slate-500">
            Based in UAE · Available worldwide ·{' '}
            <span className="text-[#60A5FA]">Reply within 24 hours guaranteed</span>
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