export default function HeroLocationStrip() {
  return (
    <div className="relative z-10 flex items-center justify-center gap-2 pb-6 px-4 text-[11px] text-slate-500">
      <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0] shrink-0" />
      <span>
        Based in <span className="text-[#60A5FA]">United Arab Emirates</span>
      </span>
    </div>
  );
}
