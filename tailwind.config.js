const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        c1: "#fcc000",
        c2: "#fed97a",
        c3: "#ffebbc",
        c4: "#a7d0da",
        c5: "#52afbe",
        c6: "#049fb2",
        c7: "#0090a5",
        c8: "#008195",
        c9: "#373736",
        c10: "#383836",
        brand: "#2568ba",
        brandDark: "#205aa2",
        brandBlue: "#007bff",
        brandGrey: "#4d4d4d",
        brandGreyLight: "#b3b3b3",
      },
      fontFamily: {
        sans: ["Bitter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
