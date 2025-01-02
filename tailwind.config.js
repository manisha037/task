/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:  {
      boxShadow: {
        'custom': '2px 2px 10px 8px rgba(255, 209, 200, 0.2)',
      },
      plugins: [require('tailwind-scrollbar-hide')],
      colors: {
        primary: '#FFF7EE',
        overlay: 'rgba(255, 247, 238, 0.8)',
        accentStart: 'rgba(255, 209, 200, 0.075)',
        accentEnd: 'rgba(67, 24, 255, 0.03)',
      },
      backgroundImage: {
        'custom-gradient': `
          linear-gradient(0deg, #FFF7EE, #FFF7EE),
          linear-gradient(0deg, #FFFFFF, #FFFFFF),
          linear-gradient(0deg, rgba(255, 247, 238, 0.8), rgba(255, 247, 238, 0.8)),
          linear-gradient(97.35deg, rgba(255, 209, 200, 0.075) 46.1%, rgba(67, 24, 255, 0.03) 99.36%)
        `,
      },
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