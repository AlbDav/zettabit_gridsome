const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				red: {
					lighter: '#e5383b',
					light: '#ba181b',
					DEFAULT: '#a4161a',
					dark: '#660708'
				},
				gray: {
					light: '#f5f3f4',
					DEFAULT: '#d3d3d3',
					dark: '#b1a7a6',
					darker: '#161a1d',
					darkest: '#0b090a'
				}
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['active'],
			gradientColorStops: ['active']
		},
	},
	plugins: [],
};	