"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[#a3e635] relative overflow-hidden py-24">
      {/* Subtle Dot Grid pattern (black dots at 10% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }} 
      />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0b0d10] uppercase tracking-tight mb-5">
            READY TO AUTOMATE YOUR BUSINESS?
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#0b0d10]/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Schedule a consultation and discover how IronLoop AI can help you handle calls 24/7, generate more leads, and increase revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Contact Button */}
            <Link 
              href="/contact" 
              className="flex items-center gap-2 bg-[#0b0d10] text-white px-8 py-4 rounded-md font-display font-extrabold text-[15px] tracking-wide uppercase hover:bg-[#1a1d24] transition-colors w-full sm:w-auto justify-center shadow-xl shadow-black/10"
            >
              LET&apos;S TALK GROWTH
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
