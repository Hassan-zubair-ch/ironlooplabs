import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IndustriesListClient from "@/components/IndustriesListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | AI Answering & Follow-Up for HVAC, Plumbing & Roofing — IronLoop Labs",
  description:
    "Purpose-built call answering and follow-up automation for HVAC, plumbing, roofing, and home service businesses across Texas and the US.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/industries",
  },
  openGraph: {
    title: "Industries — AI Call Answering Built for Your Trade",
    description: "IronLoop is purpose-built for HVAC, plumbing, and roofing companies. See how it works for your specific trade.",
    url: "https://www.ironlooplabs.com/industries",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs Industries" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries — AI Call Answering for HVAC, Plumbing & Roofing",
    description: "Purpose-built call answering for contractors. See how IronLoop works for your specific trade.",
  },
  keywords: [
    "HVAC AI voice assistant",
    "plumbing after hours answering",
    "roofing lead follow up",
    "home services AI answering",
    "contractor AI phone service",
    "pest control virtual assistant",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white min-h-screen">
        <IndustriesListClient />
      </main>
      <Footer />
    </>
  );
}
