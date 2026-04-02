export default function WebMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/8 bg-[#0B1229] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center gap-2 px-3 py-2 bg-[#111936] border-b border-white/5">
        <div className="flex gap-1">
          <div className="w-2 h-2 rounded-full bg-[#FF5F57]" />
          <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
          <div className="w-2 h-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 bg-white/5 rounded px-2 py-0.5 text-[9px] text-slate-500 font-mono">
          hmdesign.io
        </div>
      </div>
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-between">
          <div className="w-10 h-2 rounded-full bg-[#1E90FF]/60" />
          <div className="flex gap-2">
            <div className="w-6 h-1.5 rounded-full bg-white/10" />
            <div className="w-6 h-1.5 rounded-full bg-white/10" />
            <div className="w-6 h-1.5 rounded-full bg-white/10" />
            <div className="w-8 h-1.5 rounded bg-[#1E90FF]/50" />
          </div>
        </div>
        <div className="rounded-lg bg-[#1E90FF]/8 border border-[#1E90FF]/12 p-3 space-y-1.5">
          <div className="w-3/4 h-2.5 rounded-full bg-white/20" />
          <div className="w-1/2 h-2 rounded-full bg-white/10" />
          <div className="w-2/3 h-1.5 rounded-full bg-white/8" />
          <div className="flex gap-2 pt-1">
            <div className="w-12 h-4 rounded-md bg-[#1E90FF]/70" />
            <div className="w-12 h-4 rounded-md bg-white/8 border border-white/12" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {['#1E90FF', '#00C2A0', '#A78BFA'].map((c, i) => (
            <div
              key={i}
              className="rounded-lg p-2 space-y-1 border border-white/5"
              style={{ background: `${c}10` }}
            >
              <div
                className="w-4 h-4 rounded-md"
                style={{ background: `${c}40` }}
              />
              <div className="w-full h-1.5 rounded-full bg-white/15" />
              <div className="w-3/4 h-1 rounded-full bg-white/8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
