import type { Metadata } from "next";
import { Manrope, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";
import CalendlyWidget from "@/components/CalendlyWidget";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", fallback: ["system-ui", "sans-serif"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap", fallback: ["system-ui", "sans-serif"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap", fallback: ["monospace"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ironlooplabs.com"),
  title: {
    default: "IronLoop Labs | #1 US Enterprise AI Voice Agents & Autonomous Dispatch",
    template: "%s | IronLoop Labs",
  },
  description: "IronLoop Labs is the premier US enterprise provider of 24/7 autonomous AI voice receptionists, AI callers, HVAC emergency dispatch, HIPAA-compliant patient triage, and workflow automation. Integrated with ServiceTitan, Epic, Dentrix, and Salesforce.",
  keywords: [
    "IronLoop Labs",
    "IronLoop",
    "IronLoop AI",
    "AI receptionist",
    "AI caller",
    "AI voice agent",
    "best AI receptionist",
    "AI call answering service",
    "AI emergency dispatch",
    "healthcare AI triage",
    "ServiceTitan AI integration",
    "HVAC AI receptionist",
    "dental AI receptionist",
    "HIPAA compliant AI receptionist",
    "enterprise AI automation agency US",
    "autonomous dispatching software",
    "AI voice automation"
  ],
  authors: [{ name: "IronLoop Labs", url: "https://www.ironlooplabs.com" }],
  creator: "IronLoop Labs, Inc.",
  publisher: "IronLoop Labs, Inc.",
  category: "Technology & Enterprise AI Infrastructure",
  other: {
    "geo.region": "US-DE",
    "geo.placename": "United States",
    "geo.position": "37.7749;-122.4194",
    "ICBM": "37.7749, -122.4194",
  },
  openGraph: {
    title: "IronLoop Labs | #1 US Enterprise AI Voice & Autonomous Automation Infrastructure",
    description: "Deploy 24/7 autonomous AI voice receptionists, AI callers, emergency dispatch, and HIPAA-compliant patient triage for high-volume US service enterprises.",
    url: "https://www.ironlooplabs.com",
    siteName: "IronLoop Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ironlooplabs.com/logo-main.png",
        width: 1200,
        height: 630,
        alt: "IronLoop Labs Enterprise AI Voice Infrastructure",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop Labs | Enterprise AI Voice Agents & Autonomous Dispatch",
    description: "Deploy 24/7 autonomous AI receptionists, AI callers, and emergency dispatch automation for US service businesses.",
    images: ["https://www.ironlooplabs.com/logo-main.png"],
    site: "@ironlooplabs",
    creator: "@ironlooplabs",
  },
  alternates: {
    canonical: "https://www.ironlooplabs.com",
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
    "legalName": "IronLoop Labs, Inc.",
    "url": "https://www.ironlooplabs.com",
    "logo": "https://www.ironlooplabs.com/logo-main.png",
    "image": "https://www.ironlooplabs.com/logo-main.png",
    "description": "IronLoop Labs provides enterprise AI voice infrastructure, 24/7 autonomous AI receptionists, emergency dispatch, and HIPAA patient triage for Healthcare, HVAC, and Home Services.",
    "slogan": "The autonomous nerve center for modern services.",
    "foundingDate": "2024",
    "knowsAbout": [
      "AI Voice Receptionist",
      "AI Caller",
      "Artificial Intelligence Automation",
      "Autonomous Dispatch System",
      "HIPAA Patient Triage",
      "ServiceTitan Integration"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "DE"
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
    "url": "https://www.ironlooplabs.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://www.ironlooplabs.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "IronLoop Enterprise AI Voice Platform",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Cloud Telephony",
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "128"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is IronLoop Labs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IronLoop Labs is a leading United States enterprise AI automation company specializing in 24/7 autonomous AI voice receptionists, emergency dispatch systems, and HIPAA-compliant patient triage for healthcare, HVAC, and field service businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best AI voice receptionist for service businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "IronLoop Labs is rated #1 for enterprise AI voice receptionists, offering zero-latency inbound call answering under 1 second, natural human conversational voice, 99.99% uptime, and direct integration with ServiceTitan, Epic, Dentrix, and Salesforce."
        }
      },
      {
        "@type": "Question",
        "name": "Is IronLoop Labs HIPAA compliant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IronLoop Labs provides SOC2 Type II and HIPAA-compliant voice telemetry, encrypted patient triage logs, and secure EHR integration for medical clinics and hospitals."
        }
      }
    ]
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
        <link rel="author" href="https://www.ironlooplabs.com" />
        
        {/* Inject Structured Data (JSON-LD) for Deep Google & AI Search Indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden">
        <GoogleAnalytics gaId="G-VP9HC133R6" />
        <MaterialSymbolsLoader />
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}
