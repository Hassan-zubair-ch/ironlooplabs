import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SuccessStoriesClient from "@/components/SuccessStoriesClient";

export const metadata = {
  title: "Case Studies | IronLoop Labs",
  description: "Discover how trade, contractor, and home service companies achieved remarkable results with IronLoop AI automation.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <PageBanner
        title="Real Success Stories. Real Businesses."
        subtitle="From trade and contractor companies to home services, see how IronLoop AI automation is transforming operations and driving measurable growth."
        badge="CASE STUDIES"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies" },
        ]}
      />
      <SuccessStoriesClient />
      <Footer />
    </>
  );
}
