const clients = [
  { name: 'TechStart Inc.', val: '$12K', color: '#1E90FF', w: '85%' },
  { name: 'GrowthCo', val: '$9.4K', color: '#00C2A0', w: '65%' },
  { name: 'Nexus Labs', val: '$6.1K', color: '#A78BFA', w: '45%' },
  { name: 'Alayoub Marketing', val: '$5.1K', color: '#F97316', w: '75%' },
];

export default function DashboardTopClients() {
  return (
    <div className="flex-[1.4] min-w-0 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[8px] p-2">
      <div className="text-[8px] text-slate-600 uppercase tracking-[0.06em] mb-1.5">
        Top Clients
      </div>

      {clients.map(({ name, val, color, w }) => (
        <div
          key={name}
          className="flex items-center gap-1 py-1 border-b border-[rgba(255,255,255,0.03)]"
        >
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: color }}
          />

          <div className="text-[8px] text-slate-400 flex-1 min-w-0 truncate">
            {name}
          </div>

          <div className="w-10 h-1 bg-[rgba(255,255,255,0.06)] rounded-xs shrink-0">
            <div
              className="h-1 rounded-xs"
              style={{ width: w, background: color }}
            />
          </div>

          <div className="text-[8px] font-bold text-slate-200 shrink-0">
            {val}
          </div>
        </div>
      ))}
    </div>
  );
}
