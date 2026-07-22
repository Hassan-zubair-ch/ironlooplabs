"use client";

import { useEffect, useState } from "react";
import { PopupButton } from "react-calendly";

export default function CalendlyWidget() {
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setRootElement(document.body);
    }
  }, []);

  if (!rootElement) return null;

  return (
    <div className="fixed top-1/2 right-0 -translate-y-1/2 z-50">
      <PopupButton
        url="https://calendly.com/ironlooplabs/new-meeting"
        rootElement={rootElement}
        text="Schedule time with me"
        className="bg-primary text-on-primary py-6 px-3 rounded-r-xl font-bold shadow-2xl hover:bg-primary-fixed transition-colors text-sm sm:text-base border-t border-b border-r border-on-primary/10 [writing-mode:vertical-rl] rotate-180 tracking-wide"
        pageSettings={{
          primaryColor: 'c5e033',
        }}
      />
    </div>
  );
}
