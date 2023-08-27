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
        primaryColor:'#2F248F',
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
      screens:{
        xs:'0px'
      },
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system','Arial Regular', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue',  'Noto Sans', 'sans-serif'],
      },
      boxShadow:{
        '3xl' : '-1px 0px 10px 1px rgba(0, 0, 0, 0.3)'
      }
    },
    gridAutoColumns:{
      auto: 'auto-fit',
      min: 'min-content',
      max: 'max-content',
      fr: '1fr',
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    // require('@tailwindcss/typography')
  ],
}