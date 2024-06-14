import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#0054C2",
        secondary: "#FFE500",
        input: "rgba(217, 217, 217, 0.3)",
        tst1: "rgba(200, 224, 255, 0.3)",
        tst2: "rgba(128, 255, 125, 0.3)",
        tst3: "rgba(255, 247, 177, 0.4)"
      },
      boxShadow: {
        custom: "0 0 5px rgba(0, 0, 0, 0.1)"
      }
    },
  },
  plugins: [],
};
export default config;
