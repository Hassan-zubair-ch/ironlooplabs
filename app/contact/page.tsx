import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactClient from "@/components/ContactClient";
import dynamic from "next/dynamic";

const CalendlyInline = dynamic(() => import("@/components/CalendlyInline"), { ssr: false });

export const metadata = {
  title: "Contact Us | IronLoop Labs",
  description: "Get in touch with IronLoop Labs to deploy AI automation for your healthcare, HVAC, or service business.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <PageBanner
        title={<>Let&apos;s Build Your <span className="text-[#a3e635]">AI Automation</span> System</>}
        subtitle="Whether you're a single-location clinic or a multi-site enterprise, we'll architect a system tailored to your exact workflow."
        badge="ACCEPTING NEW CLIENTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <ContactClient />
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-8">
          <h2 className="text-headline-md text-primary mb-4 font-display">Or Pick a Time on Our Calendar</h2>
          <p className="text-body-md text-on-surface-variant max-w-2xl mx-auto">Skip the back-and-forth and schedule a meeting directly.</p>
        </div>
        <CalendlyInline />
      </section>
      <Footer />
    </>
  );
}
