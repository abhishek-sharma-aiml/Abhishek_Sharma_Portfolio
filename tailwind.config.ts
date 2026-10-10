import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        portfolio: {
          primary: "#222222",
          secondary: "#7B7B7B",
          tertiary: "#F8F8F8",
          white: "#FFFFFF",
          border: "#E5E5E5",
          accent: "#10B981",
        },
        // shadcn/ui CSS variable-based colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        muted: {
          foreground: "hsl(var(--muted-foreground))",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        card: "0 4px 20px -2px rgba(34, 34, 34, 0.05)",
        "card-hover": "0 12px 30px -4px rgba(34, 34, 34, 0.1)",
        pill: "0 2px 10px rgba(0, 0, 0, 0.04)",
      },
      backgroundOpacity: {
        4: "0.04",
      },
    },
  },
  plugins: [],
};

export default config;
