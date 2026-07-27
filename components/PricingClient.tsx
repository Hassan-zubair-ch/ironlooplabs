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
              Simple, Transparent Pricing
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Build your IronLoop AI system. <br />
              <span className="text-[#C5E033]">Pay for what you use.</span>
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed mb-8 max-w-2xl">
              Start with the Core Engine, then add the modules your business needs. Every plan is custom-quoted — but here's what to expect.
            </p>

            <div className="flex flex-wrap gap-6 text-sm text-white/70 font-medium">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                No long-term contracts
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                No setup surprises
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#C5E033] text-lg">check_circle</span>
                Pricing confirmed on your demo call
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

        {/* MODULAR CARDS (4 COLUMNS) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-28"
        >
          {/* Card 1: Core Engine */}
          <div className="bg-[#0f1016]/90 border border-[#C5E033]/30 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033] transition-colors">
            <div className="absolute top-0 inset-x-0 h-1 bg-[#C5E033]" />
            <div>
              <span className="text-[11px] font-mono font-bold text-[#C5E033] uppercase tracking-wider block mb-3">
                Required for all plans
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-1">Core Engine</h3>
              <p className="font-display text-2xl font-extrabold text-[#C5E033] mb-1">
                $1,100 – $1,750
              </p>
              <p className="text-white/40 font-mono text-xs mb-6">/ month</p>

              <ul className="space-y-3 mb-8">
                {[
                  "All automation funnels + full API access",
                  "Live reporting dashboard",
                  "Priority support",
                  "Dedicated account manager",
                  "Professional script writing",
                  "Custom funnel branches",
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

            <div>
              <p className="text-[11px] text-white/40 italic mb-4 leading-normal">
                Exact pricing confirmed at demo. Varies by business size and CRM type.
              </p>
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
              >
                Get My Quote
              </Link>
            </div>
          </div>

          {/* Card 2: Inbound Voice AI */}
          <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033]/40 transition-colors">
            <div>
              <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider block mb-3">
                24/7 Coverage
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-1">Inbound Voice AI</h3>
              <p className="font-display text-2xl font-extrabold text-white mb-1">
                $900 – $1,250
              </p>
              <p className="text-white/40 font-mono text-xs mb-6">/ month</p>

              <ul className="space-y-3 mb-8">
                {[
                  "24/7 AI call answering",
                  "After-hours, weekend & holiday coverage",
                  "Voice, text & email responses",
                  "Lead qualification & intelligent routing",
                  "CRM-synced call notes",
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
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Add to My Plan
            </Link>
          </div>

          {/* Card 3: Outbound AI */}
          <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033]/40 transition-colors">
            <div>
              <span className="text-[11px] font-mono font-bold text-indigo-400 uppercase tracking-wider block mb-3">
                Proactive Outreach
              </span>
              <h3 className="font-display text-xl font-bold text-white mb-1">Outbound AI</h3>
              <p className="font-display text-2xl font-extrabold text-white mb-1">
                $1,000 – $1,500
              </p>
              <p className="text-white/40 font-mono text-xs mb-6">/ month</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Estimate follow-up campaigns",
                  "Appointment reminders",
                  "Re-engagement outreach",
                  "Proactive pipeline-fill calling",
                  "Performance reporting",
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
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Add to My Plan
            </Link>
          </div>

          {/* Card 4: AI Reactivation */}
          <div className="bg-[#0f1016]/90 border border-purple-500/40 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden shadow-xl hover:border-[#C5E033] transition-colors">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-[#C5E033]" />
            <div>
              <div className="flex items-start justify-between mb-3">
                <span className="text-[11px] font-mono font-bold text-purple-400 uppercase tracking-wider">
                  Signature Module
                </span>
                <span className="px-2 py-0.5 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/30 text-[#C5E033] text-[9px] font-mono font-bold uppercase">
                  Most ROI
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">AI Reactivation</h3>
              <p className="font-display text-2xl font-extrabold text-[#C5E033] mb-1">
                $1,500 – $2,500
              </p>
              <p className="text-white/40 font-mono text-xs mb-6">/ month</p>

              <ul className="space-y-3 mb-8">
                {[
                  "Up to 10 concurrent AI calls simultaneously",
                  "Full dormant lead list processing",
                  "Personalized call scripts per lead",
                  "CRM integration for auto-status updates",
                  "Enterprise tier (10+ calls) available",
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
              className="w-full inline-flex items-center justify-center py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white font-display text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-all"
            >
              Add to My Plan
            </Link>
          </div>
        </motion.div>

        {/* PAY-AS-YOU-GO USAGE FEES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-28"
        >
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Pay-as-you-go <span className="text-[#C5E033]">usage fees</span>
            </h2>
            <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
              Simple, transparent rates. Only pay for what you actually use.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-16">
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-2xl p-6 text-center shadow-xl">
              <p className="font-display text-3xl font-black text-[#C5E033] mb-1">$0.15</p>
              <p className="text-xs font-mono text-white/60">/ minute — Voice AI</p>
              <p className="text-[11px] text-white/40 mt-2 italic">Only charged when answered</p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-2xl p-6 text-center shadow-xl">
              <p className="font-display text-3xl font-black text-[#C5E033] mb-1">$0.01</p>
              <p className="text-xs font-mono text-white/60">/ message — Text/SMS</p>
            </div>

            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-2xl p-6 text-center shadow-xl">
              <p className="font-display text-3xl font-black text-[#C5E033] mb-1">$0.01</p>
              <p className="text-xs font-mono text-white/60">/ 1K tokens — AI processing</p>
            </div>
          </div>

          {/* REAL WORLD USAGE ESTIMATES TABLE */}
          <div className="max-w-4xl mx-auto">
            <h3 className="font-display text-lg font-bold text-white mb-6 text-center">
              Real-World Usage Estimates
            </h3>
            <div className="overflow-x-auto rounded-2xl border border-white/[0.08] bg-[#0a0b10] p-6 shadow-xl">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-white/10 text-xs font-mono tracking-wider uppercase text-white/50">
                    <th className="py-3 px-4">Business Size</th>
                    <th className="py-3 px-4">Voice AI Calls</th>
                    <th className="py-3 px-4">Texts</th>
                    <th className="py-3 px-4">AI Tokens</th>
                    <th className="py-3 px-4 text-right">Est. Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04] text-sm">
                  {[
                    {
                      size: "Small Service Co.",
                      calls: "50 calls (~5 min)",
                      texts: "200 messages",
                      tokens: "10K tokens",
                      total: "~$40/month",
                    },
                    {
                      size: "Growing Contractor Co.",
                      calls: "200 calls (~5 min)",
                      texts: "800 messages",
                      tokens: "50K tokens",
                      total: "~$158/month",
                    },
                    {
                      size: "High-Volume",
                      calls: "500 calls (~5 min)",
                      texts: "2,000 msgs",
                      tokens: "200K tokens",
                      total: "~$397/month",
                    },
                    {
                      size: "Enterprise",
                      calls: "1,000 calls (~5 min)",
                      texts: "5,000 msgs",
                      tokens: "1M tokens",
                      total: "~$810/month",
                    },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-white">{row.size}</td>
                      <td className="py-3.5 px-4 text-white/60">{row.calls}</td>
                      <td className="py-3.5 px-4 text-white/60">{row.texts}</td>
                      <td className="py-3.5 px-4 text-white/60">{row.tokens}</td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-[#C5E033]">
                        {row.total}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* RECOMMENDED PACKAGES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mb-28"
        >
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Recommended <span className="text-[#C5E033]">Packages</span>
            </h2>
            <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
              Pre-built bundles to get you started fast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70 font-mono text-[10px] font-bold uppercase mb-4">
                  Most Popular
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Starter</h3>
                <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                  $2,000 – $3,000
                </p>
                <p className="text-white/40 font-mono text-xs mb-6">/ month estimated</p>

                <p className="text-xs text-white/70 mb-2">
                  <strong className="text-white">Modules:</strong> Core Engine + Inbound Voice AI
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  <strong className="text-white">Best for:</strong> Trade and service companies getting started with AI automation.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Every lead responded to instantly",
                    "Never miss an after-hours call",
                    "Full pipeline visibility",
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                      <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0">
                        check
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Growth */}
            <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-8 flex flex-col justify-between shadow-xl">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-white/70 font-mono text-[10px] font-bold uppercase mb-4">
                  Scale Up
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Growth</h3>
                <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                  $3,500 – $5,000
                </p>
                <p className="text-white/40 font-mono text-xs mb-6">/ month estimated</p>

                <p className="text-xs text-white/70 mb-2">
                  <strong className="text-white">Modules:</strong> Core Engine + Inbound Voice AI + Outbound AI
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  <strong className="text-white">Best for:</strong> Growing companies ready to go fully proactive with outreach and follow-up automation.
                </p>

                <ul className="space-y-3 mb-8">
                  {[
                    "Proactive estimate follow-up",
                    "Pipeline fill automation",
                    "Full outbound campaigns",
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                      <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0">
                        check
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
              >
                Get Started
              </Link>
            </div>

            {/* Full Stack */}
            <div className="bg-[#0f1016]/90 border border-purple-500/40 rounded-3xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-purple-500 to-[#C5E033]" />
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/30 text-[#C5E033] font-mono text-[10px] font-bold uppercase mb-4">
                  Maximum ROI
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-1">Full Stack</h3>
                <p className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">
                  $5,500 – $7,500
                </p>
                <p className="text-white/40 font-mono text-xs mb-6">/ month estimated</p>

                <p className="text-xs text-white/70 mb-2">
                  <strong className="text-white">Modules:</strong> Core Engine + Inbound Voice AI + Outbound AI + AI Reactivation
                </p>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  <strong className="text-white">Best for:</strong> Established enterprise companies with existing lead lists wanting complete revenue automation.
                </p>

                <ul className="space-y-3 mb-6">
                  {[
                    "Dead lead recovery",
                    "10x concurrent calling",
                    "Complete revenue automation",
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 text-xs text-white/80">
                      <span className="material-symbols-outlined text-[#C5E033] text-sm shrink-0">
                        check
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] text-[#C5E033] font-medium italic mb-6">
                  Ask about multi-module savings during your demo.
                </p>
              </div>

              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3.5 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all"
              >
                Get Started
              </Link>
            </div>
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
