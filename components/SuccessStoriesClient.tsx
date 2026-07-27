"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HighEndCTA from "./HighEndCTA";

interface CaseStudy {
  id: string;
  company: string;
  industry: "Roofing" | "Solar" | "Healthcare & Insurance" | "Home Services";
  badgeColor: string;
  shortDesc: string;
  mainResult: string;
  hasAudio: boolean;
  audioTitle?: string;
  audioUrl?: string;
  imageCount: number;
  challenge: string;
  solution: string;
  impact: string[];
  metrics: { value: string; label: string }[];
  quote: string;
  author: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "healthcare-insurance",
    company: "Confidential Healthcare & Insurance Provider",
    industry: "Healthcare & Insurance",
    badgeColor: "#5998E5",
    shortDesc:
      "A healthcare insurance company reactivated a long-unused lead database using IronLoop AI's outbound system, generating 20+ qualified appointments in just 9 days.",
    mainResult: "20+ Reactivated Appointments in 9 Days",
    hasAudio: true,
    audioTitle: "Sample AI Outbound Patient Intake Call",
    audioUrl: "https://fast.wistia.net/embed/iframe/lwmpa5uf3s",
    imageCount: 1,
    challenge:
      "Over 5,000 dormant leads were sitting uncontacted in their CRM due to limited human phone rep availability. Previous email-only campaigns resulted in under 0.5% conversion rates.",
    solution:
      "IronLoop AI deployed a 10x concurrent outbound calling agent equipped with custom patient qualification scripts and direct EHR calendar booking.",
    impact: [
      "20+ high-intent appointments booked in the first 9 days.",
      "Zero human staff time required for initial qualification calls.",
      "100% compliant data collection with encrypted call audit logs.",
    ],
    metrics: [
      { value: "20+", label: "Appointments in 9 Days" },
      { value: "5,000", label: "Dormant Leads Worked" },
      { value: "<3s", label: "Agent Speed to Connect" },
      { value: "100%", label: "HIPAA Compliant" },
    ],
    quote:
      "We turned 5,000 forgotten leads into 20+ booked appointments in less than two weeks without hiring a single rep.",
    author: "VP of Business Development",
  },
  {
    id: "roofing-reactivation",
    company: "Confidential Commercial Roofing Enterprise",
    industry: "Roofing",
    badgeColor: "#C5E033",
    shortDesc:
      "A roofing company had hundreds of old leads sitting untouched in their CRM. Instead of hiring an expensive call center, IronLoop AI reactivated every single lead, generating 50+ booked appointments in weeks.",
    mainResult: "+50 Appointments Booked in 3 Weeks",
    hasAudio: true,
    audioTitle: "Sample AI Outbound Roofing Inspection Booking Call",
    imageCount: 2,
    challenge:
      "Over 800 storm damage inspection leads accumulated over 12 months were left unworked due to peak season operational overload.",
    solution:
      "IronLoop AI outbound reactivation engine systematically dialed through the database, verified roof age & storm damage needs, and scheduled inspection slots directly into ServiceTitan.",
    impact: [
      "50+ free roof inspection appointments booked within 21 days.",
      "Over $140,000 in newly opened commercial pipeline revenue.",
      "Saved an estimated $8,500/mo compared to hiring offshore BDRs.",
    ],
    metrics: [
      { value: "50+", label: "Appointments Booked" },
      { value: "$140k+", label: "Pipeline Revenue" },
      { value: "800+", label: "Old CRM Leads Reactivated" },
      { value: "0", label: "Human Calls Needed" },
    ],
    quote:
      "The AI reactivated leads we thought were dead forever. Booking 50+ inspections in 3 weeks completely transformed our quarter.",
    author: "Managing Director of Operations",
  },
  {
    id: "solar-omnichannel",
    company: "Confidential Solar Installation Specialist",
    industry: "Solar",
    badgeColor: "#7A7EDC",
    shortDesc:
      "A solar company was drowning in missed calls and unqualified ad leads. Deploying IronLoop AI across receptionist, lead qualifier, and reactivation engines yielded multiple streams of booked appointments without adding headcount.",
    mainResult: "Full Autonomous AI Sales Operation",
    hasAudio: true,
    audioTitle: "Sample AI Solar Qualification & Site Audit Booking",
    imageCount: 1,
    challenge:
      "Ad leads from Meta & Google Ads suffered 40% dropoff due to 30-minute manual callback delays. Inbound callers frequently landed on voicemail during peak hours.",
    solution:
      "Deployed IronLoop AI 24/7 inbound receptionist and instant speed-to-lead voice agent to answer calls within 3 seconds, qualify roof angle/utility bill eligibility, and lock in site survey appointments.",
    impact: [
      "Zero missed calls across 24/7 operating hours.",
      "Instant 3-second lead response time for all ad leads.",
      "3.2x increase in qualified solar consultation bookings.",
    ],
    metrics: [
      { value: "3.2x", label: "Consultation Booking Rate" },
      { value: "<3-sec", label: "Inbound Call Response" },
      { value: "100%", label: "Inbound Lead Capture" },
      { value: "40%", label: "Lower Cost Per Booking" },
    ],
    quote:
      "We replaced our delayed manual callbacks with instant AI voice qualification. Our site survey calendar stays packed week after week.",
    author: "Chief Operations Officer",
  },
  {
    id: "women-owned-roofing",
    company: "Confidential Women-Owned Roofing Contractor",
    industry: "Roofing",
    badgeColor: "#E53935",
    shortDesc:
      "A women-owned roofing company had ad leads slipping through the cracks without a structured CRM. IronLoop AI built their CRM pipeline from scratch, qualified incoming leads instantly, and recovered 25+ contracts in the first month.",
    mainResult: "25+ Recovered Contracts in 30 Days",
    hasAudio: true,
    audioTitle: "Sample AI Lead Qualification & CRM Sync Call",
    imageCount: 1,
    challenge:
      "Managing leads through scattered spreadsheets caused frequent missed opportunities and slow estimate delivery times.",
    solution:
      "Integrated IronLoop AI directly with Google/Meta Lead Ads for automated immediate phone call outreach, instant lead scoring, and automated estimator calendar booking.",
    impact: [
      "Built clean, automated sales pipeline from ground zero.",
      "25+ roof repair and replacement contracts signed in 30 days.",
      "Automated follow-ups cut lead drop-off to zero.",
    ],
    metrics: [
      { value: "25+", label: "Contracts Recovered" },
      { value: "100%", label: "Lead Capture Rate" },
      { value: "30 Days", label: "Time to Full ROI" },
      { value: "$0", label: "Extra Headcount Cost" },
    ],
    quote:
      "IronLoop AI gave us the professional sales backbone of a giant company overnight. Every ad dollar we spend now converts into booked work.",
    author: "Founder & Lead Estimator",
  },
];

const CATEGORIES = ["All", "Roofing", "Solar", "Healthcare & Insurance"] as const;

export default function SuccessStoriesClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeModal, setActiveModal] = useState<CaseStudy | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);

  const filteredCaseStudies = CASE_STUDIES.filter((cs) => {
    const matchesCategory =
      selectedCategory === "All" || cs.industry === selectedCategory;
    const matchesSearch =
      cs.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="bg-[#050505] text-white py-20 lg:py-28 relative overflow-hidden min-h-screen">
      {/* Background Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C5E033]/[0.04] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-white/[0.03] blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono font-bold text-[#C5E033] uppercase tracking-widest"
          >
            <span>✨ Real Proven Results</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            What happens when AI works{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-[#C5E033] bg-clip-text text-transparent">
              your sales floor.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            See how roofing, solar, healthcare, and home service businesses use IronLoop AI to recover lost leads, book more jobs, and grow revenue — without adding headcount.
          </motion.p>
        </div>

        {/* Search & Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 bg-white/[0.02] p-4 rounded-2xl border border-white/[0.08]"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#C5E033] text-[#050608] font-bold shadow-[0_0_20px_rgba(197,224,51,0.3)]"
                    : "bg-white/[0.04] text-white/60 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-white/40 text-sm">
              search
            </span>
            <input
              type="text"
              placeholder="Search case studies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/[0.04] border border-white/[0.1] rounded-xl pl-9 pr-4 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#C5E033] transition-colors"
            />
          </div>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCaseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => setActiveModal(cs)}
                className="w-full text-left group relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 overflow-hidden transition-all duration-300 hover:border-[#C5E033]/40 hover:bg-white/[0.04] hover:shadow-[0_0_40px_rgba(0,0,0,0.6)] flex flex-col justify-between h-full"
              >
                {/* Top Colored Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cs.badgeColor}, transparent)`,
                  }}
                />

                <div className="space-y-4 mb-6">
                  {/* Category Pill & Badges */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-lg text-[11px] font-bold tracking-wider uppercase"
                      style={{
                        color: cs.badgeColor,
                        backgroundColor: `${cs.badgeColor}15`,
                        border: `1px solid ${cs.badgeColor}30`,
                      }}
                    >
                      {cs.industry}
                    </span>
                    {cs.hasAudio && (
                      <span className="flex items-center gap-1.5 text-[11px] font-mono text-white/50 bg-white/[0.04] px-2.5 py-1 rounded-lg border border-white/[0.06]">
                        <span className="material-symbols-outlined text-[13px] text-[#C5E033]">
                          graphic_eq
                        </span>
                        Audio Demo
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#C5E033] transition-colors">
                    {cs.company}
                  </h3>

                  <p className="text-sm text-white/60 leading-relaxed line-clamp-3 font-body">
                    {cs.shortDesc}
                  </p>
                </div>

                {/* Highlighted Result Box */}
                <div className="pt-4 border-t border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-[#C5E033]">
                      trending_up
                    </span>
                    <span
                      className="text-base sm:text-lg font-black"
                      style={{ color: cs.badgeColor }}
                    >
                      {cs.mainResult}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-mono font-bold text-[#C5E033] group-hover:translate-x-1 transition-transform">
                    Read Full Case Study & Listen →
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup */}
        <AnimatePresence>
          {activeModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-3xl bg-[#0c0e14] border border-white/15 rounded-3xl p-6 sm:p-10 shadow-[0_0_80px_rgba(0,0,0,0.9)] max-h-[90vh] overflow-y-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setActiveModal(null);
                    setIsPlayingAudio(false);
                  }}
                  className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">close</span>
                </button>

                {/* Modal Header */}
                <div className="space-y-3 mb-8 pr-8">
                  <span
                    className="inline-block px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                    style={{
                      color: activeModal.badgeColor,
                      backgroundColor: `${activeModal.badgeColor}15`,
                      border: `1px solid ${activeModal.badgeColor}30`,
                    }}
                  >
                    {activeModal.industry}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeModal.company}
                  </h2>
                </div>

                {/* Audio Recording Player Simulation */}
                {activeModal.hasAudio && (
                  <div className="mb-8 p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#C5E033] flex items-center gap-2">
                        <span className="material-symbols-outlined text-base">graphic_eq</span>
                        {activeModal.audioTitle}
                      </span>
                      <span className="text-[10px] font-mono text-white/40">HD Voice Recording</span>
                    </div>

                    <div className="flex items-center gap-4 pt-1">
                      <button
                        onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                        className="w-12 h-12 rounded-full bg-[#C5E033] text-[#050608] flex items-center justify-center font-bold hover:scale-105 transition-transform shrink-0"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          {isPlayingAudio ? "pause" : "play_arrow"}
                        </span>
                      </button>

                      {/* Animated Sound Waveform */}
                      <div className="flex-1 flex items-center gap-1 h-8 bg-black/40 rounded-xl px-3 border border-white/5 overflow-hidden">
                        {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30, 85, 45, 95, 35, 75, 55, 90, 40].map(
                          (height, idx) => (
                            <motion.div
                              key={idx}
                              animate={
                                isPlayingAudio
                                  ? { height: [`${height}%`, "20%", `${height}%`] }
                                  : { height: `${height * 0.4}%` }
                              }
                              transition={{
                                repeat: Infinity,
                                duration: 1,
                                delay: idx * 0.05,
                              }}
                              className="flex-1 bg-[#C5E033] rounded-full min-w-[2px]"
                            />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                  {activeModal.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
                    >
                      <div
                        className="text-xl sm:text-2xl font-black mb-1 font-display"
                        style={{ color: activeModal.badgeColor }}
                      >
                        {m.value}
                      </div>
                      <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Challenge & Solution Content */}
                <div className="space-y-6 mb-8 text-sm sm:text-base text-white/70 leading-relaxed font-body">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-red-400 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      The Challenge
                    </h4>
                    <p>{activeModal.challenge}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#C5E033]/[0.03] border border-[#C5E033]/10 space-y-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#C5E033] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#C5E033]" />
                      IronLoop AI Implementation
                    </h4>
                    <p className="text-white/90">{activeModal.solution}</p>
                  </div>

                  {/* Impact Highlights */}
                  <div className="space-y-2 pt-2">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/40">
                      Key Outcomes & Business Impact
                    </h4>
                    <ul className="space-y-2">
                      {activeModal.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-sm text-white/80">
                          <span className="material-symbols-outlined text-[#C5E033] text-base shrink-0 mt-0.5">
                            check_circle
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Client Quote */}
                  <blockquote className="border-l-2 border-[#C5E033] pl-4 py-1 italic text-white/90 text-sm sm:text-base">
                    &ldquo;{activeModal.quote}&rdquo;
                    <footer className="text-xs font-mono font-bold text-[#C5E033] not-italic mt-2">
                      &mdash; {activeModal.author}
                    </footer>
                  </blockquote>
                </div>

                {/* Modal Action CTA */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs font-mono text-white/50">
                    Ready for similar ROI in your enterprise?
                  </span>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C5E033] text-[#050608] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors text-center"
                  >
                    Schedule a Demo →
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <div className="mt-24">
          <HighEndCTA industryTitle="GROWTH" />
        </div>
      </div>
    </main>
  );
}
