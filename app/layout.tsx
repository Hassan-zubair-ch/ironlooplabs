import type { Metadata } from "next";
import { Manrope, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
import MaterialSymbolsLoader from "@/components/MaterialSymbolsLoader";
import { GoogleAnalytics } from "@next/third-parties/google";

const CalendlyWidget = dynamic(() => import("@/components/CalendlyWidget"), { ssr: false });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap", fallback: ["system-ui", "sans-serif"] });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap", fallback: ["system-ui", "sans-serif"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap", fallback: ["monospace"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ironlooplabs.com"),
  title: {
    default: "IronLoop Labs | AI Call Answering & Missed-Call Recovery for Contractors",
    template: "%s | IronLoop Labs",
  },
  description: "IronLoop Labs helps HVAC, plumbing, and roofing companies stop losing jobs to missed calls. Every call answered, every lead followed up, every no-show recovered — 24/7, automatically.",
  keywords: [
    "IronLoop Labs",
    "IronLoop",
    "missed call text back HVAC",
    "AI answering service contractors",
    "AI call answering service",
    "HVAC AI receptionist",
    "plumbing after hours answering",
    "roofing lead follow up",
    "contractor AI phone answering",
    "24/7 call answering plumbing",
    "speed to lead HVAC",
    "dead lead reactivation",
    "missed call recovery contractors",
    "ServiceTitan AI integration",
    "AI voice agent home services",
    "automated dispatching HVAC",
  ],
  authors: [{ name: "IronLoop Labs", url: "https://www.ironlooplabs.com" }],
  creator: "IronLoop Labs, Inc.",
  publisher: "IronLoop Labs, Inc.",
  category: "Technology & AI Automation for Home Services",
  other: {
    "geo.region": "US-DE",
    "geo.placename": "United States",
    "geo.position": "37.7749;-122.4194",
    "ICBM": "37.7749, -122.4194",
  },
  openGraph: {
    title: "IronLoop Labs | AI Call Answering & Missed-Call Recovery for Contractors",
    description: "HVAC, plumbing, and roofing companies use IronLoop to catch every call, text back instantly, and turn missed leads into booked jobs — day or night.",
    url: "https://www.ironlooplabs.com",
    siteName: "IronLoop Labs",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.ironlooplabs.com/logo-main.png",
        width: 1200,
        height: 630,
        alt: "IronLoop Labs — AI Call Answering for HVAC, Plumbing & Roofing",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IronLoop Labs | AI Call Answering for HVAC, Plumbing & Roofing",
    description: "Every missed call is a lost job. IronLoop answers 24/7, texts back instantly, and books jobs automatically for contractors.",
    images: ["https://www.ironlooplabs.com/logo-main.png"],
    site: "@ironlooplabs",
    creator: "@ironlooplabs",
  },
  alternates: {
    canonical: "https://www.ironlooplabs.com",
    languages: {
      "en-US": "https://www.ironlooplabs.com",
      "x-default": "https://www.ironlooplabs.com",
    },
  },
  verification: {
    other: {
      "msvalidate.01": "62D16DBC30E48F038169270DC90AAFC4",
    },
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
    "@type": "Organization",
    "name": "IronLoop Labs",
    "legalName": "IronLoop Labs, Inc.",
    "url": "https://www.ironlooplabs.com",
    "logo": "https://www.ironlooplabs.com/logo-main.png",
    "image": "https://www.ironlooplabs.com/logo-main.png",
    "description": "IronLoop Labs provides AI-powered call answering, missed-call text-back, speed-to-lead automation, and dead lead reactivation for HVAC, plumbing, and roofing companies across the United States.",
    "slogan": "Every missed call is a lost job. We make sure that never happens.",
    "foundingDate": "2024",
    "knowsAbout": [
      "AI Call Answering for Contractors",
      "Missed-Call Text-Back",
      "Speed-to-Lead Automation",
      "Dead Lead Reactivation",
      "HVAC Answering Service",
      "Plumbing After-Hours Answering",
      "Roofing Lead Follow-Up",
      "ServiceTitan Integration",
      "Direct CRM Booking"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
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
    "url": "https://www.ironlooplabs.com"
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
          "text": "IronLoop Labs is an AI-powered call answering and follow-up platform built specifically for HVAC, plumbing, and roofing companies. It answers every call 24/7, texts back missed callers instantly, and books jobs directly into your CRM — so you never lose a lead to voicemail again."
        }
      },
      {
        "@type": "Question",
        "name": "Does IronLoop bring me new leads or just handle the ones I have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Just the ones you have. IronLoop makes sure every lead you are already paying for — from ads, referrals, or your website — gets a response fast enough to actually convert. It also reactivates old leads sitting in your CRM that went cold."
        }
      },
      {
        "@type": "Question",
        "name": "How fast does IronLoop respond to a missed call?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under 3 seconds. Studies show leads contacted within 5 minutes convert 9x more often than those contacted an hour later. IronLoop responds to every missed call with an instant text-back and automated follow-up sequence."
        }
      },
      {
        "@type": "Question",
        "name": "What is missed-call text-back for HVAC companies?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Missed-call text-back automatically sends a personalized SMS to any caller who does not get answered. For HVAC companies, this means after-hours emergency calls, peak-season overflow, and weekend inquiries all get an instant response — recovering jobs that would otherwise go to a competitor."
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
    <html lang="en-US" className={`scroll-smooth dark ${manrope.variable} ${openSans.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="author" href="https://www.ironlooplabs.com" />

        {/* US Geo-Targeting & Content Language */}
        <meta httpEquiv="content-language" content="en-US" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="target" content="all" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="United States" />
        <meta name="rating" content="general" />

        {/* AI Crawler Discovery */}
        <link rel="alternate" type="text/plain" href="https://www.ironlooplabs.com/llms.txt" title="LLM-readable site description" />

        {/* Inject Structured Data (JSON-LD) for Deep Google & AI Search Indexing */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#050505] text-on-background font-body overflow-x-hidden relative">
        {/* Global Dotted Background Texture */}
        <div
          className="fixed inset-0 opacity-20 pointer-events-none z-0"
          style={{
            backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
            backgroundSize: `24px 24px`,
          }}
        />
        <GoogleAnalytics gaId="G-VP9HC133R6" />
        <MaterialSymbolsLoader />
        <div className="relative z-10">{children}</div>
        <CalendlyWidget />
      </body>
    </html>
  );
}
