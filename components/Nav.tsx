"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare", label: "Compare" },
  { href: "/case-studies", label: "Case Studies" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-4 sm:top-6 z-50 px-4 sm:px-6 w-full max-w-7xl mx-auto pointer-events-none mb-8">
      <nav className="pointer-events-auto rounded-full bg-[#0c0e14]/90 backdrop-blur-2xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)] px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center group cursor-pointer shrink-0">
          <Image
            src="/logo-main.webp"
            alt="IronLoop Labs"
            width={360}
            height={100}
            priority
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* LEFT VERTICAL DIVIDER */}
        <div className="hidden lg:block w-[1px] h-6 bg-white/15 mx-4 shrink-0" />

        {/* CENTER NAV LINKS */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2 flex-grow justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-sm font-semibold px-4 py-2 text-white/70 hover:text-[#C5E033] transition-colors duration-200 tracking-wide rounded-full hover:bg-white/[0.04]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* RIGHT VERTICAL DIVIDER */}
        <div className="hidden lg:block w-[1px] h-6 bg-white/15 mx-4 shrink-0" />

        {/* RIGHT ACTION BUTTON */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-[#12141d] border border-white/20 text-white font-display text-sm font-bold hover:bg-white hover:text-[#050608] hover:border-white active:scale-95 transition-all shadow-md group"
          >
            Book a Demo
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-1 shrink-0"
            aria-label="Toggle Menu"
          >
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-4 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </button>
        </div>
      </nav>

      {/* MOBILE EXPANDED MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto mt-3 rounded-3xl bg-[#0c0e14]/95 backdrop-blur-2xl border border-white/15 p-6 shadow-2xl lg:hidden flex flex-col gap-3"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-base font-semibold text-white/80 hover:text-[#C5E033] py-2 px-4 rounded-xl hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 block text-center py-3 px-6 rounded-full bg-[#C5E033] text-[#0b0d10] font-display text-base font-bold shadow-lg"
            >
              Book a Demo
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
