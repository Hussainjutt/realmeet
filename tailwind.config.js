const { colors: defaultColors } = require("tailwindcss/defaultTheme");

const colors = {
  ...defaultColors,
  ...{
    cstm_aqua: {
      100: "#0eb7be",
    },
    cstm_dark_primary: {
      100: "#232635",
    },
    cstm_dark_secondary: {
      100: "#23273A",
    },
    cstm_primary_pink: {
      100: "#fa4a6f",
    },
    cstm_secondary_pink: {
      100: "#ec3384",
    },
    cstm_purple: {
      100: "#532b79",
    },
    white: "#ffffff",
  },
};
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: colors,
  },
  theme: {
    extend: {
      screens: {
        xsm: "400px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
