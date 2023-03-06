/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F47522',
        'blue': '#19345E',
        'grayalta': '#EFF0F2' 
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui : {
    base: false,
    darkTheme: "light",
  }
}
