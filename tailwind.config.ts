/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // YOUR CUSTOM COLOR PALETTE
      colors: {
        // Base colors from your palette
        dark: {
          primary: '#222831',    // Deep charcoal - main background
          secondary: '#31363F',  // Dark slate - cards/sections
          accent: '#76ABAE',     // Teal blue - primary accent
          light: '#EEEEEE',      // Off-white - text
        },
        // Semantic aliases
        background: {
          DEFAULT: '#222831',
          light: '#31363F',
          lighter: '#3a404a',
        },
        text: {
          DEFAULT: '#EEEEEE',
          light: '#DDDDDD',
          muted: '#AAAAAA',
        },
        primary: {
          DEFAULT: '#76ABAE',
          light: '#8abfc2',
          dark: '#5d8a8d',
        },
        border: {
          DEFAULT: '#3a404a',
          light: '#4a505a',
        }
      },
      // TYPOGRAPHY SCALE
      fontSize: {
        'display-lg': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'xl': ['1.25rem', { lineHeight: '1.4' }],
        'lg': ['1.125rem', { lineHeight: '1.5' }],
        'base': ['1rem', { lineHeight: '1.6' }],
        'sm': ['0.875rem', { lineHeight: '1.5' }],
        'xs': ['0.75rem', { lineHeight: '1.4' }],
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      // Animation remains the same
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}