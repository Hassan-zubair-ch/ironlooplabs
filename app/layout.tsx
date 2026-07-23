import type { Metadata } from "next";
import "./globals.css";
import CalendlyWidget from "@/components/CalendlyWidget";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IronLoop Labs | Enterprise AI Voice & Automation Infrastructure",
  description: "Deploy 24/7 autonomous AI receptionists, medical triage, and emergency dispatch for high-volume service businesses across the US and UK.",
  keywords: "AI Automation, AI Receptionist UK, AI Dispatch US, Healthcare AI Triage, HVAC Call Answering, Automated Bookings, Enterprise AI Voice Agents, IronLoop Labs",
  openGraph: {
    title: "IronLoop Labs | Enterprise AI Voice & Automation",
    description: "The autonomous nerve center for modern services in the US and UK. Zero-latency emergency dispatch, HIPAA-compliant triage, and seamless CRM integrations.",
    url: "https://ironlooplabs.com",
    siteName: "IronLoop Labs",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop Labs | Enterprise AI Voice Agents",
    description: "Deploy 24/7 autonomous AI receptionists and emergency dispatch for high-volume service businesses.",
  },
  alternates: {
    canonical: "https://ironlooplabs.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  "name": "IronLoop Labs",
  "url": "https://ironlooplabs.com",
  "logo": "https://ironlooplabs.com/favicon.png",
  "description": "Enterprise AI Voice & Automation Infrastructure for Healthcare, HVAC, and Trades.",
  "areaServed": [
    {
      "@type": "Country",
      "name": "United States"
    },
    {
      "@type": "Country",
      "name": "United Kingdom"
    }
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-800-555-0199",
    "contactType": "customer service",
    "areaServed": ["US", "GB"],
    "availableLanguage": ["English", "Spanish"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Preload critical fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />

        {/* Preload Calendly for instant rendering */}
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.js" as="script" />
        <link rel="preload" href="https://assets.calendly.com/assets/external/widget.css" as="style" />
        
        {/* Inject Structured Data (JSON-LD) for deep SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden" style={{ willChange: "transform, opacity" }}>
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}
