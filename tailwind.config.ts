/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ["rotate-180", "translate-y-0", "translate-y-[100%]", "z-10", "scale-75", "navbar-active"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1565c0",
        primaryLight: "#42a5f5",
        secondary: "#7161ef",
        secondaryLight: "#957fef",
        dark: "#0A101E",
        darker: "#090E1A",
        blue: {
          50: "#F7FBFF",
          100: "#CEE6FC",
          200: "#A5D2F9",
          300: "#7CBDF6",
          400: "#52A8F2",
          500: "#2994EF",
          600: "#007FEC",
          700: "#0065BD",
          800: "#004C8D",
          900: "#00325E",
        },
      }
    },
  },
  variantOrder: ["first", "last", "odd", "even", "visited", "checked", "empty", "read-only", "group-hover", "group-focus", "focus-within", "hover", "focus", "focus-visible", "active", "disabled"],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("children", "&>*");
  }),
  ],
}