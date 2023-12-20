/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
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
