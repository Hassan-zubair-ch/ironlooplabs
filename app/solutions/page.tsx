import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsListClient from "@/components/SolutionsListClient";
import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Call Answering, Follow-Up & Lead Recovery for Home Services — IronLoop Labs",
  description:
    "Every tool IronLoop Labs offers to stop missed calls and dead leads from costing you jobs — speed-to-lead, missed-call text-back, 24/7 answering, and dead lead recovery.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/solutions",
  },
  openGraph: {
    title: "Solutions — Every Tool to Stop Losing Jobs to Missed Calls",
    description: "Speed-to-lead, missed-call text-back, 24/7 AI answering, dead lead recovery, and more for HVAC, plumbing & roofing.",
    url: "https://www.ironlooplabs.com/solutions",
    type: "website",
    images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: "IronLoop Labs Solutions" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solutions — Stop Losing Jobs to Missed Calls | IronLoop Labs",
    description: "Speed-to-lead, missed-call text-back, 24/7 answering, and dead lead reactivation for contractors.",
  },
  keywords: [
    "speed to lead HVAC",
    "missed call recovery plumbing",
    "dead lead reactivation roofing",
    "AI follow up home services",
    "contractor lead recovery",
    "24/7 answering service HVAC",
  ],
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <SolutionsListClient />
      <Dashboard />
      <Footer />
    </>
  );
}
