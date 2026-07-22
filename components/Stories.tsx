"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Stories() {
  return (
    <section id="stories" className="py-24 bg-background overflow-hidden border-t border-white/5">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="font-display text-headline-lg text-white mb-4">Proven in the Field</h2>
            <p className="font-body text-on-surface-variant">
              See how HVAC owners are recapturing their time and doubling their lead volume with EchoAI.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
          <Reveal className="lg:col-span-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl h-[500px] border border-white/5"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbT4lVWkPPG3NZnfhpmgUA4bbWo82n-7mP-SPUBjoNbaFRBVPHOTEOUROUoa5Cv41t0wZKYABpBHb3CI55OENpF6j_-_73IaoCVslZ0_x24hBQmdemUUW8WcdGtRvdR84QpgNvdUcTIPxmAMP0QrEQX-ECzkzGb0ewGUbchwQ5-esKCJSvnA3goqFeUB_DaLqYcfROTmidKH1NRN2NsHMMWQK6kPiWZ0pWAYG5r0jLeK0lAOJuMVdr')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-95" />
              <div className="absolute bottom-0 left-0 p-10 text-white">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-growth-green text-deep-forest px-3 py-1 rounded-full font-mono text-[10px] font-bold">
                    CASE STUDY: APEX AIR SOLUTIONS
                  </span>
                </div>
                <h3 className="font-display text-headline-lg mb-4 transform group-hover:-translate-y-1 transition-transform duration-500">
                  Scaling to 12 Trucks Without Missing a Single Emergency Call.
                </h3>
                <p className="font-body text-on-surface-variant max-w-lg mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  &quot;EchoAI didn&apos;t just save us money on a receptionist; it changed how we do
                  business. Every no-cooling call is answered, every job is booked, and our techs are
                  never idle.&quot;
                </p>
                <div className="flex gap-12">
                  <div>
                    <p className="text-growth-green font-display text-2xl">450%</p>
                    <p className="text-[10px] uppercase font-mono opacity-70">ROI Increase</p>
                  </div>
                  <div>
                    <p className="text-growth-green font-display text-2xl">$12k/mo</p>
                    <p className="text-[10px] uppercase font-mono opacity-70">Admin Savings</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </Reveal>

          <div className="lg:col-span-4 space-y-gutter">
            <Reveal delay={0.1}>
              <div className="bg-surface-container-low p-6 rounded-3xl border border-white/5 hover:border-growth-green/50 hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-growth-green/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="material-symbols-outlined text-growth-green">psychology</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base text-white">The AI Edge</h4>
                    <p className="text-xs text-on-surface-variant">Why humans aren&apos;t enough.</p>
                  </div>
                </div>
                <p className="text-sm font-body text-on-surface-variant mb-4 italic">
                  &quot;I was skeptical about AI, but EchoAI sounds more professional than my old
                  answering service.&quot;
                </p>
                <p className="font-mono text-[10px] text-growth-green">— Mark T., Coastline Heating &amp; Air</p>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="bg-surface-container-low p-6 rounded-3xl border border-white/5 hover:border-growth-green/50 hover:bg-surface-container-high transition-all cursor-pointer group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-action-yellow/20 flex items-center justify-center group-hover:rotate-6 transition-transform">
                    <span className="material-symbols-outlined text-action-yellow">bolt</span>
                  </div>
                  <div>
                    <h4 className="font-display text-base text-white">Fast Onboarding</h4>
                    <p className="text-xs text-on-surface-variant">Live in under 48 hours.</p>
                  </div>
                </div>
                <p className="text-sm font-body text-on-surface-variant mb-4 italic">
                  &quot;We switched from a traditional service on Wednesday and were seeing ROI by Friday
                  morning.&quot;
                </p>
                <p className="font-mono text-[10px] text-growth-green">— Sarah L., Summit Comfort Systems</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
