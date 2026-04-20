import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#1F2937",
        slate: "#374151",
        offwhite: "#F9FAFB",
        accent: "#FBBF24",
        brand: "#0ea5e9",
        "brand-dark": "#0284c7",
        "brand-light": "#e0f2fe",
        "brand-muted": "#f0f9ff",
        "warm-muted": "#fffbeb"
      }
    }
  },
  plugins: []
};

export default config;
