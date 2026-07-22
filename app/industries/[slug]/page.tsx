import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import { INDUSTRIES_DATA, getIndustryBySlug } from "@/lib/industriesData";
import { getIndustryIconComponent } from "@/components/IndustryIcons";
import IndustryDetailClient from "@/components/IndustryDetailClient";

export async function generateStaticParams() {
  return INDUSTRIES_DATA.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);
  if (!industry) return { title: "Industry Not Found | IronLoop Labs" };

  return {
    title: `${industry.title} AI Automation | IronLoop Labs`,
    description: industry.heroDesc,
  };
}

export default function IndustryDetailPage({ params }: { params: { slug: string } }) {
  const industry = getIndustryBySlug(params.slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
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
