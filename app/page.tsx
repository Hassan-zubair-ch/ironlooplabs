import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Dashboard from "@/components/Dashboard";
import Reliability from "@/components/Reliability";
import Industries from "@/components/Industries";
import Stories from "@/components/Stories";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Programs />
        <Dashboard />
        <Reliability />
        <Industries />
        <Stories />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
