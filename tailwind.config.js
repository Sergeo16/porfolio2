/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        animImg: {
          '0%': { transform: 'translateY(0%)' },
          '50%': { transform: 'translateY(-2.4rem)' },
          '100%': { transform: 'translateY(0%)' }
        }
      },
      animation: {
        'ssPortfolioImg': 'animImg 4s ease-in-out infinite'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
}

