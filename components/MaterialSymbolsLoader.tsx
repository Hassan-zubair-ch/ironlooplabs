"use client";

import { useEffect } from "react";

export default function MaterialSymbolsLoader() {
  useEffect(() => {
    if (!document.getElementById("material-symbols-font-css")) {
      const link = document.createElement("link");
      link.id = "material-symbols-font-css";
      link.rel = "stylesheet";
      link.href = "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap";
      link.setAttribute("media", "print");
      link.setAttribute("onload", "this.media='all'");
      document.head.appendChild(link);
    }
  }, []);

  return null;
}
