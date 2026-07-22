import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Reliability from "@/components/Reliability";
import Industries from "@/components/Industries";
import StoriesPreview from "@/components/StoriesPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Dashboard />
        <Reliability />
        <Industries />
        <StoriesPreview />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
