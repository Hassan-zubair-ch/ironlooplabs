"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { IndustryDetail } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

interface IndustryCardProps {
  ind: IndustryDetail;
  index: number;
}

export default function IndustryCard({ ind, index }: IndustryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);

    // Subtle 3D tilt based on mouse position
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -4;
    const rotateY = ((x - centerX) / centerX) * 4;
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Link href={`/industries/${ind.slug}`} className="block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-full bg-[#111318] border border-white/[0.06] rounded-2xl p-7 min-h-[260px] flex flex-col items-center text-center cursor-pointer group overflow-hidden transition-all duration-300 hover:border-[#a3e635]/40 hover:bg-[#15181e] shadow-lg"
          style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
        >
          {/* Interactive Glow Effect on Hover */}
          <div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(300px circle at var(--x) var(--y), rgba(163, 230, 53, 0.06), transparent 50%)`,
            }}
          />

          <div className="relative z-10 flex flex-col items-center w-full">
            {/* Icon Container with Professional Styling */}
            <div className="mb-5 relative">
              <div className="absolute inset-0 bg-[#a3e635]/15 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#1a1d24] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-[#a3e635]/40 transition-all duration-500 shadow-xl relative z-10">
                {getIndustryIconComponent(ind.iconType, "w-10 h-10")}
              </div>
            </div>
            
            {/* Texts */}
            <h3 className="font-display text-lg font-bold text-white group-hover:text-[#a3e635] transition-colors duration-300 mb-2">
              {ind.title}
            </h3>
            
            {/* Always visible subtitle */}
            <p className="font-body text-xs text-white/60 leading-relaxed max-w-[220px]">
              {ind.subtitle}
            </p>

            {/* Explore More link (appears on hover) */}
            <div className="mt-auto pt-4 flex items-center justify-center gap-1.5 text-[#a3e635] opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300 font-mono text-[11px] font-bold tracking-widest uppercase">
              <span>Explore More</span>
              <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
