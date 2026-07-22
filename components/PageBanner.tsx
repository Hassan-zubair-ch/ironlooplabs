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
    <section className="relative overflow-hidden bg-[#0b0d10] pt-10 pb-16 lg:pb-20 border-b border-white/[0.04]">
      {/* Animated 3D background mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating gradient orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-[#a3e635]/[0.06] rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-[#38bdf8]/[0.04] rounded-full blur-[100px]"
        />

        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: "radial-gradient(rgba(163, 230, 53, 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }} />

        {/* Moving grid lines */}
        <motion.div
          animate={{ backgroundPositionY: ["0px", "40px"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(0deg, rgba(163,230,53,0.5) 1px, transparent 1px)",
            backgroundSize: "100% 40px",
          }}
        />
      </div>

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm font-mono text-on-surface-variant mb-8">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <span className="text-white/15">/</span>}
              {crumb.href ? (
                <Link href={crumb.href} className="hover:text-[#a3e635] transition-colors">{crumb.label}</Link>
              ) : (
                <span className="text-[#a3e635] font-semibold">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="max-w-3xl">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 font-mono text-xs text-[#a3e635] bg-[#a3e635]/10 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider border border-[#a3e635]/20 mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a3e635] status-pulse" />
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-5"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-body text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
