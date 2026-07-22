"use client";

import { useRef, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { INDUSTRIES_DATA, IndustryDetail } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

function IndustryCard({ ind, index }: { ind: IndustryDetail; index: number }) {
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
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px) scale(1.015)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Link href={`/industries/${ind.slug}`} className="block">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="industry-card h-56 sm:h-60 p-6 flex flex-col items-center justify-center cursor-pointer group overflow-hidden"
          style={{ '--x': '50%', '--y': '50%' } as React.CSSProperties}
        >
          {/* Dot grid that reveals on hover */}
          <div
            className="card-dot-grid"
            style={{
              WebkitMaskImage: `radial-gradient(180px circle at var(--x) var(--y), black 20%, transparent 70%)`,
              maskImage: `radial-gradient(180px circle at var(--x) var(--y), black 20%, transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(163,230,53,0.35)]">
              {getIndustryIconComponent(ind.iconType, "w-16 h-16")}
            </div>
            <h3 className="font-display font-extrabold text-white text-base sm:text-lg tracking-tight group-hover:text-[#a3e635] transition-colors duration-300">
              {ind.title}
            </h3>
            <p className="font-body text-xs text-on-surface-variant mt-1 max-w-[180px] opacity-0 group-hover:opacity-80 transition-opacity duration-500">
              {ind.subtitle}
            </p>
            {/* Arrow indicator */}
            <div className="mt-3 flex items-center gap-1 text-[#a3e635] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
              <span className="font-mono text-[11px] font-semibold tracking-wider">EXPLORE</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-[#0b0d10] bg-dark-grid border-t border-b border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#a3e635]/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#a3e635]/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        <Reveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] mb-4 block font-bold">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold text-white mb-6 uppercase tracking-tight leading-[1.1]">
            AUTOMATION EXPERTS FOR<br className="hidden lg:block" /> <span className="text-[#a3e635]">HIGH-GROWTH INDUSTRIES</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Purpose-built AI receptionist and workflow automation for healthcare, HVAC, and trade businesses. Each industry has a dedicated automation page.
          </p>
        </Reveal>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES_DATA.map((ind, i) => (
            <IndustryCard key={ind.slug} ind={ind} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
