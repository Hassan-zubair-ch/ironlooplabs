import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuccessStoriesClient from "@/components/SuccessStoriesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real Results from HVAC, Roofing & Plumbing Companies — IronLoop Labs",
  description:
    "Real call recordings, booking numbers, and revenue results from home service companies using IronLoop Labs.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <SuccessStoriesClient />
      <Footer />
    </>
  );
}
