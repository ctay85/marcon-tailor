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
        primary: "#00506A",
        secondary: "#8FA2B3",
        tertiary: "#041C2A"
      },
      fontFamily: {
        "GothamBook": "var(--font-GothamBook)",
        "americana-bold": "var(--font-americana-bold)"
      }
    }
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
