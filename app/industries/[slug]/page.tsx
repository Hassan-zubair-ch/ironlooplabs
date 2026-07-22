import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryIconComponent } from "@/components/IndustryIcons";
import CTA from "@/components/CTA";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found | IronLoop Labs" };

  return {
    title: `${industry.title} AI Automation | IronLoop Labs`,
    description: industry.heroDesc,
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="bg-[#0c0e12] min-h-screen text-white pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="max-w-container-max mx-auto px-margin-desktop mb-8">
          <nav className="flex items-center gap-2 text-sm font-mono text-on-surface-variant">
            <Link href="/" className="hover:text-[#C5E033] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#industries" className="hover:text-[#C5E033] transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#C5E033] font-semibold">{industry.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="bg-[#121519] border border-[#C5E033]/30 rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl bg-dark-grid">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5E033]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-block font-mono text-xs text-[#C5E033] bg-[#C5E033]/10 border border-[#C5E033]/30 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
                  {industry.badge}
                </span>
                <h1 className="font-display text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                  {industry.heroHeadline}
                </h1>
                <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                  {industry.heroDesc}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#contact"
                    className="bg-[#C5E033] text-[#0B1C0E] px-8 py-4 rounded-xl font-bold font-display text-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all btn-glow-hover"
                  >
                    Deploy {industry.title} AI
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a
                    href="#workflows"
                    className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold font-display text-lg hover:bg-white/5 active:scale-95 transition-all"
                  >
                    View Automation Workflow
                  </a>
                </div>
              </div>

              {/* Large Icon Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-48 h-48 rounded-3xl bg-[#181c22] border-2 border-[#C5E033] flex items-center justify-center shadow-[0_0_50px_rgba(197,224,51,0.25)] relative group">
                  <div className="absolute inset-0 bg-card-grid rounded-3xl opacity-80" />
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {getIndustryIconComponent(industry.iconType, "w-28 h-28")}
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
              {industry.metrics.map((m, i) => (
                <div key={i} className="bg-[#161a20] border border-white/5 p-6 rounded-2xl">
                  <div className="font-display text-3xl font-extrabold text-[#C5E033] mb-1">{m.value}</div>
                  <div className="font-mono text-sm text-white font-semibold uppercase">{m.label}</div>
                  <div className="font-body text-xs text-on-surface-variant mt-1">{m.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="bg-[#121519] border border-white/10 rounded-3xl p-8 lg:p-12">
            <h2 className="font-display text-2xl lg:text-3xl text-white font-bold mb-4">
              Industry Overview &amp; Operational Impact
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed">
              {industry.overview}
            </p>
          </div>
        </section>

        {/* Workflows Diagram Section */}
        <section id="workflows" className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5E033] block mb-3 font-semibold">
              STEP-BY-STEP AI EXECUTION
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-white font-bold">
              Automated {industry.title} Workflow
            </h2>
            <p className="font-body text-on-surface-variant text-base mt-3">
              From first ring to confirmed appointment, IronLoop handles every step with surgical precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industry.workflows.map((wf, idx) => (
              <div
                key={idx}
                className="bg-[#14171c] border border-white/10 rounded-2xl p-6 relative group hover:border-[#C5E033] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-2xl font-extrabold text-[#C5E033]">{wf.step}</span>
                    <div className="w-10 h-10 rounded-xl bg-[#C5E033]/15 flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#C5E033] text-xl">{wf.icon}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg text-white font-bold mb-2">{wf.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{wf.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-[#C5E033]">
                  <span>AUTOMATED STEP</span>
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Automation Features */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5E033] block mb-3 font-semibold">
              TO-THE-POINT AUTOMATIONS
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-white font-bold">
              Built Specifically for {industry.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.features.map((feat, i) => (
              <div key={i} className="bg-[#121519] border border-white/10 rounded-2xl p-8 flex items-start gap-5 hover:border-[#C5E033]/50 transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#C5E033]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#C5E033] text-2xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white font-bold mb-2">{feat.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Integrations */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-20">
          <div className="bg-[#121519] border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#C5E033] block mb-3 font-semibold">
              SEAMLESS COMPATIBILITY
            </span>
            <h2 className="font-display text-2xl lg:text-3xl text-white font-bold mb-8">
              Syncs Natively With Your Existing Software Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.integrations.map((sys, i) => (
                <span
                  key={i}
                  className="bg-[#1a1f26] border border-white/10 text-white font-mono text-sm px-5 py-2.5 rounded-xl font-medium hover:border-[#C5E033] transition-colors"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <CTA />
      </main>
      <Footer />
    </>
  );
}
