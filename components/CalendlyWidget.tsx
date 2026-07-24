"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyWidget() {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ironlooplabs/new-meeting?background_color=0b0d10&text_color=ffffff&primary_color=c5e033",
      });
    } else {
      window.open("https://calendly.com/ironlooplabs/new-meeting", "_blank");
    }
  };

  const handleMouseEnter = () => {
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => setScriptLoaded(true);
      document.body.appendChild(script);
    }
  };

  return (
    <>
      <Script
        id="calendly-widget-js-onload"
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
        <button
          onClick={openCalendly}
          onMouseEnter={handleMouseEnter}
          onTouchStart={handleMouseEnter}
          type="button"
          aria-label="Schedule time with me"
          className="bg-primary text-on-primary py-6 px-3 rounded-r-xl font-bold shadow-2xl hover:bg-primary-fixed transition-colors text-sm sm:text-base border-t border-b border-r border-on-primary/10 [writing-mode:vertical-rl] rotate-180 tracking-wide cursor-pointer flex items-center gap-2"
        >
          <span>Schedule time with me</span>
        </button>
      </div>
    </>
  );
}
