/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // BEASTIQUE Brand Colors
        'beastique': {
          black: '#0a0a0a',
          charcoal: '#1a1a1a',
          slate: '#2d2d2d',
          gold: '#d4af37',
          copper: '#b87333',
          silver: '#c0c0c0',
          bone: '#e8e4d9',
          blood: '#8b0000',
          forest: '#228b22',
          ocean: '#006994',
          ice: '#a5f2f3',
        },
        // Conservation Status Colors
        'status': {
          extinct: '#000000',
          'extinct-wild': '#3d0000',
          critical: '#cc0000',
          endangered: '#cc4400',
          vulnerable: '#cc7700',
          'near-threatened': '#ccaa00',
          'least-concern': '#006600',
        }
      },
      fontFamily: {
        'display': ['var(--font-display)', 'serif'],
        'body': ['var(--font-body)', 'sans-serif'],
        'mono': ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      typography: (theme) => ({
        beastique: {
          css: {
            '--tw-prose-body': theme('colors.beastique.bone'),
            '--tw-prose-headings': theme('colors.beastique.gold'),
            '--tw-prose-links': theme('colors.beastique.copper'),
            '--tw-prose-bold': theme('colors.beastique.bone'),
            '--tw-prose-quotes': theme('colors.beastique.bone'),
            '--tw-prose-quote-borders': theme('colors.beastique.gold'),
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
