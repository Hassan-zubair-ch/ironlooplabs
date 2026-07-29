"use client";

import Reveal from "./Reveal";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import IndustryCard from "./IndustryCard";

export default function Industries() {
  return (
    <section id="industries" className="py-28 bg-[#0b0d10] bg-dark-grid border-t border-b border-white/5 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#a3e635]/[0.03] blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-[#a3e635]/[0.02] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        <Reveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#a3e635] mb-4 block font-bold">
            CONTRACTOR TRADE FOCUS
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white mb-6 uppercase tracking-tight leading-[1.1]">
            BUILT FOR HOME SERVICE BUSINESSES<br className="hidden lg:block" /> THAT <span className="text-[#a3e635]">CAN&apos;T AFFORD A MISSED CALL</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            Purpose-built call answering and follow-up automation for HVAC, plumbing, roofing, and home service businesses across Texas and the US.
          </p>
        </Reveal>

        {/* 4x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {INDUSTRIES_DATA.map((ind, i) => (
            <IndustryCard key={ind.slug} ind={ind} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
