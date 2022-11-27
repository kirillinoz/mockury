const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "Inter", ...fontFamily.sans],
        inter: ["Inter", ...fontFamily.sans],
      },
      backgroundImage: {
        grid: "url('/images/grid.png')",
      },
    },
  },
  plugins: [],
};
