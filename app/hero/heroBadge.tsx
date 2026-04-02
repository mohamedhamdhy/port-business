export default function HeroBadge() {
  return (
    <div className="inline-flex items-center gap-2 mb-6 sm:mb-7 w-max px-4 py-1.5 rounded-full bg-[rgba(30,144,255,0.12)] border border-[rgba(30,144,255,0.28)]">
      <span className="w-2 h-2 rounded-full bg-[#00C2A0]" />

      <span className="text-[11px] text-[#93C5FD] font-semibold tracking-[0.06em] uppercase">
        Based in <span className="text-[#60A5FA]">United Arab Emirates</span>
      </span>
    </div>
  );
}
