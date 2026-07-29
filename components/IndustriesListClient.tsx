"use client";

import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesListClient() {
  return (
    <main className="bg-[#050505] text-white py-16 lg:py-24 relative overflow-hidden min-h-screen">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5E033]/[0.06] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C5E033] font-mono text-xs font-bold tracking-wider uppercase">
            Contractor Trade Focus
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Built for the trades that<br />
            <span className="text-[#C5E033]">can&apos;t afford a missed call.</span>
          </h1>
          <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Purpose-built call answering and follow-up automation for HVAC, plumbing, roofing, and home service businesses across Texas and the US.
          </p>
        </div>

        {/* 4 Trades Cards Grid using IndustryCard */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {INDUSTRIES_DATA.map((ind, i) => (
            <IndustryCard key={ind.slug} ind={ind} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-[#0f1016]/90 border border-white/10 rounded-3xl p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl backdrop-blur-md relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C5E033] to-transparent" />
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Don&apos;t see your specific trade listed?
          </h3>
          <p className="font-body text-sm sm:text-base text-white/60 max-w-lg mx-auto mb-8">
            IronLoop Labs integrates with all trade workflows that run on phone calls and scheduling CRMs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C5E033] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_25px_rgba(197,224,51,0.25)]"
          >
            Speak with an Automation Architect
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
