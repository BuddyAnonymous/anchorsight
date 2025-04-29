/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,css}', // Next.js pages
    './components/**/*.{js,ts,jsx,tsx}', // Next.js components
    './src/**/*.{js,ts,jsx,tsx,html,css}', // any other folder with Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
        italic: ["Inter Italic", "sans-serif"],
      },
      colors: {
        vsdark: {
          1: "#000000",
          2: "#0f0f0f",
          3: "#212121",
          4: "#808080",
          5: "#a1a1a1",
          6: "#e1e1e1",
          7: "#f5f5f5",
        },
      },
      fontSize: {
        xxs: "0.7rem",
      },
    },
  },
  plugins: [],
};