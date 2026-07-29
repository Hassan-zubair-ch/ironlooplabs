"use client";

import { useState, useRef, useEffect } from "react";
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
  transcriptSnippet?: string;
  scenarioText?: string;
  resultText?: string;
  images: { url: string; caption: string }[];
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
    audioTitle: "New Recording (Healthcare Lead Reactivation)",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    scenarioText:
      "Scenario: The AI reached out to a prospect who had previously inquired about family health coverage but never completed enrollment. The AI referenced their previous interest, confirmed if they were still exploring coverage options, identified plan cost changes, positioned a quick consultation with a licensed rep, and booked directly into the calendar.",
    resultText:
      "Result: The first structured call batch ran for approximately 9 days. Average pickup rate: ~20%. 20+ qualified appointments generated. All bookings sourced from previously untouched leads that had been labeled as 'dead leads'.",
    transcriptSnippet:
      "AI Rep: 'Hi Sarah, calling from Healthcare Direct regarding your coverage inquiry from last quarter. We have a new preventative care option available. Would Tuesday at 2 PM work for a quick specialist consult?'\nCustomer: 'Oh, yes actually! Tuesday at 2 PM works great.'\nAI Rep: 'Perfect, I have booked you for Tuesday at 2:00 PM EST with Dr. Miller. Confirmation sent to your SMS.'",
    images: [
      {
        url: "/video-poster.jpg",
        caption: "CRM Lead Pipeline & Appointment Dispatch Audit Matrix",
      },
    ],
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
    audioTitle: "New Recording (Roofing Storm Inspection Dispatch)",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7e028.mp3",
    scenarioText:
      "Scenario: The AI followed up on storm damage inspection requests submitted over 6 months ago. Verified roof age, storm severity, insurance claim status, and assigned certified estimators directly into ServiceTitan.",
    resultText:
      "Result: 50+ inspection appointments booked in 3 weeks, converting over $140,000 in newly opened commercial roof replacement pipeline.",
    transcriptSnippet:
      "AI Rep: 'Hello Mark! This is Alex with Roofing Solutions following up on your storm inspection estimate request. Are you still experiencing any roof leaks or shingle damage?'\nCustomer: 'Yeah, we had some hail damage last week on the east side.'\nAI Rep: 'Got it. I can dispatch a certified technician for a free inspection this Thursday morning. Does 10 AM suit your schedule?'",
    images: [
      {
        url: "/video-poster.jpg",
        caption: "ServiceTitan Real-Time Dispatch & Lead Reactivation Log",
      },
    ],
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
    audioTitle: "New Recording (Solar Utility Audit Qualification)",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3",
    scenarioText:
      "Scenario: AI answered incoming solar ad inquiries within 3 seconds, audited average monthly electric utility bills, verified homeownership, and scheduled engineering site audits.",
    resultText:
      "Result: 3.2x increase in consultation booking rate and 0 missed calls during 24/7 operation.",
    transcriptSnippet:
      "AI Rep: 'Thank you for calling SunPower Solutions. I can check your home's solar savings eligibility in about 60 seconds. May I ask your monthly electric bill average?'\nCustomer: 'It's around $280 a month.'\nAI Rep: 'Great news! That bill range qualifies for zero-down solar installation. Let's schedule a 15-minute engineering site audit for tomorrow at 3 PM.'",
    images: [
      {
        url: "/video-poster.jpg",
        caption: "Solar Consultation Calendar & Instant Lead Capture Audit",
      },
    ],
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
    audioTitle: "New Recording (Lead Ad Immediate Outreach)",
    audioUrl: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8a7e028.mp3",
    scenarioText:
      "Scenario: Instant 5-second outbound call triggered upon Facebook Lead Ad form submission. Qualified roof replacement budget and scheduled estimator visits.",
    resultText:
      "Result: 25+ signed contracts in 30 days and 100% lead capture rate across all paid ad channels.",
    transcriptSnippet:
      "AI Rep: 'Hello! I noticed you submitted an inquiry for a roof replacement quote on Facebook. I can book an estimator to inspect your property today or tomorrow. Which works better?'\nCustomer: 'Tomorrow afternoon would be great.'\nAI Rep: 'All set for 2:30 PM tomorrow. Estimator Dave will bring material samples and a instant quote sheet.'",
    images: [
      {
        url: "/video-poster.jpg",
        caption: "Automated Facebook Lead Ad to Estimator Dispatch Telemetry",
      },
    ],
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
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [audioCurrentTime, setAudioCurrentTime] = useState<number>(0);
  const [audioDuration, setAudioDuration] = useState<number>(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (lightboxImage) {
          setLightboxImage(null);
        } else {
          setActiveModal(null);
          setIsPlayingAudio(false);
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxImage]);

  // Handle Play/Pause toggle
  const toggleAudioPlay = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().then(() => setIsPlayingAudio(true)).catch(() => {});
    }
  };

  const filteredCaseStudies = CASE_STUDIES.filter((cs) => {
    const matchesCategory =
      selectedCategory === "All" || cs.industry === selectedCategory;
    const matchesSearch =
      cs.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cs.industry.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const formatTime = (seconds: number) => {
    if (!seconds || isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <main className="bg-[#050505] bg-dark-grid text-white py-20 lg:py-28 relative overflow-hidden min-h-screen">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

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
            <span>✨ Verified Contractor Audits</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Real conversations.<br />
            <span className="bg-gradient-to-r from-white via-white/80 to-[#C5E033] bg-clip-text text-transparent">
              Real numbers.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Real call recordings, booking numbers, and revenue results from HVAC, plumbing, and roofing companies using IronLoop Labs.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 max-w-2xl mx-auto font-mono text-xs text-white/80">
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-xl font-bold text-[#C5E033] font-display">100+</div>
              <div>Real Call Recordings</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-xl font-bold text-[#C5E033] font-display">3x</div>
              <div>Avg Pipeline Growth</div>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.03] border border-white/10 text-center">
              <div className="text-xl font-bold text-[#C5E033] font-display">14 Days</div>
              <div>Time to 1st Booked Job</div>
            </div>
          </div>
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
                onClick={() => {
                  setActiveModal(cs);
                  setIsPlayingAudio(false);
                }}
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
                    <span className="flex items-center gap-1 text-[11px] font-mono text-white/40 bg-white/[0.02] px-2 py-0.5 rounded-md border border-white/5">
                      <span className="material-symbols-outlined text-[12px]">image</span>
                      {cs.images.length} Img Proof
                    </span>
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
                    Read Case Study & Listen →
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Modal Popup Overlay (Matching nouxelai.com case-studies) */}
        <AnimatePresence>
          {activeModal && (
            <div
              onClick={() => {
                setActiveModal(null);
                setIsPlayingAudio(false);
              }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto pt-24 sm:pt-32 pb-12"
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                className="relative w-full max-w-3xl bg-[#0c0e14] border border-white/20 rounded-3xl p-6 sm:p-10 shadow-[0_0_100px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto my-auto"
              >
                {/* Close Button */}
                <button
                  onClick={() => {
                    setActiveModal(null);
                    setIsPlayingAudio(false);
                  }}
                  className="absolute top-5 right-5 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-[#C5E033] hover:text-[#050608] text-white flex items-center justify-center transition-all border border-white/10 shadow-lg"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>

                {/* Modal Header */}
                <div className="space-y-3 mb-8 pr-12">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className="px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider"
                      style={{
                        color: activeModal.badgeColor,
                        backgroundColor: `${activeModal.badgeColor}15`,
                        border: `1px solid ${activeModal.badgeColor}30`,
                      }}
                    >
                      {activeModal.industry}
                    </span>
                    <span className="text-xs font-mono text-white/40">
                      Verified Case Study Audit
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                    {activeModal.company}
                  </h2>
                </div>

                {/* Scenario & Result Description Box */}
                {activeModal.scenarioText && (
                  <div className="mb-8 p-5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 text-xs sm:text-sm text-white/80 leading-relaxed font-body">
                    <p className="font-semibold text-white/90">{activeModal.scenarioText}</p>
                    {activeModal.resultText && (
                      <p className="text-white/70 border-t border-white/10 pt-3">
                        {activeModal.resultText}
                      </p>
                    )}
                  </div>
                )}

                {/* REAL CALL EXAMPLE Audio Player */}
                {activeModal.hasAudio && (
                  <div className="mb-8 p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#C5E033] uppercase tracking-wider">
                      <span className="material-symbols-outlined text-base">volume_up</span>
                      REAL CALL EXAMPLE
                    </div>

                    <audio
                      ref={audioRef}
                      src={activeModal.audioUrl}
                      preload="metadata"
                      onTimeUpdate={() => {
                        if (audioRef.current) {
                          setAudioCurrentTime(audioRef.current.currentTime);
                        }
                      }}
                      onLoadedMetadata={() => {
                        if (audioRef.current) {
                          setAudioDuration(audioRef.current.duration);
                        }
                      }}
                      onEnded={() => setIsPlayingAudio(false)}
                    />

                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white flex items-center gap-2">
                        {activeModal.audioTitle}
                      </span>
                      <span className="text-[11px] font-mono text-white/50">
                        {formatTime(audioCurrentTime)} / {formatTime(audioDuration || 271)}
                      </span>
                    </div>

                    <div className="flex items-center gap-4">
                      <button
                        onClick={toggleAudioPlay}
                        className="w-12 h-12 rounded-full bg-[#C5E033] text-[#050608] flex items-center justify-center font-bold hover:scale-105 transition-transform shrink-0 shadow-[0_0_20px_rgba(197,224,51,0.4)]"
                      >
                        <span className="material-symbols-outlined text-2xl">
                          {isPlayingAudio ? "pause" : "play_arrow"}
                        </span>
                      </button>

                      {/* Waveform Scrubber */}
                      <div className="flex-1 flex items-center gap-1 h-9 bg-black/50 rounded-xl px-3 border border-white/10 overflow-hidden">
                        {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30, 85, 45, 95, 35, 75, 55, 90, 40, 60, 80].map(
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
                                duration: 0.9,
                                delay: idx * 0.04,
                              }}
                              className="flex-1 bg-[#C5E033] rounded-full min-w-[2px]"
                            />
                          )
                        )}
                      </div>
                    </div>

                    {/* Live Transcript Box */}
                    {activeModal.transcriptSnippet && (
                      <div className="mt-3 p-3.5 rounded-xl bg-black/40 border border-white/5 font-mono text-xs text-white/70 leading-relaxed whitespace-pre-line">
                        <span className="text-[#C5E033] font-bold block mb-1">
                          🎙️ Verified Audio Call Transcript:
                        </span>
                        {activeModal.transcriptSnippet}
                      </div>
                    )}
                  </div>
                )}

                {/* SCREENSHOTS — Click to Expand Gallery */}
                {activeModal.images.length > 0 && (
                  <div className="mb-8 space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm text-[#C5E033]">
                        collections
                      </span>
                      SCREENSHOTS — click to expand
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {activeModal.images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setLightboxImage(img.url)}
                          className="group relative rounded-2xl overflow-hidden border border-white/15 bg-black cursor-pointer aspect-[16/9]"
                        >
                          <img
                            src={img.url}
                            alt={img.caption}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                          />
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-black/70 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg">
                              <span className="material-symbols-outlined text-xl">zoom_in</span>
                            </div>
                          </div>
                          <div className="absolute bottom-0 inset-x-0 p-2.5 bg-black/80 backdrop-blur-sm text-[11px] font-mono text-white/80 border-t border-white/10 truncate">
                            📷 {img.caption}
                          </div>
                        </div>
                      ))}
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

                {/* Modal Bottom Actions */}
                <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    onClick={() => {
                      setActiveModal(null);
                      setIsPlayingAudio(false);
                    }}
                    className="w-full sm:w-auto px-6 py-3 rounded-full border border-white/20 text-white/80 font-bold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    ← Close Case Study
                  </button>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#C5E033] text-[#050608] font-extrabold text-xs uppercase tracking-wider hover:bg-white transition-colors text-center shadow-[0_0_25px_rgba(197,224,51,0.3)]"
                  >
                    Schedule a Demo to Get Similar Results →
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Full-Screen Image Lightbox */}
        <AnimatePresence>
          {lightboxImage && (
            <div
              onClick={() => setLightboxImage(null)}
              className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-zoom-out"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="relative max-w-5xl max-h-[90vh] rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              >
                <button
                  onClick={() => setLightboxImage(null)}
                  className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/80 text-white flex items-center justify-center hover:bg-[#C5E033] hover:text-black transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">close</span>
                </button>
                <img
                  src={lightboxImage}
                  alt="Expanded Proof Screenshot"
                  className="w-full h-full object-contain max-h-[85vh]"
                />
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
