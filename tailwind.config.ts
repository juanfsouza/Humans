import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#f0461a',
        text_primary: '#d14521',
        secondary: '#4F4F4F',
        lightGray: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;
