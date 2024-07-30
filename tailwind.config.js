/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBaseLight: "#FAEAD0",
        mainBaseDark: "#FAE0BB",
        mainFontDark: "#260D00",
        mainFontLight: "#636363",
        mainYellowLight: "#FCBD11",
        yellowVariant1: "#F5B80F",
        contactNumber: "#B5ABAB",
      },

      fontFamily: {
        baseFont: "Lobster, sans-serif",
        subTitleFont: "Literata, serif",
        cardFont: "Alata, sans-serif",
      },

      fontWeight: {
        normalWeight: "400",
      },

      fontSize: {
        title: "35px",
        heroTitle: "95px",
      },
    },
  },
  plugins: [],
};
