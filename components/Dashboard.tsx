"use client";

import Image from "next/image";
import Reveal from "./Reveal";
import MCPServerDiagram from "./MCPServerDiagram";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="py-24 bg-background">
      <Reveal className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-surface-container-low rounded-2xl p-12 border border-outline shadow-2xl">
        <MCPServerDiagram />
        <div className="space-y-8">
          <h2 className="font-display text-headline-lg text-white">
            Built for the Trade, <span className="text-primary">Optimized for Growth</span>
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant">
            Just like the healthcare administrators, technicians, and dispatchers we serve, IronLoop Labs translates every call and intake into a
            measurable KPI. See your lead capture and ROI in real-time, right from your dashboard.
          </p>
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-surface-container-highest rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high">
              <div className="font-display text-headline-lg text-primary">98%</div>
              <div className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant">
                Answer Rate
              </div>
            </div>
            <div className="p-6 bg-surface-container-highest rounded-lg border border-primary/10 transition-all duration-300 hover:border-primary/40 hover:bg-surface-container-high">
              <div className="font-display text-headline-lg text-primary">3x</div>
              <div className="font-mono text-label-sm uppercase tracking-wider text-on-surface-variant">
                Lead Quality
              </div>
            </div>
          </div>
          <div className="pt-4">
            <Link 
              href="/success-stories"
              className="inline-block bg-primary text-background px-8 py-3.5 rounded-lg font-display text-lg font-bold shadow-lg shadow-primary/20 hover:scale-105 active:scale-95 transition-transform text-center hover:shadow-[0_0_15px_rgba(180,244,44,0.5)]"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
