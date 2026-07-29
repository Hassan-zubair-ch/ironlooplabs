import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import dynamic from "next/dynamic";
import { Metadata } from "next";

const PlatformVideoSection = dynamic(() => import("@/components/PlatformVideoSection"));
const MissedCallCalculator = dynamic(() => import("@/components/MissedCallCalculator"));
const WhatIronLoopDoes = dynamic(() => import("@/components/WhatIronLoopDoes"));
const ProductsPreview = dynamic(() => import("@/components/ProductsPreview"));
const ToolIntegrationsMarquee = dynamic(() => import("@/components/ToolIntegrationsMarquee"));
const CaseStudiesPreview = dynamic(() => import("@/components/CaseStudiesPreview"));
const StoriesPreview = dynamic(() => import("@/components/StoriesPreview"));
const CTA = dynamic(() => import("@/components/CTA"));
const Footer = dynamic(() => import("@/components/Footer"));

export const metadata: Metadata = {
  title: "IronLoop Labs | Missed-Call Text-Back & 24/7 Answering for HVAC, Plumbing & Roofing",
  description:
    "IronLoop Labs helps HVAC, plumbing, and roofing companies stop losing jobs to missed calls — every call answered, every lead followed up, every no-show recovered, automatically.",
  alternates: {
    canonical: "https://www.ironlooplabs.com",
  },
  openGraph: {
    title: "IronLoop Labs | Stop Losing Jobs to Missed Calls",
    description: "HVAC, plumbing, and roofing companies use IronLoop to catch every call, text back instantly, and turn missed leads into booked jobs — day or night.",
    url: "https://www.ironlooplabs.com",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs — AI Call Answering for Contractors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop Labs | Stop Losing Jobs to Missed Calls",
    description: "Every missed call is a lost job. IronLoop answers 24/7 and books jobs automatically for HVAC, plumbing & roofing.",
  },
  keywords: [
    "missed call text back HVAC",
    "AI answering service contractors",
    "24/7 call answering plumbing",
    "HVAC AI receptionist",
    "roofing lead follow up",
    "contractor phone answering service",
    "speed to lead home services",
  ],
};

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformVideoSection />
        <MissedCallCalculator />
        <WhatIronLoopDoes />
        <ProductsPreview />
        <ToolIntegrationsMarquee />
        <CaseStudiesPreview />
        <StoriesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
