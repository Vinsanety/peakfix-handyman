import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coal: "#0C4A6E",
        ash: "#075985",
        concrete: "#355A78",
        ivory: "#F7FBFF",
        paper: "#D7EEF9",
        rust: "#B44E0C",
        rustdark: "#8A3C0A",
        rusthover: "#D96B12",
        rustlight: "#FBBF24",
        steel: "#6B8498",
        mist: "#D4E6F0",
        success: "#0F8A4B",
        danger: "#C23030"
      }
    }
  },
  plugins: []
};

export default config;
