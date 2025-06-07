/** @type {import("tailwindcss").Config} */
const { twTransform } = require("@jswork/tgv-transformer");
module.exports = {
  presets: [require("@jswork/presets-tailwind")],
  content: {
    files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    transform: twTransform
  },
  theme: {
    extend: {
      gridTemplateRows: {
        "auto-2": "repeat(2,auto)"
      },
      gridTemplateColumns: {
        "2-200": "repeat(2,minmax(0, 260px))"
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        105: "28.75rem", // 420px
        155: "38.75rem", // 620px
        185: "46.25rem",  // 740px,
        1440: "1440px",
        720: "740px"
      },
      colors: {
        // '#f0eeff',
        //     '#dcdaf9',
        //     '#b6b1eb',
        //     '#8e85de',
        //     '#6b60d3',
        //     '#5649cd',
        //     '#4b3dcb',
        //     '#4537C9', // The one
        //     '#342aa2',
        //     '#2a2390',
        grape: {
          50: "#dcdaf9",
          100: "#b6b1eb",
          200: "#8e85de",
          300: "#6b60d3",
          400: "#5649cd",
          500: "#4b3dcb",
          600: "#4537C9", // The one
          700: "#342aa2",
          800: "#2a2390",
          900: "#1e197d"
        },
        red: {
          50: "#ffe9ee",
          100: "#ffd3d8",
          200: "#f8a3b0",
          300: "#f27184",
          400: "#ed475f",
          500: "#eb2d47",
          600: "#ea1e3c",
          700: "#d1102e",
          800: "#EB2441", // The one
          900: "#a40021"
        },
        "eerie-black": "#212121",
        "black-1000": "#343541",
        "jet": "#343541",
        "gray-alpha": "rgba(0,0,0, .1)",
        // "gray-50": "#FDFDFD",
        "gray-100": "#F9FAFA",
        "gray-200": "#F4F6F8",
        "gray-300": "#F0F0F0",
        "gray-400": "#EEEEEE",
        "gray-500": "#DDDDDD",
        "gray-600": "#8E8E8E",
        "gray-1000": "#CCCCCC",
        "gray-2000": "#BBBBBB",
        "gray-3000": "#AAAAAA",
        "gray-4000": "#949494",
        "gray-5000": "#757575",
        "gray-6000": "#666666",

        /* Blue colors */
        "blue-100": "#EBF5FF",
        "blue-200": "#D6EBFF",
        "blue-300": "#C2E0FF",
        "blue-400": "#ADD6FF",
        "blue-500": "#99CCFF",
        "blue-1000": "#85C2FF",
        "blue-2000": "#70B8FF",
        "blue-3000": "#47A4FF",
        "blue-4000": "#1E8EFF",
        "blue-5000": "#194BBE",
        "blue-6000": "#0939A7",

        /* Green colors */
        "green-100": "#DBFFEB",
        "green-200": "#C0FFC0",
        "green-300": "#B2F8B2",
        "green-400": "#A4E5A0",
        "green-500": "#99D599",
        "green-1000": "#75CF95",
        "green-2000": "#55b589",
        "green-3000": "#44A470",
        "green-4000": "#3E9C6E",
        "green-5000": "#29AC39",
        "green-6000": "#197C19"
      },
      screens: {
        "xs": "389px",
        // => @media (min-width: 390px) { ... }
        "sm": "833px",
        // => @media (min-width: 834px) { ... }
        "md": "1279px",
        // => @media (min-width: 1280px) { ... }
        "lg": "1439px",
        // => @media (min-width: 1440px) { ... }
        "xl": "1919px",
        // => @media (min-width: 1920px) { ... },
        "mobile": "320px",
        "desktop": "1024px"
      },
      boxShadow: {
        "card": "0 0 8px 0 rgba(0, 0, 0, 0.08)"
      },
      borderRadius: {
        "xs": "0.375rem",
        "sm": "0.625rem",
        "lg": "1.25rem"
      },
      lineHeight: {
        "p-155": "155%",
        "landing-normal": "1.4"
      }
    }
  },
  plugins: []
};
