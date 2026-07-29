import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import VoiceDemoClient from "@/components/VoiceDemoClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Live AI Voice Receptionist Demo | IronLoop Labs",
  description:
    "Test IronLoop Labs' 24/7 AI voice receptionist live in your browser. Experience zero-latency call answering, lead qualification, and automatic CRM dispatch for contractors.",
  alternates: {
    canonical: "https://www.ironlooplabs.com/demo",
  },
  openGraph: {
    title: "Live AI Voice Receptionist Demo | IronLoop Labs",
    description:
      "Try IronLoop's AI receptionist live. Experience how it answers calls 24/7, handles questions, and captures lead info.",
    url: "https://www.ironlooplabs.com/demo",
    type: "website",
    images: [
      {
        url: "https://www.ironlooplabs.com/logo-main.png",
        width: 1200,
        height: 630,
        alt: "IronLoop AI Voice Demo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Live AI Voice Receptionist Demo | IronLoop Labs",
    description: "Test 24/7 AI voice call answering live in your browser.",
  },
  keywords: [
    "AI receptionist demo",
    "voice AI demo",
    "IronLoop voice receptionist",
    "contractor AI phone demo",
    "HVAC voice AI demo",
  ],
};

export default function DemoPage() {
  return (
    <>
      <Nav />
      <VoiceDemoClient />
      <Footer />
    </>
  );
}
