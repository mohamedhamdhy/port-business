const tags = [
  { label: 'Digital Apps', color: 'blue' },
  { label: 'SaaS', color: 'orange' },
  { label: 'CRM', color: 'teal' },
  { label: 'AI Automation', color: 'purple' },
  { label: 'E-Commerce', color: 'blue' },
] as const;

const colorVariants = {
  blue: 'bg-[rgba(30,144,255,0.12)] text-[#60A5FA] border border-[rgba(30,144,255,0.22)]',
  teal: 'bg-[rgba(0,194,160,0.10)] text-[#34D399] border border-[rgba(0,194,160,0.22)]',
  purple:
    'bg-[rgba(167,139,250,0.10)] text-[#C4B5FD] border border-[rgba(167,139,250,0.22)]',
  orange:
    'bg-[rgba(251,146,60,0.10)] text-[#FB923C] border border-[rgba(251,146,60,0.22)]',
} as const;

export default function HeroTags() {
  return (
    <div className="flex flex-wrap gap-2 mb-7 sm:mb-8">
      {tags.map(({ label, color }) => (
        <span
          key={label}
          className={`text-[11px] font-semibold tracking-[0.05em] uppercase px-3.25 py-1.25 rounded-full ${colorVariants[color]}`}
        >
          {label}
        </span>
      ))}
    </div>
  );
}
