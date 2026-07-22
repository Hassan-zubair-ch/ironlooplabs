"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

export default function Industries() {
  const [selectedSlug, setSelectedSlug] = useState<string>("hospitals-healthcare");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const activeIndustry = INDUSTRIES_DATA.find((item) => item.slug === selectedSlug) || INDUSTRIES_DATA[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section id="industries" className="py-24 bg-[#0a0c0e] bg-dark-grid border-t border-b border-white/5 relative overflow-hidden">
      {/* Ambient radial glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-growth-green/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        {/* Header Section matching exact screenshot */}
        <Reveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5E033] mb-3 block font-semibold">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
            AUTOMATION EXPERTS FOR THE <span className="text-[#C5E033]">HIGH-GROWTH INDUSTRIES</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We provide specialized online marketing &amp; AI workflow automation to health, hospitals, clinics, HVAC, and trade businesses. Select an industry to learn about our specific approach.
          </p>
        </Reveal>

        {/* 8-Cards Grid (4 cols x 2 rows) matching screenshot design */}
        <div 
          onMouseMove={handleMouseMove}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative"
        >
          {INDUSTRIES_DATA.map((ind) => {
            const isSelected = ind.slug === selectedSlug;
            return (
              <motion.div
                key={ind.slug}
                onClick={() => setSelectedSlug(ind.slug)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group rounded-2xl h-48 sm:h-52 p-6 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? "bg-[#13171d] border-2 border-[#C5E033] bg-card-grid shadow-[0_0_35px_rgba(197,224,51,0.22)]"
                    : "bg-[#131518] border border-white/10 hover:border-white/30 hover:bg-[#16191e]"
                }`}
              >
                {/* Mouse-Following Radial Spotlight Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(197, 224, 51, 0.18), transparent 80%)`,
                  }}
                />

                {/* Grid pattern overlay for selected card */}
                {isSelected && (
                  <div className="absolute inset-0 bg-card-grid rounded-2xl pointer-events-none opacity-80" />
                )}

                {/* Card Icon & Title matching exact vector screenshot style */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`transition-transform duration-300 ${isSelected ? "scale-110 drop-shadow-[0_0_15px_rgba(197,224,51,0.4)]" : "group-hover:scale-110"}`}>
                    {getIndustryIconComponent(ind.iconType, "w-16 h-16 sm:w-20 sm:h-20")}
                  </div>
                  <h3 className="font-display font-extrabold text-white text-base sm:text-lg mt-4 tracking-wide">
                    {ind.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Industry Detail Breakdown Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.slug}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121519] border border-[#C5E033]/30 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Top Tag & Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-white/10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#C5E033]/15 border border-[#C5E033]/40 flex items-center justify-center shadow-[0_0_20px_rgba(197,224,51,0.2)]">
                  {getIndustryIconComponent(activeIndustry.iconType, "w-12 h-12")}
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5E033] font-bold uppercase tracking-wider block mb-1">
                    {activeIndustry.badge}
                  </span>
                  <h3 className="font-display text-2xl lg:text-3xl text-white font-extrabold">
                    {activeIndustry.heroHeadline}
                  </h3>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/industries/${activeIndustry.slug}`}
                  className="bg-transparent border border-[#C5E033] text-[#C5E033] px-6 py-3.5 rounded-xl font-bold font-display text-sm hover:bg-[#C5E033] hover:text-[#0B1C0E] transition-all"
                >
                  Full Industry Workflows
                </Link>
                <a
                  href="#contact"
                  className="bg-[#C5E033] text-[#0B1C0E] px-6 py-3.5 rounded-xl font-bold font-display text-sm flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all btn-glow-hover"
                >
                  Deploy AI Intake
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Description & Workflows Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
                  {activeIndustry.overview}
                </p>

                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-white/70 block mb-3 font-semibold">
                    Core AI Capabilities &amp; System Features:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeIndustry.features.map((feat, idx) => (
                      <div key={idx} className="bg-[#171b21] border border-white/5 p-4 rounded-xl flex items-start gap-3">
                        <span className="material-symbols-outlined text-[#C5E033] text-lg shrink-0 mt-0.5">
                          {feat.icon}
                        </span>
                        <div>
                          <h4 className="font-display text-sm text-white font-bold">{feat.title}</h4>
                          <p className="font-body text-xs text-on-surface-variant line-clamp-2 mt-0.5">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metrics & Step Highlights Column */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#171b22] border border-[#C5E033]/20 rounded-2xl p-6">
                  <span className="font-mono text-xs text-[#C5E033] font-bold uppercase tracking-wider block mb-4">
                    AUTOMATED WORKFLOW STEPS
                  </span>
                  <div className="space-y-3">
                    {activeIndustry.workflows.map((wf, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#C5E033] bg-[#C5E033]/10 w-7 h-7 rounded-lg flex items-center justify-center shrink-0">
                          {wf.step}
                        </span>
                        <span className="font-body text-sm text-white font-medium">{wf.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {activeIndustry.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-[#16191f] border border-white/5 rounded-xl p-4 text-center hover:border-[#C5E033]/40 transition-colors"
                    >
                      <div className="font-display text-xl font-extrabold text-[#C5E033] mb-1">
                        {m.value}
                      </div>
                      <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider line-clamp-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
