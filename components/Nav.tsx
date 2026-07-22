"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import Image from "next/image";

const LINKS = [
  { href: "#programs", label: "Growth Programs" },
  { href: "#stories", label: "Success Stories" },
  { href: "#industries", label: "Industry Expertise" },
  { href: "#programs", label: "Pricing" },
];

export default function Nav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "programs", "industries", "stories", "contact"]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-surface/80 backdrop-blur-md top-0 sticky z-50 shadow-sm border-b border-white/5"
    >
      <nav className="flex justify-between items-center h-24 px-margin-desktop w-full max-w-container-max mx-auto">
        <a href="#hero" className="flex items-center group cursor-pointer py-2">
          <Image
            src="/logo-black-bg.png"
            alt="IronLoop Labs Logo"
            width={280}
            height={80}
            className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {LINKS.map((link, i) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative font-mono text-label-sm px-4 py-2 transition-colors duration-200 ${
                  isActive ? "text-growth-green" : "text-on-surface-variant hover:text-growth-green"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-[2px] bg-growth-green transition-transform duration-300 origin-left ${
                    isActive ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            );
          })}
        </div>

        <a
          href="#contact"
          className="bg-growth-green text-deep-forest px-6 py-3 rounded-lg font-display text-sm font-bold hover:brightness-110 active:scale-95 transition-all btn-glow-hover"
        >
          Book Consultation
        </a>
      </nav>
    </motion.header>
  );
}
