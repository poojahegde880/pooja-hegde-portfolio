/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#090E1A',
          soft: '#0E1626',
          surface: '#121B2E',
        },
        mist: {
          DEFAULT: '#F5F7FA',
          soft: '#FFFFFF',
          surface: '#EEF1F7',
        },
        signal: {
          DEFAULT: '#38BDF8',
          dim: '#0EA5E9',
          bright: '#7DD3FC',
        },
        amber: {
          DEFAULT: '#FBBF24',
          dim: '#F59E0B',
        },
        accuracy: '#34D399',
        ink: '#E7ECF5',
        slate: {
          deep: '#1B2333',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'signal-amber': 'linear-gradient(135deg, #38BDF8 0%, #FBBF24 100%)',
        'signal-soft': 'linear-gradient(135deg, rgba(56,189,248,0.15) 0%, rgba(251,191,36,0.15) 100%)',
        'rail-fade': 'linear-gradient(180deg, transparent 0%, #38BDF8 50%, transparent 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(56,189,248,0.35)',
        'glow-amber': '0 0 40px -10px rgba(251,191,36,0.35)',
        glass: '0 8px 32px 0 rgba(0,0,0,0.25)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        blink: 'blink 1s step-end infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
    },
  },
  plugins: [],
};
