"use client";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export default function CalendlyWidget() {
  const loadCalendly = () => {
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        if (window.Calendly) {
          window.Calendly.initPopupWidget({
            url: "https://calendly.com/ironlooplabs/new-meeting?background_color=0b0d10&text_color=ffffff&primary_color=c5e033",
          });
        }
      };
      document.body.appendChild(script);
    } else if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/ironlooplabs/new-meeting?background_color=0b0d10&text_color=ffffff&primary_color=c5e033",
      });
    }
  };

  const preloadCalendly = () => {
    if (!document.getElementById("calendly-widget-js")) {
      const script = document.createElement("script");
      script.id = "calendly-widget-js";
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }
    if (!document.getElementById("calendly-widget-css")) {
      const link = document.createElement("link");
      link.id = "calendly-widget-css";
      link.rel = "stylesheet";
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      document.head.appendChild(link);
    }
  };

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <button
        onClick={loadCalendly}
        onMouseEnter={preloadCalendly}
        onTouchStart={preloadCalendly}
        type="button"
        aria-label="Schedule time with me"
        className="bg-primary text-on-primary py-6 px-3 rounded-r-xl font-bold shadow-2xl hover:bg-primary-fixed transition-colors text-sm sm:text-base border-t border-b border-r border-on-primary/10 [writing-mode:vertical-rl] rotate-180 tracking-wide cursor-pointer flex items-center gap-2"
      >
        <span>Schedule time with me</span>
      </button>
    </div>
  );
}
