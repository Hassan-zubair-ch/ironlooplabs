import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import IndustriesListClient from "@/components/IndustriesListClient";

export const metadata = {
  title: "Industries We Serve | IronLoop Labs",
  description: "Explore AI automation solutions for healthcare, HVAC, plumbing, dental, and more high-growth industries.",
};

export default function IndustriesPage() {
  return (
    <>
      <Nav />
      <PageBanner
        title="Industries We Automate"
        subtitle="Purpose-built AI receptionist and workflow automation for healthcare, home services, and commercial operations. Each industry has a dedicated automation pipeline."
        badge="8 SPECIALIZED VERTICALS"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries" },
        ]}
      />
      <IndustriesListClient />
      <Footer />
    </>
  );
}
