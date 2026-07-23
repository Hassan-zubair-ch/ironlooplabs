import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | IronLoop Labs",
  description: "Privacy policy and data handling practices for IronLoop Labs.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#050608] relative">
        <PageBanner 
          title="Privacy Policy"
          badge="LEGAL CENTER"
          subtitle="How we collect, use, and protect your enterprise data."
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        
        <section className="py-16 lg:py-24 max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-3">
              <div className="sticky top-28 bg-[#0b0d10] border border-white/[0.05] rounded-2xl p-6">
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold mb-4">Legal Documents</h3>
                <nav className="flex flex-col gap-2">
                  <Link href="/privacy-policy" className="px-4 py-2.5 rounded-lg bg-[#a3e635]/10 text-[#a3e635] font-display text-sm font-bold border border-[#a3e635]/20 flex items-center justify-between">
                    Privacy Policy
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                  <Link href="/terms-of-service" className="px-4 py-2.5 rounded-lg text-white/60 hover:bg-white/[0.03] hover:text-white font-display text-sm transition-all flex items-center justify-between">
                    Terms of Service
                  </Link>
                </nav>

                <div className="mt-8 pt-6 border-t border-white/[0.05]">
                  <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold mb-3">Questions?</h3>
                  <a href="mailto:privacy@ironlooplabs.com" className="text-sm font-body text-white/70 hover:text-[#a3e635] transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-base">mail</span>
                    privacy@ironlooplabs.com
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
                        Information We Collect
                      </h2>
                      <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request a consultation, or contact customer support. This may include your name, email address, phone number, and business details.</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm font-mono text-white/50">02</span>
                        How We Use Your Information
                      </h2>
                      <p>We use the information we collect to provide, maintain, and improve our automation services. We may also use this information to communicate with you about products, services, offers, promotions, and events.</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-sm font-mono text-[#a3e635]">03</span>
                        Data Security & AI Processing
                      </h2>
                      <p>Given the nature of AI automation and integrations (such as CRM and EHR systems), we take data security seriously. We implement enterprise-grade security measures to protect your data and ensure compliance with industry standards. Data processed by our AI agents is encrypted in transit (TLS 1.3) and at rest (AES-256).</p>
                    </section>
                    
                    <section>
                      <h2 className="text-2xl text-white mb-5 flex items-center gap-4">
                        <span className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center text-sm font-mono text-white/50">04</span>
                        Information Sharing
                      </h2>
                      <p>We do not sell or share your personal information with third parties for their direct marketing purposes. We may share data with trusted third-party service providers who assist us in operating our business and providing our services, subject to strict confidentiality agreements.</p>
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
