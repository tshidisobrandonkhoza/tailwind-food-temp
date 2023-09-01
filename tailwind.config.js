/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: { "color-init": "#EEEDED","color-sec": "#0D1282", "color-error": "#D71313", "color-cust":"#F0DE36"},
      fontFamily:{
        primary:['Sofia Sans']
      }
    },
  },
  plugins: [],
}

