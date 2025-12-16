/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6366f1', // Indigo para modo oscuro
          dark: '#4f46e5',
          light: '#818cf8',
        },
        background: {
          light: '#f6f8f6',
          dark: '#0f172a', // Slate oscuro
        },
        surface: {
          dark: '#1e293b',
        },
        border: {
          dark: '#334155',
        },
        text: {
          muted: '#94a3b8',
          secondary: '#cbd5e1',
        },
      },
      fontFamily: {
        display: ['Manrope', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '1rem',
        lg: '2rem',
        xl: '3rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

