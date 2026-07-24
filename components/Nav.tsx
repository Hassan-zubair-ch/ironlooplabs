"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/success-stories", label: "Success Stories" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`top-0 sticky z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0b0d10]/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-[#0b0d10]/80 backdrop-blur-md border-b border-white/[0.03]"
      }`}
    >
      <nav className="flex justify-between items-center h-20 sm:h-24 lg:h-28 px-6 lg:px-margin-desktop w-full max-w-container-max mx-auto">
        {/* Logo — 50% bigger */}
        <Link href="/" className="flex items-center group cursor-pointer shrink-0">
          <Image
            src="/logo-main.png"
            alt="IronLoop Labs"
            width={420}
            height={120}
            sizes="(max-width: 640px) 240px, (max-width: 1024px) 340px, 420px"
            className="h-14 sm:h-[4.5rem] lg:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            priority
          />
        </Link>

        {/* Desktop Links — bigger text */}
        <div className="hidden lg:flex items-center gap-2">
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-display text-[15px] font-semibold px-5 py-2.5 text-white/70 hover:text-[#a3e635] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-[#a3e635] text-[#0b0d10] px-7 py-3 rounded-xl font-display text-[15px] font-bold hover:brightness-110 active:scale-95 transition-all btn-glow-hover"
          >
            Book Consultation
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label="Menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-[#0b0d10] border-t border-white/[0.06] px-6 pb-6"
        >
          {LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-lg font-semibold text-white/80 hover:text-[#a3e635] py-3 border-b border-white/[0.04] transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 block text-center bg-[#a3e635] text-[#0b0d10] px-6 py-3 rounded-xl font-display text-base font-bold"
          >
            Book Consultation
          </Link>
        </motion.div>
      )}
    </header>
  );
}
