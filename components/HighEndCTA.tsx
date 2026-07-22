"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  industryTitle: string;
}

export default function HighEndCTA({ industryTitle }: Props) {
  return (
    <section className="bg-[#a3e635] relative overflow-hidden py-24 rounded-3xl">
      {/* Subtle Dot Grid pattern (black dots at 10% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }} 
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0b0d10] uppercase tracking-tight mb-5 max-w-4xl mx-auto">
            READY TO GROW YOUR {industryTitle.toUpperCase()} BUSINESS?
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#0b0d10]/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Schedule a consultation and discover how IronLoop AI can help you generate more leads, automate workflows, and increase revenue.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Call Button - Solid Dark */}
            <a 
              href="tel:8136695315" 
              className="flex items-center gap-2 bg-[#0b0d10] text-white px-8 py-4 rounded-md font-display font-extrabold text-[15px] tracking-wide uppercase hover:bg-[#1a1d24] transition-colors w-full sm:w-auto justify-center shadow-xl shadow-black/10"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.016 15.727l-3.327-1.109a2.003 2.003 0 0 0-2.348.749l-1.393 1.956c-2.906-1.365-5.263-3.722-6.628-6.628l1.956-1.393a2.003 2.003 0 0 0 .749-2.348l-1.109-3.327a2.002 2.002 0 0 0-2.368-1.32l-3.744.75A2.002 2.002 0 0 0 0 4.996C0 14.935 8.056 24 17.986 24a2.002 2.002 0 0 0 1.939-1.558l.75-3.744a2.002 2.002 0 0 0-1.32-2.368h-.001L20.016 15.727z"/></svg>
              CALL (813) 669-5315
            </a>

            {/* Contact Button - Outlined */}
            <Link 
              href="/contact" 
              className="flex items-center gap-2 border-[2.5px] border-[#0b0d10] text-[#0b0d10] px-8 py-4 rounded-md font-display font-extrabold text-[15px] tracking-wide uppercase hover:bg-[#0b0d10] hover:text-[#a3e635] transition-all w-full sm:w-auto justify-center"
            >
              LET&apos;S TALK GROWTH
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
