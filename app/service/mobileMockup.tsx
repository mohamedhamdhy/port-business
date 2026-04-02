export default function MobileMockup() {
  return (
    <div className="flex justify-center">
      <div className="w-32 rounded-[20px] overflow-hidden border-2 border-white/12 bg-[#0B1229] shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative">
        <div className="flex justify-center pt-2 pb-1">
          <div className="w-10 h-2 rounded-full bg-[#111936]" />
        </div>
        <div className="px-2 pb-3 space-y-2">
          <div className="flex items-center justify-between">
            <div className="w-12 h-1.5 rounded-full bg-white/20" />
            <div className="w-5 h-5 rounded-full bg-[#00C2A0]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#00C2A0]/70" />
            </div>
          </div>
          <div className="rounded-xl p-2 bg-[#00C2A0]/12 border border-[#00C2A0]/18 space-y-1">
            <div className="w-full h-1.5 rounded-full bg-white/15" />
            <div className="w-2/3 h-1 rounded-full bg-white/10" />
            <div className="w-16 h-3 rounded-md bg-[#00C2A0]/50 mt-1" />
          </div>
          {[0.9, 0.7, 0.5].map((op, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 rounded-lg p-1.5 bg-white/3 border border-white/5"
            >
              <div
                className="w-5 h-5 rounded-md shrink-0"
                style={{
                  background: `rgba(0,194,160,${op * 0.3})`,
                }}
              />
              <div className="flex-1 space-y-0.5">
                <div className="w-full h-1 rounded-full bg-white/15" />
                <div className="w-2/3 h-1 rounded-full bg-white/8" />
              </div>
            </div>
          ))}
          <div className="flex justify-around pt-1 border-t border-white/5">
            {[
              { c: '#60A5FA', active: true },
              { c: '#475569', active: false },
              { c: '#475569', active: false },
              { c: '#475569', active: false },
            ].map(({ c, active }, i) => (
              <div key={i} className="flex flex-col items-center gap-0.5">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ background: active ? c : 'rgba(71,85,105,0.4)' }}
                />
                {active && (
                  <div className="w-1 h-0.5 rounded-full bg-[#1E90FF]" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
