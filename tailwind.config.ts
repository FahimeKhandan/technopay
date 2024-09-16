import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yekan-faNum-regular": ["yekan-faNum-regular"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "dark-info": "var(--darkInfo)",
        info: "var(--info)",
        "middle-text":"var(middleText)",
      },
    },
  },
  plugins: [],
};
export default config;
