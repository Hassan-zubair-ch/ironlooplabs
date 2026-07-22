import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import ContactClient from "@/components/ContactClient";

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
      <Footer />
    </>
  );
}
