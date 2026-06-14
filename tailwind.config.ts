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
          50: "#F3F7FC",
          100: "#E8EEF7",
          500: "#315C9E",
          700: "#183B75",
          900: "#0F2B5B",
        },
      },
      borderRadius: {
        xl: "16px",
        "2xl": "16px",
      },
      boxShadow: {
        soft: "0 18px 48px rgba(15, 43, 91, 0.08)",
        card: "0 12px 36px rgba(15, 43, 91, 0.07)",
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
