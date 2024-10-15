/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      fontWeight: {
        thin: '200',
        ethin:'100' // Tailwind default class for 200 weight is 'font-thin'
      },
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'], // Set Nunito Sans as the default font family
        geologica: ['"Geologica"', 'sans-serif'], // Import other fonts like Geologica
      },
    },
  },

  
  plugins: [],
}