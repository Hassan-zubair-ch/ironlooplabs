"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const FAQS = [
  {
    q: "Is IronLoop AI a lead generation service?",
    a: "No. IronLoop AI does not sell raw leads. We provide autonomous AI agents and infrastructure that work your existing inbound leads, past customer databases, and warm marketing leads 24/7.",
  },
  {
    q: "Can the AI actually book jobs in my CRM?",
    a: "Yes! IronLoop AI integrates directly with major CRMs (HubSpot, Salesforce, ServiceTitan, Jobber, Housecall Pro, Zapier, etc.) to check real-time technician calendar availability, create jobs, and log every transcript.",
  },
  {
    q: "What happens to calls after hours and on weekends?",
    a: "Our Voice AI handles 100% of after-hours and weekend calls in under 3 seconds. It qualifies callers, collects job details, schedules appointments, and sends instant SMS notifications to your emergency team if urgent.",
  },
  {
    q: "Will this replace my office staff?",
    a: "No. IronLoop AI acts as a 24/7 force multiplier for your team. It handles repetitive phone intake, initial qualifying, estimate follow-ups, and cold lead reactivation so your human team can focus on high-value operations.",
  },
  {
    q: "How fast can we go live?",
    a: "Onboarding and custom voice/script training typically takes 10 to 14 business days. We build your custom call flows, test CRM integrations, and launch with full QA oversight.",
  },
  {
    q: "How does the Dead Lead Reactivation work?",
    a: "You provide cold or unbooked lead lists from the past 6–12 months. Our AI dials through the list with up to 10 concurrent streams, engages prospects with personalized context, and books interested leads back onto your calendar.",
  },
  {
    q: "Can the AI run more than 10 calls at once?",
    a: "Yes. Enterprise tiers support 20, 50, or 100+ concurrent AI call channels simultaneously during major marketing campaigns or storm response events.",
  },
  {
    q: "Is my customer data secure?",
    a: "Absolutely. We enforce end-to-end encryption, strict data isolation, and enterprise security standards. Your lead data is never shared or trained on public models.",
  },
  {
    q: "Which CRMs do you support?",
    a: "We natively support ServiceTitan, Jobber, Housecall Pro, Salesforce, HubSpot, GoHighLevel, Follow Up Boss, and custom webhooks/Zapier endpoints.",
  },
  {
    q: "How do I pause the AI for a specific customer?",
    a: "You can instantly pause automated AI outreach for any account, contact, or deal directly from your CRM status tags or through your live IronLoop dashboard with a single click.",
  },
  {
    q: "What if my CRM data isn't syncing correctly?",
    a: "Our system includes dual-way fallback webhooks and real-time error alerts. If a sync delay occurs, data is queued securely until the connection is automatically restored.",
  },
  {
    q: "What's included in onboarding?",
    a: "Onboarding includes full SOP script customization, CRM mapping, voice synthesis tuning, team training, and 14 days of live QA monitoring during soft launch.",
  },
  {
    q: "Do you offer ongoing optimization?",
    a: "Yes! Every plan includes continuous script refinement, monthly conversion performance audits, and quarterly AI model updates based on your business results.",
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





        {/* REVENUE MULTIPLIER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-28"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-14 text-center">
            This isn't a cost. It's a <span className="text-[#C5E033]">revenue multiplier.</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">9x</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                Conversion boost
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">More Conversions</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                AI responds in 3 seconds, 24/7. Leads contacted within 5 minutes are 9x more likely to convert. We give you a 3-second response every time.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">80%</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                Cost reduction
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">Lower Overhead</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Replace costly call center headcount and manual follow-up labor with AI that costs a fraction of the price and works around the clock.
              </p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 text-center shadow-xl">
              <p className="font-display text-5xl font-black text-[#C5E033] mb-2">$$$</p>
              <p className="text-xs font-mono uppercase tracking-wider text-white/40 mb-4">
                Revenue recovered
              </p>
              <h3 className="font-display text-lg font-bold text-white mb-2">Recovered Revenue</h3>
              <p className="font-body text-sm text-white/60 leading-relaxed">
                Dead lead lists represent thousands in unrealized revenue. Our Reactivation AI turns yesterday's cold leads into today's booked jobs.
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
          className="max-w-3xl mx-auto mb-28"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-10 text-center">
            Frequently Asked <span className="text-[#C5E033]">Questions</span>
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
