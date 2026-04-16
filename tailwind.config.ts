import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0b1220",
          deep: "#060a14",
          muted: "#141c2e",
          light: "#1b2540",
        },
        burgundy: {
          DEFAULT: "#6b1f2a",
          deep: "#4a141c",
          light: "#8b2a38",
          bright: "#a33544",
        },
        gold: {
          DEFAULT: "#c9a24a",
          pale: "#e3c97f",
          deep: "#8a6e2a",
          bright: "#e6b95e",
        },
        parchment: {
          DEFAULT: "#e8dcc4",
          dim: "#c9bda5",
        },
      },
      fontFamily: {
        serif: ["Georgia", "Cormorant Garamond", "Times New Roman", "serif"],
        display: ["Cinzel", "Trajan Pro", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "parchment-texture":
          "radial-gradient(circle at 20% 20%, rgba(201,162,74,0.08), transparent 50%), radial-gradient(circle at 80% 60%, rgba(107,31,42,0.12), transparent 50%)",
        "gold-sheen":
          "linear-gradient(135deg, #c9a24a 0%, #e6b95e 45%, #8a6e2a 100%)",
      },
      boxShadow: {
        "inset-gold": "inset 0 0 0 1px rgba(201,162,74,0.35)",
        "regal": "0 10px 40px -10px rgba(0,0,0,0.8), 0 0 0 1px rgba(201,162,74,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
