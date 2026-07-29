import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import IndustriesListClient from "@/components/IndustriesListClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries | AI Answering & Follow-Up for HVAC, Plumbing & Roofing — IronLoop Labs",
  description:
    "Purpose-built call answering and follow-up automation for HVAC, plumbing, roofing, and home service businesses across Texas and the US.",
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
