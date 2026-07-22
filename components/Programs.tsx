"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

const TIERS = [
  {
    revenue: "$100k – $500k",
    name: "Kickstart",
    desc: "Foundation for emerging operators ready to professionalize their reception.",
    features: ["24/7 AI Receptionist", "SMS Lead Capture", "CRM Basic Sync"],
    highlight: false,
    accent: "primary" as const,
  },
  {
    revenue: "$500k – $2M",
    name: "Accelerate",
    desc: "Aggressive scaling for multi-crew companies wanting zero missed calls.",
    features: [
      "Full Appointment Booking",
      "Automated Review Gen",
      "Custom Workflow Voice",
      "Advanced CRM Analytics",
    ],
    highlight: true,
    accent: "primary" as const,
  },
  {
    revenue: "$2M – $10M",
    name: "Elite",
    desc: "Market dominance via omni-channel AI integration and dedicated support.",
    features: ["Multi-Region Routing", "ServiceTitan / Housecall Pro Sync", "Predictive Lead Scoring"],
    highlight: false,
    accent: "primary" as const,
  },
  {
    revenue: "$10M+ Enterprise",
    name: "Titan",
    desc: "Custom infrastructure for franchises and national home-service brands.",
    features: ["Custom LLM Fine-Tuning", "White-Label Options", "Dedicated Architect"],
    highlight: false,
    accent: "cyan" as const,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Programs() {
  return (
    <section id="programs" className="py-24 bg-background-subtle">
      <div className="max-w-container-max mx-auto px-margin-desktop">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full font-mono text-label-sm mb-6 border border-primary/20">
            REVENUE ACCELERATION ENGINE
          </div>
          <h2 className="font-display text-display-lg text-white mb-4">
            Growth Programs, Built by Revenue Stage
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Pick the program that matches where your HVAC business is today — every tier includes a
            full AI receptionist, not a stripped-down demo.
          </p>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-gutter"
        >
          {TIERS.map((tier) => (
            <motion.div
              key={tier.name}
              variants={item}
              whileHover={{ y: -8 }}
              className={`p-8 flex flex-col h-full rounded-xl transition-all duration-300 ${
                tier.highlight
                  ? "bg-surface-container border-2 border-growth-green shadow-2xl md:scale-105 z-10 relative"
                  : tier.accent === "cyan"
                  ? "bg-surface-container-highest border border-outline hover:border-electric-cyan"
                  : "bg-surface-container-low border border-outline hover:border-growth-green"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-growth-green text-deep-navy px-4 py-1 font-mono text-label-sm font-bold rounded">
                  MOST POPULAR
                </div>
              )}
              <div className="font-mono text-label-sm text-on-surface-variant mb-2">TARGET REVENUE</div>
              <div className="font-display text-headline-md text-white mb-6">{tier.revenue}</div>
              <h3
                className={`font-display text-headline-lg mb-4 ${
                  tier.accent === "cyan" && !tier.highlight ? "text-white" : "text-primary"
                }`}
              >
                {tier.name}
              </h3>
              <p className="font-body text-body-md text-on-surface-variant mb-8">{tier.desc}</p>
              <ul className="space-y-4 mb-12 flex-grow">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span
                      className={`material-symbols-outlined ${
                        tier.accent === "cyan" ? "text-electric-cyan" : "text-growth-green"
                      }`}
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-body text-body-md text-on-surface">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`w-full text-center py-4 font-display rounded transition-all duration-300 active:scale-95 ${
                  tier.highlight
                    ? "bg-growth-green text-deep-navy font-bold hover:bg-electric-cyan"
                    : tier.accent === "cyan"
                    ? "bg-electric-cyan text-deep-navy font-bold hover:bg-white"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-deep-navy"
                }`}
              >
                Talk to a Strategist
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
