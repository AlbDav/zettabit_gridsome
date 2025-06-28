const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	safelist: [
		'grid-cols-1',
		'grid-cols-2',
		'grid-cols-3',
		'grid-cols-4',
		'grid-cols-5',
		'grid-cols-6',
		'grid-cols-7',
		'grid-cols-8',
		'grid-cols-9',
		'grid-cols-10',
		'grid-cols-11',
		'grid-cols-12',
	],
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