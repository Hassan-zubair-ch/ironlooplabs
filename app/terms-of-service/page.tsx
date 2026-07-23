import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Terms of Service | IronLoop Labs",
  description: "Terms of service and usage conditions for IronLoop Labs.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#050608] relative">
        <PageBanner 
          title="Terms of Service"
          badge="LEGAL CENTER"
          subtitle="Our commitment to reliable, enterprise-grade service delivery."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        />
        
        <section className="py-16 lg:py-24 max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 bg-[#0b0d10] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">Legal Documents</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="/privacy-policy" className="px-4 py-2.5 rounded-lg text-white/60 hover:bg-white/[0.03] hover:text-white font-display text-sm transition-all flex items-center justify-between">
                    Privacy Policy
                  </Link>
                  <Link href="/terms-of-service" className="px-4 py-2.5 rounded-lg bg-[#a3e635]/10 text-[#a3e635] font-display text-sm font-bold border border-[#a3e635]/20 flex items-center justify-between">
                    Terms of Service
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </nav>

                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Questions?</h3>
                  <a href="mailto:legal@ironlooplabs.com" className="text-sm font-body text-white/70 hover:text-[#a3e635] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">mail</span>
                    legal@ironlooplabs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9">
               <div className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-p:text-white/60 prose-p:leading-relaxed prose-a:text-[#a3e635] hover:prose-a:text-[#a3e635]/80">
                  <p className="text-sm font-mono text-white/40 uppercase tracking-wider mb-10">Last updated: October 2023</p>
                  
                  <div className="space-y-12">
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm font-mono text-white/50">01</span>
                        Acceptance of Terms
                      </h2>
                      <p>By accessing or using IronLoop Labs services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm font-mono text-white/50">02</span>
                        Service Reliability & Uptime
                      </h2>
                      <p>We guarantee a 99.9% uptime SLA for our core automation systems. In the event of scheduled maintenance, clients will be notified 7 days in advance. Redundancy systems are built into all critical data flows.</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-sm font-mono text-[#a3e635]">03</span>
                        API & Integration Limits
                      </h2>
                      <p>Usage of our API and third-party integrations (EHR, CRM, etc.) is subject to rate limits to ensure system stability. Exceeding rate limits may result in temporary throttling. Custom rate limits are available for Enterprise clients.</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm font-mono text-white/50">04</span>
                        Liability & Warranties
                      </h2>
                      <p>While our AI agents are highly accurate, they are not intended to replace licensed medical or legal professionals. IronLoop Labs is not liable for errors in third-party data entry or misinterpretation of complex conversational intent beyond the trained scope.</p>
                    </section>
                  </div>
               </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
