const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'bottom-to-top-gradient': 'linear-gradient(to top, rgb(18,18,18), rgba(0, 0, 0, 0))',
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in forwards",
        "fade-up": "fadeUp 1s ease-in forwards",
      },
    },
  },
  plugins: [],
};
