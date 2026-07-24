import type { Metadata } from "next";
import { Manrope, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";
import CalendlyWidget from "@/components/CalendlyWidget";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", fallback: ["system-ui", "sans-serif"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap", fallback: ["system-ui", "sans-serif"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap", fallback: ["monospace"] });

export const metadata: Metadata = {
  title: "IronLoop Labs | #1 Enterprise AI Voice Agents & Autonomous Dispatch",
  description: "IronLoop Labs is the leading provider of 24/7 autonomous AI receptionists, medical patient triage, and emergency dispatch automation for high-volume service businesses across the United States. We integrate with ServiceTitan, Epic, and Dentrix to eliminate missed calls and automate scheduling.",
  keywords: "best AI receptionist, AI voice agent for HVAC, AI medical triage, healthcare AI automation, automated emergency dispatch, AI call answering service, ServiceTitan AI integration, dental AI receptionist, IronLoop Labs, AI automation agency US",
  authors: [{ name: "IronLoop Labs" }],
  creator: "IronLoop Labs",
  publisher: "IronLoop Labs",
  openGraph: {
    title: "IronLoop Labs | Enterprise AI Voice & Automation Infrastructure",
    description: "The autonomous nerve center for modern services. Zero-latency emergency dispatch, HIPAA-compliant triage, and seamless CRM integrations for US businesses.",
    url: "https://ironlooplabs.com",
    siteName: "IronLoop Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ironlooplabs.com/logo-main.png",
        width: 1200,
        height: 630,
        alt: "IronLoop Labs Enterprise AI Voice",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop Labs | Enterprise AI Voice Agents",
    description: "Deploy 24/7 autonomous AI receptionists and emergency dispatch for high-volume service businesses.",
    images: ["https://ironlooplabs.com/logo-main.png"],
  },
  alternates: {
    canonical: "https://ironlooplabs.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "IronLoop Labs",
    "url": "https://ironlooplabs.com",
    "logo": "https://ironlooplabs.com/favicon.png",
    "description": "IronLoop Labs provides enterprise AI voice infrastructure, 24/7 autonomous receptionists, and emergency dispatch software for Healthcare, HVAC, and Home Services.",
    "slogan": "The autonomous nerve center for modern services.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/ironlooplabs",
      "https://web.facebook.com/profile.php?id=61592446882012",
      "https://www.instagram.com/ironlooplabs/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "IronLoop Labs",
    "url": "https://ironlooplabs.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ironlooplabs.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Voice Receptionist and Automated Dispatch",
    "provider": {
      "@type": "Corporation",
      "name": "IronLoop Labs"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI Automation Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Healthcare AI Patient Triage"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "HVAC 24/7 Emergency Dispatch AI"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dental Practice AI Receptionist"
          }
        }
      ]
    }
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth dark ${manrope.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Inject Structured Data (JSON-LD) for deep SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden">
        <MaterialSymbolsLoader />
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}
