/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('../src/assets/play.jpg')",
      },
      colors:{
        
        "pry":"#1cd45e",
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        basic:['Titillium Web', 'sans-serif']
      },
    },
  },
  plugins: [],
}
