// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // Watch all JavaScript and TypeScript files in the 'src' folder
  ],
  theme: {
    extend: {
      dropShadow: {
        '3xl': '0 35px 35px rgba(238, 235, 235, 0.84)',
        '4xl': [
            '0 35px 35px rgba(245, 245, 245, 0.25)',
            '0 45px 65px rgba(247, 235, 235, 0.15)'
        ]
      }
    },
  },
  plugins: [],
};


