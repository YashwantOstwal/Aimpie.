/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        landing:"url('./assets/images/landing.png')",
        aimpie:"url('./assets/images/aimpieBg.png')"
      },
      fontSize: {
        clamp: "clamp(1rem, 3.5vw, 2rem)",
        clamp2:"clamp(1rem, 2vw, 1.5rem)",
        clamp3:"clamp(0.5rem, 1.5vw, 1.5rem)",
        clamp4:"clamp(25px,7.5vw,100px)",
        clamp5:'clamp(20px,10vw,200px)'

      }
    },
  },
  plugins: [],
}