const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
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
			gridTemplateColumns: {
				'auto-fit': 'repeat(auto-fit, minmax(10rem, 1fr))',
				'auto-fill': 'repeat(auto-fill, minmax(10rem, 1fr))',
			},
			boxShadow: {
				md: '0 4px 15px 0 rgba(0, 0, 0, 0.1)',
				lg: '0 5px 20px 0 rgba(0, 0, 0, 0.1)'
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['active'],
			gradientColorStops: ['active'],
			textColor: ['active'],
		},
	},
	plugins: [],
};