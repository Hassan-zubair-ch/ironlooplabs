"use client";

import Link from "next/link";
import Image from "next/image";

const FOOTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Solutions", href: "/solutions" },
  { label: "Pricing", href: "/pricing" },
  { label: "Book a Demo", href: "/contact" },
  { label: "Compare", href: "/compare" },
  { label: "Case Studies", href: "/case-studies" },
];

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-12 relative border-t border-white/[0.06]">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* TOP ROW: LOGO, NAV LINKS, SOCIALS */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo-main.png"
              alt="IronLoop Labs"
              width={340}
              height={90}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {FOOTER_NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-sm font-semibold text-white/70 hover:text-[#C5E033] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 shrink-0">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/ironlooplabs"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#C5E033]/50 transition-all"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ironlooplabs/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#C5E033]/50 transition-all"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://web.facebook.com/profile.php?id=61592446882012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-[#C5E033]/50 transition-all"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>

        {/* HORIZONTAL DIVIDER LINE */}
        <div className="border-t border-white/[0.08] mb-12" />

        {/* BOTTOM ROW: NEWSLETTER INTAKE & LEGAL / COPYRIGHT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Newsletter Intake */}
          <div className="w-full lg:w-auto">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-md"
            >
              <input
                type="email"
                placeholder="Enter your email address"
                aria-label="Enter your email address"
                className="px-6 py-3.5 rounded-full bg-white/[0.04] border border-white/10 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-[#C5E033]/50 flex-grow"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-full bg-white text-[#050608] font-display text-sm font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all inline-flex items-center justify-center gap-1 shrink-0 shadow-lg"
              >
                Subscribe →
              </button>
            </form>
            <p className="font-mono text-xs text-white/40 mt-3 text-center sm:text-left">
              By subscribing, you agree to our{" "}
              <Link href="/privacy-policy" className="underline hover:text-white">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          {/* Legal Links & Copyright */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-6 text-sm text-white/60 font-body">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-white/40 font-mono text-xs">
              © {new Date().getFullYear()} IronLoop AI®
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
