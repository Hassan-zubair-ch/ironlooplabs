import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import Reliability from "@/components/Reliability";
import Industries from "@/components/Industries";
import StoriesPreview from "@/components/StoriesPreview";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CalendlyInline from "@/components/CalendlyInline";

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
        <section className="py-16 px-4 md:px-8 bg-surface-container max-w-7xl mx-auto w-full" id="book-meeting">
          <div className="text-center mb-8">
            <h2 className="text-headline-md md:text-display-lg text-primary mb-4 font-display">Schedule a Consultation</h2>
            <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">Pick a time that works best for you to see how IronLoop Labs can automate your workflow.</p>
          </div>
          <CalendlyInline />
        </section>
      </main>
      <Footer />
    </>
  );
}
