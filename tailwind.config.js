module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/component-bible-library/**/*.{html,js,ts}",
  ],
  presets: [require("./tailwind-preset")],
  darkMode: "media", // vs. 'class'
  theme: {
    extend: {
      backgroundImage: {
        "bg-info-panel":
          "url('https://res.cloudinary.com/dybcfr6cd/image/upload/v1670110454/nordwood-themes-KcsKWw77Ovw-unsplash_wil93u.jpg')",
      },
      width: {
        mapXLBg: "64rem",
        mapXL: "60rem",
      },
      height: {
        mapSidePanelXL: "38rem",
      },
    },
  },
  plugins: [],
};
