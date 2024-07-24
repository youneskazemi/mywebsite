import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable dark mode using the class strategy
  theme: {
    extend: {
      colors: {
        light: {
          background: "#f4f4f9",
          text: "#2e2e2e",
          primary: "#00ff00",
          secondary: "#1e1e1e",
          accent: "#ff007f",
          border: "#dddddd",
        },
        dark: {
          background: "#1a202c",
          text: "#a0aec0",
          primary: "#00ff00",
          secondary: "#003366",
          accent: "#ff007f",
          border: "#444444",
        },
      },
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
      },
      animation: {
        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00ff00' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Tailwind CSS Forms Plugin
  ],
};
export default config;
