module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '6.5': '26px',
        '8.5': '34px'
      },
      flex: {
        '2': '2 2 0%'
      },
      fontFamily: {
        nobile: ["Nobile", "sans-serif"],
        notosans: ["Noto Sans TC", "sans-serif"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#0A253E',
        'primary-opacity': '#243B52',
        'secondary': '#F67024',
        'light': "#EDEDED",
        'white': '#ffffff',
        'purple': '#3f3cbb',
        'midnight': '#121063',
        'metal': '#565584',
        'tahiti': '#3ab7bf',
        'silver': '#ecebff',
        'bubble-gum': '#ff77e9',
        'bermuda': '#78dcca',
        'cyan-450': '#39AFC9',
      },
      transitionProperty: {
        'opacity-and-transform': 'opacity, transform'
      },
    },
  },
  plugins: [],
}
