/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rarity-common': '#808080',
        'rarity-less-common': '#008000',
        'rarity-uncommon': '#0000FF',
        'rarity-rare': '#800080',
        'rarity-very-rare': '#FFA500',
        'rarity-epic': '#FF0000',
      },
    },
  },
  plugins: [],
}
