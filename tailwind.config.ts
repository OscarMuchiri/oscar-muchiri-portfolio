import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#05070b",
          900: "#0a0f16",
          850: "#0f1620",
          800: "#151d29"
        },
        accent: {
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06b6d4"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(34, 211, 238, 0.10)"
      }
    }
  },
  plugins: []
};

export default config;
