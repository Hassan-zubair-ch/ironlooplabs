import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import SuccessStoriesClient from "@/components/SuccessStoriesClient";

export const metadata = {
  title: "Success Stories | IronLoop Labs",
  description: "See how healthcare providers, HVAC companies, and service businesses are scaling with IronLoop AI automation.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <Nav />
      <PageBanner
        title="Real Businesses. Real Automation Results."
        subtitle="From HVAC companies to healthcare providers, see how IronLoop AI automation is transforming operations and driving measurable growth."
        badge="PROVEN RESULTS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Success Stories" },
        ]}
      />
      <SuccessStoriesClient />
      <Footer />
    </>
  );
}
