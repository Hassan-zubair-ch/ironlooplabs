import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionDetailClient from "@/components/SolutionDetailClient";
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
  if (!prod) return { title: "Solution Not Found | IronLoop Labs" };

  const url = `https://www.ironlooplabs.com/solutions/${prod.slug}`;
  const title = `${prod.name} for HVAC, Plumbing & Roofing | IronLoop Labs`;
  const description = `${prod.heroDesc} Built for US home service contractors by IronLoop Labs.`;

  return {
    title,
    description,
    keywords: [
      prod.name,
      `${prod.name} HVAC`,
      `${prod.name} plumbing`,
      `${prod.name} roofing`,
      `${prod.name} contractors`,
      `IronLoop ${prod.name}`,
      "home service automation",
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
      images: [{ url: "https://www.ironlooplabs.com/logo-main.png", width: 1200, height: 630, alt: `${prod.name} — IronLoop Labs` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default function SolutionDetailPage({ params }: PageProps) {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) notFound();

  return (
    <>
      <Nav />
      <SolutionDetailClient prod={prod} />
      <Footer />
    </>
  );
}
