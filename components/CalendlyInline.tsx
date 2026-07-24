"use client";

import { useEffect, useState, useRef } from "react";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyInline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!document.getElementById("calendly-inline-css")) {
      const link = document.createElement("link");
      link.id = "calendly-inline-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }

    const initWidget = () => {
      if (window.Calendly && containerRef.current) {
        containerRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/ironlooplabs/new-meeting?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0b0d10&text_color=ffffff&primary_color=c5e033",
          parentElement: containerRef.current,
        });
        setLoading(false);
      }
    };

    if (window.Calendly) {
      initWidget();
    } else {
      const script = document.createElement("script");
      script.id = "calendly-inline-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = initWidget;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full my-8 relative min-h-[700px] bg-[#0b0d10] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0d10] z-10 space-y-4">
          <div className="w-10 h-10 rounded-full border-2 border-[#a3e635] border-t-transparent animate-spin" />
          <p className="font-mono text-sm text-white/50">Loading Calendar Schedule...</p>
        </div>
      )}

      <div
        ref={containerRef}
        className="w-full h-[700px]"
        style={{ minWidth: "320px", height: "700px" }}
      />
    </div>
  );
}
