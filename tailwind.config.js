/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  // Enable dark mode via class
  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        // Custom accent colors
        accent: {
          primary: '#2563eb',
          secondary: '#7c3aed',
          hover: '#1d4ed8',
        },
        // Neutral palette
        neutral: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
      },
      
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'slide-up': 'slideUp 0.4s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  
  plugins: [
    // Add any Tailwind plugins here
  ],
  
  // Performance optimizations
  future: {
    hoverOnlyWhenSupported: true, // Only apply hover styles on devices that support it
  },
  
  // Reduce bundle size by removing unused utilities
  corePlugins: {
    // Disable utilities you don't use
    // Uncomment to disable:
    // float: false,
    // objectFit: false,
    // objectPosition: false,
  },
}
