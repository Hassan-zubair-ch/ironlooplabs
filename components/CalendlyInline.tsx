"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyInline() {
  return (
    <div className="w-full my-8">
      <InlineWidget 
        url="https://calendly.com/ironlooplabs/new-meeting"
        pageSettings={{
          primaryColor: 'c5e033',
        }}
        styles={{ height: '700px', width: '100%', minWidth: '320px' }}
      />
    </div>
  );
}
