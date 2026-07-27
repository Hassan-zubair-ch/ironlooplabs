"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productsData } from "@/lib/productsData";

export default function ProductsPreview() {
  const topSolutions = productsData.slice(0, 3);

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

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        {/* Section Header */}
        <div className="mb-16 lg:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-4">
              READY-TO-DEPLOY AUTOMATION
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight leading-tight">
              Turn on what you need today. <br />
              <span className="text-[#C5E033]">Add more as you grow.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-xl mx-auto">
              Explore our modular AI capabilities built specifically for trade, contractor, and home service operations.
            </p>
          </motion.div>
        </div>

        {/* 3 Top Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {topSolutions.map((prod, i) => (
            <motion.div
              key={prod.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col h-full bg-[#0f1016]/90 border border-white/[0.08] hover:border-[#C5E033]/40 rounded-3xl p-8 transition-all duration-300 shadow-2xl justify-between"
            >
              <div>
                {/* Module Tag & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/40">
                    {prod.moduleNumber || `Module 0${i + 1}`}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#C5E033] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-xl">{prod.heroIcon}</span>
                  </div>
                </div>

                {/* Name & Short Desc */}
                <h3 className="font-display text-2xl text-white font-bold mb-3 group-hover:text-[#C5E033] transition-colors">
                  {prod.name}
                </h3>
                <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed mb-8 flex-grow">
                  {prod.shortDesc}
                </p>

                {/* Feature List */}
                <div className="space-y-3 mb-10">
                  {prod.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0">
                        check
                      </span>
                      <span className="font-body text-xs text-white/80">{feat.title}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Action Link */}
              <Link
                href={`/solutions/${prod.slug}`}
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/[0.04] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#C5E033] hover:text-[#0b0d10] hover:border-[#C5E033] transition-all"
              >
                View Module Details
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/solutions"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#050608] font-display text-sm font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all shadow-xl"
          >
            View All 13 Solutions
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
