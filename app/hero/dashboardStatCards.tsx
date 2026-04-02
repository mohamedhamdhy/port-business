const stats = [
  {
    label: 'Revenue',
    val: '$48.2K',
    color: '#60A5FA',
    change: '↑ 12.4%',
    up: true,
  },
  {
    label: 'Users',
    val: '2,841',
    color: '#34D399',
    change: '↑ 8.1%',
    up: true,
  },
  {
    label: 'Churn',
    val: '1.2%',
    color: '#C4B5FD',
    change: '↓ 0.3%',
    up: false,
  },
];

export default function DashboardStatCards() {
  return (
    <div className="flex gap-2">
      {stats.map(({ label, val, color, change, up }) => (
        <div
          key={label}
          className="flex-1 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.06)] rounded-[8px] p-2.5"
        >
          <div className="text-[8px] text-slate-600 uppercase tracking-[0.06em] mb-1">
            {label}
          </div>

          <div className="text-[15px] font-extrabold" style={{ color }}>
            {val}
          </div>

          <div
            className="text-[8px] mt-0.5"
            style={{ color: up ? '#34D399' : '#F87171' }}
          >
            {change}
          </div>
        </div>
      ))}
    </div>
  );
}
