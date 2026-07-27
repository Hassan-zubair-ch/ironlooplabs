import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CompareClient from "@/components/CompareClient";

export const metadata = {
  title: "Compare IronLoop AI | IronLoop AI vs. Alternatives",
  description: "See why trade, home service, and enterprise companies choose IronLoop AI over traditional call centers and generic chatbots.",
};

export default function ComparePage() {
  return (
    <>
      <Nav />
      <main className="bg-[#050505] text-white min-h-screen">
        <CompareClient />
      </main>
      <Footer />
    </>
  );
}
