/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'semimd' : '866px'
      },
      backgroundImage : {
        'boostmob' : "url('./src/assets/bg-boost-desktop.svg')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

