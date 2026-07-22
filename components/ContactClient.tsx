"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-[#0b0d10] bg-dark-grid text-white py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute bottom-20 left-1/4 w-[400px] h-[300px] bg-[#38bdf8]/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-container-max mx-auto px-6 lg:px-margin-desktop relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-5">
              {[
                { icon: "schedule", title: "2-Hour Response Time", desc: "We respond to all inquiries within 2 hours during business hours." },
                { icon: "rocket_launch", title: "Live in 48 Hours", desc: "Most AI automation systems go live within 48 hours of onboarding." },
                { icon: "verified_user", title: "HIPAA & SOC2 Compliant", desc: "Enterprise-grade encrypted infrastructure from day one." },
                { icon: "support_agent", title: "Dedicated Success Manager", desc: "A real human architect assigned to your account for ongoing optimization." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 bg-[#111318] border border-white/[0.06] rounded-xl p-5 hover:border-[#a3e635]/20 transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#a3e635]/15 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[#a3e635] text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-display text-[15px] text-white font-bold">{item.title}</h3>
                    <p className="font-body text-sm text-on-surface-variant mt-0.5 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social */}
            <div className="pt-4 border-t border-white/[0.06]">
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-wider mb-3 font-bold">Follow Us</p>
              <div className="flex gap-3">
                <a href="https://web.facebook.com/profile.php?id=61592446882012" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-on-surface-variant hover:text-[#a3e635] hover:border-[#a3e635]/30 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/ironlooplabs/" target="_blank" rel="noopener noreferrer" className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-on-surface-variant hover:text-[#a3e635] hover:border-[#a3e635]/30 transition-all">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#111318] border border-white/[0.06] rounded-3xl p-8 lg:p-10 relative overflow-hidden">
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#a3e635]/[0.05] rounded-full blur-[80px] pointer-events-none" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-5 relative z-10"
                >
                  <div className="w-20 h-20 rounded-2xl bg-[#a3e635] text-[#0b0d10] flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(163,230,53,0.3)]">
                    <span className="material-symbols-outlined text-4xl">check</span>
                  </div>
                  <h3 className="font-display text-3xl text-white font-bold">Message Sent!</h3>
                  <p className="font-body text-on-surface-variant max-w-sm mx-auto">
                    Our automation architect will contact you within 2 hours to discuss your workflow requirements.
                  </p>
                  <Link href="/" className="inline-flex items-center gap-2 text-[#a3e635] font-mono text-sm hover:underline mt-4">
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Back to Home
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div>
                    <h2 className="font-display text-2xl text-white font-bold">Book a Free Strategy Call</h2>
                    <p className="font-body text-sm text-on-surface-variant mt-1">30-minute custom automation walkthrough for your business</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">First Name *</label>
                      <input required type="text" placeholder="John" className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Last Name *</label>
                      <input required type="text" placeholder="Smith" className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Business Name *</label>
                    <input required type="text" placeholder="e.g. Metro Health Partners" className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Email *</label>
                      <input required type="email" placeholder="you@company.com" className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Phone *</label>
                      <input required type="tel" placeholder="(555) 000-0000" className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all" />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">Industry *</label>
                    <select required className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm focus:border-[#a3e635]/50 focus:outline-none transition-all appearance-none">
                      <option value="">Select your industry</option>
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
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mb-1.5">How can we help?</label>
                    <textarea rows={4} placeholder="Tell us about your current workflow challenges, call volume, and what you'd like to automate..." className="w-full bg-[#0b0d10] border border-white/[0.08] rounded-xl px-4 py-3.5 text-white text-sm placeholder:text-white/20 focus:border-[#a3e635]/50 focus:outline-none transition-all resize-none" />
                  </div>

                  <button type="submit" className="w-full bg-[#a3e635] text-[#0b0d10] font-bold font-display text-base py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(163,230,53,0.2)] flex items-center justify-center gap-2">
                    Schedule Free Strategy Call
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
                  </button>

                  <p className="font-mono text-[10px] text-on-surface-variant text-center pt-1 tracking-wide">
                    NO COMMITMENT • FREE CONSULTATION • ENTERPRISE READY
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
