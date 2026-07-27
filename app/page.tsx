import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import PlatformVideoSection from "@/components/PlatformVideoSection";
import Dashboard from "@/components/Dashboard";
import WhatIronLoopDoes from "@/components/WhatIronLoopDoes";
import ProductsPreview from "@/components/ProductsPreview";
import ToolIntegrationsMarquee from "@/components/ToolIntegrationsMarquee";
import Industries from "@/components/Industries";
import CaseStudiesPreview from "@/components/CaseStudiesPreview";
import StoriesPreview from "@/components/StoriesPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PlatformVideoSection />
        <Dashboard />
        <WhatIronLoopDoes />
        <ProductsPreview />
        <ToolIntegrationsMarquee />
        <Industries />
        <CaseStudiesPreview />
        <StoriesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
