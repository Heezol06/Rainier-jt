/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      'sm': '812px',

      'md': '1194px',

      'lg': '1280px',
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
  },
}
