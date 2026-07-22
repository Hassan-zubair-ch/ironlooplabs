import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Terms of Service | IronLoop Labs",
  description: "Terms and conditions for using IronLoop Labs services.",
};

export default function TermsOfServicePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#050608]">
        <PageBanner 
          title="Terms of Service"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Service" }]}
        />
        <section className="py-20 lg:py-28 text-white/80 font-body max-w-4xl mx-auto px-6 lg:px-margin-desktop">
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Agreement to Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access our services.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. Services and Automation Systems</h2>
            <p>IronLoop Labs provides AI automation services, including but not limited to AI voice receptionists, SMS agents, and workflow integrations. We reserve the right to withdraw or amend our service, and any service or material we provide, in our sole discretion without notice.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Acceptable Use</h2>
            <p>You agree not to use our automation systems for any unlawful purpose or in any way that could damage, disable, overburden, or impair our servers or networks. You are strictly responsible for the content and intent of the communications sent through our AI agents.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality (including custom workflows and AI prompts) are and will remain the exclusive property of IronLoop Labs and its licensors.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Limitation of Liability</h2>
            <p>In no event shall IronLoop Labs, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2 className="text-2xl font-bold text-white mt-12 mb-4">6. Contact Information</h2>
            <p>Questions about the Terms of Service should be sent to us at legal@ironlooplabs.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
