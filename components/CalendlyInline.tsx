"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

export default function CalendlyInline() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.getElementById("calendly-inline-css")) {
      const link = document.createElement("link");
      link.id = "calendly-inline-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  return (
    <div className="w-full my-8 relative min-h-[700px] bg-[#0b0d10] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      <link rel="preconnect" href="https://calendly.com" />
      <link rel="preconnect" href="https://assets.calendly.com" />

      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0d10] z-10 space-y-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#a3e635] border-t-transparent animate-spin" />
          <p className="font-mono text-sm text-white/50">Loading Calendar Schedule...</p>
        </div>
      )}

      <div
        className="calendly-inline-widget w-full h-[700px]"
        data-url="https://calendly.com/ironlooplabs/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0d10&text_color=ffffff&primary_color=c5e033"
        style={{ minWidth: "320px", height: "700px" }}
      />

      <Script
        id="calendly-inline-js"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
}
