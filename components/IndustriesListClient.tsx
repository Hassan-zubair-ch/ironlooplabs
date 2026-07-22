"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import { getIndustryIconComponent } from "./IndustryIcons";

export default function IndustriesListClient() {
  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#a3e635]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, i) => (
            <motion.div
              key={ind.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
            >
              <Link href={`/industries/${ind.slug}`} className="block group">
                <div className="bg-[#111318] border border-white/[0.06] rounded-2xl p-7 h-64 flex flex-col items-center justify-center text-center hover:border-[#a3e635]/30 hover:bg-[#14171d] transition-all duration-400 relative overflow-hidden">
                  {/* Glow on hover */}
                  <div className="absolute inset-0 bg-[#a3e635]/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />

                  <div className="relative z-10 flex flex-col items-center">
                    <div className="mb-4 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(163,230,53,0.3)] transition-all duration-500">
                      {getIndustryIconComponent(ind.iconType, "w-16 h-16")}
                    </div>
                    <h3 className="font-display text-lg text-white font-extrabold group-hover:text-[#a3e635] transition-colors mb-2">
                      {ind.title}
                    </h3>
                    <p className="font-body text-xs text-on-surface-variant leading-relaxed max-w-[200px]">
                      {ind.subtitle}
                    </p>
                    <div className="mt-4 flex items-center gap-1 text-[#a3e635] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="font-mono text-[11px] font-bold tracking-wider">VIEW DETAILS</span>
                      <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-on-surface-variant mb-5">Don&apos;t see your industry? We build custom automation for any service business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a3e635] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]"
          >
            Contact Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
