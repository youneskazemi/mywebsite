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
        light: {
          background: "#f4f4f9",
          text: "#2e2e2e",
          primary: "#00ff00",
          secondary: "#1e1e1e",
          accent: "#ff007f",
          border: "#dddddd",
          highlight: "#7df9ff",
        },
        dark: {
          background: "#0a0a1e",
          text: "#a0aec0",
          primary: "#00ff00",
          secondary: "#003366",
          accent: "#ff007f",
          border: "#444444",
          highlight: "#7df9ff",
        },
        neon: {
          green: "#39ff14",
          blue: "#00ffff",
          pink: "#ff00ff",
        },
      },
      fontFamily: {
        sans: ['Fira Code', 'monospace'],
        futuristic: ['Orbitron', 'sans-serif'],
      },
      animation: {
        typing: 'typing 3.5s steps(40, end), blink-caret .75s step-end infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 0, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)' },
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      backgroundImage: {
        'circuit-board': "url('/circuit-board.svg')",
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-neon': {
          textShadow: '0 0 5px rgba(0, 255, 0, 0.7), 0 0 10px rgba(0, 255, 0, 0.5), 0 0 15px rgba(0, 255, 0, 0.3)',
        },
        '.border-glow': {
          boxShadow: '0 0 5px rgba(0, 255, 0, 0.5), 0 0 10px rgba(0, 255, 0, 0.3)',
        },
      }
      addUtilities(newUtilities, ['hover', 'focus'])
    }),
  ],
};

export default config;