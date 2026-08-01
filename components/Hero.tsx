import Link from "next/link";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full flex flex-col items-center justify-center px-6 pt-16 pb-20 overflow-hidden bg-[#050505] text-center">
      {/* Background Dot Texture */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: `24px 24px`,
        }}
      />

      {/* Ambient Glow Orbs */}
      <div className="absolute top-[-80px] left-[-80px] w-[300px] h-[300px] bg-[#C5E033]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] bg-white/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-md text-xs sm:text-sm font-medium text-white/90 shadow-xl">
            <span className="text-[#C5E033]">⚡</span>
            Built for HVAC, Plumbing &amp; Roofing Companies
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.08] tracking-tight text-white font-display">
          Stop losing jobs<br />
          <span className="bg-gradient-to-r from-white via-white/80 to-[#C5E033] bg-clip-text text-transparent">
            to missed calls.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed font-body">
          Every call answered. Every lead followed up. Every no-show turned into a booked job. IronLoop Labs runs your phones and follow-ups so your team stays on the tools — not stuck answering calls all day.
        </p>

        {/* Action Buttons & Note */}
        <div className="flex flex-col items-center gap-3 pt-2">
          <div className="flex flex-wrap justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-white text-[#050608] font-display text-base font-extrabold hover:bg-[#C5E033] hover:text-[#0b0d10] active:scale-95 transition-all shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2"
            >
              Book a Free Demo
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </Link>
            <Link
              href="/compare"
              className="px-8 py-4 rounded-full border border-white/20 text-white font-display text-base font-bold bg-white/5 hover:bg-white/10 hover:border-white/40 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              See How It Works
              <span className="material-symbols-outlined text-lg">play_circle</span>
            </Link>
          </div>
          <p className="text-white/40 text-xs sm:text-sm font-mono mt-1">
            15-minute call. No contract. See it working before you decide anything.
          </p>
        </div>

        {/* Bottom Metrics Bar */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto pt-12 border-t border-white/10 mt-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">+85%</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              More Booked Jobs
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">&lt; 10s</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              Response Time
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-white mb-1.5 font-display">Zero</div>
            <div className="text-white/40 text-[10px] sm:text-xs uppercase tracking-widest font-mono font-semibold">
              Missed Calls, Day or Night
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
