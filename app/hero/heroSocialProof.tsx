const avatars = [
  { initials: 'JD', bg: '#1E90FF' },
  { initials: 'SK', bg: '#00C2A0' },
  { initials: 'MR', bg: '#A78BFA' },
  { initials: 'AL', bg: '#F59E0B' },
];

export default function HeroSocialProof() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex">
        {avatars.map(({ initials, bg }, i) => (
          <div
            key={initials}
            className={`w-8 h-8 rounded-full border-2 border-[#0A0F2C] flex items-center justify-center text-[10px] font-bold text-white ${
              i !== 0 ? '-ml-2' : ''
            }`}
            style={{ backgroundColor: bg }}
          >
            {initials}
          </div>
        ))}
      </div>

      <div className="text-xs text-[#64748B] leading-normal">
        <span className="text-[#94A3B8] font-semibold">
          Trusted by startups & businesses
        </span>
        <br />
        Based in UAE · Available worldwide
      </div>
    </div>
  );
}
