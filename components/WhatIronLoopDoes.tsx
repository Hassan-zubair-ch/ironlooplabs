"use client";

import { motion } from "framer-motion";

export default function WhatIronLoopDoes() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Subtle Dot Grid Background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`
        }}
      />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl lg:text-6xl font-extrabold text-white tracking-tight mb-6">
              What IronLoop AI does
            </h2>
            <p className="font-body text-lg lg:text-xl text-white/60 leading-relaxed font-normal">
              One platform that handles every stage of your sales funnel — automatically, 24/7, at scale.
            </p>
          </motion.div>
        </div>

        {/* Top Row - 3 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8">
          {/* Card 1: 100% Lead Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f1016]/90 rounded-3xl border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between hover:border-[#C5E033]/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(197,224,51,0.08)]"
          >
            <div>
              {/* Oval 100% Graphic */}
              <div className="flex justify-center mb-8">
                <div className="relative w-40 h-20 rounded-full border border-white/20 flex items-center justify-center bg-white/[0.02] shadow-inner group-hover:border-[#C5E033]/50 transition-colors duration-500">
                  <span className="font-display text-3xl font-black text-white tracking-tight">
                    100%
                  </span>
                  {/* Subtle inner accent glow */}
                  <div className="absolute inset-0 rounded-full bg-[#C5E033]/5 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-white text-center mb-4">
                Lead Journey
              </h3>
              <p className="font-body text-sm lg:text-base text-white/60 text-center leading-relaxed mb-8">
                Every lead captured, qualified, booked, and followed up — automatically, end-to-end.
              </p>
            </div>

            {/* Bottom Tags / Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {["Capture", "Qualify", "Book", "Follow-up"].map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 rounded-full text-xs font-mono text-white/70 bg-white/[0.04] border border-white/[0.1] hover:border-[#C5E033]/40 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 2: 24/7 Inbound Voice AI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f1016]/90 rounded-3xl border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between hover:border-[#C5E033]/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(197,224,51,0.08)]"
          >
            <div>
              {/* Concentric Phone Receiver Graphic */}
              <div className="flex justify-center mb-8">
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center">
                  {/* Outer Concentric Rings */}
                  <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-[#C5E033]/20 transition-colors duration-500 animate-pulse" />
                  <div className="absolute inset-2 rounded-full border border-white/15 group-hover:border-[#C5E033]/30 transition-colors duration-500" />
                  <div className="w-16 h-16 rounded-full bg-white/[0.04] border border-white/20 flex items-center justify-center text-white group-hover:text-[#C5E033] group-hover:border-[#C5E033]/50 transition-all duration-500 shadow-lg">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-white text-center mb-4">
                24/7 Inbound Voice AI
              </h3>
              <p className="font-body text-sm lg:text-base text-white/60 text-center leading-relaxed">
                Answers every call, qualifies every lead, and books every appointment — even at 2am on a Sunday.
              </p>
            </div>
          </motion.div>

          {/* Card 3: Direct CRM Integration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f1016]/90 rounded-3xl border border-white/[0.08] p-8 lg:p-10 flex flex-col justify-between hover:border-[#C5E033]/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(197,224,51,0.08)]"
          >
            <div>
              {/* Equalizer / Audio Waveform Graphic */}
              <div className="flex justify-center items-end h-24 mb-8 gap-1.5 pb-2">
                {[
                  { height: "24px" },
                  { height: "48px" },
                  { height: "64px" },
                  { height: "40px" },
                  { height: "56px" },
                  { height: "32px" },
                  { height: "48px" },
                  { height: "28px" },
                ].map((bar, i) => (
                  <motion.div
                    key={i}
                    className="w-2 bg-white/20 rounded-full group-hover:bg-[#C5E033] transition-colors duration-500"
                    style={{ height: bar.height }}
                    animate={{
                      scaleY: [1, 1.2, 0.9, 1],
                    }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      delay: i * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="font-display text-2xl font-bold text-white text-center mb-4">
                Direct CRM Integration
              </h3>
              <p className="font-body text-sm lg:text-base text-white/60 text-center leading-relaxed">
                Connects natively with your existing CRM. Every interaction logged, every booking confirmed — zero manual entry.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Row - 2 Large Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 4: AI Outbound Campaigns */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f1016]/90 rounded-3xl border border-white/[0.08] p-8 lg:p-10 hover:border-[#C5E033]/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(197,224,51,0.08)] flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column Content */}
              <div className="md:col-span-6 flex flex-col justify-center">
                {/* Wifi / Signal Icon */}
                <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-white mb-6 group-hover:border-[#C5E033]/40 group-hover:text-[#C5E033] transition-colors">
                  <span className="material-symbols-outlined text-2xl">sensors</span>
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  AI Outbound Campaigns
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                  Proactively reaches out to warm leads, estimate no-shows, and unbooked prospects — filling your calendar on autopilot.
                </p>

                {/* Checklist */}
                <div className="space-y-3">
                  {[
                    "Estimate follow-ups",
                    "Re-engagement campaigns",
                    "Pipeline fill",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#C5E033]/20 text-[#C5E033] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </div>
                      <span className="font-body text-xs font-medium text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Mock Activity UI Box */}
              <div className="md:col-span-6">
                <div className="bg-[#08090e] rounded-2xl border border-white/[0.08] p-5 shadow-2xl space-y-4">
                  {/* Window Controls */}
                  <div className="flex items-center gap-1.5 pb-2 border-b border-white/[0.06]">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>

                  {/* Log Items */}
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-white/70 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>Estimate sent</span>
                      </div>
                      <span className="text-white/40 text-[10px]">2h ago</span>
                    </div>

                    <div className="flex items-center justify-between text-white/70 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                        <span>No answer — retry</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Today</span>
                    </div>

                    <div className="flex items-center justify-between text-white bg-[#C5E033]/10 p-2.5 rounded-lg border border-[#C5E033]/30">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C5E033] animate-ping" />
                        <span className="font-semibold text-white">AI follow-up call</span>
                      </div>
                      <span className="text-[#C5E033] font-bold text-[10px]">Now</span>
                    </div>

                    <div className="flex items-center justify-between text-white/70 bg-white/[0.02] p-2.5 rounded-lg border border-white/[0.04]">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                        <span>Appointment booked</span>
                      </div>
                      <span className="text-white/40 text-[10px]">Pending</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Dead Lead Reactivation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="group relative bg-[#0f1016]/90 rounded-3xl border border-white/[0.08] p-8 lg:p-10 hover:border-[#C5E033]/30 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_rgba(197,224,51,0.08)] flex flex-col justify-between"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left Column Content */}
              <div className="md:col-span-6 flex flex-col justify-center">
                {/* Exclusive Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-white/70 font-mono text-[11px] tracking-wider uppercase mb-6 w-max">
                  <span className="material-symbols-outlined text-sm text-[#C5E033]">sync</span>
                  IRONLOOP EXCLUSIVE
                </div>

                <h3 className="font-display text-2xl font-bold text-white mb-4">
                  Dead Lead Reactivation
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
                  Hand us your cold leads from the past 6–12 months. Our AI works through them all simultaneously — up to 10 concurrent calls at once — with personalized outreach.
                </p>

                {/* Checklist */}
                <div className="space-y-3">
                  {[
                    "10 simultaneous AI calls",
                    "Works through lists fast",
                    "Personalized scripts",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#C5E033]/20 text-[#C5E033] flex items-center justify-center text-xs shrink-0">
                        ✓
                      </div>
                      <span className="font-body text-xs font-medium text-white/80">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Reactivation Blitz Widget */}
              <div className="md:col-span-6">
                <div className="bg-[#08090e] rounded-2xl border border-white/[0.08] p-5 shadow-2xl space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                    <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase font-bold">
                      REACTIVATION BLITZ
                    </span>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#C5E033] animate-pulse" />
                      <span className="font-mono text-[10px] text-[#C5E033] font-bold">Live</span>
                    </div>
                  </div>

                  {/* Caller List */}
                  <div className="space-y-2 font-mono text-xs">
                    {[
                      { initial: "J", name: "James R.", status: "Talking", statusClass: "text-white/40" },
                      { initial: "S", name: "Sarah K.", status: "Booked ✓", statusClass: "text-[#C5E033] font-bold" },
                      { initial: "M", name: "Mike T.", status: "Talking", statusClass: "text-white/40" },
                      { initial: "L", name: "Lisa M.", status: "Voicemail", statusClass: "text-white/40" },
                    ].map((caller, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-white/[0.02]">
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                            {caller.initial}
                          </div>
                          <span className="text-white/80 font-sans text-xs">{caller.name}</span>
                        </div>
                        <span className={`text-[10px] ${caller.statusClass}`}>{caller.status}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stat Highlight Box */}
                  <div className="pt-2 border-t border-white/[0.06] text-center">
                    <div className="font-display text-4xl font-black text-[#C5E033] tracking-tight">
                      10×
                    </div>
                    <div className="font-mono text-[9px] tracking-widest text-white/50 uppercase font-semibold mt-0.5">
                      CONCURRENT AI CALLS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
