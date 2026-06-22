/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0B1B3D',
          navyLight: '#1E3A8A',
          yellow: '#FBBF24',
          yellowDark: '#D97706',
          white: '#FFFFFF',
          gray: '#F3F4F6',
          dark: '#020617'
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
