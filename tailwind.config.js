export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        newsreader: ["Newsreader", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        spectral: ["Spectral", "serif"],
        miaCulpa: ["Mea Culpa", "serif"],
        Cormorant: ["Cormorant Upright", "serif"],
        tulpen: ["Tulpen One", "serif"],
        oreni: ["Oranienbaum", "serif"],
      },
      colors: {
        primary: "#fe8762",
        secondry: "#afafaf",
        yellowGold: "#f9ef93",
        brown: "#66514b",
        graymain: "#696969",
        graysharetwo: "#858585",
      },
      backgroundColor: {
        primary: "#313131",
        secondry: "#f1f1f1",
        tangyOrange: "#fe8762",
        highlightColor: "#f04f50",
        brown: "#66514b",
      },
      maxWidth: {
        "main-screen": "1440px",
      },
    },
  },
  plugins: [],
};
