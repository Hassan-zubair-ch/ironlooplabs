import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsListClient from "@/components/SolutionsListClient";
import Dashboard from "@/components/Dashboard";

export const metadata = {
  title: "AI Automation Solutions | IronLoop Labs",
  description: "Explore IronLoop AI's full revenue automation platform — inbound voice, outbound campaigns, reactivation AI, and direct CRM booking.",
};

export default function SolutionsPage() {
  return (
    <>
      <Nav />
      <SolutionsListClient />
      <Dashboard />
      <Footer />
    </>
  );
}
