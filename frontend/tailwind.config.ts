import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // Add this so that tailwind behaves properly
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        secondaryBackground: "var(--secondary--background)",
        primaryText: "var(--primary--text)",
        secondaryText: "var(--secondary--text)",
        CTA_Buttons: "var(--CTA-buttons)",
      },
      screens: {
        mid: "630px",
        midLg: "950px",
      },
    },
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
      Manrope: ["Manrope", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
