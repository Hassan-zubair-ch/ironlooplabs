"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { productsData } from "@/lib/productsData";

const INTEGRATIONS = [
  "ServiceTitan",
  "Jobber",
  "Housecall Pro",
  "Salesforce",
  "HubSpot",
  "AccuLynx",
  "JobNimbus",
  "GoHighLevel",
  "Zapier",
  "Google Ads",
  "Meta Ads",
  "Twilio",
  "Stripe",
];

export default function SolutionsListClient() {
  return (
    <main className="min-h-screen bg-[#050505] text-white py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* HERO SECTION */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C5E033] font-mono text-xs font-semibold tracking-wider uppercase mb-6">
              Full Platform Overview
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Everything your sales floor needs. <br />
              <span className="text-[#C5E033]">None of the overhead.</span>
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto">
              IronLoop AI is a complete revenue automation system built for trade, enterprise, and home service businesses. Every lead, every call, every follow-up — handled.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-base font-bold hover:brightness-110 transition-all text-center"
              >
                Book a Demo
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-display text-base font-bold hover:bg-white/10 transition-all text-center"
              >
                View Pricing
              </Link>
            </div>
          </motion.div>
        </div>

        {/* WHY IRONLOOP AI - 4 REASON CARDS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5E033] mb-3">
              Why IronLoop AI
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
              Four reasons teams switch to <span className="text-[#C5E033]">IronLoop AI</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Never Drop a Lead</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Every inquiry — web form, ad click, phone call — gets an instant, 3-second intelligent response. No more "we'll call you back."
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Book More Jobs</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                AI routes and schedules directly into your CRM based on territory, availability, and job type. No back-and-forth.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Consistent Experience</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Every interaction sounds like your top sales rep — on-brand, professional, and helpful — every single time.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 shadow-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-display text-lg font-bold text-white mb-2">Slash Overhead Costs</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Replace manual follow-up labor with AI that never calls in sick, never takes vacation, and handles 10 calls at once.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 13 MODULES GRID */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <div className="text-center mb-14">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5E033] mb-3">
              Ready-to-Deploy Automation Modules
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Turn on what you need today. <span className="text-[#C5E033]">Add more as you grow.</span>
            </h2>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
              13 purpose-built modules for trade, contractor, and enterprise service automation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productsData.map((prod, i) => (
              <motion.div
                key={prod.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group bg-[#0f1016]/90 border border-white/[0.08] hover:border-[#C5E033]/40 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/40">
                      {prod.moduleNumber || `Module 0${i + 1}`}
                    </span>
                    <span className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#C5E033] group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined text-xl">{prod.heroIcon}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-[#C5E033] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="font-body text-xs sm:text-sm text-white/60 leading-relaxed mb-6">
                    {prod.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    {prod.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0">
                          check
                        </span>
                        <span className="font-body text-xs text-white/80">{feat.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href={`/solutions/${prod.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-[#C5E033] hover:text-[#0b0d10] hover:border-[#C5E033] transition-all"
                >
                  View Module Details
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* COMPLETE CUSTOMER JOURNEY */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-28"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-14 text-center">
            Complete Customer <span className="text-[#C5E033]">Journey</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#C5E033] text-[#0b0d10] font-display font-black flex items-center justify-center text-sm mb-6">
                1
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Lead Capture & Booking
              </h3>
              <ul className="space-y-3 font-body text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Instant multi-channel response (call/text/chat)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Territory-smart calendar routing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Qualification before human involvement</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#C5E033] text-[#0b0d10] font-display font-black flex items-center justify-center text-sm mb-6">
                2
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Active Job Pipeline
              </h3>
              <ul className="space-y-3 font-body text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Day-of arrival confirmations</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Smart rescheduling for no-shows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Upsell and add-on prompts</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 shadow-xl">
              <div className="w-10 h-10 rounded-full bg-[#C5E033] text-[#0b0d10] font-display font-black flex items-center justify-center text-sm mb-6">
                3
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-4">
                Long-Term Retention
              </h3>
              <ul className="space-y-3 font-body text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Review and referral requests post-job</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Seasonal re-engagement & win-back flows</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                    check
                  </span>
                  <span>Membership renewals & maintenance reminders</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* INTEGRATIONS MARQUEE BANNER */}
        <div className="py-12 border-t border-b border-white/[0.06] mb-28">
          <p className="text-center text-xs font-mono font-bold uppercase tracking-widest text-white/50 mb-8">
            Works directly with the tools your team already uses
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {INTEGRATIONS.map((item, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-white/70 font-mono text-xs font-medium hover:border-[#C5E033]/40 hover:text-white transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* BOTTOM FINAL CTA */}
        <div className="text-center">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to deploy your <span className="text-[#C5E033]">AI system?</span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto mb-8">
            Schedule a free 30-minute demo to map out your custom automation plan.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-base font-bold hover:brightness-110 transition-all text-center"
          >
            Book My Demo Call
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
