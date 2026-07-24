"use client";

import { useEffect } from "react";

export default function CalendlyPreloader() {
  useEffect(() => {
    // Preload Calendly CSS globally in background after main thread is free
    const loadAssets = () => {
      if (!document.getElementById("calendly-global-css")) {
        const link = document.createElement("link");
        link.id = "calendly-global-css";
        link.rel = "stylesheet";
        link.href = "https://assets.calendly.com/assets/external/widget.css";
        document.head.appendChild(link);
      }

      if (!document.getElementById("calendly-global-js")) {
        const script = document.createElement("script");
        script.id = "calendly-global-js";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.body.appendChild(script);
      }
    };

    if ("requestIdleCallback" in window) {
      window.requestIdleCallback(loadAssets);
    } else {
      setTimeout(loadAssets, 1500);
    }
  }, []);

  return null;
}
