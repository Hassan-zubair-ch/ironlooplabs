import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryIconComponent } from "@/components/IndustryIcons";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import HighEndCTA from "@/components/HighEndCTA";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found | IronLoop Labs" };

  return {
    title: `${industry.title} AI Automation & Workflows | IronLoop Labs`,
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
      <main className="bg-[#0b0d10] bg-dark-grid min-h-screen text-white pt-28 pb-20">
        {/* Breadcrumb Navigation */}
        <div className="max-w-container-max mx-auto px-margin-desktop mb-8">
          <nav className="flex items-center gap-2 text-sm font-mono text-on-surface-variant">
            <Link href="/" className="hover:text-[#a3e635] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/#industries" className="hover:text-[#a3e635] transition-colors">Industries</Link>
            <span>/</span>
            <span className="text-[#a3e635] font-semibold">{industry.title}</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-16">
          <div className="bg-[#12151a] border border-[#a3e635]/30 rounded-3xl p-8 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#a3e635]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              <div className="lg:col-span-8 space-y-6">
                <span className="inline-block font-mono text-xs text-[#a3e635] bg-[#a3e635]/10 border border-[#a3e635]/30 px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">
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
                    href="#cta-box"
                    className="bg-[#a3e635] text-[#0b0d10] px-8 py-4 rounded-xl font-bold font-display text-lg flex items-center gap-2 hover:brightness-110 active:scale-95 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]"
                  >
                    Deploy {industry.title} AI
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </a>
                  <a
                    href="#diagram"
                    className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold font-display text-lg hover:bg-white/5 active:scale-95 transition-all"
                  >
                    Explore Workflow Diagram
                  </a>
                </div>
              </div>

              {/* Large Vector Icon Badge */}
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-52 h-52 rounded-3xl bg-[#181c24] border-2 border-[#a3e635] flex items-center justify-center shadow-[0_0_50px_rgba(163,230,53,0.25)] relative group">
                  <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                    {getIndustryIconComponent(industry.iconType, "w-32 h-32")}
                  </div>
                </div>
              </div>
            </div>

            {/* Live Metrics Ribbon */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/10">
              {industry.metrics.map((m, i) => (
                <div key={i} className="bg-[#181c24] border border-white/5 p-6 rounded-2xl">
                  <div className="font-display text-3xl font-extrabold text-[#a3e635] mb-1">{m.value}</div>
                  <div className="font-mono text-sm text-white font-semibold uppercase">{m.label}</div>
                  <div className="font-body text-xs text-on-surface-variant mt-1">{m.subtext}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Interactive Workflow Diagram Section */}
        <section id="diagram" className="max-w-container-max mx-auto px-margin-desktop mb-16">
          <WorkflowDiagram industryTitle={industry.title} steps={industry.workflows} />
        </section>

        {/* Detailed Capabilities & Automation Features Grid */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a3e635] block mb-3 font-semibold">
              TO-THE-POINT AUTOMATION CAPABILITIES
            </span>
            <h2 className="font-display text-3xl lg:text-4xl text-white font-extrabold">
              Engineered Specifically for {industry.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.features.map((feat, i) => (
              <div key={i} className="bg-[#12151a] border border-white/10 rounded-2xl p-8 flex items-start gap-5 hover:border-[#a3e635] transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-[#a3e635]/20 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[#a3e635] text-2xl">{feat.icon}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl text-white font-bold mb-2">{feat.title}</h3>
                  <p className="font-body text-on-surface-variant text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* System Integrations Bar */}
        <section className="max-w-container-max mx-auto px-margin-desktop mb-16">
          <div className="bg-[#12151a] border border-white/10 rounded-3xl p-8 lg:p-12 text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[#a3e635] block mb-3 font-semibold">
              ENTERPRISE INTEGRATIONS
            </span>
            <h2 className="font-display text-2xl lg:text-3xl text-white font-bold mb-8">
              Syncs Natively With Your Existing Software &amp; EHR Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {industry.integrations.map((sys, i) => (
                <span
                  key={i}
                  className="bg-[#181c24] border border-white/10 text-white font-mono text-sm px-6 py-3 rounded-xl font-semibold hover:border-[#a3e635] transition-colors"
                >
                  {sys}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* High-End Call To Action Box at bottom of page */}
        <section id="cta-box" className="max-w-container-max mx-auto px-margin-desktop">
          <HighEndCTA industryTitle={industry.title} />
        </section>
      </main>
      <Footer />
    </>
  );
}
