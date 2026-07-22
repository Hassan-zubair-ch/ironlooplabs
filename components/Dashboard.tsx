"use client";

import Image from "next/image";
import Reveal from "./Reveal";

export default function Dashboard() {
  return (
    <section className="py-24 bg-background">
      <Reveal className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-surface-container-low rounded-2xl p-12 border border-outline shadow-2xl">
        <div className="overflow-hidden rounded-lg group">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiPutB7OFdQqc4VjmEGd2tQwFykQ3uP7vczAUtWC6l_UxYjQDvFaGE7PrgtXTgf-w288qBQTQbplaz31ZLxZTdILOgDLMo8yoJjYOqQ925JPX9f5Gww0QMqsfkSoub3Xtc17dbv7Zk4lRYIR9UPWWTz7JrmiBiGWvXHDsZmQ2REuSgW_sIBKSVOf_TBPXBuXyGD2Xs2-PlFLZHGaqEqFVhkQPUAQeUwXELHq__0OKSELfmXw7p0Th4"
            alt="KPI Report dashboard"
            width={640}
            height={480}
            className="rounded-lg shadow-2xl w-full object-cover aspect-[4/3] brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-110"
          />
        </div>
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
        </div>
      </Reveal>
    </section>
  );
}
