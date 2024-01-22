/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: '[data-mode="dark"]',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  // content: ['/build/*.html'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '0'
      }
    },
    fontFamily: {
      primary: 'Varela Round'
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite'
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)'
          }
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)'
          }
        }
      },
      colors: {
        darkblue: {
          DEFAULT: '#0D0D2B',
          secondary: '#252540'
        },
        blue: {
          DEFAULT: '#3671E9',
          hover: '#2766E6'
        },
        gray: {
          DEFAULT: '#E0E0E0'
        },
        violet: '#2B076E',
        white: '#ffffff'
      },
      boxShadow: {
        primary: '0px 20px 200px rgba(57, 23, 119, 0.05)'
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1200px'
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
