const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    // fontFamily: {},
    // fontSize: {
    //   xl1: "1.5rem",
    //   xl2: "2.5rem",
    //   xl3: "4rem",
    //   xl4: "5rem",
    //   xl5: "8rem",
    //   xl6: "12rem",
    // },

    extend: {
      colors: {
        current: "currentColor",
        brand: {
          dark: "var(--color-primary)",
          darkHover: "#2f5c9a",
          darkest: "#7f1D1D",
        },
      },
    },
    typography: ({ theme }) => ({
      DEFAULT: {
        css: {
          // color: '#444',
          a: {
            color: theme("colors.brand.blueDark"), // '#3182ce',
            "&:hover": {
              color: theme("colors.brand.blue"), // change me
            },
          },
          strong: {
            color: theme("colors.brand.blueDark"),
            fontWeight: theme("fontWeight.medium"),
          },
          "a strong": {
            color: "inherit",
            fontWeight: "inherit",
          },
        },
      },
    }),
    flexGrow: {
      2: "2",
      3: "3",
    },
    zIndex: {
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50",
      60: "60",
      70: "70",
      80: "80",
      90: "90",
      100: "100",
    },
    keyframes: {
      pulsing: {
        "0%": {
          "box-shadow": "0 0 0 0 rgb(185 28 28)",
          "animation-timing-function": "linear",
        },
        "40%": {
          "box-shadow": "0 0 0 20px rgba(255, 26, 67, 0)",
          "animation-timing-function": "linear",
        },
        "80%": {
          "box-shadow": "0 0 0 20px rgba(255, 206, 67, 0)",
          "animation-timing-function": "linear",
        },
        "100%": {
          "box-shadow": "0 0 0 rgba(255, 206, 67, 0)",
          "animation-timing-function": "linear",
        },
      },
    },
    animation: {
      pulse: "pulsing 2s linear infinite",
    },
  },

  plugins: [
    // popular tailwind plugins
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addUtilities }) {
      const utilities = {
        ".backface-visible": {
          "backface-visibility": "visible",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".inset-center": {
          top: "50%",
          left: "50%",
          "@apply -translate-x-1/2 -translate-y-1/2": {},
        },
        ".inset-y-center": {
          top: "50%",
          "@apply -translate-y-1/2": {},
        },
        ".inset-x-center": {
          left: "50%",
          "@apply -translate-x-1/2": {},
        },
      };

      addUtilities(utilities, ["responsive", "hover"]);
    }),
    // custom inline plugin implementation with css variables
    plugin(function ({ addBase }) {
      addBase({
        // definition of css variables for colors
        ":root": {
          "--color-primary": "#315182",
          // '--color-secondary': '#00ff00',
          "--color-background": "#ecf3f8",
          "--color-copy": "rgba(0, 0, 0, 0.9)",
        },
        // always show scrollbar (on Windows this avoids horizontal jank during loading or transitions)
        body: {
          overflowY: "scroll",
        },
        // remove spinner displayed on number inputs on chrome/safari/edge/opera
        "input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
          "-webkit-appearance": "none",
          margin: "0",
        },
        // remove spinner displayed on number inputs on firefox
        'input[type="number"]': {
          "-moz-appearance": "textfield",
        },
      });
    }),
  ],
};
