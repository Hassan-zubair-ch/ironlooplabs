"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center px-6 pt-16 pb-20 overflow-hidden bg-[#050505] text-center">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#C5E033]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 shadow-xl">
            <span className="text-[#C5E033]">⚡</span>
            AI-Powered Sales Automation for Home Services
          </div>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white font-display"
        >
          Your AI employee,<br />
          <span className="bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
            working 24/7
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-body"
        >
          IronLoop AI answers every call, books every appointment, and reactivates every dead lead — automatically. Built for roofing, solar, trade, and home service companies.
        </motion.p>

        {/* Action Buttons & Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center gap-3 pt-2"
        >
          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-[#050608] font-display text-base font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              Book a Free Demo
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-display text-base font-bold bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              Compare Solutions
              <span className="material-symbols-outlined text-lg">stacked_line_chart</span>
            </Link>
          </div>
          <p className="text-white/40 text-xs sm:text-sm font-mono mt-1">
            30-minute demo • No commitment
          </p>
        </motion.div>

        {/* Bottom Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12 border-t border-white/10 mt-12"
        >
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">+85%</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              More Booked Jobs
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">3-sec</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              Response Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">10x</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              Concurrent AI Calls
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
