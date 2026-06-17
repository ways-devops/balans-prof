import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        brand: {
          50: "#F8FAFC",
          100: "#EEF2F7",
          500: "#D4A24C",
          700: "#A87622",
          900: "#0F172A",
        },
        gold: "#D4A24C",
      },
      borderRadius: {
        xl: "16px",
        "2xl": "20px",
        "3xl": "24px",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(15, 23, 42, 0.10)",
        card: "0 14px 40px rgba(15, 23, 42, 0.07)",
      },
      keyframes: {
        "dialog-overlay-show": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "dialog-content-show": {
          from: { opacity: "0", transform: "translate(-50%, -48%) scale(0.96)" },
          to: { opacity: "1", transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        "dialog-overlay-show": "dialog-overlay-show 180ms ease-out",
        "dialog-content-show": "dialog-content-show 220ms cubic-bezier(0.16, 1, 0.3, 1)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
