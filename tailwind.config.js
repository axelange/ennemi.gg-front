/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "peachred": "#ff0827",
        "peachred-darker": "#b2051b",
        "peachred-lighter": "#ff5267",
    },
    }
  },
  plugins: [],
}
