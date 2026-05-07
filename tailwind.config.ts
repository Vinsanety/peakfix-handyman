import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        coal: "#1C2821",
        ash: "#2B3A31",
        concrete: "#475A4D",
        ivory: "#F3F1E7",
        paper: "#E5E0CF",
        rust: "#3E5943",
        rustdark: "#2F4634",
        rusthover: "#36503B",
        rustlight: "#B89B52",
        steel: "#7A8678",
        mist: "#CDC7B7",
        success: "#2F6A47",
        danger: "#8D3F2E"
      }
    }
  },
  plugins: []
};

export default config;
