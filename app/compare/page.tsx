import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CompareClient from "@/components/CompareClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IronLoop Labs vs. Traditional Answering Services & In-House Front Desk",
  description:
    "How IronLoop Labs compares to a traditional answering service or an in-house receptionist for HVAC, plumbing, and roofing companies.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/compare",
  },
  openGraph: {
    title: "IronLoop vs. Answering Services & In-House Staff — Side-by-Side Comparison",
    description: "See how IronLoop stacks up against traditional answering services and hiring in-house for HVAC, plumbing & roofing.",
    url: "https://www.ironlooplabs.com/compare",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs Comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop vs. Answering Services — Which Is Better for Contractors?",
    description: "Side-by-side comparison of IronLoop AI vs. traditional answering services and in-house receptionists.",
  },
  keywords: [
    "AI vs answering service",
    "IronLoop vs Ruby Receptionist",
    "best AI answering service contractors",
    "answering service comparison HVAC",
    "AI receptionist vs live answering",
    "contractor answering service alternative",
  ],
};

export default function ComparePage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white min-h-screen">
        <CompareClient />
      </main>
      <Footer />
    </>
  );
}
