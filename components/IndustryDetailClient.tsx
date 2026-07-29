"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustryWorkflowDiagram from "./IndustryWorkflowDiagram";
import HighEndCTA from "./HighEndCTA";
import IndustryPrograms from "./IndustryPrograms";
import { IndustryDetail } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

interface Props {
  industry: IndustryDetail;
}

export default function IndustryDetailClient({ industry }: Props) {
  // Trust Indicators to show on every industry page
  const trustCards = [
    { title: "99.99% Uptime SLA", desc: "Enterprise-grade reliability ensuring you never miss a lead.", icon: "verified_user" },
    { title: "SOC2 & HIPAA Ready", desc: "Bank-level encryption protecting your customers' data.", icon: "lock" },
    { title: "Instant Escalation", desc: "Intelligent routing algorithms that bypass downtime instantly.", icon: "speed" }
  ];

  return (
    <main className="bg-[#050505] text-white relative overflow-hidden min-h-screen">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5E033]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      {/* ── 1. Hero Section ── */}
      <section className="pt-20 pb-16 lg:pt-28 lg:pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono font-bold text-[#C5E033] uppercase tracking-widest"
              >
                <span>⚡ {industry.badge}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight"
              >
                {industry.heroHeadline}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl"
              >
                {industry.heroDesc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
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
                  See How It Works
                  <span className="material-symbols-outlined text-lg">play_circle</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Icon & Metrics Glass Panel */}
            <div className="lg:col-span-5 flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[360px] rounded-3xl bg-[#0f1016]/90 border border-white/10 p-8 flex flex-col items-center text-center shadow-2xl backdrop-blur-md relative group"
              >
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5E033] to-transparent rounded-t-3xl" />
                
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#1c2212] to-[#0c0e14] border border-[#C5E033]/40 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(197,224,51,0.2)] group-hover:scale-110 transition-transform duration-500">
                  {getIndustryIconComponent(industry.iconType, "w-14 h-14")}
                </div>

                <h3 className="font-display text-2xl font-extrabold text-white mb-2">{industry.title}</h3>
                <p className="font-body text-xs text-white/50 mb-6">{industry.subtitle}</p>
                
                <div className="w-full pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                  {industry.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      <div className="font-display text-lg font-bold text-[#C5E033]">{m.value}</div>
                      <div className="text-[10px] text-white/50 font-mono uppercase tracking-wider">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. Trust Cards Ribbon ── */}
      <section className="py-12 border-y border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustCards.map((trust, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#0f1016]/80 border border-white/10 shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C5E033]/10 border border-[#C5E033]/20 flex items-center justify-center text-[#C5E033] shrink-0">
                  <span className="material-symbols-outlined text-2xl">{trust.icon}</span>
                </div>
                <div>
                  <h4 className="font-display text-white font-bold mb-1 text-base">{trust.title}</h4>
                  <p className="font-body text-xs text-white/60 leading-relaxed">{trust.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. The Trade Challenge ── */}
      <section className="py-20 lg:py-28 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C5E033] font-bold block mb-4">
             THE {industry.title.toUpperCase()} CHALLENGE
           </span>
           <p className="font-body text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-medium">
             &ldquo;{industry.overview}&rdquo;
           </p>
        </div>
      </section>

      {/* ── 4. SVG Workflow Diagram ── */}
      <section id="diagram" className="py-10 pb-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <IndustryWorkflowDiagram industryTitle={industry.title} steps={industry.workflows} />
        </div>
      </section>

      {/* ── 5. Engineered Capabilities Grid ── */}
      <section className="py-20 lg:py-28 border-t border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#C5E033] block mb-3 font-bold">
              ENGINEERED CAPABILITIES
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-black leading-tight">
              Designed For <span className="text-[#C5E033]">{industry.category}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {industry.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0f1016]/90 border border-white/10 overflow-hidden hover:border-[#C5E033]/40 transition-all duration-500 shadow-xl"
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 rounded-2xl bg-[#C5E033]/10 border border-[#C5E033]/30 flex items-center justify-center mb-6 group-hover:border-[#C5E033] transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-[#C5E033] text-2xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white font-bold mb-3">{feat.title}</h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed flex-grow">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Integrations ── */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/50 font-bold mb-8">
            Native Integrations For Your Tech Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {industry.integrations.map((sys, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#0f1016]/90 border border-white/10 text-white/80 font-mono text-xs px-5 py-2.5 rounded-xl font-bold hover:border-[#C5E033]/40 hover:text-[#C5E033] transition-colors cursor-default shadow-md"
              >
                {sys}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. High-End CTA ── */}
      <section className="py-16 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HighEndCTA industryTitle={industry.title} />
        </div>
      </section>
    </main>
  );
}
