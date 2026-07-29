import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/lib/industriesData";
import IndustryDetailClient from "@/components/IndustryDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found | IronLoop Labs" };

  const url = `https://www.ironlooplabs.com/industries/${industry.slug}`;
  const title = `${industry.title} Call Answering & Lead Follow-Up | IronLoop Labs`;
  const description = `${industry.heroDesc} Built for US ${industry.title.toLowerCase()} companies by IronLoop Labs.`;

  return {
    title,
    description,
    keywords: [
      `${industry.title} AI answering service`,
      `${industry.title} missed call text back`,
      `${industry.title} after hours answering`,
      `${industry.title} lead follow up`,
      `${industry.title} call answering`,
      `IronLoop Labs ${industry.slug}`,
      `best answering service for ${industry.title.toLowerCase()}`
    ],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "IronLoop Labs",
      locale: "en_US",
      type: "article",
      images: [
        {
          url: "https://www.ironlooplabs.com/logo-main.png",
          width: 1200,
          height: 630,
          alt: `${industry.title} AI Automation Infrastructure`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["https://www.ironlooplabs.com/logo-main.png"],
    },
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": `${industry.title} AI Automation Infrastructure`,
      "serviceType": `${industry.category} AI Receptionist & Dispatch`,
      "provider": {
        "@type": "Corporation",
        "name": "IronLoop Labs",
        "url": "https://www.ironlooplabs.com"
      },
      "areaServed": {
        "@type": "Country",
        "name": "United States"
      },
      "description": industry.heroDesc
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.ironlooplabs.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Industries",
          "item": "https://www.ironlooplabs.com/industries"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": industry.title,
          "item": `https://www.ironlooplabs.com/industries/${industry.slug}`
        }
      ]
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <IndustryDetailClient industry={industry} />
      <Footer />
    </>
  );
}
