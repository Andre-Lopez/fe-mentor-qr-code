/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      "light-grey": "hsl(212, 45%, 89%)",
      "gray-blue": "hsl(220, 15%, 55%)",
      "dark-blue": "hsl(218, 44%, 22%)",
    },
    extend: {
      fontFamily: {
        outfit: ['"Outfit"', ...defaultTheme.fontFamily.sans],
      },
    },
    screens: {
      xs: "374px",
      ...defaultTheme.screens,
    },
  },
  plugins: [],
}
