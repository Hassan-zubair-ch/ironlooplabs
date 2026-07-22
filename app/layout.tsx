import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EchoAI | AI Receptionists for HVAC & Home Service Businesses",
  description:
    "EchoAI answers every HVAC call in seconds, qualifies the job, and books it straight into your dispatch calendar — 24/7, every day of the year.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
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
      </body>
    </html>
  );
}
