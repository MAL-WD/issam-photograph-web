/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        title:['Tusker Grotesk','sans-serif'],
      },
      backgroundColor:{
        "main":"#cfc1ae",
        "light-main":"rgb(192 174 151)",
        white:"#f4f4f4",
        black:"#141414",
      },
      colors:{
        "main":"#cfc1ae",
        "light-main":"rgb(192 174 151)",
        white:"#f4f4f4",
        black:"#141414",
      },
      borderColor:{
        black:"#141414",
        
      }
    },
  },
  plugins: [],
}

