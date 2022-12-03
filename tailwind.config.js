module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/component-bible-library/**/*.{html,js,ts}",
  ],
  presets: [require("./tailwind-preset")],
  darkMode: "media", // vs. 'class'
  theme: {
    extend: {},
  },
  plugins: [],
};
