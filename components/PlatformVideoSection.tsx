"use client";

import { motion } from "framer-motion";

export default function PlatformVideoSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-10"
      >
        <p className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-[#C5E033] mb-4">
          SEE THE PLATFORM IN ACTION
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 leading-[1.1]">
          Here&apos;s Exactly What We Build.
        </h2>
        <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          See the full IronLoop AI system — every module, every automation, every AI agent.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative rounded-3xl overflow-hidden border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)] bg-[#0d0d0d]"
      >
        <div className="relative aspect-video w-full bg-[#0d0d0d]">
          <iframe
            src="https://fast.wistia.net/embed/iframe/lwmpa5uf3s?videoFoam=true"
            title="IronLoop AI Platform Demo Video"
            allow="autoplay; fullscreen"
            allowTransparency={true}
            frameBorder="0"
            scrolling="no"
            className="w-full h-full border-0 rounded-3xl"
          />
        </div>
        <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-inset ring-white/10" />
      </motion.div>

      <p className="text-center font-mono text-xs text-white/40 mt-4">
        ~10 min — worth every second
      </p>
    </section>
  );
}
