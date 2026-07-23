import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductDetailClient from "@/components/ProductDetailClient";
import { productsData } from "@/lib/productsData";
import { notFound } from "next/navigation";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) return { title: "Not Found" };
  return {
    title: `${prod.name} | IronLoop Labs`,
    description: prod.shortDesc,
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  const prod = productsData.find((p) => p.slug === params.slug);
  if (!prod) notFound();

  return (
    <>
      <Nav />
      <ProductDetailClient prod={prod} />
      <Footer />
    </>
  );
}
