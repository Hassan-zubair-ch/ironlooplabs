import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingClient from "@/components/PricingClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | IronLoop Labs — Call Answering & Follow-Up Automation for Contractors",
  description:
    "Simple setup fee plus monthly plan. No contracts, no lock-in, live in 14 days. See IronLoop Labs pricing for HVAC, plumbing, and roofing companies.",
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
