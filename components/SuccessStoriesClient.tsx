"use client";

import { motion } from "framer-motion";
import HighEndCTA from "./HighEndCTA";

const CASE_STUDIES = [
  {
    company: "Apex Air Solutions",
    industry: "HVAC",
    location: "Phoenix, AZ",
    challenge: "Missing 40% of after-hours emergency calls during peak summer season, losing an estimated $18,000/month in potential revenue.",
    solution: "Deployed IronLoop AI Receptionist with ServiceTitan integration for instant emergency dispatch and automated booking.",
    results: [
      { value: "450%", label: "ROI Increase" },
      { value: "$12k", label: "Admin Savings" },
      { value: "0%", label: "Missed Calls" },
      { value: "12→24", label: "Fleet Growth" },
    ],
    quote: "IronLoop didn't just save us money on an answering service; it changed how we do business. Every call is answered, every job is booked, and our staff is never overwhelmed.",
    author: "Mark T., Owner & CEO",
  },
  {
    company: "Metro Health Partners",
    industry: "Healthcare",
    location: "Chicago, IL",
    challenge: "Front desk overwhelmed with 200+ daily calls. Patient wait times averaging 8 minutes. 15% appointment no-show rate.",
    solution: "Implemented IronLoop HIPAA-compliant AI intake with Epic EHR integration and 2-way SMS appointment confirmations.",
    results: [
      { value: "99.8%", label: "Intake Accuracy" },
      { value: "18hrs", label: "Time Saved/Wk" },
      { value: "-42%", label: "No-Shows" },
      { value: "<3s", label: "Call Response" },
    ],
    quote: "Patient intake that used to take 15 minutes per call now happens automatically. Our front desk staff finally has time to focus on in-office patients.",
    author: "Dr. James K., Medical Director",
  },
  {
    company: "Summit Comfort Systems",
    industry: "HVAC & Plumbing",
    location: "Denver, CO",
    challenge: "Traditional answering service was losing leads with slow callback times. Competitors were booking jobs before Summit could return calls.",
    solution: "Replaced legacy answering service with IronLoop AI for instant call answering, diagnostic pre-screening, and Housecall Pro job creation.",
    results: [
      { value: "94%", label: "Job Conversion" },
      { value: "48hrs", label: "Time to Go Live" },
      { value: "$14k+", label: "Revenue Lift/mo" },
      { value: "5.2x", label: "After-Hours ROI" },
    ],
    quote: "We switched from a traditional service on Wednesday and were seeing ROI by Friday morning. The AI sounds more professional than our old team.",
    author: "Sarah L., Operations Manager",
  },
  {
    company: "Bright Smile Dental Group",
    industry: "Dental",
    location: "Austin, TX",
    challenge: "60% of hygiene recall patients were lapsing past 6 months. After-hours emergency toothache calls went to voicemail.",
    solution: "Deployed IronLoop with Dentrix sync for automated hygiene recall campaigns and 24/7 emergency dental triage.",
    results: [
      { value: "+60%", label: "Hygiene Recalls" },
      { value: "88%", label: "Emergencies Won" },
      { value: "95%", label: "Chair Occupancy" },
      { value: "3x", label: "New Patients" },
    ],
    quote: "Our hygiene schedule went from half-empty to consistently booked. The after-hours emergency capture alone pays for the entire system.",
    author: "Dr. Lisa M., Practice Owner",
  },
  {
    company: "GreenShield Pest Control",
    industry: "Pest & Lawn",
    location: "Orlando, FL",
    challenge: "Seasonal call surges during spring/summer overwhelmed a 3-person phone team. Route inefficiency costing $4k/month in fuel.",
    solution: "IronLoop AI with PestRoutes integration for neighborhood cluster booking, automated contract renewals, and seasonal outreach.",
    results: [
      { value: "+28%", label: "Route Efficiency" },
      { value: "91%", label: "Contract Renewal" },
      { value: "<10s", label: "Lead Response" },
      { value: "$4k", label: "Fuel Savings/mo" },
    ],
    quote: "The neighborhood clustering alone saved us thousands in fuel. Now every technician's route is optimized before they start their day.",
    author: "Carlos R., Regional Manager",
  },
  {
    company: "ProBuild Contractors",
    industry: "Home Services",
    location: "Nashville, TN",
    challenge: "After major storms, roofing estimate requests would spike 10x. The 2-person office couldn't keep up and leads went to competitors.",
    solution: "IronLoop storm surge mode with AccuLynx integration for instant estimate scheduling, lead qualification, and estimator dispatch.",
    results: [
      { value: "48%", label: "Est. Conversion" },
      { value: "0%", label: "Missed Calls" },
      { value: "92%", label: "Tech Utilized" },
      { value: "10x", label: "Surge Capacity" },
    ],
    quote: "After the last hailstorm we booked 47 estimates in one weekend — all automatically. Competitors were still checking voicemails on Monday.",
    author: "David W., President",
  },
];

export default function SuccessStoriesClient() {
  return (
    <main className="bg-[#0b0d10] text-white py-20 lg:py-28 relative overflow-hidden">
      {/* Premium Background Glowing Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a3e635]/[0.04] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-40 left-0 w-[500px] h-[500px] bg-[#a3e635]/[0.03] blur-[100px] rounded-full pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]" 
        style={{
          backgroundImage: "radial-gradient(#fff 1.5px, transparent 1.5px)",
          backgroundSize: "48px 48px"
        }} 
      />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl lg:text-7xl font-black tracking-tight text-white mb-6"
          >
            Proof of <span className="text-[#a3e635] italic">Impact.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-body text-xl text-white/60 leading-relaxed font-medium"
          >
            See how forward-thinking service companies are using IronLoop&apos;s AI infrastructure to eliminate missed calls, automate dispatch, and drive unprecedented revenue growth.
          </motion.p>
        </div>

        <div className="space-y-12">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative"
            >
              {/* Hover Glow Behind Card */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#a3e635]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[2.5rem] blur-2xl pointer-events-none" />
              
              <div className="bg-[#111318]/90 backdrop-blur-xl border border-white/[0.05] rounded-[2.5rem] p-8 lg:p-12 hover:border-[#a3e635]/30 transition-all duration-500 relative overflow-hidden shadow-2xl">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[#a3e635]/10 to-transparent rounded-bl-[100px] transition-all duration-500 group-hover:from-[#a3e635]/20 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
                  <div className="lg:col-span-7 space-y-8">
                    
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="bg-[#a3e635] text-[#0b0d10] px-4 py-1.5 rounded-full font-mono text-xs font-bold tracking-widest uppercase">
                        {cs.industry}
                      </span>
                      <span className="font-mono text-xs text-white/50 tracking-widest uppercase flex items-center gap-1.5 bg-white/5 px-4 py-1.5 rounded-full border border-white/5">
                        <span className="material-symbols-outlined text-[14px]">location_on</span>
                        {cs.location}
                      </span>
                    </div>

                    <h2 className="font-display text-4xl lg:text-5xl text-white font-black tracking-tight">{cs.company}</h2>

                    <div className="space-y-6">
                      <div className="bg-white/[0.02] p-6 rounded-2xl border border-white/[0.03]">
                        <span className="flex items-center gap-2 font-mono text-[11px] text-white/40 uppercase tracking-[0.2em] font-bold mb-3">
                          <span className="w-2 h-2 rounded-full bg-red-500/80 shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                          The Challenge
                        </span>
                        <p className="font-body text-base lg:text-lg text-white/70 leading-relaxed font-medium">{cs.challenge}</p>
                      </div>
                      
                      <div className="bg-[#a3e635]/[0.02] p-6 rounded-2xl border border-[#a3e635]/[0.05]">
                        <span className="flex items-center gap-2 font-mono text-[11px] text-[#a3e635]/80 uppercase tracking-[0.2em] font-bold mb-3">
                          <span className="w-2 h-2 rounded-full bg-[#a3e635] shadow-[0_0_10px_rgba(163,230,53,0.5)]" />
                          IronLoop Solution
                        </span>
                        <p className="font-body text-base lg:text-lg text-white/90 leading-relaxed font-medium">{cs.solution}</p>
                      </div>
                    </div>

                    <blockquote className="relative pl-8 py-2 mt-4">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#a3e635] to-[#a3e635]/20 rounded-full" />
                      <p className="font-body text-xl lg:text-2xl text-white italic leading-relaxed font-medium">&ldquo;{cs.quote}&rdquo;</p>
                      <p className="font-display text-sm text-[#a3e635] mt-6 font-bold tracking-widest uppercase">&mdash; {cs.author}</p>
                    </blockquote>
                  </div>

                  {/* Results Sidebar */}
                  <div className="lg:col-span-5 flex flex-col justify-center">
                    <div className="bg-[#090b0e]/80 border border-white/[0.04] rounded-[2rem] p-6 lg:p-8 grid grid-cols-2 gap-4 lg:gap-6 backdrop-blur-md shadow-inner">
                      <div className="col-span-2 mb-2 flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <span className="font-mono text-[11px] text-white/40 uppercase tracking-[0.25em] font-bold flex items-center gap-2">
                          <span className="material-symbols-outlined text-[16px]">monitoring</span>
                          Measurable Impact
                        </span>
                      </div>
                      {cs.results.map((stat, j) => (
                        <div key={j} className="bg-[#111318] border border-white/[0.04] p-5 lg:p-6 rounded-2xl group-hover:border-[#a3e635]/20 hover:bg-[#1a1d24] transition-all duration-500 text-center flex flex-col justify-center min-h-[120px]">
                          <div className="font-display text-3xl lg:text-4xl font-black text-[#a3e635] mb-2 drop-shadow-[0_0_15px_rgba(163,230,53,0.2)]">{stat.value}</div>
                          <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32">
           <HighEndCTA industryTitle="GROWTH" />
        </div>
      </div>
    </main>
  );
}
