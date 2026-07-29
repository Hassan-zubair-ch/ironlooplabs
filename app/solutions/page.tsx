import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SolutionsListClient from "@/components/SolutionsListClient";
import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Call Answering, Follow-Up & Lead Recovery for Home Services — IronLoop Labs",
  description:
    "Every tool IronLoop Labs offers to stop missed calls and dead leads from costing you jobs — speed-to-lead, missed-call text-back, 24/7 answering, and dead lead recovery.",
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
