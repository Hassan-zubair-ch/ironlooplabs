import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SuccessStoriesClient from "@/components/SuccessStoriesClient";

export const metadata = {
  title: "Case Studies | IronLoop AI",
  description: "See how roofing companies, solar installers, healthcare providers, and home service businesses use IronLoop AI to recover lost leads and book more jobs.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <Nav />
      <SuccessStoriesClient />
      <Footer />
    </>
  );
}
