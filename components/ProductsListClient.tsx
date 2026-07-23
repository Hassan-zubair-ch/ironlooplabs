"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageBanner from "./PageBanner";
import { productsData } from "@/lib/productsData";

export default function ProductsListClient() {
  return (
    <main className="min-h-screen bg-[#050608]">
      <PageBanner 
        title="Products & Ecosystem"
        subtitle="Explore our modular, enterprise-grade AI automation suite built specifically for service industries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products" }]}
      />

      <section className="py-20 lg:py-32 max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productsData.map((prod, i) => (
            <motion.div
              key={prod.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative flex flex-col h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#111318] to-[#090a0f] rounded-3xl border border-white/[0.06] shadow-2xl transition-all duration-500 group-hover:border-[#a3e635]/30 group-hover:shadow-[0_0_40px_rgba(163,230,53,0.1)]" />
              
              <div className="relative p-8 lg:p-10 flex flex-col flex-grow">
                <div className="w-14 h-14 rounded-2xl bg-[#a3e635]/10 border border-[#a3e635]/20 flex items-center justify-center text-[#a3e635] mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                  <span className="material-symbols-outlined text-2xl">{prod.heroIcon}</span>
                </div>
                
                <h3 className="font-display text-2xl text-white font-bold mb-3">{prod.name}</h3>
                <p className="font-body text-white/50 leading-relaxed mb-8 flex-grow">{prod.shortDesc}</p>
                
                <div className="space-y-3 mb-10">
                  {prod.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#a3e635] text-lg shrink-0 mt-0.5">check</span>
                      <span className="font-body text-sm text-white/70">{feat.title}</span>
                    </div>
                  ))}
                </div>

                <Link 
                  href={`/products/${prod.slug}`}
                  className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white font-display text-sm font-bold uppercase tracking-wide hover:bg-[#a3e635] hover:text-[#050608] hover:border-[#a3e635] transition-all duration-300"
                >
                  Explore Capabilities
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
