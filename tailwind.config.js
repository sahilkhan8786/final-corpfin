/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-md': '1055px'
      },
      fontFamily: {
        'poppins': "Poppins",
        'inter': 'Inter'
      },
      colors: {
        'primary': '#009580'
      }
    },
  },
  plugins: [],
}