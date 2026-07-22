"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface HighEndCTAProps {
  industryTitle: string;
}

export default function HighEndCTA({ industryTitle }: HighEndCTAProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="relative rounded-3xl overflow-hidden border border-white/[0.06]">
      {/* Background with shimmer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111318] via-[#12151a] to-[#0d1117]" />
      <div className="absolute inset-0 cta-shimmer pointer-events-none" />

      {/* Ambient orbs */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#a3e635]/[0.08] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#38bdf8]/[0.05] rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 p-8 lg:p-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column - Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#a3e635] font-bold bg-[#a3e635]/10 px-4 py-1.5 rounded-full border border-[#a3e635]/20">
                <span className="w-2 h-2 rounded-full bg-[#a3e635] status-pulse" />
                ACCEPTING NEW CLIENTS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-white leading-[1.15]">
              Ready to Deploy <span className="text-[#a3e635]">{industryTitle}</span> Automation?
            </h2>

            <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-xl">
              Eliminate missed calls, reduce admin overhead by 60%, and ensure 24/7 intelligent intake. Our automation architects will build a system tailored to your exact operations.
            </p>

            <div className="space-y-4 pt-2">
              {[
                { label: "100% HIPAA & SOC2 Compliance", icon: "verified_user" },
                { label: "Live in Under 48 Hours", icon: "rocket_launch" },
                { label: "Dedicated Success Manager", icon: "support_agent" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#a3e635]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#a3e635] text-base">{item.icon}</span>
                  </div>
                  <span className="font-body text-white text-sm font-medium">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-5">
            <div className="bg-[#0d0f14] border border-white/[0.08] rounded-2xl p-8 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#a3e635] text-[#0b0d10] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(163,230,53,0.3)]">
                    <span className="material-symbols-outlined text-3xl">check</span>
                  </div>
                  <h3 className="font-display text-2xl text-white font-bold">Request Submitted</h3>
                  <p className="font-body text-sm text-on-surface-variant max-w-xs mx-auto">
                    Our {industryTitle} specialist will contact you within 15 minutes to configure your workflow.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-xl text-white font-bold">
                      Book a Free Strategy Call
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant mt-1">
                      30-min walkthrough of your custom {industryTitle} AI system
                    </p>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Business Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Metro Health Partners"
                      className="w-full bg-[#111318] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:border-[#a3e635]/50 focus:outline-none focus:ring-1 focus:ring-[#a3e635]/20 transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Phone</label>
                      <input
                        required
                        type="tel"
                        placeholder="(555) 000-0000"
                        className="w-full bg-[#111318] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:border-[#a3e635]/50 focus:outline-none focus:ring-1 focus:ring-[#a3e635]/20 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Email</label>
                      <input
                        required
                        type="email"
                        placeholder="you@company.com"
                        className="w-full bg-[#111318] border border-white/[0.08] rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/25 focus:border-[#a3e635]/50 focus:outline-none focus:ring-1 focus:ring-[#a3e635]/20 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#a3e635] text-[#0b0d10] font-bold font-display text-sm py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)] flex items-center justify-center gap-2 mt-1"
                  >
                    Schedule Strategy Call
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>

                  <p className="font-mono text-[9px] text-on-surface-variant text-center pt-1 tracking-wide">
                    NO COMMITMENT • CANCEL ANYTIME • ENTERPRISE READY
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
