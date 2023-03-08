/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-select/dist/index.esm.js"
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
