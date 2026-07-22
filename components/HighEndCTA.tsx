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
    <div className="my-20 relative rounded-3xl overflow-hidden border border-[#a3e635]/40 bg-[#12151a] p-8 lg:p-16 shadow-[0_0_50px_rgba(163,230,53,0.12)]">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3e635]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Text Column */}
        <div className="lg:col-span-6 space-y-6">
          <span className="inline-block font-mono text-xs uppercase tracking-[0.25em] text-[#a3e635] font-bold bg-[#a3e635]/10 px-4 py-1.5 rounded-full border border-[#a3e635]/30">
            ENTERPRISE AUTOMATION READY
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
            Transform Your <span className="text-[#a3e635]">{industryTitle}</span> Operations Today
          </h2>
          <p className="font-body text-base lg:text-lg text-on-surface-variant leading-relaxed">
            Eliminate missed calls, reduce admin fatigue by 60%, and ensure 24/7 instant intake for every inquiry. Speak with our lead automation architects.
          </p>

          <div className="space-y-3 pt-2">
            {[
              "100% HIPAA & SOC2 Enterprise Compliance",
              "Live System Integration in under 48 Hours",
              "Dedicated 24/7 On-Call Technical Support"
            ].map((check, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-[#a3e635] text-[#0b0d10] flex items-center justify-center font-bold text-sm shrink-0">
                  ✓
                </span>
                <span className="font-body text-white text-sm font-medium">{check}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Consultation Form */}
        <div className="lg:col-span-6">
          <div className="bg-[#181c24] border border-white/10 rounded-2xl p-8 shadow-2xl relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#a3e635] text-[#0b0d10] text-3xl font-bold flex items-center justify-center mx-auto shadow-lg">
                  ✓
                </div>
                <h3 className="font-display text-2xl text-white font-bold">Consultation Requested!</h3>
                <p className="font-body text-sm text-on-surface-variant max-w-sm mx-auto">
                  Our {industryTitle} automation specialist will contact you within 15 minutes to demo your custom workflow.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-xl text-white font-bold mb-4">
                  Schedule Free {industryTitle} AI Demo
                </h3>

                <div>
                  <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1">
                    Your Name / Practice Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Metro Health Partners"
                    className="w-full bg-[#12151a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#a3e635] focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1">
                      Direct Phone
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#12151a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#a3e635] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block font-mono text-xs text-on-surface-variant uppercase mb-1">
                      Work Email
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="admin@practice.com"
                      className="w-full bg-[#12151a] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:border-[#a3e635] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#a3e635] text-[#0b0d10] font-bold font-display text-base py-4 rounded-xl hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] mt-2"
                >
                  Deploy {industryTitle} Automation Now →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
