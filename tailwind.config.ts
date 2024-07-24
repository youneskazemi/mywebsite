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
          background: "#ffffff",
          text: "#000000",
        },
        dark: {
          background: "#1a202c",
          text: "#a0aec0",
        },
      },
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
      },
      animation: {
        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        glow: 'glow 1.5s ease-in-out infinite alternate',
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
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 0, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 0, 1)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // Tailwind CSS Forms Plugin
  ],
};
export default config;
