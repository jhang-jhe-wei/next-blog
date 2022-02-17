module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nobile: ["Nobile", "sans-serif"],
        notosans: ["Noto Sans TC", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#0A253E',
        'secondary': '#F67024',
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
      },
    },
  },
  plugins: [],
}
