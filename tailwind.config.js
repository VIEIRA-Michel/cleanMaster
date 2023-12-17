/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        burgerMenu: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        burgerMenu: "burgerMenu , 1s ease-in-out alternate",
      },
      backgroundColor: {
        primary: "#574686",
        secondary: "#2C2E82",
        custom: "rgba(0,0,0,0.54)",
      },
      colors: {
        primary: "#574686",
        secondary: "#2C2E82",
      },
      boxShadow: {
        custom: "0px 15px 14.5px 0px rgba(0, 0, 0, 0.25)",
      },
      borderColor: {
        secondary: "#2C2E82",
      },
    },
  },
  plugins: [],
};
