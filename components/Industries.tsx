"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const SECONDARY = [
  {
    icon: "plumbing",
    iconBg: "bg-action-yellow",
    title: "Plumbing",
    desc: "EchoAI handles the mess of late-night leaks, ensuring urgent calls are routed and non-urgent are booked.",
    tag: "URGENT CALL ROUTING",
  },
  {
    icon: "pest_control",
    iconBg: "bg-action-yellow",
    title: "Pest Control",
    desc: "Intelligent dispatching for urgent infestations. EchoAI triages leads based on pest type and severity.",
    tag: "24/7 EMERGENCY TRIAGE",
  },
  {
    icon: "grass",
    iconBg: "bg-growth-green",
    title: "Lawn Care & Landscaping",
    desc: "Handles seasonal call volume, captures job site details, and integrates with RealGreen or Jobber.",
    tag: "SEASONAL SCHEDULING",
  },
  {
    icon: "medical_services",
    iconBg: "bg-tertiary-container",
    iconColor: "text-on-tertiary-container",
    title: "Medical Clinics",
    desc: "HIPAA-compliant data handling and appointment management for high-growth specialty practices.",
    tag: "HIPAA COMPLIANT",
  },
];

const rows = [
  { time: "09:12 AM", icon: "hvac", industry: "HVAC", intent: "NO-COOLING EMERGENCY", status: "AI ACTIVE", statusClass: "bg-growth-green/10 text-growth-green border-growth-green/20", pulse: true, action: "View Transcript", actionIcon: "open_in_new" },
  { time: "09:08 AM", icon: "pest_control", industry: "Pest Control", intent: "EMERGENCY DISPATCH", status: "SENT TO TECH", statusClass: "bg-action-yellow/10 text-action-yellow border-action-yellow/20", pulse: false, action: "Track Dispatch", actionIcon: "near_me" },
  { time: "08:54 AM", icon: "medical_services", industry: "Medical", intent: "APPOINTMENT RESCHEDULE", status: "CALENDAR UPDATED", statusClass: "bg-tertiary/10 text-tertiary border-tertiary/20", pulse: false, action: "Notify Patient", actionIcon: "notifications_active" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-mono text-label-sm uppercase tracking-widest text-growth-green mb-4 block">
            Tailored AI Solutions
          </span>
          <h2 className="font-display text-display-lg text-white mb-6">
            Built for <span className="text-growth-green">HVAC</span>. Ready for Every Trade.
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Our flagship model is trained for the calls that make or break an HVAC business —
            no-cooling emergencies, maintenance plans, and installs. Explore how it adapts across other
            service trades.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* HVAC — flagship, featured */}
          <motion.div
            whileHover={{ y: -8 }}
            className="md:col-span-8 bg-surface-container-low border border-outline-variant/30 p-10 rounded-xl relative overflow-hidden transition-all duration-500 hover:border-growth-green"
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-growth-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(197,224,51,0.3)]">
                <span className="material-symbols-outlined text-black text-3xl">hvac</span>
              </div>
              <h3 className="font-display text-headline-lg text-white mb-4">HVAC Services</h3>
              <p className="font-body text-body-md text-on-surface-variant mb-8 max-w-md">
                Our flagship AI model. Captures crucial unit data (SEER, age, model) on the first call,
                triages no-cooling and no-heat emergencies, and books straight into ServiceTitan or
                Housecall Pro.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-growth-green" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-body text-on-surface">Emergency triage for no-cooling / no-heat calls</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-growth-green" style={{ fontVariationSettings: "'FILL' 1" }}>
                    check_circle
                  </span>
                  <span className="font-body text-on-surface">Automated upsells for maintenance plans &amp; filters</span>
                </li>
              </ul>
              <a
                href="#contact"
                className="bg-growth-green text-deep-navy px-8 py-4 rounded-lg font-bold flex items-center gap-2 group btn-glow-hover w-fit"
              >
                Explore HVAC Program{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block opacity-30 pointer-events-none transition-transform duration-700 hover:scale-105">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaxcTOh2r_gG8thaPZ35a74NNXZ_IV1VwqKTqAsQACRNXjU-yxG6MtIA8MELJG1TxWWM77vhnmkC2jbWrZoFoiEU2bMlelZIcMS_HVSFYRh6CrRwYCVRTVYMrFjSsFgzXKvKNvWEYoPoxYh0S67254qMcGHicXyDs467a-QSEotaBZivNHxsNSGY1WxeRVV0QoIF5RiGTy1SW7HJVQCNVJGbWCLCOIjXoVKXAL1MD3k7mLGSYYpQUf"
                alt="HVAC technician at work"
                fill
                className="object-cover rounded-l-3xl"
              />
            </div>
          </motion.div>

          {SECONDARY.map((s) => (
            <motion.div
              key={s.title}
              whileHover={{ y: -6 }}
              className="md:col-span-4 bg-surface-container border border-outline-variant/30 p-8 rounded-xl flex flex-col justify-between transition-all duration-500 hover:border-growth-green"
            >
              <div>
                <div className={`w-12 h-12 ${s.iconBg} rounded-full flex items-center justify-center mb-6`}>
                  <span className={`material-symbols-outlined ${s.iconColor ?? "text-black"}`}>{s.icon}</span>
                </div>
                <h3 className="font-display text-headline-md text-white mb-3">{s.title}</h3>
                <p className="font-body text-body-md text-on-surface-variant">{s.desc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-outline-variant/30 flex justify-between items-center group cursor-pointer">
                <span className="font-mono text-label-sm text-growth-green">{s.tag}</span>
                <span className="material-symbols-outlined text-growth-green group-hover:translate-x-1 transition-transform">
                  chevron_right
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom build CTA */}
        <Reveal className="mt-16 relative rounded-[32px] overflow-hidden bg-surface-container-low border border-outline-variant/20 py-20 px-10 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="font-display text-headline-lg text-white mb-6">Don&apos;t see your industry?</h3>
              <p className="font-body text-body-lg text-on-surface-variant mb-10">
                We specialize in developing bespoke AI receptionists for niche service providers. If you
                have a complex intake flow, we have the solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-growth-green text-deep-navy px-10 py-5 rounded-lg font-bold text-lg btn-glow-hover text-center">
                  Request Custom Build
                </a>
                <a href="#contact" className="border-2 border-growth-green text-growth-green px-10 py-5 rounded-lg font-bold text-lg hover:bg-growth-green hover:text-deep-navy transition-all duration-300 text-center">
                  Talk to a Specialist
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { v: "99%", l: "Intent Recognition", c: "text-growth-green" },
                { v: "35k+", l: "Leads Captured", c: "text-action-yellow" },
                { v: "12s", l: "Response Time", c: "text-growth-green" },
                { v: "15+", l: "CRM Integrations", c: "text-action-yellow" },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className={`${stat.c} text-3xl font-bold mb-2`}>{stat.v}</div>
                  <div className="text-sm font-mono uppercase tracking-wider text-on-surface-variant">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Real-time interaction preview */}
        <Reveal className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-display text-headline-lg text-white">Real-Time Interaction Preview</h3>
          </div>
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-surface-container-high border-b border-outline-variant/30">
                  {["TIME", "INDUSTRY", "INTENT", "STATUS", "ACTION"].map((h) => (
                    <th key={h} className="p-6 font-mono text-on-surface-variant">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="font-body text-on-surface">
                {rows.map((r) => (
                  <tr
                    key={r.time}
                    className="border-b border-outline-variant/10 hover:bg-surface-container-high/60 transition-all duration-300 group"
                  >
                    <td className="p-6 opacity-60">{r.time}</td>
                    <td className="p-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-growth-green text-sm">{r.icon}</span>
                      {r.industry}
                    </td>
                    <td className="p-6 font-medium">{r.intent}</td>
                    <td className="p-6">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-bold border inline-block ${r.statusClass} ${
                          r.pulse ? "animate-pulse" : ""
                        }`}
                      >
                        {r.status}
                      </span>
                    </td>
                    <td className="p-6">
                      <button className="text-growth-green font-bold hover:underline group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        {r.action} <span className="material-symbols-outlined text-sm">{r.actionIcon}</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
