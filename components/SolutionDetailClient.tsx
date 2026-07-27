"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustryWorkflowDiagram from "./IndustryWorkflowDiagram";
import HighEndCTA from "./HighEndCTA";
import { ProductData } from "@/lib/productsData";

interface Props {
  prod: ProductData;
}

export default function SolutionDetailClient({ prod }: Props) {
  return (
    <main className="min-h-screen bg-[#050608] selection:bg-[#a3e635]/30 selection:text-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden pt-28 lg:pt-40 pb-20 lg:pb-32 border-b border-white/[0.05]">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a3e635]/[0.05] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
        
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-8"
              >
                <Link href="/solutions" className="text-white/40 hover:text-[#a3e635] font-mono text-[11px] uppercase tracking-widest font-bold transition-colors">Solutions</Link>
                <span className="text-white/20">/</span>
                <span className="text-[#a3e635] font-mono text-[11px] uppercase tracking-widest font-bold">{prod.name}</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-8"
              >
                {prod.name}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-body text-lg lg:text-xl text-white/60 leading-relaxed max-w-2xl mb-12"
              >
                {prod.heroDesc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <Link 
                  href="/contact"
                  className="bg-[#a3e635] text-[#050608] px-8 py-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)]"
                >
                  Deploy {prod.name}
                </Link>
                <Link 
                  href="/pricing"
                  className="bg-white/[0.03] border border-white/[0.08] text-white px-8 py-4 rounded-xl font-display text-sm font-bold uppercase tracking-wider hover:bg-white/[0.08] hover:border-white/20 active:scale-95 transition-all"
                >
                  View Pricing
                </Link>
              </motion.div>
            </div>

            {/* Right Card / Icon Graphic */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative bg-gradient-to-br from-[#111318] to-[#08090d] rounded-3xl border border-white/[0.08] p-10 lg:p-12 shadow-2xl overflow-hidden group"
              >
                <div className="w-20 h-20 rounded-3xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-10 transition-transform duration-700 group-hover:scale-110">
                  <span className="material-symbols-outlined text-4xl">{prod.heroIcon}</span>
                </div>

                <div className="space-y-6">
                  {prod.metrics.map((m, idx) => (
                    <div key={idx} className="border-b border-white/[0.05] pb-6 last:border-0 last:pb-0">
                      <div className="font-display text-3xl font-black text-white mb-1">{m.value}</div>
                      <div className="font-body text-sm text-white/70 font-semibold">{m.label}</div>
                      <div className="font-mono text-xs text-white/40">{m.subtext}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WORKFLOW DIAGRAM ── */}
      <section className="py-24 lg:py-32 bg-[#050608]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {prod.workflowTitle}
            </h2>
            <p className="font-body text-white/60 text-base">
              Automated execution steps from initial trigger to CRM completion.
            </p>
          </div>

          <IndustryWorkflowDiagram industryTitle={prod.name} steps={prod.workflowSteps} />
        </div>
      </section>

      {/* ── 3. FEATURES GRID ── */}
      <section className="py-24 lg:py-32 bg-[#08090e] border-t border-white/[0.05]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Core Capabilities & Features
            </h2>
            <p className="font-body text-white/60 text-base">
              Built natively to handle enterprise volume and strict operational compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prod.features.map((feat, i) => (
              <div
                key={i}
                className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 shadow-xl hover:border-[#a3e635]/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-6">
                  <span className="material-symbols-outlined text-2xl">{feat.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{feat.title}</h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. HIGH END CTA ── */}
      <HighEndCTA />
    </main>
  );
}
