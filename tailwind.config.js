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
      },
      colors: {
        primary: "#e4e4df",
        secondry: "#afafaf",
      },
      backgroundColor: {
        primary: "#e4e4df",
        secondry: "#f1f1f1",
        tangyOrange: "#fe8762",
      },
      maxWidth: {
        "main-screen": "1440px",
      },
    },
  },
  plugins: [],
};
