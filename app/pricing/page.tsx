import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PricingClient from "@/components/PricingClient";

export const metadata = {
  title: "Pricing | IronLoop AI Plans",
  description: "Transparent, modular pricing for AI automation. Start with the Core Engine and add what you need.",
};

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white min-h-screen">
        <PricingClient />
      </main>
      <Footer />
    </>
  );
}
