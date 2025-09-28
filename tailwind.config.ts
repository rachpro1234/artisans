import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        "home-pattern": "url('/home-assets/home-bg.jpg')",
        "service-pattern": "var(--foreground)",
        'gradient-bg': 'linear-gradient(135deg, #0c1445 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #0a1a2a 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #1a202c 0%, #2d3748 25%, #1a365d 50%, #0d1b2a 75%, #0a0e1a 100%)',
      },
       keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
       animation: {
        fadeInDown: "fadeInDown 0.5s ease-out",
      },
    },
  },
  plugins: [],
} satisfies Config;
