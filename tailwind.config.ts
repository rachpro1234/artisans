import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-pattern": "url('/home-assets/home-bg.jpg')",
        "service-pattern": "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
