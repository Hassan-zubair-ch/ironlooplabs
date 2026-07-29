import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingClient from "@/components/PricingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | IronLoop Labs — Call Answering & Follow-Up Automation for Contractors",
  description:
    "Simple setup fee plus monthly plan. No contracts, no lock-in, live in 14 days. See IronLoop Labs pricing for HVAC, plumbing, and roofing companies.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/pricing",
  },
  openGraph: {
    title: "Pricing — IronLoop Labs | No Contracts, Live in 14 Days",
    description: "Simple flat-rate AI call answering for HVAC, plumbing & roofing. No contracts, no lock-in. See what's included.",
    url: "https://www.ironlooplabs.com/pricing",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing — IronLoop Labs | No Contracts, Live in 14 Days",
    description: "Flat-rate AI call answering for contractors. No hiring, no overtime, no lock-in.",
  },
  keywords: [
    "AI answering service pricing",
    "contractor call answering cost",
    "HVAC AI receptionist pricing",
    "plumbing answering service cost",
    "roofing call answering pricing",
    "IronLoop pricing",
  ],
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white min-h-screen">
        <PricingClient />
      </main>
      <Footer />
    </>
  );
}
