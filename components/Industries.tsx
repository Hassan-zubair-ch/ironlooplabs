"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { INDUSTRIES_DATA, IndustryDetail } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

interface CardProps {
  ind: IndustryDetail;
}

function IndustryCard({ ind }: CardProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link href={`/industries/${ind.slug}`} className="block w-full">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        whileHover={{ scale: 1.02, y: -4 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group rounded-2xl h-48 sm:h-52 p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
          isHovered
            ? "bg-[#14161a] border-2 border-[#a3e635] shadow-[0_0_30px_rgba(163,230,53,0.2)]"
            : "bg-[#121417] border border-white/10 hover:bg-[#14161a]"
        }`}
      >
        {/* Mouse Spotlight Grid Mask - Light & transparent grid moving with cursor */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none card-spotlight-grid transition-opacity duration-200"
            style={{
              WebkitMaskImage: `radial-gradient(160px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
              maskImage: `radial-gradient(160px circle at ${mousePos.x}px ${mousePos.y}px, black 25%, transparent 80%)`,
            }}
          />
        )}

        {/* Card Vector Icon & Title */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="mb-3 transition-transform duration-300 group-hover:scale-110">
            {getIndustryIconComponent(ind.iconType, "w-16 h-16 sm:w-18 sm:h-18")}
          </div>
          <h3 className="font-display font-extrabold text-white text-base sm:text-lg tracking-normal group-hover:text-[#a3e635] transition-colors">
            {ind.title}
          </h3>
          <span className="font-mono text-[11px] text-[#a3e635] opacity-0 group-hover:opacity-100 transition-opacity mt-2 flex items-center gap-1">
            Explore Separate Page <span className="material-symbols-outlined text-xs">arrow_forward</span>
          </span>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-[#0b0d10] bg-dark-grid border-t border-b border-white/5 relative overflow-hidden">
      {/* Background Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-growth-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        {/* Header Section matching exact screenshot layout */}
        <Reveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#a3e635] mb-3 block font-semibold">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
            AUTOMATION EXPERTS FOR THE <span className="text-[#a3e635]">HIGH-GROWTH INDUSTRIES</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We provide specialized online marketing &amp; AI workflow automation to healthcare, hospitals, clinics, HVAC, and trade businesses. Click an industry card to view its dedicated separate page.
          </p>
        </Reveal>

        {/* 8-Cards Grid (4 cols x 2 rows) - Each card links directly to its separate page */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind) => (
            <IndustryCard key={ind.slug} ind={ind} />
          ))}
        </div>
      </div>
    </section>
  );
}
