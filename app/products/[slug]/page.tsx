import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductDetailClient from "@/components/ProductDetailClient";
import { productsData } from "@/lib/productsData";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) return { title: "Product Not Found | IronLoop Labs" };

  const url = `https://www.ironlooplabs.com/products/${prod.slug}`;
  const title = `${prod.name} - Enterprise AI Automation | IronLoop Labs`;
  const description = `${prod.heroDesc} US Enterprise AI Voice & Automation Infrastructure by IronLoop Labs.`;

  return {
    title,
    description,
    keywords: [
      prod.name,
      `IronLoop ${prod.name}`,
      `AI ${prod.slug}`,
      "AI receptionist",
      "AI caller",
      "enterprise AI automation",
      "US AI voice agents",
      "ServiceTitan AI integration"
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
      type: "website",
      images: [
        {
          url: "https://www.ironlooplabs.com/logo-main.png",
          width: 1200,
          height: 630,
          alt: `${prod.name} by IronLoop Labs`,
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

export default function ProductDetailPage({ params }: PageProps) {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) notFound();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": `IronLoop ${prod.name}`,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Cloud Telephony",
      "description": prod.heroDesc,
      "provider": {
        "@type": "Corporation",
        "name": "IronLoop Labs",
        "url": "https://www.ironlooplabs.com"
      }
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
          "name": "Products",
          "item": "https://www.ironlooplabs.com/products"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": prod.name,
          "item": `https://www.ironlooplabs.com/products/${prod.slug}`
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
      <ProductDetailClient prod={prod} />
      <Footer />
    </>
  );
}
