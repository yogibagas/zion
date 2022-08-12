/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        'zion-blue': '#0f84ff',
        'zion-lightblue': '#02c4fe',
      },
      backgroundImage: { 
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))', 
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))', 
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))', 
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))', 
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))', 
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))', 
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))', 
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))', 
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))', 
      }, 
    },
  },
  plugins: [],
}
