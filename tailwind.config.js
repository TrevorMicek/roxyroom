/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C5A059",

        default: "rgb(89 80 239)",
        bg: "rgb(10 20 30)",
        blue: "rgb(95 86 245)",
        grn: "rgb(17, 157, 164)",
        darkgn: "rgb(12, 116, 137)",
        darkergn: "rgb(19, 80, 91)",
        wh: "rgb(215, 217, 206)",
      },

      fontFamily: {
        mont: "Montserrat",
      },
    },
    screens: {
      xs: "420px",
      xxs: "375px",
      tiny: "320px",
      ".5xl": "960px",
      ...defaultTheme.screens,
    },
    fontSize: {
      "1.5xl": "1.4rem",
      "3.5xl": "2.1rem",
      "4.5xl": ["2.6rem", "2.75rem"],
      "5.5xl": ["3.3rem", "1"],
      ...defaultTheme.fontSize,
    },
  },
  plugins: [],
};
