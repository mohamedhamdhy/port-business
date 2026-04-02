export default function SaasMockup() {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-white/8 bg-[#0B1229] shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between px-3 py-2 bg-[#111936] border-b border-white/5">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 rounded bg-[#A78BFA]/60" />
          <div className="w-14 h-1.5 rounded-full bg-white/15" />
        </div>
        <div className="w-12 h-4 rounded-md bg-[#A78BFA]/30 border border-[#A78BFA]/30" />
      </div>
      <div className="p-3 space-y-2">
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { val: '$48K', label: 'Revenue', color: '#60A5FA' },
            { val: '2.8K', label: 'Users', color: '#34D399' },
            { val: '98%', label: 'Uptime', color: '#C4B5FD' },
          ].map(({ val, label, color }) => (
            <div
              key={label}
              className="rounded-lg p-2 border border-white/5 bg-white/3"
            >
              <div
                className="text-[9px] font-bold leading-tight"
                style={{ color }}
              >
                {val}
              </div>
              <div className="text-[7px] text-slate-500 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
        <div className="rounded-lg p-2 border border-white/5 bg-white/2">
          <div className="text-[7px] text-slate-500 mb-1.5">Monthly Growth</div>
          <div className="flex items-end gap-1 h-10">
            {[18, 28, 22, 36, 30, 44, 38, 50].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: h,
                  background:
                    i === 7 ? '#A78BFA' : `rgba(167,139,250,${0.2 + i * 0.04})`,
                  boxShadow:
                    i === 7 ? '0 0 6px rgba(167,139,250,0.5)' : undefined,
                }}
              />
            ))}
          </div>
        </div>
        <div className="flex gap-1">
          {['Lead', 'Proposal', 'Closed'].map((stage, i) => (
            <div
              key={stage}
              className="flex-1 rounded-md px-1.5 py-1 border border-white/5"
              style={{ background: `rgba(167,139,250,${0.06 + i * 0.03})` }}
            >
              <div className="text-[7px] text-slate-500">{stage}</div>
              <div
                className="text-[9px] font-bold mt-0.5"
                style={{ color: '#C4B5FD' }}
              >
                {['12', '7', '4'][i]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
