"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  tag: string;
  description: string;
  features: string[];
  metrics: { label: string; value: string }[];
}

const INDUSTRIES: IndustryItem[] = [
  {
    id: "hospitals",
    title: "Hospitals & Health",
    icon: "local_hospital",
    tag: "HIPAA COMPLIANT",
    description: "24/7 emergency patient triage, urgent call escalation, and secure electronic health record synchronization.",
    features: [
      "HIPAA-compliant encrypted voice & data intake",
      "Immediate ER & specialist on-call routing",
      "Direct integration with Epic, Cerner & EHR systems"
    ],
    metrics: [
      { label: "Compliance", value: "100% HIPAA" },
      { label: "Wait Time", value: "< 5 Sec" },
      { label: "Intake Accuracy", value: "99.8%" }
    ]
  },
  {
    id: "clinics",
    title: "Medical Clinics",
    icon: "medical_services",
    tag: "CLINIC SCHEDULING",
    description: "Automated specialty practice scheduling, patient pre-screening, and instant prescription inquiry routing.",
    features: [
      "Specialty intake & appointment scheduling",
      "Automated SMS pre-op & appointment reminders",
      "No-show reduction & cancellation recovery"
    ],
    metrics: [
      { label: "No-Show Reduction", value: "42%" },
      { label: "Schedule Efficiency", value: "+35%" },
      { label: "Patient Rating", value: "4.9/5" }
    ]
  },
  {
    id: "dental",
    title: "Dental Practices",
    icon: "dentistry",
    tag: "PRACTICE AUTOMATION",
    description: "Recalling hygiene appointments, emergency toothache triage, and after-hours emergency booking.",
    features: [
      "After-hours emergency dental triage",
      "Automated hygiene recall campaign triggers",
      "Syncs directly with Dentrix & Open Dental"
    ],
    metrics: [
      { label: "Hygiene Recalls", value: "+60%" },
      { label: "After-Hours Booked", value: "88%" },
      { label: "Staff Time Saved", value: "15 hrs/wk" }
    ]
  },
  {
    id: "hvac",
    title: "HVAC Services",
    icon: "hvac",
    tag: "EMERGENCY DISPATCH",
    description: "No-cooling/no-heat emergency triage, SEER unit data capture, and instant dispatch calendar booking.",
    features: [
      "Priority triage for extreme heat/cold calls",
      "Captures equipment model, age & diagnostic details",
      "Direct dispatch into ServiceTitan & Housecall Pro"
    ],
    metrics: [
      { label: "Emergency Response", value: "Instant" },
      { label: "Call Capture Rate", value: "99.4%" },
      { label: "Monthly Revenue Lift", value: "+$14,500" }
    ]
  },
  {
    id: "plumbing",
    title: "Plumbing & Urgent",
    icon: "plumbing",
    tag: "RAPID RESPONSE",
    description: "Late-night leak response, burst-pipe escalation, and intelligent technician dispatching.",
    features: [
      "Late-night burst pipe emergency routing",
      "Automated job photo & location request via SMS",
      "Smart technician assignment based on service zone"
    ],
    metrics: [
      { label: "Dispatch Speed", value: "12 Sec" },
      { label: "Job Conversion", value: "94%" },
      { label: "After-Hours ROI", value: "5.2x" }
    ]
  },
  {
    id: "pest",
    title: "Pest & Lawn Care",
    icon: "pest_control",
    tag: "SEASONAL TRIAGE",
    description: "Intelligent infestation triage, route density scheduling, and automated contract renewals.",
    features: [
      "Urgent infestation severity assessment",
      "Route density & geographic cluster booking",
      "Seasonal recurring contract auto-renewals"
    ],
    metrics: [
      { label: "Route Efficiency", value: "+28%" },
      { label: "Contract Renewal", value: "91%" },
      { label: "Lead Response", value: "< 10 Sec" }
    ]
  },
  {
    id: "field",
    title: "Home & Repair",
    icon: "home_repair_service",
    tag: "ESTIMATE BOOKING",
    description: "Roofing, electrical, and general repair dispatch with instant estimate scheduling and follow-ups.",
    features: [
      "Instant estimate calendar reservation",
      "Automated pre-visit qualification questions",
      "Seamless integration with Jobber & CRM"
    ],
    metrics: [
      { label: "Estimate Conversion", value: "48%" },
      { label: "Missed Calls", value: "0%" },
      { label: "Tech Utilization", value: "92%" }
    ]
  },
  {
    id: "commercial",
    title: "Commercial Facility",
    icon: "corporate_fare",
    tag: "MULTI-SITE OPS",
    description: "Multi-tenant work order processing, emergency vendor dispatch, and maintenance team tracking.",
    features: [
      "Multi-site incident ticketing & priority dispatch",
      "Tenant work request AI classification",
      "Automated vendor notification & confirmation"
    ],
    metrics: [
      { label: "Ticket Resolution", value: "2x Faster" },
      { label: "Tenant Rating", value: "98%" },
      { label: "Vendor Response", value: "< 1 Min" }
    ]
  }
];

export default function Industries() {
  const [selectedId, setSelectedId] = useState<string>("hospitals");
  const activeIndustry = INDUSTRIES.find((item) => item.id === selectedId) || INDUSTRIES[0];

  return (
    <section id="industries" className="py-24 bg-dark-grid border-t border-b border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-growth-green/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-container-max mx-auto px-margin-desktop relative z-10">
        {/* Header Section matching exact screenshot layout */}
        <Reveal className="mb-16 text-center max-w-4xl mx-auto">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#C5E033] mb-4 block font-semibold">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6 uppercase tracking-tight leading-tight">
            AUTOMATION EXPERTS FOR THE <span className="text-[#C5E033]">HIGH-GROWTH INDUSTRIES</span>
          </h2>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We provide specialized AI receptionists &amp; workflow automation to healthcare, medical practices, and service trades. Select an industry to learn about our specific approach.
          </p>
        </Reveal>

        {/* 8-Cards Grid (4 cols x 2 rows) matching screenshot design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {INDUSTRIES.map((ind) => {
            const isSelected = ind.id === selectedId;
            return (
              <motion.div
                key={ind.id}
                onClick={() => setSelectedId(ind.id)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`relative group rounded-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 cursor-pointer min-h-[160px] ${
                  isSelected
                    ? "bg-[#14181f] border-2 border-[#C5E033] bg-card-grid shadow-[0_0_30px_rgba(197,224,51,0.2)] scale-[1.02]"
                    : "bg-[#121519] border border-white/10 hover:border-white/30 hover:bg-[#161a20]"
                }`}
              >
                {/* Grid overlay for selected card */}
                {isSelected && (
                  <div className="absolute inset-0 bg-card-grid rounded-2xl pointer-events-none opacity-60" />
                )}

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`transition-transform duration-300 ${isSelected ? "scale-110" : "group-hover:scale-110"}`}>
                    <span className="material-symbols-outlined text-5xl text-[#C5E033]">
                      {ind.icon}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-white text-lg mt-5 tracking-wide">
                    {ind.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Industry Detail Breakdown */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndustry.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="bg-[#121519] border border-[#C5E033]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl"
          >
            {/* Top Tag & Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pb-8 border-b border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C5E033]/15 border border-[#C5E033]/40 flex items-center justify-center shadow-[0_0_15px_rgba(197,224,51,0.2)]">
                  <span className="material-symbols-outlined text-[#C5E033] text-3xl">
                    {activeIndustry.icon}
                  </span>
                </div>
                <div>
                  <span className="font-mono text-xs text-[#C5E033] font-bold uppercase tracking-wider block mb-1">
                    {activeIndustry.tag}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-white font-bold">
                    {activeIndustry.title} Automation Solution
                  </h3>
                </div>
              </div>
              <a
                href="#contact"
                className="bg-[#C5E033] text-[#0B1C0E] px-8 py-4 rounded-xl font-bold font-display text-base flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all btn-glow-hover"
              >
                Deploy {activeIndustry.title} AI
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>

            {/* Description & Workflows Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <p className="font-body text-body-lg text-on-surface-variant leading-relaxed">
                  {activeIndustry.description}
                </p>
                <div className="space-y-3">
                  <span className="font-mono text-xs uppercase tracking-wider text-white/70 block mb-2">
                    Key Automated Capabilities:
                  </span>
                  {activeIndustry.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#C5E033]/20 flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[#C5E033] text-sm font-bold">
                          check
                        </span>
                      </span>
                      <span className="font-body text-white font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Column */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {activeIndustry.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="bg-[#181c22] border border-white/5 rounded-2xl p-5 text-center hover:border-[#C5E033]/30 transition-colors"
                  >
                    <div className="font-display text-2xl font-extrabold text-[#C5E033] mb-1">
                      {m.value}
                    </div>
                    <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-wider">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
