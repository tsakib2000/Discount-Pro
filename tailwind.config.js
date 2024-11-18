/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'banner':"url('./src/assets/cool-background (1).png')"
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

