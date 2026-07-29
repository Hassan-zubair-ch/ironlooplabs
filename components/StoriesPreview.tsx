"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const TESTIMONIALS = [
  {
    quote: '"We used to lose calls to voicemail all day. Now every one gets a callback in seconds — booked jobs doubled in month one."',
    name: "Maaz",
    role: "Roofing • Zevoic",
    initial: "M",
  },
  {
    quote: '"No new hires, no overtime — just more revenue. Calls at 2 AM get answered as fast as calls at 2 PM."',
    name: "Sarah Jenkins",
    role: "Contractor • Healthcare Insurance",
    initial: "S",
  },
  {
    quote: '"The second we stopped missing after-hours calls, everything changed. That was the single biggest fix we made this year."',
    name: "Rob Cavey",
    role: "HVAC & Plumbing • Elite Service",
    initial: "R",
  },
];

export default function StoriesPreview() {
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-4">
              REAL RESULTS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Every missed call is a lost job.<br />
              <span className="text-[#C5E033]">We make sure that never happens.</span>
            </h2>
            <p className="font-body text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
              HVAC, roofing, and plumbing companies use IronLoop to catch every call, text back instantly, and turn missed leads into booked jobs — day or night.
            </p>
          </motion.div>
        </div>

        {/* 3 Short & Organic Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 max-w-6xl mx-auto">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0f1016]/90 border border-white/[0.08] hover:border-[#C5E033]/30 rounded-3xl p-8 flex flex-col justify-between shadow-xl transition-all duration-300 group"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex gap-1 text-amber-400 text-sm mb-6">
                  {"★".repeat(5)}
                </div>

                {/* Short Organic Quote */}
                <p className="font-body text-base text-white/90 leading-relaxed mb-8">
                  {item.quote}
                </p>
              </div>

              {/* Author & Avatar */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center font-display font-bold text-sm text-white group-hover:border-[#C5E033]/50 transition-colors">
                  {item.initial}
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-white">{item.name}</h4>
                  <p className="font-mono text-xs text-white/40">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Badges & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          {/* Checkmarks */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/70 font-medium">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#C5E033] text-base">check</span>
              No contracts
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#C5E033] text-base">check</span>
              No lock-ins
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#C5E033] text-base">check</span>
              Live in 14 days
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-white text-[#050608] font-display text-sm font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all shadow-xl"
            >
              Book a Free Demo
            </Link>
            <Link
              href="/compare"
              className="px-8 py-3.5 rounded-full bg-white/[0.05] border border-white/15 text-white font-display text-sm font-bold hover:bg-white/10 active:scale-95 transition-all"
            >
              See How We Compare
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
