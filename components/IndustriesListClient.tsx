"use client";

import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesListClient() {
  const homeServiceTrades = [
    {
      slug: "hvac-services",
      title: "HVAC & Climate Control",
      seoH2: "24/7 Emergency Dispatch Answering for HVAC Companies",
      desc: "A no-AC call at 9pm on a Saturday is worth a same-week job if someone picks up. We make sure someone — or something — does.",
      icon: "thermostat",
    },
    {
      slug: "plumbing-urgent",
      title: "Plumbing & Urgent Repairs",
      seoH2: "After-Hours Call Answering for Plumbers",
      desc: "Leaks don't wait for business hours. Callers get triaged and booked immediately, day or night.",
      icon: "plumbing",
    },
    {
      slug: "home-repair-services",
      title: "Roofing & General Contracting",
      seoH2: "Estimate Follow-Up Automation for Roofing Companies",
      desc: "Estimates that don't get followed up die quietly. We keep following up until they either book or clearly say no.",
      icon: "home_repair_service",
    },
    {
      slug: "pest-lawn-care",
      title: "Pest & Lawn Care",
      seoH2: "Seasonal Call Volume Handling for Pest & Lawn Companies",
      desc: "Spring and summer spikes stop overwhelming your front desk — every call still gets answered and booked.",
      icon: "grass",
    },
  ];

  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#C5E033]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C5E033] font-mono text-xs font-semibold tracking-wider uppercase">
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

        {/* 4 Trades Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {homeServiceTrades.map((trade, i) => (
            <div
              key={i}
              className="industry-card p-8 flex flex-col justify-between relative overflow-hidden group"
            >
              <div className="card-dot-grid" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-[#C5E033]/10 border border-[#C5E033]/20 flex items-center justify-center text-[#C5E033] mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">{trade.icon}</span>
                </div>
                <h2 className="text-xs font-mono font-bold text-[#C5E033] uppercase tracking-wider mb-2">
                  {trade.seoH2}
                </h2>
                <h3 className="font-display text-2xl font-bold text-white mb-3">
                  {trade.title}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                  {trade.desc}
                </p>
              </div>

              <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40">NATIVE DISPATCH INTEGRATION</span>
                <Link
                  href={`/industries/${trade.slug}`}
                  className="text-xs font-mono font-bold text-[#C5E033] hover:underline flex items-center gap-1"
                >
                  Explore Industry Solutions &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-[#0f1016]/90 border border-white/10 rounded-3xl p-8 max-w-3xl mx-auto shadow-2xl">
          <h3 className="font-display text-2xl font-bold text-white mb-2">
            Don&apos;t see your specific trade listed?
          </h3>
          <p className="font-body text-sm text-white/60 max-w-md mx-auto mb-6">
            IronLoop Labs integrates with all trade workflows that run on phone calls and scheduling CRMs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#C5E033] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(197,224,51,0.2)]"
          >
            Speak with an Automation Architect
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
