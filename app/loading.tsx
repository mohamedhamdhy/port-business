export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#0A0F2C] z-[9999]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/20 border-t-white" />
        <p className="text-white text-sm tracking-widest">
          Loading Portfolio...
        </p>
      </div>
    </div>
  );
}