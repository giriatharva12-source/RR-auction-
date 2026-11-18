import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rr: {
          pink: {
            DEFAULT: "#E91E8C",
            hover: "#D8157D",
            light: "#FDF2F8",
            subtle: "#FCE7F3",
            dark: "#BE185D",
          },
          navy: {
            DEFAULT: "#172B55",
            dark: "#0F1C38",
            deep: "#0B152B",
            light: "#1F3A73",
            card: "#1C3364",
            border: "#284482",
          },
          gold: {
            DEFAULT: "#E5B94B",
            hover: "#D6A93A",
            light: "#FEF9E7",
            dark: "#B8861E",
          },
          ice: {
            DEFAULT: "#DDE5F2",
            light: "#F4F7FB",
            dark: "#C3D1E6",
          },
          midnight: "#111827",
        },
      },
      boxShadow: {
        'rr-sm': '0 1px 3px rgba(23, 43, 85, 0.08)',
        'rr-md': '0 4px 12px rgba(23, 43, 85, 0.08), 0 1px 3px rgba(23, 43, 85, 0.04)',
        'rr-lg': '0 10px 25px -3px rgba(23, 43, 85, 0.1), 0 4px 6px -2px rgba(23, 43, 85, 0.05)',
        'rr-pink': '0 4px 14px 0 rgba(233, 30, 140, 0.35)',
        'rr-gold': '0 4px 14px 0 rgba(229, 185, 75, 0.35)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
