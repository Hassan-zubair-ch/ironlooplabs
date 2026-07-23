"use client";

import Link from "next/link";
import { INDUSTRIES_DATA } from "@/lib/industriesData";
import IndustryCard from "./IndustryCard";

export default function IndustriesListClient() {
  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#a3e635]/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, i) => (
            <IndustryCard key={ind.slug} ind={ind} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="font-body text-on-surface-variant mb-5">Don&apos;t see your industry? We build custom automation for any service business.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#a3e635] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-base hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.2)]"
          >
            Contact Us
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
