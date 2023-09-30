/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1142px",
    },
    fontFamily: {
      mulish: ["Mulish", "sans-serif"],
      reey: ["reey", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#08111F",
      primary: "#c28f04",
      secondary: "#f0b924",
      gray: {
        DEFAULT: "#7780A1",
        dark: "#1C2331",
      },
    },
    extend: {
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      typography: ({ theme }: any) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray"),
            fontSize: "1.125rem",
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),

    require("@tailwindcss/typography"),
    require("tailwindcss-animated"),
  ],
};
