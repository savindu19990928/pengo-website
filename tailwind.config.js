export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        midnight: '#111827',
        navy: '#0B1B32',
        ocean: '#132A4A',
        charcoal: '#0F172A',
        snow: '#F7FAFD',
        ice: '#EAF0F6',
        // Glacier Blue — primary interactive colour
        arctic: { DEFAULT: '#3B82F6', deep: '#2563EB', darker: '#1D4ED8' },
        // Light glacier tint for highlighted type on dark backgrounds
        glacier: '#93C5FD',
        icegrey: '#B7C5D6',
        steel: '#52637A',
        deepteal: '#176B70',
        pengo: {
          blue: { DEFAULT: '#4B83B7', deep: '#36699A' },
          red: { DEFAULT: '#E64B43', deep: '#C2362F' },
          orange: { DEFAULT: '#F39A24', deep: '#B5650B' },
          green: { DEFAULT: '#08633D', light: '#4FB283' },
        },
      },
      fontFamily: {
        display: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
