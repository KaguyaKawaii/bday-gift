// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F5',
        'soft-white': '#FFFFFF',
        'light-beige': '#F8F0E6',
        'blush-pink': '#FFF1F4',
        'dusty-rose': '#F8E5EA',
        'soft-lavender': '#E9DDF2',
        'powder-blue': '#DCEAF4',
        'muted-peach': '#FDE8D7',
        'deep-charcoal': '#292525',
        'soft-black': '#2D2A2A',
        'accent-pink': '#E8C8CF',
        'accent-rose': '#D4A5B5',
        'text-muted': '#8B7B78',
        'text-secondary': '#6B5B58',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'serif-display': ['DM Serif Display', 'serif'],
        'handwritten': ['Caveat', 'cursive'],
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'wiggle': 'wiggle 2s ease-in-out infinite',
        'pop': 'pop 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) both',
        'slide-up': 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.3s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'confetti-fall': 'confettiFall 3s ease-out forwards',
        'flame-flicker': 'flameFlicker 0.5s ease-in-out infinite',
        'sound-wave': 'soundWave 0.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        pop: {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '70%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        confettiFall: {
          '0%': { transform: 'translateY(-50px) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(200px) rotate(360deg)', opacity: '0' },
        },
        flameFlicker: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.9)' },
        },
        soundWave: {
          '0%, 100%': { height: '5px' },
          '50%': { height: '24px' },
        },
      },
    },
  },
  plugins: [],
}