"use client";

import { useEffect } from "react";

export default function GoogleAnalytics({ gaId }: { gaId?: string }) {
  const measurementId = gaId || process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-VP9HC133R6";

  useEffect(() => {
    const loadGA = () => {
      if (document.getElementById("ga-gtag-script")) return;
      
      const script = document.createElement("script");
      script.id = "ga-gtag-script";
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      script.async = true;
      document.head.appendChild(script);

      (window as any).dataLayer = (window as any).dataLayer || [];
      function gtag(...args: any[]) {
        (window as any).dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", measurementId, { page_path: window.location.pathname });
    };

    const handleInteraction = () => {
      loadGA();
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("scroll", handleInteraction, { passive: true });
    window.addEventListener("mousemove", handleInteraction, { passive: true });
    window.addEventListener("touchstart", handleInteraction, { passive: true });

    const timer = setTimeout(loadGA, 5000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInteraction);
      window.removeEventListener("mousemove", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [measurementId]);

  return null;
}
