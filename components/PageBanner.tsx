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
    <section className="relative overflow-hidden bg-[#050608] pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-white/[0.03] flex items-center justify-center">
      {/* ── HIGH-END BACKGROUND EFFECTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Animated grid lines moving downward slowly */}
        <motion.div 
          initial={{ y: 0 }}
          animate={{ y: 40 }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            height: "calc(100% + 40px)",
            top: "-40px"
          }}
        />
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050608] via-[#050608]/40 to-transparent z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050608_100%)] z-0" />

        {/* Elegant Aurora Glows Centered */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#a3e635] rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute top-[10%] left-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-[#38bdf8] rounded-full blur-[150px]"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Breadcrumb - Sleek & Minimal */}
        <motion.nav 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 text-[13px] font-mono text-white/40 mb-6"
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
            className="inline-flex items-center justify-center gap-2.5 bg-white/[0.03] border border-white/[0.08] backdrop-blur-md px-5 py-2 rounded-full mb-8 shadow-2xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] shadow-[0_0_8px_#a3e635] animate-pulse" />
            <span className="font-mono text-[11px] font-bold text-white/90 uppercase tracking-[0.2em]">{badge}</span>
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
            className="font-body text-lg lg:text-xl text-white/60 leading-relaxed font-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
