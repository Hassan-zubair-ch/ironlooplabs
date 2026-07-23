"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <main className="bg-[#050608] text-white py-16 lg:py-24 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#a3e635]/[0.03] blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#38bdf8]/[0.02] blur-[100px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column - Contact Info & Value Props */}
          <div className="lg:col-span-5 space-y-10 mt-8">
            <div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white">Connect with our Architecture Team</h2>
              <p className="font-body text-white/50 text-lg leading-relaxed">
                Whether you're looking to automate a single clinic or an entire franchise operation, our engineers are ready to scope your deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="p-6 rounded-2xl bg-[#0b0d10] border border-white/[0.05] hover:border-[#a3e635]/20 transition-all">
                 <div className="w-10 h-10 rounded-full bg-[#a3e635]/10 flex items-center justify-center text-[#a3e635] mb-4">
                   <span className="material-symbols-outlined text-lg">mail</span>
                 </div>
                 <h4 className="font-display font-bold text-white mb-1">Email Us</h4>
                 <p className="text-sm text-white/50 mb-2">For general inquiries</p>
                 <a href="mailto:hello@ironlooplabs.com" className="text-sm font-mono text-[#a3e635] hover:underline">hello@ironlooplabs.com</a>
               </div>
               <div className="p-6 rounded-2xl bg-[#0b0d10] border border-white/[0.05] hover:border-[#38bdf8]/20 transition-all">
                 <div className="w-10 h-10 rounded-full bg-[#38bdf8]/10 flex items-center justify-center text-[#38bdf8] mb-4">
                   <span className="material-symbols-outlined text-lg">headset_mic</span>
                 </div>
                 <h4 className="font-display font-bold text-white mb-1">Support</h4>
                 <p className="text-sm text-white/50 mb-2">Current clients only</p>
                 <a href="#" className="text-sm font-mono text-[#38bdf8] hover:underline">Support Portal</a>
               </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold border-b border-white/[0.05] pb-3">Enterprise Guarantees</h3>
              {[
                { icon: "schedule", title: "2-Hour Response SLA", desc: "Guaranteed architectural review response time." },
                { icon: "rocket_launch", title: "Live in 48 Hours", desc: "Rapid deployment standard for all AI agents." },
                { icon: "verified_user", title: "HIPAA & SOC2", desc: "Military-grade encryption and compliance." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.05] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-white/70 text-[15px]">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] text-white font-bold">{item.title}</h3>
                    <p className="font-body text-sm text-white/50 mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Form */}
          <div className="lg:col-span-7 relative">
             <div className="absolute inset-0 bg-gradient-to-br from-[#111318] to-[#090a0f] rounded-[32px] border border-white/[0.06] shadow-2xl" />
             <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#a3e635]/30 to-transparent opacity-50" />
             
             <div className="relative p-8 lg:p-12">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20 space-y-6"
                >
                  <div className="w-24 h-24 rounded-full bg-[#a3e635]/10 flex items-center justify-center mx-auto border border-[#a3e635]/20 shadow-[0_0_50px_rgba(163,230,53,0.15)]">
                    <span className="material-symbols-outlined text-5xl text-[#a3e635]">check_circle</span>
                  </div>
                  <div>
                    <h3 className="font-display text-3xl text-white font-bold mb-2">Request Received</h3>
                    <p className="font-body text-white/50 text-lg max-w-sm mx-auto">
                      Our automation architect will contact you shortly to review your workflow.
                    </p>
                  </div>
                  <Link href="/" className="inline-flex items-center gap-2 text-[#a3e635] font-mono text-sm hover:underline mt-4 tracking-wider uppercase font-bold">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Return to Home
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-display text-2xl text-white font-bold mb-1">Book a Strategy Call</h3>
                    <p className="font-body text-sm text-white/50">30-minute custom automation walkthrough for your business</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">First Name *</label>
                      <input required type="text" className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Last Name *</label>
                      <input required type="text" className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Business Name *</label>
                    <input required type="text" placeholder="e.g. Metro Health Partners" className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Work Email *</label>
                      <input required type="email" placeholder="you@company.com" className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Phone *</label>
                      <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Industry *</label>
                    <div className="relative">
                      <select required className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all appearance-none cursor-pointer">
                        <option value="">Select your industry...</option>
                        <option>Hospitals &amp; Healthcare</option>
                        <option>Medical Clinics</option>
                        <option>Dental Practices</option>
                        <option>HVAC Services</option>
                        <option>Plumbing &amp; Trades</option>
                        <option>Pest &amp; Lawn Care</option>
                        <option>Home Repair Services</option>
                        <option>Commercial Facility Ops</option>
                        <option>Other</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block font-mono text-[10px] text-white/40 uppercase tracking-widest font-bold">Project Scope / Workflow to Automate</label>
                    <textarea rows={4} placeholder="Briefly describe your call volume or what processes you want to automate..." className="w-full bg-[#050608] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:ring-1 focus:ring-[#a3e635]/50 focus:outline-none transition-all resize-none custom-scrollbar" />
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-[#a3e635] text-[#050608] font-bold font-display text-sm uppercase tracking-wide py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(163,230,53,0.15)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="material-symbols-outlined animate-spin text-lg">sync</span>
                    ) : (
                      <>
                        Request Architectural Review
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>

                  <p className="font-mono text-[10px] text-white/30 text-center pt-2 tracking-widest uppercase flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[14px]">lock</span>
                    Your data is secured with AES-256 encryption
                  </p>
                </form>
              )}
             </div>
          </div>

        </div>
      </div>
      
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #050608;
          border-radius: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
        }
      `}</style>
    </main>
  );
}
