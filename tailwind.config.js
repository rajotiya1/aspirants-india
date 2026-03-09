/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff',
          100: '#d9e9ff',
          500: '#2d7ff9',
          700: '#1c5fcc',
          900: '#0f2b52',
        },
      },
      boxShadow: {
        card: '0 10px 25px -12px rgba(15, 43, 82, 0.25)',
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(8, 22, 45, 0.65), rgba(8, 22, 45, 0.65)), url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1800&q=80')",
      },
    },
  },
  plugins: [],
};
