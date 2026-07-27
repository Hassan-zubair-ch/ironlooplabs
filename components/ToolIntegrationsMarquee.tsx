"use client";

import { motion } from "framer-motion";

const ROW_1 = [
  "Leap",
  "FieldPulse",
  "Dataforma",
  "SalesRabbit",
  "Service Bridge",
  "Service Fusion",
  "Improveit360",
  "HubSpot",
  "Salesforce",
  "Zapier",
];

const ROW_2 = [
  "Jobber",
  "AccuLynx",
  "Housecall Pro",
  "JobNimbus",
  "ServiceTitan",
  "GHL",
  "JobTread",
  "Twilio",
  "Stripe",
  "Google Local Services",
];

export default function ToolIntegrationsMarquee() {
  const row1Duplicated = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2Duplicated = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section className="py-24 lg:py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-4">
            PLUG & PLAY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Direct Connections to the <br />
            <span className="text-[#C5E033]">tools you already use.</span>
          </h2>
          <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
            IronLoop AI plugs directly into your CRM, scheduling software, and communication stack — no middleware, no custom dev.
          </p>
        </motion.div>
      </div>

      <div className="text-center mb-8 relative z-10">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/40">
          WORKS DIRECTLY WITH THE TOOLS YOUR TEAM ALREADY USES
        </span>
      </div>

      {/* INFINITE RUNNING BLOCK CAROUSEL WRAPPER */}
      <div className="space-y-4 relative z-10 overflow-hidden">
        {/* Left Glow & Right Glow Edge Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-20 pointer-events-none" />

        {/* Row 1: Scrolling Left */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 flex-shrink-0"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
          >
            {row1Duplicated.map((tool, idx) => (
              <div
                key={idx}
                className="px-8 py-4 rounded-2xl bg-[#0f1016]/90 border border-white/[0.08] text-white/80 font-mono text-sm font-semibold hover:border-[#C5E033]/50 hover:text-white hover:bg-white/[0.04] transition-all duration-300 shadow-lg cursor-default whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Row 2: Scrolling Right */}
        <div className="flex overflow-hidden group">
          <motion.div
            className="flex gap-4 flex-shrink-0"
            animate={{ x: ["-33.333%", "0%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 28,
                ease: "linear",
              },
            }}
          >
            {row2Duplicated.map((tool, idx) => (
              <div
                key={idx}
                className="px-8 py-4 rounded-2xl bg-[#0f1016]/90 border border-white/[0.08] text-white/80 font-mono text-sm font-semibold hover:border-[#C5E033]/50 hover:text-white hover:bg-white/[0.04] transition-all duration-300 shadow-lg cursor-default whitespace-nowrap"
              >
                {tool}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
