/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        ivory: '#FAF6F0',
        cream: '#EFE6D8',
        sand: '#E5D9C3',
        forest: '#2D4A3E',
        moss: '#4A6B5C',
        terracotta: '#C07B5D',
        gold: '#B8956A',
        blush: '#E8C4B8',
        burgundy: '#5A1E2A',
        ink: '#1A1612',
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
