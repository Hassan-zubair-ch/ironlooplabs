"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-20 pb-32 bg-background">
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          background:
            "radial-gradient(circle at 20% 30%, rgba(197,224,51,1) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(197,224,51,0.4) 0%, transparent 50%)",
        }}
        animate={{ opacity: [0.05, 0.12, 0.05], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        <div className="lg:col-span-7 space-y-8">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-growth-green/10 px-4 py-1.5 rounded-full border border-growth-green/20">
              <span className="font-mono text-label-sm text-growth-green uppercase">Active Automation</span>
              <motion.div
                className="w-2 h-2 rounded-full bg-growth-green"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            </div>
          </Reveal>

          <motion.h1
            className="font-display text-display-lg text-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            Never Miss an <span className="text-growth-green italic">HVAC Call</span> Again.
          </motion.h1>

          <Reveal delay={0.1}>
            <p className="font-body text-body-lg text-on-surface-variant max-w-xl">
              No-cooling emergencies, medical triage calls, and service inquiries — IronLoop answers every one
              instantly, qualifies the request, and books it straight into your calendar. 24/7,
              every day of the year.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#programs"
                className="bg-growth-green text-deep-forest px-8 py-4 rounded-xl font-display text-lg font-bold shadow-lg shadow-growth-green/10 hover:scale-105 active:scale-95 transition-transform text-center btn-glow-hover"
              >
                Start Growing Now
              </a>
              <a
                href="#contact"
                className="border-2 border-surface-container-highest text-white px-8 py-4 rounded-xl font-display text-lg font-bold hover:bg-white/5 active:scale-95 transition-all text-center"
              >
                Watch AI Demo
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="grid grid-cols-3 gap-gutter pt-12 border-t border-white/10">
              <div>
                <p className="font-display text-headline-lg text-white">10k+</p>
                <p className="font-mono text-label-sm text-on-surface-variant uppercase">Calls Handled</p>
              </div>
              <div>
                <p className="font-display text-headline-lg text-white">24/7</p>
                <p className="font-mono text-label-sm text-on-surface-variant uppercase">Availability</p>
              </div>
              <div>
                <p className="font-display text-headline-lg text-white">35%</p>
                <p className="font-mono text-label-sm text-on-surface-variant uppercase">Conversion Lift</p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.4} className="lg:col-span-5 relative">
          <div className="bg-surface-container-low rounded-3xl shadow-2xl p-6 border border-white/5 relative z-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center">
                  <span className="material-symbols-outlined text-growth-green">record_voice_over</span>
                </div>
                <div>
                  <p className="font-display text-sm text-white font-semibold">Incoming Call</p>
                  <p className="font-mono text-xs text-on-surface-variant">No-Cooling Emergency</p>
                </div>
              </div>
              <span className="bg-growth-green/20 text-growth-green font-mono text-[10px] px-2 py-1 rounded">
                LIVE TRANSCRIPT
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="bg-surface-container-highest/50 p-4 rounded-2xl rounded-tl-none mr-8 transform hover:scale-[1.02] transition-transform">
                <p className="text-sm font-body text-on-surface">
                  &quot;Hi, my AC just stopped cooling and it&apos;s over 90 degrees today — can someone come out?&quot;
                </p>
              </div>
              <div className="bg-growth-green/10 p-4 rounded-2xl rounded-tr-none ml-8 border-l-4 border-growth-green transform hover:scale-[1.02] transition-transform">
                <p className="text-sm font-body text-growth-green italic">
                  &quot;IronLoop: I&apos;m sorry to hear that — let&apos;s get a technician to you today. I have an
                  opening at 2:00 PM, does that work?&quot;
                </p>
              </div>
              <div className="bg-surface-container-highest/50 p-4 rounded-2xl rounded-tl-none mr-8 transform hover:scale-[1.02] transition-transform">
                <p className="text-sm font-body text-on-surface">&quot;Yes, please — thank you so much!&quot;</p>
              </div>
            </div>

            <div className="p-4 bg-background-subtle rounded-2xl flex items-center justify-between border border-white/5 group hover:border-growth-green/30 transition-colors">
              <div className="flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-action-yellow group-hover:scale-125 transition-transform"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  calendar_today
                </span>
                <span className="font-mono text-white text-sm">DISPATCH BOOKED</span>
              </div>
              <span className="font-mono text-growth-green text-sm">2:00 PM Today</span>
            </div>
          </div>

          <motion.div
            className="absolute -top-10 -right-10 w-64 h-64 bg-growth-green/5 rounded-full blur-3xl -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary-fixed/5 rounded-full blur-2xl -z-10"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </Reveal>
      </div>
    </section>
  );
}
