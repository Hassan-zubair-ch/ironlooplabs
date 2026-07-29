import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";

export const metadata = {
  title: "Contact Us | IronLoop Labs",
  description: "Get in touch with IronLoop Labs to deploy AI automation for your HVAC, plumbing, or roofing business.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <ContactClient />
      <Footer />
    </>
  );
}
