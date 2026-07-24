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
  const title = `${industry.title} AI Automation & Voice Receptionist | IronLoop Labs`;
  const description = `${industry.heroDesc} Dedicated enterprise AI solution for ${industry.title} in the United States.`;

  return {
    title,
    description,
    keywords: [
      `${industry.title} AI automation`,
      `${industry.title} AI voice receptionist`,
      `${industry.title} AI caller`,
      `${industry.title} automated dispatch`,
      `IronLoop Labs ${industry.slug}`,
      `best AI for ${industry.title}`,
      `US enterprise ${industry.category} AI`
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
      <PageBanner
        title={industry.heroHeadline}
        subtitle={industry.heroDesc}
        badge={industry.badge}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />
      <IndustryDetailClient industry={industry} />
      <Footer />
    </>
  );
}
