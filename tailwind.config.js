/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1700': '1700px',
      },
      colors: {
        brand: {
          bg: '#050505',
          primary: '#38BDF8',
          accent: '#D4FF00',
        }
      },
      fontFamily: {
        sans: ['Kanit', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}