"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CompareClient() {
  // Calculator State Sliders
  const [setters, setSetters] = useState(2);
  const [salary, setSalary] = useState(3500);
  const [inboundLeads, setInboundLeads] = useState(150);
  const [outboundCalls, setOutboundCalls] = useState(300);
  const [jobValue, setJobValue] = useState(8500);
  const [conversionRate, setConversionRate] = useState(22);

  // Dynamic ROI & Cost Calculations
  const monthlySetterCost = setters * salary;
  const benefitsOverhead = Math.round(monthlySetterCost * 0.35);
  const turnoverCost = Math.round(setters * 1950);
  const totalCurrentCost = monthlySetterCost + benefitsOverhead + turnoverCost;

  // AI Costs & Savings
  const aiBaseLow = Math.min(Math.max(2000, setters * 1000), 5000);
  const aiBaseHigh = aiBaseLow + 1000;
  const aiUsage = Math.round(inboundLeads * 0.9);
  const aiTotalLow = aiBaseLow + aiUsage;
  const aiTotalHigh = aiBaseHigh + aiUsage;
  const avgAiCost = (aiTotalLow + aiTotalHigh) / 2;
  const monthlySavings = Math.max(0, Math.round(totalCurrentCost - avgAiCost));

  // Revenue Impact Metrics
  const afterHoursLeads = Math.round(inboundLeads * 0.35);
  const lostJobs = Math.round(afterHoursLeads * (conversionRate / 100) * 0.30);
  const lostRevenue = lostJobs * jobValue;
  const additionalJobs = Math.round(inboundLeads * 0.05);
  const additionalMRR = additionalJobs * jobValue;

  const totalMonthlyImpact = lostRevenue + additionalMRR;
  const totalAnnualImpact = totalMonthlyImpact * 12;
  const roiPercent = Math.round((totalAnnualImpact / (avgAiCost * 12)) * 100);

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
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#C5E033] font-mono text-xs font-semibold tracking-wider uppercase mb-6">
              Honest Contractor Comparison
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
              Why contractors switch to <br />
              <span className="text-[#C5E033]">IronLoop Labs</span>
            </h1>
            <p className="font-body text-lg text-white/60 leading-relaxed">
              How IronLoop Labs compares to a traditional answering service or an in-house receptionist for HVAC, plumbing, and roofing companies.
            </p>
          </motion.div>
        </div>

        {/* COMPARISON MATRIX TABLE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-28"
        >
          <div className="overflow-x-auto rounded-3xl border border-white/[0.08] bg-[#0f1016]/90 p-6 sm:p-8 shadow-2xl">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-white/10 text-xs font-mono tracking-wider uppercase">
                  <th className="py-4 px-4 text-white font-bold">Feature / Capability</th>
                  <th className="py-4 px-4 text-[#C5E033] font-bold text-center bg-[#C5E033]/5 rounded-t-xl">
                    IronLoop Labs
                  </th>
                  <th className="py-4 px-4 text-white/70 text-center">Answering Service</th>
                  <th className="py-4 px-4 text-white/70 text-center">In-House Front Desk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.06] text-sm">
                {[
                  {
                    feature: "Available 24/7 (Nights & Weekends)",
                    ironloop: "Yes",
                    answeringService: "Sometimes",
                    frontDesk: "No",
                  },
                  {
                    feature: "Books directly to your calendar",
                    ironloop: "Yes",
                    answeringService: "Rarely",
                    frontDesk: "Yes",
                  },
                  {
                    feature: "Follows up on old leads",
                    ironloop: "Yes",
                    answeringService: "No",
                    frontDesk: "Rarely (time)",
                  },
                  {
                    feature: "Cost Model",
                    ironloop: "Flat monthly",
                    answeringService: "Per-minute fees",
                    frontDesk: "Salary + benefits",
                  },
                  {
                    feature: "Setup time",
                    ironloop: "14 days",
                    answeringService: "Days",
                    frontDesk: "Weeks (hiring)",
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-4 font-medium text-white">{row.feature}</td>
                    <td className="py-4 px-4 text-center bg-[#C5E033]/5 text-[#C5E033] font-mono font-bold text-base">
                      {row.ironloop}
                    </td>
                    <td className="py-4 px-4 text-center text-white/70 font-mono text-sm">
                      {row.answeringService}
                    </td>
                    <td className="py-4 px-4 text-center text-white/70 font-mono text-sm">
                      {row.frontDesk}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* INTERACTIVE CALCULATOR SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="text-center mb-12">
            <p className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 mb-3">
              True Cost of Building In-House
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-4">
              What are human setters <span className="text-red-400">really</span> costing you?
            </h2>
            <p className="font-body text-white/60 text-base max-w-xl mx-auto">
              Plug in your numbers. See the savings and the revenue you're leaving behind.
            </p>
          </div>

          {/* SLIDERS GRID */}
          <div className="bg-[#0f1016]/90 border border-white/[0.08] rounded-3xl p-6 sm:p-10 mb-12 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Slider 1: Setters */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-purple-400">groups</span>
                    Number of setters / callers
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    {setters}
                  </div>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={setters}
                  onChange={(e) => setSetters(Number(e.target.value))}
                  aria-label="Number of setters or callers"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Slider 2: Salary */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-purple-400">attach_money</span>
                    Monthly salary per setter
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    ${salary.toLocaleString()} <span className="text-xs text-white/50">/mo</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="8000"
                  step="100"
                  value={salary}
                  onChange={(e) => setSalary(Number(e.target.value))}
                  aria-label="Monthly salary per setter"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>$2,000</span>
                  <span>$8,000</span>
                </div>
              </div>

              {/* Slider 3: Inbound Leads */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-indigo-400">call_received</span>
                    Inbound leads per month
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    {inboundLeads.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="50"
                  max="2000"
                  step="10"
                  value={inboundLeads}
                  onChange={(e) => setInboundLeads(Number(e.target.value))}
                  aria-label="Inbound leads per month"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>50</span>
                  <span>2,000</span>
                </div>
              </div>

              {/* Slider 4: Outbound Calls */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-indigo-400">call_made</span>
                    Outbound calls per month
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    {outboundCalls.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  step="50"
                  value={outboundCalls}
                  onChange={(e) => setOutboundCalls(Number(e.target.value))}
                  aria-label="Outbound calls per month"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>100</span>
                  <span>5,000</span>
                </div>
              </div>

              {/* Slider 5: Job Value */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-emerald-400">work</span>
                    Average job / project value
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    ${jobValue.toLocaleString()}
                  </div>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={jobValue}
                  onChange={(e) => setJobValue(Number(e.target.value))}
                  aria-label="Average job or project value"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>$500</span>
                  <span>$25,000</span>
                </div>
              </div>

              {/* Slider 6: Conversion Rate */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm font-medium">
                  <label className="text-white/90 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-emerald-400">trending_up</span>
                    Lead-to-appointment conversion rate
                  </label>
                  <div className="bg-white/[0.06] border border-white/10 px-3 py-1 rounded-lg text-white font-mono font-bold">
                    {conversionRate}%
                  </div>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="1"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  aria-label="Lead to appointment conversion rate"
                  className="w-full accent-[#C5E033] bg-white/10 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>10%</span>
                  <span>60%</span>
                </div>
              </div>
            </div>
          </div>

          {/* COST BREAKDOWN TABLE CARD */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#0a0b10] overflow-hidden mb-12 shadow-2xl">
            <div className="grid grid-cols-3 gap-4 px-6 py-4 border-b border-white/[0.08] bg-white/[0.02]">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">Category</span>
              <div className="text-right">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-red-400">
                  Your Current Setup
                </span>
                <p className="text-[10px] text-white/40 mt-0.5">Human Setters</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C5E033]">
                  With IronLoop AI
                </span>
              </div>
            </div>

            <div className="px-6 py-3 divide-y divide-white/[0.04]">
              <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <span className="text-sm text-white/70">Monthly setter cost</span>
                <span className="text-sm font-medium text-right text-red-400 font-mono">
                  ${monthlySetterCost.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-right text-[#C5E033] font-mono">
                  ${aiBaseLow.toLocaleString()} – ${aiBaseHigh.toLocaleString()}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <span className="text-sm text-white/70">Benefits & overhead (+35%)</span>
                <span className="text-sm font-medium text-right text-red-400 font-mono">
                  ${benefitsOverhead.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-right text-[#C5E033] font-mono">
                  ~${aiUsage.toLocaleString()} usage
                </span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <span className="text-sm text-white/70">Turnover cost (monthly avg)</span>
                <span className="text-sm font-medium text-right text-red-400 font-mono">
                  ${turnoverCost.toLocaleString()}
                </span>
                <span className="text-sm font-medium text-right text-[#C5E033] font-mono">$0</span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <span className="text-sm text-white/70">After-hours coverage</span>
                <span className="text-sm font-medium text-right text-red-400">$0 (none)</span>
                <span className="text-sm font-medium text-right text-[#C5E033]">Included</span>
              </div>

              <div className="grid grid-cols-3 gap-4 py-3 items-center">
                <span className="text-sm text-white/70">Concurrent calls</span>
                <span className="text-sm font-medium text-right text-red-400">
                  {setters} (1 per setter)
                </span>
                <span className="text-sm font-medium text-right text-[#C5E033]">10 simultaneously</span>
              </div>
            </div>

            {/* TOTAL MONTHLY COST ROW */}
            <div className="border-t border-white/[0.08] px-6 py-5 bg-white/[0.02]">
              <div className="grid grid-cols-3 gap-4 items-center">
                <span className="text-sm font-bold text-white uppercase tracking-wide">
                  TOTAL MONTHLY COST
                </span>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold text-red-400 font-mono">
                    ${totalCurrentCost.toLocaleString()}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xl sm:text-2xl font-bold text-[#C5E033] font-mono">
                    ~${aiTotalLow.toLocaleString()} – ${aiTotalHigh.toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#C5E033]/10 border border-[#C5E033]/30 text-[#C5E033] text-sm font-bold">
                  <span className="material-symbols-outlined text-base">trending_up</span>
                  You save ~${monthlySavings.toLocaleString()} /month
                </span>
              </div>
            </div>
          </div>

          {/* REVENUE YOU'RE LEAVING ON THE TABLE CARD */}
          <div className="rounded-3xl border border-white/[0.08] bg-[#0a0b10] overflow-hidden shadow-2xl">
            <div className="px-6 py-5 border-b border-white/[0.08] bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                  <span className="material-symbols-outlined text-xl">trending_up</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white uppercase tracking-wide">
                    Revenue You're Leaving on the Table
                  </h3>
                  <p className="text-xs text-white/50">
                    Based on industry data: 35% leads lost after hours, 9× conversion with 3-sec response
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {/* After-Hours Lead Loss */}
              <div className="space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                  After-Hours Lead Loss
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                    <p className="font-display text-3xl font-black text-red-400">{afterHoursLeads}</p>
                    <p className="text-xs text-white/50 mt-1 font-medium">leads lost/month</p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                    <p className="font-display text-3xl font-black text-red-400">{lostJobs}</p>
                    <p className="text-xs text-white/50 mt-1 font-medium">lost jobs/month</p>
                  </div>

                  <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 text-center">
                    <p className="font-display text-3xl font-black text-red-400">
                      ${lostRevenue.toLocaleString()}
                    </p>
                    <p className="text-xs text-white/50 mt-1 font-medium">lost revenue/month</p>
                  </div>
                </div>
              </div>

              {/* Speed-to-Lead Recovery */}
              <div className="space-y-3">
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-white/50">
                  Speed-to-Lead Recovery{" "}
                  <span className="text-white/30 font-normal">(conservative 20% improvement)</span>
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-[#C5E033]/20 bg-[#C5E033]/5 p-5 text-center">
                    <p className="font-display text-3xl font-black text-[#C5E033]">+{additionalJobs}</p>
                    <p className="text-xs text-white/50 mt-1 font-medium">additional jobs/month</p>
                  </div>

                  <div className="rounded-2xl border border-[#C5E033]/20 bg-[#C5E033]/5 p-5 text-center">
                    <p className="font-display text-3xl font-black text-[#C5E033]">
                      +${additionalMRR.toLocaleString()}
                    </p>
                    <p className="text-xs text-white/50 mt-1 font-medium">additional MRR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* TOTAL ESTIMATED IMPACT BANNER */}
            <div className="border-t border-white/[0.08] bg-gradient-to-r from-[#C5E033]/10 via-purple-500/10 to-indigo-500/10 p-6 sm:p-8">
              <p className="text-xs font-mono font-bold uppercase tracking-widest text-white/50 mb-6">
                Total Estimated Impact
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-white">
                    +${totalMonthlyImpact.toLocaleString()}
                  </span>
                  <p className="text-xs text-white/50 mt-1 font-mono">monthly (MRR)</p>
                </div>

                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-white">
                    +${totalAnnualImpact.toLocaleString()}
                  </span>
                  <p className="text-xs text-white/50 mt-1 font-mono">annual (ARR)</p>
                </div>

                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#C5E033]">
                    {roiPercent.toLocaleString()}%
                  </span>
                  <p className="text-xs text-white/50 mt-1 font-mono">ROI on IronLoop AI</p>
                </div>

                <div>
                  <span className="font-display text-2xl sm:text-3xl font-black text-[#C5E033]">
                    &lt; 30 days
                  </span>
                  <p className="text-xs text-white/50 mt-1 font-mono">payback period</p>
                </div>
              </div>
            </div>
          </div>

          {/* ESTIMATION SUMMARY & CALLOUT BUTTON */}
          <div className="text-center space-y-6 pt-12">
            <p className="text-xl sm:text-2xl text-white/80 font-display">
              Your business is leaving an estimated{" "}
              <span className="font-extrabold text-white underline decoration-[#C5E033]">
                ${totalAnnualImpact.toLocaleString()}/year
              </span>{" "}
              on the table.
            </p>

            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#C5E033] text-[#0b0d10] font-display text-base font-extrabold hover:brightness-110 active:scale-95 transition-all shadow-[0_0_30px_rgba(197,224,51,0.3)]"
              >
                Book a Free Demo — Let's Fix That
                <span className="material-symbols-outlined text-lg">north_east</span>
              </Link>
            </div>

            <p className="text-sm text-white/50 max-w-md mx-auto">
              We'll show you exactly how these numbers apply to your specific business.
            </p>

            <p className="text-[11px] text-white/30 max-w-lg mx-auto leading-relaxed pt-4">
              These projections are estimates based on industry averages. Actual results vary based on your market, team, and implementation. Results from real clients available in our case studies.
            </p>
          </div>
        </motion.div>

        {/* BOTTOM FINAL CTA */}
        <div className="text-center pt-20 border-t border-white/[0.06]">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4">
            Ready to see the <span className="text-[#C5E033]">difference?</span>
          </h2>
          <p className="font-body text-lg text-white/60 max-w-xl mx-auto mb-8">
            Book a demo and experience IronLoop AI firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-base font-bold hover:brightness-110 transition-all text-center"
            >
              Book a Demo
            </Link>
            <Link
              href="/products"
              className="px-8 py-4 rounded-xl bg-white/[0.05] border border-white/10 text-white font-display text-base font-bold hover:bg-white/10 transition-all text-center"
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
