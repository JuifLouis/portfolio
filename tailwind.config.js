/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#DEEADB",
        'dark-green': "#3A5037"
      },
      fontSize: {
        '2xl': "22px"
      },
      borderRadius: {
        '2xl': "24px"
      }
    },
  },
  plugins: [],
}
