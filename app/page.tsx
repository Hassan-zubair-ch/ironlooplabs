import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MissedCallCalculator from "@/components/MissedCallCalculator";
import PlatformVideoSection from "@/components/PlatformVideoSection";
import WhatIronLoopDoes from "@/components/WhatIronLoopDoes";
import ProductsPreview from "@/components/ProductsPreview";
import ToolIntegrationsMarquee from "@/components/ToolIntegrationsMarquee";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import StoriesPreview from "@/components/StoriesPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IronLoop Labs | Missed-Call Text-Back & 24/7 Answering for HVAC Companies",
  description:
    "IronLoop Labs helps HVAC, plumbing, and roofing companies stop losing jobs to missed calls — every call answered, every lead followed up, every no-show recovered, automatically.",
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
