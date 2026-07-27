"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const CASE_CARDS = [
  {
    floatingTag: "Real Audio Examples",
    subTag: "Live Recordings",
    metric: "100+",
    metricSub: "Real AI call recordings",
    desc: "Listen to actual AI conversations handling inbound leads, follow-ups, and appointment booking — from real customer interactions.",
    linkText: "Listen now →",
    href: "/success-stories",
  },
  {
    floatingTag: "Screenshots & Results",
    subTag: "Verified Metrics",
    metric: "3×",
    metricSub: "Average pipeline growth",
    desc: "See actual dashboards, booking rates, revenue recovery numbers, and business outcomes — no hypotheticals.",
    linkText: "View results →",
    href: "/success-stories",
  },
  {
    floatingTag: "Before & After Stories",
    subTag: "Industry Blueprints",
    metric: "14d",
    metricSub: "Average time to first closed deal",
    desc: "Roofing, solar, HVAC, real estate — understand the challenges and see exactly how AI automation solved them.",
    linkText: "Read stories →",
    href: "/success-stories",
  },
];

export default function CaseStudiesPreview() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate active card every 4 seconds unless hovered
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  useEffect(() => {
    if (!isAutoRotating) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CASE_CARDS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoRotating]);

  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-4">
              CASE STUDIES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Real success stories. <br />
              <span className="text-white/90">Real businesses.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Discover how trade, contractor, and service companies achieved remarkable results with AI automation.
            </p>
          </motion.div>
        </div>

        {/* 3 Interactive Cards Container */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end mb-16 pt-16 relative"
          onMouseEnter={() => setIsAutoRotating(false)}
          onMouseLeave={() => setIsAutoRotating(true)}
        >
          {CASE_CARDS.map((card, i) => {
            const isActive = activeIndex === i;

            return (
              <div key={i} className="relative flex flex-col items-center">
                {/* Floating Badge & Pointer Line when Active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-14 z-20 flex flex-col items-center pointer-events-none"
                    >
                      <div className="px-4 py-1.5 rounded-full bg-[#0d0e14] border border-white/20 text-white font-mono text-xs font-semibold shadow-2xl backdrop-blur-md">
                        {card.floatingTag}
                      </div>
                      <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-[#C5E033]" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Card */}
                <motion.div
                  onClick={() => setActiveIndex(i)}
                  animate={{
                    scale: isActive ? 1.04 : 0.96,
                    borderColor: isActive ? "rgba(197, 224, 51, 0.4)" : "rgba(255, 255, 255, 0.08)",
                    opacity: isActive ? 1 : 0.6,
                  }}
                  transition={{ duration: 0.4 }}
                  className={`w-full bg-[#0f1016]/90 rounded-3xl border p-8 lg:p-10 cursor-pointer transition-all duration-300 shadow-2xl flex flex-col justify-between ${
                    isActive ? "shadow-[0_0_40px_rgba(197,224,51,0.12)] bg-[#12141c]" : "hover:opacity-90"
                  }`}
                >
                  <div>
                    {/* Subtag */}
                    <div className="flex items-center gap-2 mb-6">
                      <span className={`w-2 h-2 rounded-full ${isActive ? "bg-[#C5E033] animate-pulse" : "bg-white/30"}`} />
                      <span className="font-mono text-xs font-semibold text-white/50">{card.subTag}</span>
                    </div>

                    {/* Metric */}
                    <div className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight mb-1">
                      {card.metric}
                    </div>
                    <div className="font-mono text-xs text-white/40 mb-6 font-medium">{card.metricSub}</div>

                    {/* Description */}
                    <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed mb-8">
                      {card.desc}
                    </p>
                  </div>

                  {/* Action Link */}
                  <Link
                    href={card.href}
                    className={`font-mono text-xs font-bold transition-colors inline-flex items-center gap-1 ${
                      isActive ? "text-[#C5E033] hover:underline" : "text-white/40 hover:text-white"
                    }`}
                  >
                    {card.linkText}
                  </Link>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Button */}
        <div className="text-center">
          <Link
            href="/success-stories"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#050608] font-display text-sm font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all shadow-xl"
          >
            View All Case Studies
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
