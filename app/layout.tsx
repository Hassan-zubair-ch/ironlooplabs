import type { Metadata } from "next";
import { Manrope, Open_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";

const CalendlyWidget = dynamic(() => import("@/components/CalendlyWidget"), { ssr: false });

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const openSans = Open_Sans({ subsets: ["latin"], variable: "--font-open-sans", display: "swap" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono", display: "swap" });

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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link rel="preload" href="/logo-main.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var link = document.createElement('link');
              link.rel = 'stylesheet';
              link.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap';
              document.head.appendChild(link);
            `
          }}
        />
        
        {/* Inject Structured Data (JSON-LD) for deep SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden">
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}
