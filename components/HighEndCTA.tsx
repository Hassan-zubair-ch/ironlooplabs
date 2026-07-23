"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  industryTitle?: string;
}

export default function HighEndCTA({ industryTitle }: Props) {
  const [formData, setFormData] = useState({ firstName: "", email: "", phone: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          industry: industryTitle || "General",
          scope: "Submitted via Quick CTA Form"
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const errorData = await res.json();
        setErrorMsg(errorData.error || "Failed to submit request.");
      }
    } catch (error) {
      console.error(error);
      setErrorMsg("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#a3e635] relative overflow-hidden py-24 rounded-3xl">
      {/* Subtle Dot Grid pattern (black dots at 10% opacity) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10" 
        style={{
          backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px"
        }} 
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-[54px] font-black text-[#0b0d10] uppercase tracking-tight mb-5 max-w-4xl mx-auto">
            {industryTitle ? `READY TO GROW YOUR ${industryTitle.toUpperCase()} BUSINESS?` : "READY TO GROW YOUR BUSINESS WITH AI?"}
          </h2>
          <p className="font-body text-lg sm:text-xl text-[#0b0d10]/80 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            Schedule a consultation and discover how IronLoop AI can help you generate more leads, automate workflows, and increase revenue.
          </p>

          <div className="max-w-3xl mx-auto bg-white/20 p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-black/5 shadow-xl">
            {submitted ? (
              <div className="text-center py-6">
                 <div className="w-16 h-16 rounded-full bg-[#0b0d10] flex items-center justify-center mx-auto mb-4 text-[#a3e635]">
                   <span className="material-symbols-outlined text-3xl">check_circle</span>
                 </div>
                 <h3 className="font-display text-2xl text-[#0b0d10] font-bold mb-2">Request Received</h3>
                 <p className="font-body text-[#0b0d10]/80">Our automation architect will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#0b0d10] text-sm focus:border-black/30 focus:ring-1 focus:ring-black/30 focus:outline-none transition-all placeholder:text-black/40" />
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Work Email" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#0b0d10] text-sm focus:border-black/30 focus:ring-1 focus:ring-black/30 focus:outline-none transition-all placeholder:text-black/40" />
                  <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="w-full bg-white border border-black/10 rounded-xl px-4 py-3.5 text-[#0b0d10] text-sm focus:border-black/30 focus:ring-1 focus:ring-black/30 focus:outline-none transition-all placeholder:text-black/40" />
                </div>
                {errorMsg && (
                  <div className="text-red-700 bg-red-100/50 p-3 rounded-lg text-sm font-medium border border-red-200">{errorMsg}</div>
                )}
                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#0b0d10] text-white px-8 py-4 rounded-xl font-display font-extrabold text-[15px] tracking-wide uppercase hover:bg-[#1a1d24] transition-colors shadow-xl shadow-black/10 disabled:opacity-70 mt-2"
                >
                  {loading ? (
                    <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                  ) : (
                    <>
                      LET&apos;S TALK GROWTH
                      <span className="material-symbols-outlined text-xl">arrow_forward</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
