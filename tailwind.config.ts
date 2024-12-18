import type { Config } from "tailwindcss";
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      spaceMono: ["var(--font-space-mono)", ...fontFamily.sans],
      workSans: ["var(--font-work-sans)", ...fontFamily.sans],
      mulish: ["var(--font-mulish)", ...fontFamily.sans],
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2B2B2B",
        secondary: "#A259FF",
      },
    },
  },
  plugins: [],
};
export default config;
