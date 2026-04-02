import DashboardSidebar from './dashboardSidebar';
import DashboardStatCards from './dashboardStatCards';
import DashboardTopClients from './dashboardTopClients';
import DashboardDonut from './dashboardDonut';

export default function DashboardMockup() {
  return (
    <div className="flex-1 min-w-0 flex justify-center items-center w-full lg:w-auto">
      <div className="relative w-full max-w-140">
        <div className="absolute pointer-events-none inset-6 rounded-[24px] bg-[radial-gradient(ellipse_at_50%_50%,rgba(30,144,255,0.15)_0%,transparent_70%)]" />

        <div className="absolute z-20 hidden sm:block -top-3.5 -right-3.5 bg-[#0D1535] border border-[rgba(0,194,160,0.35)] rounded-[10px] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="text-[8px] text-slate-400 uppercase tracking-[0.06em] mb-0.5">
            Revenue
          </div>
          <div className="text-[18px] font-extrabold text-green-400">+38%</div>
          <div className="text-[8px] text-green-400 opacity-70">
            vs last month
          </div>
        </div>

        <div className="absolute z-20 hidden sm:flex -bottom-4 -left-4 items-center gap-2 bg-[#0D1535] border border-[rgba(167,139,250,0.3)] rounded-[10px] p-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.4)]">
          <div className="w-7 h-7 rounded-[7px] bg-[rgba(167,139,250,0.15)] flex items-center justify-center">
            <svg viewBox="0 0 16 16" fill="none" width={14} height={14}>
              <circle cx="8" cy="8" r="6" stroke="#C4B5FD" strokeWidth="1.5" />
              <path
                d="M8 5v3l2 2"
                stroke="#C4B5FD"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <div className="text-[12px] font-bold text-[#C4B5FD]">
              Live Deploy
            </div>
            <div className="text-[8px] text-slate-500">2 mins ago</div>
          </div>
        </div>

        <div className="bg-[#0D1535] rounded-[14px] border border-[rgba(255,255,255,0.08)] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(30,144,255,0.1)]">
          <div className="bg-[#111936] flex items-center gap-2.5 px-3.5 py-2.5 border-b border-[rgba(255,255,255,0.06)]">
            <div className="flex gap-1.5">
              {['#FF5F57', '#FFBD2E', '#28C840'].map((c) => (
                <div
                  key={c}
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: c }}
                />
              ))}
            </div>
            <div className="flex-1 bg-[rgba(255,255,255,0.05)] rounded-[5px] px-2.5 py-1 text-[10px] text-slate-600 font-mono tracking-[0.02em]">
              mohamedalhamdhy.com/dashboard
            </div>
          </div>

          <div className="flex min-h-0">
            <DashboardSidebar />

            <div className="flex-1 flex flex-col gap-3.5 p-3.5 overflow-hidden">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[12px] font-bold text-slate-200">
                    Analytics Overview
                  </div>
                  <div className="text-[9px] text-slate-500">
                    Real-time business metrics
                  </div>
                </div>
                <div className="text-[9px] text-blue-400 bg-[rgba(30,144,255,0.12)] border border-[rgba(30,144,255,0.2)] rounded-lg px-2 py-0.5 font-semibold">
                  Last 30 days
                </div>
              </div>

              <DashboardStatCards />

              <div className="flex gap-2 min-w-0 flex-1">
                <DashboardTopClients />
                <DashboardDonut />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
