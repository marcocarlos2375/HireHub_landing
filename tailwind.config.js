/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      rotate: {
        'y-1': '1deg',
        'x-1': '1deg',
      },
      perspective: {
        '1000': '1000px',
      },
      fontFamily: {
        heading: ['Gabarito', 'sans-serif'],
        body: ['Wix Madefor Text', 'sans-serif'],
      },
      animation: {
        'scroll-infinite': 'scroll-infinite 40s linear infinite var(--scroll-play-state, running)',
        'pulse-subtle': 'pulse-subtle 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-subtle': {
          '0%, 100%': {
            opacity: 1,
          },
          '50%': {
            opacity: 0.8,
          },
        },
        'scroll-infinite': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1rem))' },
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.pause-animation': {
          'animation-play-state': 'paused !important',
        }
      })
    }
  ],
}
