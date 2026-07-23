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
    <main className="bg-[#0b0d10] bg-dark-grid text-white relative overflow-hidden">
      {/* ── Overview & Icon Hero Section ── */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="font-mono text-xs uppercase tracking-[0.25em] text-[#0b0d10] bg-[#a3e635] px-4 py-1.5 rounded-full font-bold inline-block"
              >
                {industry.badge}
              </motion.span>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-display text-4xl sm:text-5xl lg:text-[56px] font-black text-white leading-[1.1] tracking-tight"
              >
                {industry.heroHeadline}
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="font-body text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl"
              >
                {industry.heroDesc}
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="pt-6"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 bg-[#a3e635] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(163,230,53,0.3)]"
                >
                  Deploy AI Architecture
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </motion.div>
            </div>

            {/* Right Icon & Metrics Badge */}
            <div className="lg:col-span-5 flex justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                viewport={{ once: true }}
                className="w-[280px] h-[280px] lg:w-[340px] lg:h-[340px] rounded-[40px] bg-[#111318] border border-white/10 flex items-center justify-center relative group shadow-2xl"
              >
                <div className="absolute inset-0 rounded-[40px] bg-[#a3e635]/[0.08] blur-3xl group-hover:bg-[#a3e635]/[0.15] transition-all duration-700 pointer-events-none" />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700 ease-out">
                  {getIndustryIconComponent(industry.iconType, "w-32 h-32 lg:w-40 lg:h-40")}
                </div>
                
                {/* Floating Metric Badge */}
                <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 bg-[#1a1d24] border border-[#a3e635]/40 rounded-2xl p-4 shadow-xl flex items-center gap-4 animate-float">
                   <div className="w-10 h-10 rounded-full bg-[#a3e635]/20 flex items-center justify-center text-[#a3e635]">
                     <span className="material-symbols-outlined">analytics</span>
                   </div>
                   <div>
                     <div className="font-display text-xl font-black text-white">{industry.metrics[0].value}</div>
                     <div className="text-[10px] text-white/50 font-mono uppercase tracking-wider">{industry.metrics[0].label}</div>
                   </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Trust Cards & Metrics Ribbon ── */}
      <section className="py-12 bg-[#090b0e] border-y border-white/[0.04]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {trustCards.map((trust, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#111318]/50 border border-white/[0.05] hover:border-[#a3e635]/20 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] shrink-0">
                  <span className="material-symbols-outlined">{trust.icon}</span>
                </div>
                <div>
                  <h4 className="font-display text-white font-bold mb-1">{trust.title}</h4>
                  <p className="font-body text-xs text-white/50 leading-relaxed">{trust.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Problem & Solution Overview ── */}
      <section className="py-20 lg:py-28 relative">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop text-center">
           <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] font-bold block mb-4">
             THE {industry.title.toUpperCase()} CHALLENGE
           </span>
           <p className="font-body text-xl lg:text-3xl text-white/80 leading-relaxed max-w-4xl mx-auto font-medium">
             {industry.overview}
           </p>
        </div>
      </section>

      {/* ── Custom SVG Workflow Diagram ── */}
      <section id="diagram" className="py-10 pb-20">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <IndustryWorkflowDiagram industryTitle={industry.title} steps={industry.workflows} />
        </div>
      </section>

      {/* ── Precision Capabilities Grid ── */}
      <section className="py-20 lg:py-28 bg-[#090b0e] border-t border-b border-white/[0.04]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] block mb-3 font-bold">
              ENGINEERED CAPABILITIES
            </span>
            <h2 className="font-display text-3xl lg:text-5xl text-white font-black leading-tight">
              Designed For <span className="text-[#a3e635]">{industry.category}</span>
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
                className="group relative p-8 lg:p-10 rounded-3xl bg-[#111318] border border-white/[0.06] overflow-hidden hover:border-[#a3e635]/30 transition-all duration-500"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#a3e635]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#a3e635]/15 transition-all duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-[#1a1d24] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#a3e635]/40 transition-colors shadow-lg">
                    <span className="material-symbols-outlined text-[#a3e635] text-3xl">{feat.icon}</span>
                  </div>
                  <h3 className="font-display text-2xl text-white font-bold mb-3">{feat.title}</h3>
                  <p className="font-body text-[15px] text-white/60 leading-relaxed flex-grow">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations Ribbon ── */}
      <section className="py-16">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center mb-10">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-white/50 font-bold">
              Native Integrations For Your Tech Stack
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industry.integrations.map((sys, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#111318] border border-white/[0.1] text-white/80 font-mono text-sm px-6 py-3 rounded-xl font-semibold hover:border-[#a3e635]/40 hover:text-[#a3e635] transition-colors cursor-default shadow-md"
              >
                {sys}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Programs ── */}
      <IndustryPrograms industry={industry} />

      {/* ── High-End CTA ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <HighEndCTA industryTitle={industry.title} />
        </div>
      </section>
    </main>
  );
}
