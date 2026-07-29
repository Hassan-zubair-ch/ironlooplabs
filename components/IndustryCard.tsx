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

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Link href={`/industries/${ind.slug}`} className="block h-full">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative h-full bg-[#0f1016]/90 border border-white/10 rounded-3xl p-8 min-h-[320px] flex flex-col justify-between cursor-pointer group overflow-hidden transition-all duration-500 hover:border-[#C5E033]/50 shadow-2xl backdrop-blur-md"
          style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
        >
          {/* Top Neon Gradient Bar */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5E033] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Interactive Mouse Radial Glow */}
          <div
            className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(400px circle at var(--x) var(--y), rgba(197, 224, 51, 0.15), transparent 60%)`,
            }}
          />

          <div className="relative z-10 space-y-5">
            {/* Header Row: Large Prominent Icon Badge + Badge Tag */}
            <div className="flex items-start justify-between gap-4">
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#C5E033]/30 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#1b2014] to-[#0c0e14] border border-[#C5E033]/30 group-hover:border-[#C5E033] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-[0_0_25px_rgba(197,224,51,0.15)] relative z-10">
                  {getIndustryIconComponent(ind.iconType, "w-10 h-10")}
                </div>
              </div>

              <span className="inline-block px-3 py-1 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/25 text-[#C5E033] font-mono text-[10px] font-bold uppercase tracking-wider">
                {ind.badge}
              </span>
            </div>

            {/* Title & Description */}
            <div>
              <h3 className="font-display text-2xl font-extrabold text-white group-hover:text-[#C5E033] transition-colors duration-300 mb-2 tracking-tight">
                {ind.title}
              </h3>
              <p className="font-body text-sm text-white/65 leading-relaxed">
                {ind.subtitle}
              </p>
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="relative z-10 pt-6 border-t border-white/[0.06] flex items-center justify-between mt-6">
            <span className="text-xs font-mono text-white/40 uppercase tracking-wider">
              NATIVE DISPATCH INTEGRATION
            </span>
            <div className="flex items-center gap-1.5 text-[#C5E033] font-mono text-xs font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform duration-300">
              <span>Explore</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
