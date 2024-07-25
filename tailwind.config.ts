import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        matrix: {
          bg: "#000000",
          text: "#00FF00",
          accent: "#00FF00",
          secondary: "#003300",
          border: "#005500",
        },
        code: {
          comment: "#008800",
          keyword: "#00FF00",
          function: "#00AA00",
          string: "#00CC00",
          number: "#00EE00",
          operator: "#00BB00",
          class: "#009900",
          variable: "#00DD00",
        },
      },
      fontFamily: {
        code: ['"Roboto Mono"', 'monospace'],
        sans: ['"Roboto"', 'sans-serif'],
        header: ['"Orbitron"', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 5px theme("colors.matrix.accent"), 0 0 20px theme("colors.matrix.accent")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
};

export default config;
