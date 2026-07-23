"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import IndustryWorkflowDiagram from "./IndustryWorkflowDiagram";
import HighEndCTA from "./HighEndCTA";
import { ProductData } from "@/lib/productsData";

interface Props {
  prod: ProductData;
}

export default function ProductDetailClient({ prod }: Props) {
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
                <Link href="/products" className="text-white/40 hover:text-[#a3e635] font-mono text-[11px] uppercase tracking-widest font-bold transition-colors">Products</Link>
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
                  className="bg-[#a3e635] text-[#050608] px-8 py-4 rounded-xl font-display font-bold text-sm uppercase tracking-wide hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(163,230,53,0.15)] flex items-center gap-2"
                >
                  Deploy {prod.name}
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Icon/Visual */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[400px] lg:min-h-[500px]">
              {/* Core Glow */}
              <div className="absolute w-[300px] h-[300px] bg-[#a3e635]/10 rounded-full blur-[80px] animate-pulse pointer-events-none" />
              
              {/* Outer Dashed Ring (Rotating Slow) */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border-[1px] border-dashed border-white/10 pointer-events-none"
              />
              
              {/* Middle Solid Ring (Rotating Fast Opposite) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[280px] h-[280px] rounded-full border border-[#a3e635]/20 flex items-center justify-center pointer-events-none"
              >
                 <div className="absolute top-0 w-2 h-2 bg-[#a3e635] rounded-full shadow-[0_0_10px_#a3e635]" />
                 <div className="absolute bottom-0 w-2 h-2 bg-white/30 rounded-full" />
              </motion.div>
              
              {/* Inner Glowing Core Container */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="relative w-[160px] h-[160px] rounded-full bg-gradient-to-br from-[#111318] to-[#090a0f] border border-[#a3e635]/30 shadow-[0_0_40px_rgba(163,230,53,0.15)] flex items-center justify-center z-10 group cursor-default"
              >
                <div className="absolute inset-0 rounded-full border border-[#a3e635]/50 scale-105 opacity-0 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500" />
                <span 
                  className="material-symbols-outlined text-[#a3e635] drop-shadow-[0_0_20px_rgba(163,230,53,0.6)] transition-transform duration-500 group-hover:scale-110" 
                  style={{ fontSize: "72px" }}
                >
                  {prod.heroIcon}
                </span>
              </motion.div>

              {/* Floating Element 1 */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-4 lg:left-0 w-12 h-12 rounded-xl bg-[#0b0d10] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm z-20"
              >
                <span className="material-symbols-outlined text-white/50 text-[20px]">sync</span>
              </motion.div>

              {/* Floating Element 2 */}
              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-16 right-4 lg:right-0 w-14 h-14 rounded-xl bg-[#0b0d10] border border-white/10 flex items-center justify-center shadow-lg backdrop-blur-sm z-20"
              >
                <span className="material-symbols-outlined text-[#a3e635]/70 text-[24px]">api</span>
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* ── 2. METRICS SECTION ── */}
      <section className="py-12 border-b border-white/[0.03] bg-[#0b0d10]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]">
            {prod.metrics.map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`py-8 md:py-4 flex flex-col items-center text-center ${
                  i === 0 ? "md:pr-8" : i === 2 ? "md:pl-8" : "md:px-8"
                }`}
              >
                <div className="font-display text-4xl lg:text-5xl font-black text-white mb-2 tracking-tight">
                  {metric.value}
                </div>
                <div className="font-mono text-[11px] text-[#a3e635] uppercase tracking-widest font-bold mb-1">
                  {metric.label}
                </div>
                <div className="font-body text-sm text-white/40">
                  {metric.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WORKFLOW PIPELINE ── */}
      <section className="py-24 lg:py-32 relative">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
          >
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-6">
              How the {prod.name} Works
            </h2>
            <p className="font-body text-lg text-white/50 leading-relaxed">
              Our autonomous pipelines are designed for reliability. Data moves seamlessly through validation checks before executing real-world actions.
            </p>
          </motion.div>

          <IndustryWorkflowDiagram 
            industryTitle={prod.workflowTitle} 
            steps={prod.workflowSteps} 
          />
        </div>
      </section>

      {/* ── 4. CAPABILITIES GRID ── */}
      <section className="py-24 lg:py-32 bg-[#0b0d10] border-t border-white/[0.03]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4">Core Capabilities</h2>
            <p className="font-body text-lg text-white/50 max-w-2xl">Enterprise-grade features engineered directly into the {prod.name}.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {prod.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#050608] border border-white/[0.05] rounded-3xl p-8 lg:p-10 hover:border-[#a3e635]/30 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-8 transition-transform group-hover:scale-110">
                  <span className="material-symbols-outlined text-2xl">{feature.icon}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="font-body text-white/50 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. INTEGRATIONS ── */}
      <section className="py-24 lg:py-32 border-t border-white/[0.03]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop text-center">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-white mb-12">
            Native Integrations for {prod.name}
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
            {prod.integrations.map((integration, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-4 rounded-xl bg-[#0b0d10] border border-white/[0.05] font-display text-white/70 font-bold tracking-wide hover:text-white hover:border-white/[0.1] transition-all"
              >
                {integration}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <HighEndCTA />
    </main>
  );
}
