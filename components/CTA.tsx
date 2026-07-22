"use client";

import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-margin-desktop bg-background-subtle">
      <Reveal className="max-w-container-max mx-auto bg-surface-container-high rounded-[2rem] overflow-hidden relative border border-white/5">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              background:
                "radial-gradient(circle at center, rgba(197,224,51,0.5), transparent 70%)",
            }}
          />
        </div>
        <div className="relative z-10 p-12 lg:p-24 text-center">
          <h2 className="font-display text-display-lg text-white mb-8">
            Ready to Automate Your <span className="text-growth-green">Growth</span>?
          </h2>
          <p className="font-body text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
            Stop losing thousands every month in missed calls or delayed intake. Join the growing list of healthcare providers, HVAC firms, and
            service businesses who have already upgraded to IronLoop Labs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#"
              className="bg-growth-green text-deep-forest px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-transform flex items-center justify-center gap-3 shadow-lg shadow-growth-green/10 btn-glow-hover"
            >
              Book Your Free Consultation
              <span className="material-symbols-outlined">calendar_today</span>
            </a>
            <a
              href="#industries"
              className="bg-transparent border border-white/20 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-white/5 active:scale-95 transition-all"
            >
              Explore AI Workflows
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
