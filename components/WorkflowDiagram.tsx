"use client";

import { motion } from "framer-motion";

interface WorkflowStep {
  step: string;
  title: string;
  desc: string;
  icon: string;
}

interface WorkflowDiagramProps {
  industryTitle: string;
  steps: WorkflowStep[];
}

export default function WorkflowDiagram({ industryTitle, steps }: WorkflowDiagramProps) {
  return (
    <div className="bg-[#12151a] border border-[#a3e635]/30 rounded-3xl p-8 lg:p-12 my-12 relative overflow-hidden shadow-2xl">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#a3e635] font-bold block mb-2">
          VISUAL AUTOMATION ARCHITECTURE
        </span>
        <h3 className="font-display text-2xl lg:text-3xl text-white font-extrabold">
          {industryTitle} End-to-End AI Flow
        </h3>
      </div>

      {/* Interactive Node Connection Pipeline */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((st, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#181c24] border border-white/10 hover:border-[#a3e635] rounded-2xl p-6 relative group transition-all duration-300 flex flex-col justify-between"
          >
            {/* Connection Arrow Indicator for desktop */}
            {i < steps.length - 1 && (
              <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-[#181c24] border border-[#a3e635] text-[#a3e635] flex items-center justify-center text-xs font-bold shadow-md">
                →
              </div>
            )}

            <div>
              <div className="flex justify-between items-center mb-5">
                <span className="font-mono text-xl font-extrabold text-[#a3e635] bg-[#a3e635]/10 px-3 py-1 rounded-lg">
                  STEP {st.step}
                </span>
                <div className="w-10 h-10 rounded-xl bg-[#a3e635]/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[#a3e635] text-xl">{st.icon}</span>
                </div>
              </div>

              <h4 className="font-display text-lg text-white font-bold mb-2">{st.title}</h4>
              <p className="font-body text-xs text-on-surface-variant leading-relaxed">{st.desc}</p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[11px] text-[#a3e635]">
              <span>STATUS: ACTIVE</span>
              <span className="w-2 h-2 rounded-full bg-[#a3e635] animate-ping" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
