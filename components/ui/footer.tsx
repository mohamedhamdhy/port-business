'use client'
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const socialLinks = [
  {
    label: "Email",
    href: "mailto:hello@hmdesign.com",
    color: "#EA4335",
    hoverBg: "hover:bg-[#EA4335]/10 hover:border-[#EA4335]/40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.25 sm:h-4.25">
        <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    color: "#0A66C2",
    hoverBg: "hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.25 sm:h-4.25">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com",
    color: "#ffffff",
    hoverBg: "hover:bg-white/10 hover:border-white/30",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.25 sm:h-4.25">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/1234567890",
    color: "#25D366",
    hoverBg: "hover:bg-[#25D366]/10 hover:border-[#25D366]/40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.25 sm:h-4.25">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "Call",
    href: "tel:+1234567890",
    color: "#34C759",
    hoverBg: "hover:bg-[#34C759]/10 hover:border-[#34C759]/40",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4.25 sm:h-4.25">
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black border-t border-white/8">
      <div className="h-px w-full bg-linear-to-r from-transparent via-primary/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="py-10 sm:py-12 lg:py-16 xl:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16 xl:gap-20">

          <div className="flex flex-col gap-4 sm:gap-5">
            <Link href="#home" className="flex items-center gap-3 group w-fit">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 shrink-0">
                <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary via-primary/80 to-primary/60 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                  <span className="text-white font-black text-[10px] sm:text-xs lg:text-sm tracking-widest">
                    HMD
                  </span>
                </div>
                <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
              </div>
            </Link>

            <p className="text-gray-400 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-xs">
              Crafting digital experiences that convert. We design and build products that people love to use.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-gray-500 text-[11px] sm:text-xs tracking-wider uppercase font-medium">
                Available for projects
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5">
            <h3 className="text-white text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase">
              Navigation
            </h3>
            <nav className="grid grid-cols-2 gap-x-6 gap-y-1.5 sm:gap-y-2">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative group flex items-center gap-2 text-gray-400 hover:text-white text-xs sm:text-sm lg:text-[15px] font-medium tracking-wide transition-all duration-200 py-1 w-fit"
                >
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 sm:gap-5 sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase">
              Get in Touch
            </h3>

            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {socialLinks.map(({ label, href, color, hoverBg, icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className={`group flex items-center gap-2 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-xl border border-white/10 bg-white/4 ${hoverBg} transition-all duration-200`}
                  style={{ "--social-color": color } as React.CSSProperties}
                >
                  <span
                    className="transition-colors duration-200"
                    style={{ color: "rgba(156,163,175,1)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(156,163,175,1)")}
                  >
                    {icon}
                  </span>
                  <span className="text-gray-400 group-hover:text-white text-[11px] sm:text-xs font-medium tracking-wide transition-colors duration-200">
                    {label}
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-1 p-3.5 sm:p-4 rounded-xl border border-white/8 bg-white/2">
              <p className="text-gray-500 text-[11px] sm:text-xs mb-1.5">Business inquiries</p>
              <a
                href="mailto:hello@hmdesign.com"
                className="text-white text-xs sm:text-sm font-medium hover:text-primary transition-colors duration-200 tracking-wide"
              >
                hello@hmdesign.com
              </a>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-white/8 to-transparent" />

        <div className="py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-gray-600 text-[11px] sm:text-xs tracking-wide text-center sm:text-left">
            © {currentYear} <span className="text-gray-500 font-medium">HMDesign</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-4 sm:gap-5">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-gray-600 hover:text-gray-400 text-[11px] sm:text-xs tracking-wide transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}