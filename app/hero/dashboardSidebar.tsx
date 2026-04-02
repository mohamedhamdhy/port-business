const navItems = [
  {
    active: true,
    icon: (
      <svg viewBox="0 0 16 16" fill="none" width={15} height={15}>
        <rect x="2" y="2" width="5" height="5" rx="1" fill="#60A5FA" />
        <rect x="9" y="2" width="5" height="5" rx="1" fill="#334155" />
        <rect x="2" y="9" width="5" height="5" rx="1" fill="#334155" />
        <rect x="9" y="9" width="5" height="5" rx="1" fill="#334155" />
      </svg>
    ),
  },
  {
    active: false,
    icon: (
      <svg viewBox="0 0 16 16" fill="none" width={15} height={15}>
        <path
          d="M2 4h12M2 8h8M2 12h10"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    active: false,
    icon: (
      <svg viewBox="0 0 16 16" fill="none" width={15} height={15}>
        <circle cx="8" cy="8" r="5" stroke="#334155" strokeWidth="1.5" />
        <path
          d="M8 5v3l2 2"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    active: false,
    icon: (
      <svg viewBox="0 0 16 16" fill="none" width={15} height={15}>
        <path
          d="M8 2a6 6 0 100 12A6 6 0 008 2z"
          stroke="#334155"
          strokeWidth="1.5"
        />
        <path
          d="M5 8h6M8 5v6"
          stroke="#334155"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function DashboardSidebar() {
  return (
    <div className="w-14 bg-[#0B1229] border-r border-[rgba(255,255,255,0.05)] flex flex-col items-center py-3.5 gap-4.5">
      <div className="w-7 h-7 rounded-[7px] bg-[#1E90FF] flex items-center justify-center">
        <div className="w-3 h-3 rounded-[3px] bg-white opacity-90" />
      </div>

      {navItems.map(({ active, icon }, i) => (
        <div
          key={i}
          className={`w-8 h-8 rounded-[8px] flex items-center justify-center ${
            active ? 'bg-[rgba(30,144,255,0.18)]' : 'bg-transparent'
          }`}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}
