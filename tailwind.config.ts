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
          bg: "#F0F4F8",
          text: "#1A202C",
          accent: "#3B82F6",
          secondary: "#E2E8F0",
          border: "#CBD5E0",
        },
        dark: {
          bg: "#1A202C",
          text: "#F7FAFC",
          accent: "#60A5FA",
          secondary: "#2D3748",
          border: "#4A5568",
        },
        code: {
          comment: "#718096",
          keyword: "#4299E1",
          function: "#48BB78",
          string: "#ED8936",
          number: "#9F7AEA",
          operator: "#A0AEC0",
          class: "#38B2AC",
          variable: "#F687B3",
        },
      },
      fontFamily: {
        code: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Source Sans Pro"', 'sans-serif'],
      },
      boxShadow: {
        'neon-glow': '0 0 5px theme("colors.dark.accent"), 0 0 20px theme("colors.dark.accent")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-glow': {
          textShadow: '0 0 5px rgba(96, 165, 250, 0.7), 0 0 10px rgba(96, 165, 250, 0.5)',
        },
      }
      addUtilities(newUtilities)
    }),
  ],
};

export default config;