/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px',
  			'3xl': '1500px',
  			'4xl': '1800px'
  		},
  		maxWidth: {
  			'screen-3xl': '1500px',
  			'screen-4xl': '1800px'
  		}
  	},
  	extend: {
  		backgroundImage: {
  			'gradient-to-r': 'linear-gradient(to right, #4facfe, #00f2fe)',
  			'gradient-to-b': 'linear-gradient(to bottom, #ff9a9e, #fad0c4)',
  			'gradient-custom': 'linear-gradient(45deg, #ff7e5f, #feb47b)'
  		},
  		colors: {
  			primary: '#131118',
  			'primary-500': '#013238',
  			'primary-2': '#5D5FEF',
  			secondary: '#0BA5EC',
  			'secondary-600': '#FF9F00',
  			destructive: '#D9534F',
  			'destructive-light': '#FF6B6B',
  			'off-white': '#D0DFFF',
  			'off-white-alt': '#E0E0E0',
  			red: '#FF5A5A',
  			'red-dark': '#C0392B',
  			'dark-1': '#141C22',
  			'dark-2': '#09090A',
  			'dark-3': '#101012',
  			'dark-4': '#1F1F22',
  			'dark-5': '#2C2C2E',
  			white: '#FFFAF5',
  			'light-1': '#FFFFFF',
  			'light-2': '#A4A1AA',
  			'light-3': '#7878A3',
  			'light-4': '#5C5C7B',
  			'light-5': '#F5F5F5'
  		},
  		screens: {
  			xs: '480px'
  		},
  		width: {
  			'420': '420px',
  			'465': '465px',
  			l: '64rem'
  		},
  		fontFamily: {
  			inter: [
  				'Inter',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate')],
};
