import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ProductsListClient from "@/components/ProductsListClient";

export const metadata = {
  title: "Products & Capabilities | IronLoop Labs",
  description: "Explore our enterprise AI voice agents, automated dispatch systems, and integrations.",
};

export default function ProductsPage() {
  return (
    <>
      <Nav />
      <ProductsListClient />
      <Footer />
    </>
  );
}
