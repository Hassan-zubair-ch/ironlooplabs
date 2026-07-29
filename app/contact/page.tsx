import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactClient from "@/components/ContactClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | IronLoop Labs — Book a Free Demo",
  description: "Get in touch with IronLoop Labs to deploy AI call answering and follow-up automation for your HVAC, plumbing, or roofing business. Book a free demo today.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/contact",
  },
  openGraph: {
    title: "Contact IronLoop Labs — Book a Free Demo",
    description: "Ready to stop losing jobs to missed calls? Book a free demo and see how IronLoop works for your trade.",
    url: "https://www.ironlooplabs.com/contact",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "Contact IronLoop Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact IronLoop Labs — Book a Free Demo",
    description: "Stop losing jobs to missed calls. Book a free demo with IronLoop Labs.",
  },
  keywords: [
    "book demo AI answering",
    "contractor AI phone demo",
    "HVAC AI consultation",
    "IronLoop Labs contact",
    "plumbing AI demo",
  ],
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
