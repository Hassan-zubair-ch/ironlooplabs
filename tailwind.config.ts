import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        "background-subtle": "#050505",
        "growth-green": "#C5E033",
        "electric-cyan": "#00F5FF",
        "action-yellow": "#F8E71C",
        "deep-forest": "#0B1C0E",
        "deep-navy": "#0F0F0F",
        primary: "#C5E033",
        "primary-fixed": "#d4ef43",
        "on-primary": "#0F0F0F",
        "on-background": "#ffffff",
        "on-surface": "#ffffff",
        "on-surface-variant": "#a1a1a1",
        "surface-container-lowest": "#050505",
        "surface-container-low": "#121212",
        surface: "#0a0a0a",
        "surface-container": "#1a1a1a",
        "surface-container-high": "#1f1f1f",
        "surface-container-highest": "#242424",
        outline: "#444444",
        "outline-variant": "#333333",
        tertiary: "#8890c9",
        "tertiary-container": "#cbd1ff",
        "on-tertiary-container": "#525980",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
        body: ["'Open Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      fontSize: {
        "headline-lg": ["32px", { lineHeight: "40px", letterSpacing: "-0.01em", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "display-lg": ["48px", { lineHeight: "56px", letterSpacing: "-0.02em", fontWeight: "800" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "16px", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-md": ["24px", { lineHeight: "32px", fontWeight: "600" }],
      },
      maxWidth: {
        "container-max": "1280px",
      },
      spacing: {
        "margin-desktop": "40px",
        "margin-mobile": "16px",
        gutter: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
