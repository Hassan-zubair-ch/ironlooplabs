"use client";

import { motion } from "framer-motion";
import { IndustryDetail } from "@/lib/industriesData";

interface Props {
  industry: IndustryDetail;
}

export default function IndustryPrograms({ industry }: Props) {
  // Use the industry's actual features to populate the program cards
  const programs = [
    {
      badge: "STARTER",
      title: industry.features[0]?.title || "Basic Automation",
      icon: industry.features[0]?.icon || "bolt",
      desc: industry.features[0]?.desc || "Essential tools to kickstart your automation journey.",
      highlight: false,
    },
    {
      badge: "GROWTH",
      title: industry.features[1]?.title || "Accelerate Program",
      icon: industry.features[1]?.icon || "trending_up",
      desc: industry.features[1]?.desc || "Scale your operations with advanced workflow features.",
      highlight: false,
    },
    {
      badge: "POPULAR",
      title: industry.features[2]?.title || "Elite System",
      icon: industry.features[2]?.icon || "star",
      desc: industry.features[2]?.desc || "Comprehensive AI integration for maximum ROI.",
      highlight: true,
    },
    {
      badge: "ENTERPRISE",
      title: industry.features[3]?.title || "Titan Network",
      icon: industry.features[3]?.icon || "domain",
      desc: industry.features[3]?.desc || "Full custom deployment and enterprise-grade SLAs.",
      highlight: false,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0b0d10] border-t border-white/[0.04]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black uppercase tracking-tight mb-5">
            <span className="text-[#a3e635]">AUTOMATION</span> <span className="text-white">PROGRAMS</span>
          </h2>
          <p className="font-body text-[17px] text-white/80 leading-relaxed max-w-2xl mx-auto">
            We recommend the single best-fit growth program based on your business, goals, and capacity to grow.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-[20px] p-8 lg:p-10 flex flex-col h-full transition-all duration-300 ${
                prog.highlight 
                  ? "bg-[#16181d] border-2 border-[#a3e635] shadow-[0_0_30px_rgba(163,230,53,0.15)] relative transform lg:-translate-y-2" 
                  : "bg-[#16181d] border border-transparent hover:border-white/10"
              }`}
            >
              <div className="mb-4">
                {/* Badge */}
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase mb-8 ${
                  prog.highlight 
                    ? "bg-[#a3e635] text-[#0b0d10]" 
                    : "bg-white/[0.06] text-[#a3e635]"
                }`}>
                  {prog.badge}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <span className={`material-symbols-outlined text-4xl ${prog.highlight ? "text-[#a3e635]" : "text-white/60"}`}>
                    {prog.icon}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-black text-white mb-4 leading-tight">
                  {prog.title}
                </h3>

                {/* Description */}
                <p className="font-body text-[15px] text-white/70 leading-relaxed mt-4">
                  {prog.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
