/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      bondi: {
        200: "#b9dfe8",
        300: "#89c8d7",
        400: "#52a8be",
        500: "#3b97b1",
        600: "#30728a",
      },
      white: "white",
      black: "black",
      transparent: "transparent",
    },
    extend: {
      backgroundColor: {
        "navbar-scrolled": "#1b1a2ea9",
      },
    },
  },
  plugins: [],
};
