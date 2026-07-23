/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1536px',
      '2xl': '1920px',
    },

    extend: {
      colors: {
        'vexxo-dark': '#0f0f0f',
        'vexxo-offwhite': '#E8E8E0',
        'vexxo-brown': '#7A5B42',
        'vexxo-lightbrown': '#B89B7F',
        'vexxo-gold': '#D4AF37'
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
