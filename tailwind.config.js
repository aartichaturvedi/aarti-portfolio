/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          background: {
            light: "#FDFBF7", 
            dark: "#050505", 
          },
          celestial: {
            gold: "#EAB308",
          }
        },
      },
    },
    plugins: [],
  }