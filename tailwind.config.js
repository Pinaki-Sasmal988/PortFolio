//  @type {import('tailwindcss').Config} 
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily:{
         bodyFont:["poppins","sans-serif"],
         titleFont:["Montserrat","sans-serif"],
      },
      colors:{
        bodyColors:"#212428",
        lightText:"#c4cfde",
        boxBg:"linear-gradient(145deg, #1e2024, #23272b)",
        designColor:"#ff014f",
      },
      boxShadow:{
        shawOne:"10px 10px 19px #1c1e22, -10px, -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}

