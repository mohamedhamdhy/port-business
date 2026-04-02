const legend = [
  { label: 'React', pct: '40%', color: '#1E90FF' },
  { label: 'Node', pct: '27%', color: '#00C2A0' },
  { label: 'DB', pct: '20%', color: '#A78BFA' },
];

export default function DashboardDonut() {
  return (
    <div className="flex-1 min-w-0 flex flex-col items-center bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[8px] p-2">
      <div className="self-start text-[8px] text-slate-500 uppercase tracking-[0.06em] mb-1">
        Stack
      </div>

      <svg viewBox="0 0 70 70" width={68} height={68} className="shrink-0">
        <circle
          cx="35"
          cy="35"
          r="26"
          fill="none"
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="10"
        />
        <circle
          cx="35"
          cy="35"
          r="26"
          fill="none"
          stroke="#1E90FF"
          strokeWidth="10"
          strokeDasharray="65 99"
          strokeDashoffset="-10"
        />
        <circle
          cx="35"
          cy="35"
          r="26"
          fill="none"
          stroke="#00C2A0"
          strokeWidth="10"
          strokeDasharray="28 136"
          strokeDashoffset="-75"
        />
        <circle
          cx="35"
          cy="35"
          r="26"
          fill="none"
          stroke="#A78BFA"
          strokeWidth="10"
          strokeDasharray="20 144"
          strokeDashoffset="-103"
        />
        <text
          x="35"
          y="38"
          textAnchor="middle"
          fill="#E2E8F0"
          fontSize={9}
          fontWeight={700}
          fontFamily="sans-serif"
        >
          MERN
        </text>
      </svg>

      <div className="flex justify-between w-full mt-1.5">
        {legend.map(({ label, pct, color }) => (
          <div key={label} className="flex items-center gap-0.5">
            <div
              className="w-1.5 h-1.5 rounded-full shrink-0"
              style={{ background: color }}
            />
            <span className="text-[7px] text-slate-400">
              {label} {pct}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
