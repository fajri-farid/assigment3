/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#011627",
        navbar: "#011627"
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
};
