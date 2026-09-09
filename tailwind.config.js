/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 7s ease-in-out',
        'slide-up': 'slideUp 9s ease-out',
        'slide-down': 'slideDown 7s ease-out',
        'bounce-gentle': 'bounceGentle 6s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 7s ease-in-out infinite',
        'shine-text-slow': 'shineTextSlow 21s ease-in-out infinite',
        'shine-text-delayed-slow': 'shineTextDelayedSlow 27s ease-in-out infinite',
        'shine-text-ultra-slow': 'shineTextUltraSlow 11s ease-in-out infinite',
        'shine-text-delayed-ultra-slow': 'shineTextDelayedUltraSlow 12s ease-in-out infinite',

        // Hero Button
        'rotate-glow': 'rotateGlow 1s linear infinite',

        // Spiral animation for elynAI
        'spiral-rotate': 'spiralRotate 3s linear infinite',

        // Brand name slow cinematic gradient
        'brand-cinematic': 'brandCinematic 12s ease-in-out infinite',
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
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        shineTextSlow: {
          '0%': { backgroundPosition: '-300% 0' },
          '25%': { backgroundPosition: '-150% 0' },
          '50%': { backgroundPosition: '0% 0' },
          '75%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '300% 0' },
        },
        shineTextUltraSlow: {
          '0%': { backgroundPosition: '-300% 0' },
          '25%': { backgroundPosition: '-150% 0' },
          '50%': { backgroundPosition: '0% 0' },
          '75%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '300% 0' },
        },
        shineTextDelayedUltraSlow: {
          '0%': { backgroundPosition: '-300% 0' },
          '20%': { backgroundPosition: '-300% 0' },
          '40%': { backgroundPosition: '-150% 0' },
          '60%': { backgroundPosition: '0% 0' },
          '80%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '300% 0' },
        },
        shineTextDelayedSlow: {
          '0%': { backgroundPosition: '-300% 0' },
          '12.5%': { backgroundPosition: '-300% 0' },
          '37.5%': { backgroundPosition: '-150% 0' },
          '50%': { backgroundPosition: '0% 0' },
          '62.5%': { backgroundPosition: '150% 0' },
          '100%': { backgroundPosition: '300% 0' },
        },

        // Hero Button
        rotateGlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },

        // Spiral rotation for elynAI icon
        spiralRotate: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.1)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },

        // Brand name slow cinematic gradient flow
        brandCinematic: {
          '0%': { backgroundPosition: '0% 50%' },
          '25%': { backgroundPosition: '50% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '75%': { backgroundPosition: '50% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
