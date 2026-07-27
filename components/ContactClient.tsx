"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const PopupButton = dynamic(() => import("react-calendly").then(mod => mod.PopupButton), { ssr: false });

export default function ContactClient() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    email: "",
    phone: "",
    industry: "",
    scope: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
        body: JSON.stringify(formData),
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
    <main className="bg-[#050505] text-white py-16 sm:py-24 relative overflow-hidden min-h-screen">
      {/* Background Radial Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#C5E033]/[0.05] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs font-mono font-bold text-[#C5E033] uppercase tracking-widest"
          >
            <span>⚡ Schedule Your 1-on-1 AI Demo</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
          >
            Talk to Our AI{" "}
            <span className="bg-gradient-to-r from-white via-white/80 to-[#C5E033] bg-clip-text text-transparent">
              Automation Architects.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed"
          >
            Whether you&apos;re looking to automate inbound lead phone calls, reactivate a dead CRM database, or deploy a 24/7 receptionist, our engineers are ready to build your system.
          </motion.p>
        </div>

        {/* 2-Column Balanced Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Contact Info & Guarantees */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#C5E033]/40 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-[#C5E033]/10 flex items-center justify-center text-[#C5E033] mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Direct Engineering Support</h3>
                <p className="text-xs text-white/50 mb-3">Speak directly with our technical team</p>
                <a
                  href="mailto:hassan@ironlooplabs.com"
                  className="text-sm font-mono font-bold text-[#C5E033] hover:underline"
                >
                  hassan@ironlooplabs.com
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-[#C5E033]/40 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-[#C5E033]/10 flex items-center justify-center text-[#C5E033] mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-2xl">calendar_today</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Instant Calendar Booking</h3>
                <p className="text-xs text-white/50 mb-3">Pick a 30-minute slot on our calendar</p>
                {rootElement && (
                  <PopupButton
                    url="https://calendly.com/ironlooplabs/new-meeting"
                    rootElement={rootElement}
                    text="Open Calendar Booking →"
                    className="text-sm font-mono font-bold text-[#C5E033] hover:underline cursor-pointer text-left block"
                    pageSettings={{ primaryColor: 'c5e033' }}
                  />
                )}
              </div>
            </div>

            {/* Enterprise Guarantees List */}
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-white/40 border-b border-white/10 pb-3">
                IRONLOOP ENTERPRISE GUARANTEES
              </h4>

              {[
                {
                  icon: "bolt",
                  title: "Instant 2-Hour SLA",
                  desc: "Guaranteed architectural review response within 2 business hours.",
                },
                {
                  icon: "rocket_launch",
                  title: "Live in 48 Hours",
                  desc: "Rapid deployment protocol to get your first AI voice rep answering calls.",
                },
                {
                  icon: "verified_user",
                  title: "Military-Grade Security",
                  desc: "HIPAA & SOC2 compliant encrypted infrastructure for lead data.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#C5E033]">
                    <span className="material-symbols-outlined text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h5 className="text-sm font-bold text-white">{item.title}</h5>
                    <p className="text-xs text-white/50 leading-relaxed mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Premium Sleek Form */}
          <div className="lg:col-span-7 relative">
            <div className="relative p-6 sm:p-10 rounded-3xl bg-[#0c0e14] border border-white/15 shadow-[0_0_80px_rgba(0,0,0,0.8)]">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#C5E033] to-transparent rounded-t-3xl opacity-70" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[#C5E033]/20 text-[#C5E033] flex items-center justify-center mx-auto border border-[#C5E033]/40 shadow-[0_0_40px_rgba(197,224,51,0.3)]">
                    <span className="material-symbols-outlined text-4xl font-black">check_circle</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-white">Strategy Request Received!</h3>
                    <p className="text-sm text-white/60 max-w-md mx-auto leading-relaxed">
                      Our Lead Automation Architect will review your requirements and reach out within 2 hours with a custom system demo.
                    </p>
                  </div>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#C5E033] text-[#050608] font-mono font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors"
                  >
                    ← Return to Home Page
                  </Link>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-extrabold text-white mb-1">Book a Strategy Session</h3>
                    <p className="text-xs text-white/50">
                      Fill out the form below to receive a custom AI architectural proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                        First Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="firstName"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                        Last Name *
                      </label>
                      <input
                        required
                        type="text"
                        name="lastName"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                      Company / Business Name *
                    </label>
                    <input
                      required
                      type="text"
                      name="businessName"
                      placeholder="Apex Roofing & Solar"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                        Work Email *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                        Phone Number *
                      </label>
                      <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                      Industry *
                    </label>
                    <div className="relative">
                      <select
                        required
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-[#0c0e14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:border-[#C5E033] focus:outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select your industry...</option>
                        <option value="Roofing Services">Roofing Services</option>
                        <option value="Solar Installations">Solar Installations</option>
                        <option value="Healthcare & Medical">Healthcare &amp; Medical Clinics</option>
                        <option value="HVAC & Plumbing">HVAC &amp; Plumbing</option>
                        <option value="Home Repair Services">Home Repair Services</option>
                        <option value="Insurance & Financial">Insurance &amp; Financial</option>
                        <option value="Other">Other Home Service / Business</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono font-bold uppercase tracking-wider text-white/60">
                      Project Scope / Workflow to Automate
                    </label>
                    <textarea
                      rows={3}
                      name="scope"
                      placeholder="e.g. We have 2,000 old CRM leads we want to reactivate and schedule inspection appointments automatically..."
                      value={formData.scope}
                      onChange={handleChange}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#C5E033] focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono">
                      {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-[#C5E033] text-[#050608] font-extrabold text-sm uppercase tracking-wider py-4 rounded-2xl hover:bg-white active:scale-[0.98] transition-all shadow-[0_0_30px_rgba(197,224,51,0.25)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <span className="material-symbols-outlined animate-spin text-xl">sync</span>
                    ) : (
                      <>
                        Request Architectural Strategy Demo
                        <span className="material-symbols-outlined text-lg">arrow_forward</span>
                      </>
                    )}
                  </button>

                  <p className="text-[10px] font-mono text-white/30 text-center pt-1 tracking-wider uppercase flex items-center justify-center gap-1.5">
                    <span className="material-symbols-outlined text-[13px]">lock</span>
                    Your data is 100% encrypted &amp; never shared
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
