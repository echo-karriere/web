const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
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
        fuchsia: colors.fuchsia,
        orange: colors.orange,
      },
      fontFamily: {
        sans: ["Bitter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
  ],
};
