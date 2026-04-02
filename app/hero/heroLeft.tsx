import HeroBadge from './heroBadge';
import HeroTags from './heroTags';
import HeroCTA from './heroCTA';
import HeroSocialProof from './heroSocialProof';

export default function HeroLeft() {
  return (
    <div className="flex-1 min-w-0 grid grid-cols-1 content-start gap-0">
      <HeroBadge />

      <h1 className="mb-4 sm:mb-5 text-[clamp(30px,4.5vw,54px)] font-extrabold text-white leading-[1.1] tracking-[-0.02em]">
        We Build Modern
        <br />
        <span className="text-[#1E90FF]">Digital Solutions</span>
        <br />
        for Growing Businesses
      </h1>

      <p className="mb-6 sm:mb-7 max-w-lg text-[clamp(14px,1.4vw,17px)] text-[#94A3B8] leading-[1.7] font-normal">
        Helping businesses grow and succeed online by delivering scalable,
        high-performance digital solutions that streamline operations, enhance
        user experiences, and drive measurable results.
      </p>

      <HeroTags />
      <HeroCTA />
      <HeroSocialProof />
    </div>
  );
}
