/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "poppins" :'Poppins'
      },
      colors:{
        "primary" : "#fffffe",
        "secondary" : "#d1d1e9",
        "danger" : "#e45858",
        "header":"#2b2c34",
        "info" : "#6246ea"

      }
    },
  },
  plugins: [],
}
