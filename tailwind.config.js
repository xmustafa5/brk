/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      colors:{
        yellow:{
          '120': '#F4BB05',
        },
        blue: {
          '120': '#202D63'
        }
      }
    },
  },
  plugins: [],
}

