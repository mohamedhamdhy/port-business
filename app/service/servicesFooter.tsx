export default function ServicesFooter() {
  return (
    <div className="flex items-center justify-center gap-2 mt-14 sm:mt-16">
      <div className="w-1.5 h-1.5 rounded-full bg-[#00C2A0]" />
      <p className="text-[11px] text-slate-500">
        All services available for{' '}
        <span className="text-[#60A5FA]">Freelance</span> &amp;{' '}
        <span className="text-[#60A5FA]">Full-Time</span> engagements · Based in
        UAE · Available worldwide
      </p>
    </div>
  );
}
