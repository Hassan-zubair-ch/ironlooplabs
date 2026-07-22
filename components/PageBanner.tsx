"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface PageBannerProps {
  title: ReactNode;
  subtitle?: string;
  badge?: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, subtitle, badge, breadcrumbs }: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-[#050608] pt-16 pb-20 lg:pt-24 lg:pb-28 border-b border-white/[0.03]">
      {/* ── HIGH-END BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle structural grid with radial fade mask */}
        <div 
          className="absolute inset-0 opacity-[0.15]" 
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 0%, black 0%, transparent 100%)"
          }}
        />

        {/* Elegant Aurora Glows */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] left-[10%] w-[600px] h-[600px] bg-[#a3e635] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-[#38bdf8] rounded-full blur-[150px]"
        />

        {/* Diagonal Light Beam for structural asymmetry */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-40 left-1/4 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-[#a3e635]/20 to-transparent rotate-[35deg] transform origin-top mix-blend-screen"
        />
      </div>

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start justify-between">
          
          {/* Main Content Area */}
          <div className="flex-1 max-w-4xl">
            {/* Breadcrumb - Sleek & Minimal */}
            <motion.nav 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[13px] font-mono text-white/40 mb-10"
            >
              {breadcrumbs.map((crumb, i) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <span className="text-white/20">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-[#a3e635] transition-colors">{crumb.label}</Link>
                  ) : (
                    <span className="text-white/80 font-medium">{crumb.label}</span>
                  )}
                </span>
              ))}
            </motion.nav>

            {/* Badge - Premium Glassmorphism */}
            {badge && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2.5 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-4 py-2 rounded-full mb-6 shadow-2xl"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635]" />
                <span className="font-mono text-[11px] font-bold text-white/90 uppercase tracking-[0.15em]">{badge}</span>
              </motion.div>
            )}

            {/* Title - Enterprise Typography */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-4xl sm:text-5xl lg:text-[64px] font-black text-white leading-[1.05] tracking-tight mb-6 drop-shadow-lg"
            >
              {title}
            </motion.h1>

            {/* Subtitle - Elegant & Readable */}
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-body text-lg lg:text-xl text-white/60 leading-relaxed font-light max-w-2xl"
              >
                {subtitle}
              </motion.p>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
