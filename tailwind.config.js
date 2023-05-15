/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#2F3192",
        subColor: "#17197C",
        yellowish: "#FFC43A",
        normalBlue: '#2251FF'
      },
      height:{
        512:'512px'
      },
      width:{
        20:'20%',
        14:'14%',
        50:"50%",
        32:'32%',
        70:"70%",
        85:'85%',
        95:'95%'
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography')
  ],
}