export default function ServicesHeader() {
  return (
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
          What I Do
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
        Services <span style={{ color: '#1E90FF' }}>I</span>{' '}
        <span style={{ color: '#00C2A0' }}>Offer</span>
      </h2>

      <p
        className="max-w-xl"
        style={{
          fontSize: 'clamp(14px, 1.4vw, 17px)',
          color: '#94A3B8',
          lineHeight: 1.7,
          fontWeight: 400,
        }}
      >
        From pixel-perfect websites to intelligent automation — I build digital
        products that solve real problems and help businesses scale.
      </p>
    </div>
  );
}
