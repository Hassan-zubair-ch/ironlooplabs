"use client";

import Link from "next/link";
import Image from "next/image";
import { productsData } from "@/lib/productsData";

const FOOTER_LINKS = {
  Company: [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Contact Us", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#050608] border-t border-white/[0.05] overflow-hidden">
      {/* Top subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#a3e635]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[40px] bg-[#a3e635]/10 blur-[40px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop pt-24 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-16">
          
          {/* Brand & Newsletter Column */}
          <div className="lg:col-span-5 pr-0 lg:pr-10">
            <Link href="/" className="inline-block mb-8">
              <Image
                src="/logo-main.png"
                alt="IronLoop Labs"
                width={420}
                height={120}
                className="h-10 lg:h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="font-body text-[15px] text-white/70 mb-8 max-w-sm leading-relaxed">
              Enterprise-grade AI infrastructure for the modern trades. We build autonomous voice and dispatch systems that never sleep, never miss a lead, and perfectly execute your standard operating procedures.
            </p>
            
            <div className="space-y-4">
               <h4 className="font-mono text-[10px] text-white/70 uppercase tracking-widest font-bold">Subscribe to Updates</h4>
               <form className="relative flex items-center max-w-sm">
                  <span className="material-symbols-outlined absolute left-4 text-white/50 text-lg">mail</span>
                  <input
                    aria-label="Email address"
                    className="bg-white/[0.02] border border-white/[0.06] text-white rounded-full w-full placeholder:text-white/50 transition-all pl-12 pr-32 py-3.5 text-sm focus:border-[#a3e635]/40 focus:bg-white/[0.04] focus:outline-none"
                    placeholder="Enter enterprise email"
                    type="email"
                  />
                  <button aria-label="Subscribe" type="submit" className="absolute right-1.5 bg-white text-[#050608] px-5 py-2.5 rounded-full hover:bg-[#a3e635] active:scale-95 transition-all font-bold text-xs">
                    Subscribe
                  </button>
               </form>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 pt-2">
            <div>
              <h3 className="font-display text-[15px] text-white font-semibold mb-6">Product</h3>
              <ul className="space-y-4">
                {productsData.map((prod) => (
                  <li key={prod.slug}>
                    <Link href={`/products/${prod.slug}`} className="font-body text-[14px] text-white/70 hover:text-[#a3e635] transition-colors duration-200">
                      {prod.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-[15px] text-white font-semibold mb-6">Company</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.Company.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-body text-[14px] text-white/70 hover:text-[#a3e635] transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display text-[15px] text-white font-semibold mb-6">Legal & Trust</h3>
              <ul className="space-y-4">
                {FOOTER_LINKS.Legal.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="font-body text-[14px] text-white/70 hover:text-white transition-colors duration-200">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-white/70 text-[11px] font-mono tracking-widest uppercase font-bold">
             <div className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] animate-pulse" />
             ALL SYSTEMS OPERATIONAL
          </div>
          
          <p className="font-body text-[13px] text-white/70">
            © {new Date().getFullYear()} IronLoop Labs, Inc. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="https://www.linkedin.com/company/ironlooplabs" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-[#a3e635]/30 hover:text-[#a3e635] transition-all">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a aria-label="Facebook" href="https://web.facebook.com/profile.php?id=61592446882012" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-[#a3e635]/30 hover:text-[#a3e635] transition-all">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/ironlooplabs/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-white/70 hover:text-white hover:bg-white/[0.1] hover:border-[#a3e635]/30 hover:text-[#a3e635] transition-all">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
