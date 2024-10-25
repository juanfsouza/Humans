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
        primary: '#3AB0FF', // Exemplo de cor primária
        text_primary: '#349ee5',
        secondary: '#4F4F4F', // Exemplo de cor secundária
        lightGray: '#F8F9FA',
      },
    },
  },
  plugins: [],
};
export default config;
