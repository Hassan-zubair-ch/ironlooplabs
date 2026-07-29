import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuccessStoriesClient from "@/components/SuccessStoriesClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Case Studies | Real Results from HVAC, Roofing & Plumbing Companies — IronLoop Labs",
  description:
    "Real call recordings, booking numbers, and revenue results from home service companies using IronLoop Labs.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/case-studies",
  },
  openGraph: {
    title: "Case Studies — Real Results from Contractors Using IronLoop",
    description: "See how HVAC, roofing, and plumbing companies booked 35+ jobs, recovered 50+ dead leads, and stopped losing after-hours calls with IronLoop.",
    url: "https://www.ironlooplabs.com/case-studies",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs Case Studies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies — How Contractors Doubled Bookings with IronLoop",
    description: "HVAC, roofing & plumbing case studies with real revenue results and call recordings.",
  },
  keywords: [
    "HVAC AI case study",
    "roofing lead reactivation results",
    "plumbing after hours conversion",
    "contractor AI results",
    "IronLoop case studies",
    "missed call recovery results",
  ],
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
