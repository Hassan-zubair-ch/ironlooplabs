"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQS = [
  {
    q: "Does IronLoop bring me new leads, or just handle the ones I have?",
    a: "Just the ones you have. IronLoop makes sure every lead you're already paying for — from ads, referrals, or your website — gets a response fast enough to actually convert.",
  },
  {
    q: "Does it book directly into my calendar or CRM?",
    a: "Yes. Every booked job lands in your existing system automatically, in real time. Nothing to copy over manually.",
  },
  {
    q: "What happens on nights, weekends, and holidays?",
    a: "Same as any other hour — answered instantly, no voicemail, no waiting until Monday.",
  },
  {
    q: "Am I firing my front desk for this?",
    a: "No. IronLoop takes the repetitive, time-sensitive work off their plate — first response, scheduling, follow-up — so your staff can spend time on estimates and jobs already in motion.",
  },
  {
    q: "How long until we're actually live?",
    a: "Two weeks, typically. Setup, integration, and testing included.",
  },
  {
    q: "What is Dead Lead Reactivation exactly?",
    a: "We scan your CRM for leads that went quiet, then re-engage them automatically with follow-up outreach — turning old, forgotten contacts back into booked appointments.",
  },
  {
    q: "What if 20 calls come in at the exact same time?",
    a: "All 20 get answered. There's no queue and no limit on simultaneous calls.",
  },
  {
    q: "Is customer data safe with this?",
    a: "Yes — everything is encrypted in transit and at rest, and it's never sold or shared.",
  },
  {
    q: "Does it work with the CRM I already use?",
    a: "It works with every major CRM used in home services. If you're unsure about yours, ask us directly — we'll check before you sign anything.",
  },
  {
    q: "Can I route a specific customer straight to a human?",
    a: "Yes, any time, from your dashboard — flag a contact and it skips straight to your team.",
  },
  {
    q: "What if my CRM stops syncing properly?",
    a: "We monitor that on our end and fix it before it becomes your problem.",
  },
  {
    q: "What's actually included in onboarding?",
    a: "Call flow setup, CRM integration, scripts written for your business specifically, and a live test run with your team before anything goes public.",
  },
  {
    q: "Do you keep improving it after we launch?",
    a: "Yes — we track call outcomes and adjust scripts and timing on an ongoing basis to keep conversion rates climbing.",
  },
];

export default function PricingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
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
        <div className="max-w-4xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C5E033] font-mono text-xs font-semibold tracking-wider uppercase mb-6">
              Contractor Answering &amp; Follow-Up Pricing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Straightforward pricing.<br />
              <span className="text-[#C5E033]">No surprise invoices.</span>
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
              One-time setup to get everything connected to your CRM and phone system, then a flat monthly rate. No per-call fees, no long-term contract.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/70 font-medium font-mono">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                No contracts
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                Cancel anytime
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                Live in 14 days
              </span>
            </div>
          </motion.div>
        </div>

        {/* HOW OUR PRICING WORKS BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="bg-[#0f1016]/90 border border-white/[0.08] border-l-4 border-l-[#C5E033] rounded-2xl p-6 sm:p-8 shadow-xl">
            <h3 className="font-display text-lg font-bold text-white mb-2">How our pricing works:</h3>
            <p className="font-body text-sm text-white/60 leading-relaxed">
              IronLoop AI plans are modular and custom-fitted to your business size, call volume, and CRM setup. The ranges below reflect typical pricing — your exact quote is confirmed after a free 30-minute demo call where we learn your operation and build your custom plan together.
            </p>
          </div>
        </motion.div>

        {/* MODULAR CARDS (3 COLUMNS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28"
        >
          {/* Tier 1: Missed-Call Recovery */}
          <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033]/40 transition-colors">
            <div>
              <span className="text-[11px] font-mono font-bold text-white/60 uppercase tracking-wider block mb-3">
                Tier 1 — Low-Risk Starter
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Missed-Call Recovery</h3>
              <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                $247 <span className="text-sm font-normal text-white/50">/ month</span>
              </p>
              <p className="text-white/50 font-mono text-xs mb-6">Setup: $397 (one-time)</p>

              <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                Missed-call text-back + after-hours call answering. Entry point for owners who just want the bleeding stopped.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Missed-call instant text-back (<5s)",
                  "After-hours call answering",
                  "Basic SMS lead qualification",
                  "Email & SMS notifications",
                  "No long-term contract",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/70">
                    <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0 mt-0.5">
                      check
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all text-center"
            >
              Get Started with Tier 1
            </Link>
          </div>

          {/* Tier 2: Full Front Desk */}
          <div className="bg-[#0f1016]/90 border border-[#C5E033]/40 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-2xl hover:border-[#C5E033] transition-colors">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#C5E033]" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-[#C5E033] uppercase tracking-wider">
                  Tier 2 — Standard Operational
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/30 text-[#C5E033] text-[9px] font-mono font-bold uppercase">
                  ⭐ MOST POPULAR
                </span>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Full Front Desk</h3>
              <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                $497 <span className="text-sm font-normal text-white/50">/ month</span>
              </p>
              <p className="text-[#C5E033]/80 font-mono text-xs mb-6">Setup: $697 (one-time)</p>

              <p className="text-xs text-white/70 leading-relaxed mb-6 font-body">
                Everything in Tier 1, plus speed-to-lead response, full 24/7 voice answering, and direct CRM booking. The tier most companies should land on.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Tier 1",
                  "Speed-to-lead response (<10s)",
                  "Full 24/7 AI voice answering",
                  "Direct calendar & CRM booking",
                  "ServiceTitan, Jobber & Housecall Pro sync",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                    <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0 mt-0.5">
                      check
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all text-center"
            >
              Get Started with Tier 2
            </Link>
          </div>

          {/* Tier 3: Full Pipeline */}
          <div className="bg-[#0f1016]/90 border border-purple-500/40 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033] transition-colors">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-[#C5E033]" />
            <div>
              <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-3">
                Tier 3 — Enterprise Growth
              </span>
              <h3 className="font-display text-2xl font-bold text-white mb-1">Full Pipeline</h3>
              <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                $897 <span className="text-sm font-normal text-white/50">/ month</span>
              </p>
              <p className="text-white/50 font-mono text-xs mb-6">Setup: $1,297 (one-time)</p>

              <p className="text-xs text-white/60 leading-relaxed mb-6 font-body">
                Everything in Tier 2, plus dead-lead reactivation and multi-touch follow-up sequences. For companies where a handful of recovered jobs a month easily justifies the cost.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Everything in Tier 2",
                  "Dead-lead CRM reactivation engine",
                  "Multi-touch follow-up sequences",
                  "Unclosed estimate recovery",
                  "14-day setup & dedicated onboarding",
                ].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-white/70">
                    <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0 mt-0.5">
                      check
                    </span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-white/[0.06] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all text-center"
            >
              Get Started with Tier 3
            </Link>
          </div>
        </motion.div>





        {/* REVENUE MULTIPLIER / IMPACT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-28 text-center"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-3">
            WHY IT PAYS FOR ITSELF
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-14 tracking-tight">
            Stop paying for leads you <span className="text-[#C5E033]">never call back.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">9x</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                FASTER RESPONSE
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">Speed Wins the Job</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Studies show leads contacted within 5 minutes convert 9x more often than leads contacted an hour later. IronLoop responds in under 3 seconds — every call, every time.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">80%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                LESS OVERHEAD
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">One Flat Rate. No Staffing Headaches.</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                No after-hours answering service. No overtime for your front desk. No hiring, training, or turnover. IronLoop covers every call for a fraction of what a call center costs.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">$$$</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                LEADS RESCUED
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">Your CRM Is Sitting on Free Money</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Every home service business has a graveyard of old leads that went cold. Dead Lead Reactivation reopens those conversations automatically and turns forgotten contacts into new jobs.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-28 text-center"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#C5E033] inline-block mb-3">
            BEFORE YOU BOOK A CALL
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-10">
            Questions owners <span className="text-[#C5E033]">actually ask us.</span>
          </h2>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-[#0f1016]/90 border border-white/[0.08] rounded-2xl overflow-hidden shadow-md"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left font-display text-base font-semibold text-white hover:text-[#C5E033] transition-colors"
                >
                  <span className="pr-4">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-white/40 transition-transform duration-300 ${
                      openFaq === idx ? "rotate-180 text-[#C5E033]" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-sm font-body text-white/60 leading-relaxed border-t border-white/[0.04]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* BOTTOM FINAL CTA */}
        <div className="text-center pt-20 border-t border-white/[0.06]">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to see your <span className="text-[#C5E033]">custom quote?</span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto mb-8">
            Every plan is sized to your business. Get your custom pricing in a free 30-minute demo.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-base font-bold hover:brightness-110 transition-all text-center"
          >
            Book My Free Demo
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
