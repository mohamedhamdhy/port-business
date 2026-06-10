"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={"bg-[#0A0F2C] w-full sticky top-0 z-50 "}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
          <div className="h-14 sm:h-16 lg:h-17.5 xl:h-20 flex items-center justify-between gap-4">

            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="#home" onClick={handleNavClick} className="flex items-center gap-2 sm:gap-3 group">
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 xl:w-12 xl:h-12 shrink-0">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-primary via-primary/80 to-primary/60 group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-xl flex items-center justify-center">
                    <span className="text-white font-black text-[10px] sm:text-xs lg:text-sm xl:text-base tracking-widest">
                      HMD
                    </span>
                  </div>
                  <div className="absolute inset-0 rounded-xl ring-1 ring-white/20 group-hover:ring-white/40 transition-all duration-300" />
                </div>

              </Link>
            </div>

            <nav className="hidden md:flex items-center gap-1 lg:gap-2 xl:gap-4">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative group px-1 py-1.5 lg:py-2 text-gray-400 hover:text-white text-xs lg:text-sm xl:text-[15px] font-medium tracking-wide transition-colors duration-200"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 h-[1.5px] w-0 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              <Link
                href="#contact"
                className="hidden md:inline-flex relative overflow-hidden px-3.5 lg:px-5 xl:px-6 py-2 lg:py-2.5 rounded-lg text-xs lg:text-sm xl:text-[15px] font-semibold text-white bg-primary hover:bg-primary/90 transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
              </Link>

              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
                className="md:hidden flex flex-col justify-center items-center w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200 gap-1.25 shrink-0"
              >
                <span
                  className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    menuOpen ? "w-5 rotate-45 translate-y-[6.5px]" : "w-5"
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-white transition-all duration-300 ${
                    menuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] bg-white transition-all duration-300 origin-center ${
                    menuOpen ? "w-5 -rotate-45 -translate-y-[6.5px]" : "w-5"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div
          className={`absolute left-0 right-0 top-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-0"
          }`}
        />
      </header>

      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(false)}
        />

        <div
          className={`absolute top-14 sm:top-16 left-0 right-0 bg-[#0A0F2C] border-b border-white/8 transition-all duration-300 ease-out ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3"
          }`}
        >
          <nav className="px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-1">
            {navLinks.map(({ label, href }, i) => (
              <Link
                key={href}
                href={href}
                onClick={handleNavClick}
                className="flex items-center gap-3 px-4 py-3 sm:py-3.5 rounded-xl text-gray-300 hover:text-white hover:bg-white/6 text-sm sm:text-[15px] font-medium tracking-wide transition-all duration-200 group"
                style={{
                  transitionDelay: menuOpen ? `${i * 30}ms` : "0ms",
                }}
              >
                <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:scale-150 transition-all duration-200" />
                {label}
              </Link>
            ))}

            <div className="mt-3 pt-3 border-t border-white/8">
              <Link
                href="#contact"
                onClick={handleNavClick}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 sm:py-3.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-sm sm:text-[15px] font-semibold tracking-wide transition-all duration-200 shadow-lg shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}