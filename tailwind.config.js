/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uimm-dark': '#005973',
        'uimm-green': '#0c7d72',
        'uimm-orange': '#ff8a00',
        'uimm-yellow': '#ffcc19',
        'uimm-purple': '#792050',
        'uimm-pink': '#cd1997',
        'uimm-light': '#cae0de',
      }
    },
  },
  plugins: [],
}
