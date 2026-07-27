import { redirect } from "next/navigation";
import { productsData } from "@/lib/productsData";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return productsData.map((prod) => ({
    slug: prod.slug,
  }));
}

export default function ProductDetailPage({ params }: PageProps) {
  redirect(`/solutions/${params.slug}`);
}
