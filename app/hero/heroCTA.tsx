import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroCTA() {
  return (
    <div className="flex items-center gap-3 flex-wrap mb-8 sm:mb-10">
      <Button
        asChild
        size="lg"
        className="bg-[#1E90FF] text-white font-bold tracking-wide shadow-[0_0_28px_rgba(30,144,255,0.35)] hover:bg-[#1E90FF]/80 hover:-translate-y-0.5 transition-all duration-150"
      >
        <Link href="#contact">
          Get Started <span>→</span>
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="bg-transparent text-[#E2E8F0] font-semibold tracking-wide border-white/15 hover:bg-transparent hover:text-[#60A5FA] hover:border-[#1E90FF]/50 transition-all duration-150"
      >
        <Link href="#portfolio">
          View Projects <span>↗</span>
        </Link>
      </Button>
    </div>
  );
}
