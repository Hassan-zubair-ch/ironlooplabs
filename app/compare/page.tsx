import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CompareClient from "@/components/CompareClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IronLoop Labs vs. Traditional Answering Services & In-House Front Desk",
  description:
    "How IronLoop Labs compares to a traditional answering service or an in-house receptionist for HVAC, plumbing, and roofing companies.",
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
