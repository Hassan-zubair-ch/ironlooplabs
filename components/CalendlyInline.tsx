"use client";

import { useEffect } from "react";

export default function CalendlyInline() {
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
      <iframe
        src="https://calendly.com/ironlooplabs/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0d10&text_color=ffffff&primary_color=c5e033"
        width="100%"
        height="700px"
        title="Select a Date & Time - Calendly"
        className="w-full h-[700px] border-0 rounded-2xl"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
