"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MissedCallCalculator() {
  const [missedCallsPerWeek, setMissedCallsPerWeek] = useState<number>(12);
  const [avgJobValue, setAvgJobValue] = useState<number>(1800);
  const [closeRate, setCloseRate] = useState<number>(35);

  // Calculations
  const missedCallsPerMonth = missedCallsPerWeek * 4.33;
  const lostJobsPerMonth = Math.round(missedCallsPerMonth * (closeRate / 100));
  const lostRevenuePerMonth = lostJobsPerMonth * avgJobValue;
  const lostRevenuePerYear = lostRevenuePerMonth * 12;

  return (
    <section className="py-20 bg-[#07080b] border-y border-white/10 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C5E033]/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5E033]/30 bg-[#C5E033]/10 text-xs font-mono font-bold text-[#C5E033] uppercase tracking-wider">
            <span>⚡ Interactive ROI Calculator</span>
          </div>

          <h2 className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest">
            How Much Are Missed Calls Costing Your Business?
          </h2>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-display">
            See what missed calls are{" "}
            <span className="text-[#C5E033]">actually costing you.</span>
          </h3>

          <p className="text-sm sm:text-base text-white/60 max-w-xl mx-auto font-body">
            Plug in your numbers. Most owners are surprised it&apos;s a real number, not a rounding error.
          </p>
        </div>

        {/* Calculator Widget Box */}
        <div className="bg-[#0f1016]/90 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders (7 Columns) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Slider 1: Missed Calls per week */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label className="text-white/80 font-display">Missed Calls Per Week</label>
                  <span className="font-mono text-[#C5E033] font-bold text-base bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    {missedCallsPerWeek} calls / wk
                  </span>
                </div>
                <input
                  type="range"
                  min={2}
                  max={50}
                  step={1}
                  value={missedCallsPerWeek}
                  onChange={(e) => setMissedCallsPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5E033]"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>2 calls</span>
                  <span>25 calls</span>
                  <span>50+ calls</span>
                </div>
              </div>

              {/* Slider 2: Average Job Value */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label className="text-white/80 font-display">Average Job Value ($)</label>
                  <span className="font-mono text-[#C5E033] font-bold text-base bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    ${avgJobValue.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={300}
                  max={10000}
                  step={100}
                  value={avgJobValue}
                  onChange={(e) => setAvgJobValue(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5E033]"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>$300 (Repair)</span>
                  <span>$5,000 (Install)</span>
                  <span>$10,000+ (Full System)</span>
                </div>
              </div>

              {/* Slider 3: Close Rate */}
              <div className="space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <label className="text-white/80 font-display">Estimate Close Rate (%)</label>
                  <span className="font-mono text-[#C5E033] font-bold text-base bg-white/5 px-3 py-1 rounded-lg border border-white/10">
                    {closeRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={90}
                  step={5}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#C5E033]"
                />
                <div className="flex justify-between text-[11px] font-mono text-white/40">
                  <span>10% (Low)</span>
                  <span>35% (Avg)</span>
                  <span>90% (High)</span>
                </div>
              </div>

            </div>

            {/* Results Panel (5 Columns) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#151720] to-[#0d0e14] border border-[#C5E033]/30 rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-center relative overflow-hidden shadow-xl">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#C5E033]/10 blur-2xl rounded-full pointer-events-none" />

              <div>
                <span className="text-[11px] font-mono font-bold text-[#C5E033] uppercase tracking-wider block mb-2">
                  ESTIMATED REVENUE LEAKAGE
                </span>

                <div className="my-4">
                  <div className="text-white/60 text-xs font-mono mb-1">ESTIMATED LOST REVENUE / YEAR</div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#C5E033] font-mono tracking-tight">
                    ${lostRevenuePerYear.toLocaleString()}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 grid grid-cols-2 gap-4 text-left">
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase">Lost / Month</div>
                    <div className="text-lg font-bold text-white font-mono">${lostRevenuePerMonth.toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-white/40 uppercase">Lost Jobs / Mo</div>
                    <div className="text-lg font-bold text-white font-mono">{lostJobsPerMonth} jobs</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="w-full py-4 px-6 rounded-xl bg-[#C5E033] text-[#0b0d10] font-display text-sm font-extrabold uppercase tracking-wider hover:brightness-110 active:scale-98 transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Stop Losing This Revenue</span>
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
                <p className="text-[11px] font-mono text-white/40 mt-2">
                  Live setup in 14 days • Zero contract lock-in
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
