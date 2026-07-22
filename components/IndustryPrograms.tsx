"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Props {
  industryTitle: string;
}

export default function IndustryPrograms({ industryTitle }: Props) {
  const programs = [
    {
      badge: "STARTER",
      title: "Kickstart Program",
      greenText: `For ${industryTitle} businesses under $1M in revenue`,
      desc: "Get dependable automated call handling, missed-call text back, and basic appointment booking.",
      highlight: false,
    },
    {
      badge: "GROWTH",
      title: "Accelerate Program",
      greenText: `For ${industryTitle} businesses $1M–$3M in revenue`,
      desc: "Predictable lead capture, 2-way SMS follow-ups, and consistent automated workflow routing.",
      highlight: false,
    },
    {
      badge: "POPULAR",
      title: "Elite Program",
      greenText: `For ${industryTitle} businesses $3M–$10M in revenue`,
      desc: "Advanced EHR/CRM integrations, custom triage logic, and full front-desk AI replacement.",
      highlight: true,
    },
    {
      badge: "ENTERPRISE",
      title: "Titan Program",
      greenText: `For ${industryTitle} businesses over $10M in revenue`,
      desc: "Multi-location routing, custom API development, long-term market control and dominance.",
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
              <div className="mb-8">
                {/* Badge */}
                <div className={`inline-flex items-center px-4 py-1.5 rounded-full font-mono text-[11px] font-bold tracking-wider uppercase mb-8 ${
                  prog.highlight 
                    ? "bg-[#a3e635] text-[#0b0d10]" 
                    : "bg-white/[0.06] text-[#a3e635]"
                }`}>
                  {prog.badge}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl font-black text-white mb-4">
                  {prog.title}
                </h3>

                {/* Green Subtext */}
                <p className="font-body text-[15px] font-semibold text-[#a3e635] mb-6">
                  {prog.greenText}
                </p>

                {/* Description */}
                <p className="font-body text-[15px] text-white/80 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              {/* Push button to bottom */}
              <div className="mt-auto pt-6">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#a3e635] text-[#0b0d10] py-3.5 rounded-lg font-display font-extrabold text-[15px] tracking-wide uppercase hover:brightness-110 active:scale-[0.98] transition-all"
                >
                  LEARN MORE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
