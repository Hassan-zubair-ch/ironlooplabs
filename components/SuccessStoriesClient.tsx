"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const CASE_STUDIES = [
  {
    company: "Apex Air Solutions",
    industry: "HVAC",
    location: "Phoenix, AZ",
    challenge: "Missing 40% of after-hours emergency calls during peak summer season, losing an estimated $18,000/month in potential revenue.",
    solution: "Deployed IronLoop AI Receptionist with ServiceTitan integration for instant emergency dispatch and automated booking.",
    results: [
      { value: "450%", label: "ROI Increase" },
      { value: "$12k/mo", label: "Admin Savings" },
      { value: "0%", label: "Missed Calls" },
      { value: "12→24", label: "Truck Fleet Growth" },
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
      { value: "18hrs/wk", label: "Staff Time Saved" },
      { value: "42%", label: "No-Show Reduction" },
      { value: "<3 sec", label: "Call Response" },
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
      { value: "$14.5k/mo", label: "Revenue Lift" },
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
      { value: "88%", label: "Emergency Capture" },
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
      { value: "<10 sec", label: "Lead Response" },
      { value: "$4k/mo", label: "Fuel Savings" },
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
      { value: "48%", label: "Estimate Conversion" },
      { value: "0%", label: "Missed Calls" },
      { value: "92%", label: "Tech Utilization" },
      { value: "10x", label: "Surge Capacity" },
    ],
    quote: "After the last hailstorm we booked 47 estimates in one weekend — all automatically. Competitors were still checking voicemails on Monday.",
    author: "David W., President",
  },
];

export default function SuccessStoriesClient() {
  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute bottom-40 right-1/4 w-[400px] h-[300px] bg-[#38bdf8]/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="space-y-8">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              viewport={{ once: true }}
              className="bg-[#111318] border border-white/[0.06] rounded-3xl p-8 lg:p-10 hover:border-[#a3e635]/15 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="bg-[#a3e635]/10 text-[#a3e635] px-3 py-1 rounded-full font-mono text-[10px] font-bold border border-[#a3e635]/20">
                      {cs.industry}
                    </span>
                    <span className="font-mono text-[10px] text-on-surface-variant">{cs.location}</span>
                  </div>

                  <h2 className="font-display text-2xl lg:text-3xl text-white font-extrabold">{cs.company}</h2>

                  <div className="space-y-3">
                    <div>
                      <span className="font-mono text-[10px] text-red-400 uppercase tracking-wider font-bold">Challenge</span>
                      <p className="font-body text-sm text-on-surface-variant mt-1 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#a3e635] uppercase tracking-wider font-bold">Solution</span>
                      <p className="font-body text-sm text-on-surface-variant mt-1 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-[#a3e635]/30 pl-4 py-2">
                    <p className="font-body text-sm text-white/80 italic leading-relaxed">&ldquo;{cs.quote}&rdquo;</p>
                    <p className="font-mono text-[10px] text-[#a3e635] mt-2">&mdash; {cs.author}</p>
                  </blockquote>
                </div>

                <div className="lg:col-span-5">
                  <div className="grid grid-cols-2 gap-4">
                    {cs.results.map((stat, j) => (
                      <div key={j} className="detail-stat-card p-5 text-center">
                        <div className="font-display text-2xl lg:text-3xl font-extrabold text-[#a3e635] mb-1">{stat.value}</div>
                        <div className="font-mono text-[9px] text-on-surface-variant uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="font-display text-2xl text-white font-bold mb-4">Ready to be our next success story?</h3>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a3e635] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-lg hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)]"
          >
            Book Free Consultation
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
