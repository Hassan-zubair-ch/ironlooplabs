import type { Metadata } from "next";
import "./globals.css";
import CalendlyWidget from "@/components/CalendlyWidget";

export const metadata: Metadata = {
  title: "IronLoop Labs | AI & Workflow Automation for Healthcare, HVAC & High-Growth Industries",
  description:
    "IronLoop Labs provides 24/7 AI receptionists and automated dispatch intake for hospitals, medical clinics, HVAC, plumbing, and high-demand service industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Open+Sans:wght@400;500;600&family=JetBrains+Mono:wght@500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body overflow-x-hidden">
        {children}
        <CalendlyWidget />
      </body>
    </html>
  );
}
