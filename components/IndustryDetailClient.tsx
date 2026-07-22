"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import WorkflowDiagram from "./WorkflowDiagram";
import HighEndCTA from "./HighEndCTA";
import IndustryPrograms from "./IndustryPrograms";
import { IndustryDetail } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

interface Props {
  industry: IndustryDetail;
}

export default function IndustryDetailClient({ industry }: Props) {
  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white relative overflow-hidden">
      {/* ── Metrics Ribbon ── */}
      <section className="py-12 border-b border-white/[0.04]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {industry.metrics.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="detail-stat-card p-6 text-center group"
              >
                <div className="font-display text-3xl lg:text-4xl font-extrabold text-[#a3e635] mb-1 group-hover:scale-105 transition-transform">
                  {m.value}
                </div>
                <div className="font-mono text-xs text-white font-bold uppercase tracking-wider">{m.label}</div>
                <div className="font-body text-[11px] text-on-surface-variant mt-1">{m.subtext}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview Section ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#a3e635] font-bold">INDUSTRY OVERVIEW</span>
              <h2 className="font-display text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                Why <span className="text-[#a3e635]">{industry.title}</span> Needs AI Automation
              </h2>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                {industry.overview}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="bg-[#a3e635] text-[#0b0d10] px-7 py-3.5 rounded-xl font-bold font-display text-sm flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]"
                >
                  Deploy {industry.title} AI
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </div>

            {/* Icon Badge */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-48 h-48 lg:w-56 lg:h-56 rounded-3xl bg-[#111318] border-2 border-[#a3e635]/30 flex items-center justify-center relative group"
              >
                <div className="absolute inset-0 rounded-3xl bg-[#a3e635]/[0.05] blur-2xl group-hover:bg-[#a3e635]/[0.1] transition-all pointer-events-none" />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                  {getIndustryIconComponent(industry.iconType, "w-28 h-28 lg:w-32 lg:h-32")}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Animated Workflow Diagram ── */}
      <section id="diagram" className="py-16 lg:py-20 bg-[#090b0e] border-t border-b border-white/[0.04]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <WorkflowDiagram industryTitle={industry.title} steps={industry.workflows} />
        </div>
      </section>

      {/* ── Capabilities Grid ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] block mb-3 font-bold">
              AUTOMATION CAPABILITIES
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-white font-extrabold">
              Engineered for <span className="text-[#a3e635]">{industry.title}</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {industry.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="feature-card-premium p-7 flex items-start gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/15 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#a3e635] text-2xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-lg text-white font-bold mb-2">{feat.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Integrations ── */}
      <section className="py-16 lg:py-20 bg-[#090b0e] border-t border-b border-white/[0.04]">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] block mb-3 font-bold">
              ENTERPRISE INTEGRATIONS
            </span>
            <h2 className="font-display text-2xl lg:text-3xl text-white font-bold">
              Syncs With Your Existing Software Stack
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {industry.integrations.map((sys, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#111318] border border-white/[0.06] text-white font-mono text-sm px-6 py-3 rounded-xl font-semibold hover:border-[#a3e635]/30 hover:bg-[#a3e635]/[0.05] transition-all cursor-default"
              >
                {sys}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industry Programs ── */}
      <IndustryPrograms industry={industry} />

      {/* ── CTA ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop">
          <HighEndCTA industryTitle={industry.title} />
        </div>
      </section>
    </main>
  );
}
