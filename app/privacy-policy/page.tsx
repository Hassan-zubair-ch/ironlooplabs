import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";

export const metadata = {
  title: "Privacy Policy | IronLoop Labs",
  description: "Privacy policy and data handling practices for IronLoop Labs.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#050608]">
        <PageBanner 
          title="Privacy Policy"
          breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]}
        />
        <section className="py-20 lg:py-28 text-white/80 font-body max-w-4xl mx-auto px-6 lg:px-margin-desktop">
          <div className="prose prose-invert prose-lg max-w-none space-y-8">
            <p>Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">1. Information We Collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request a consultation, or contact customer support. This may include your name, email address, phone number, and business details.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to provide, maintain, and improve our automation services. We may also use this information to communicate with you about products, services, offers, promotions, and events.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">3. Data Security & AI Processing</h2>
            <p>Given the nature of AI automation and integrations (such as CRM and EHR systems), we take data security seriously. We implement enterprise-grade security measures to protect your data and ensure compliance with industry standards. Data processed by our AI agents is encrypted in transit and at rest.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">4. Information Sharing</h2>
            <p>We do not sell or share your personal information with third parties for their direct marketing purposes. We may share data with trusted third-party service providers who assist us in operating our business and providing our services, subject to strict confidentiality agreements.</p>
            
            <h2 className="text-2xl font-bold text-white mt-12 mb-4">5. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or our data practices, please contact us at privacy@ironlooplabs.com.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
