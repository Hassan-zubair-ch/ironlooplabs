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
  const title = `${prod.name} - AI Solution Module | IronLoop Labs`;
  const description = `${prod.heroDesc} Enterprise AI Automation Solution by IronLoop Labs.`;

  return {
    title,
    description,
    keywords: [
      prod.name,
      `IronLoop ${prod.name}`,
      `AI ${prod.slug}`,
      "AI automation module",
      "enterprise AI solution",
      "service automation",
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
