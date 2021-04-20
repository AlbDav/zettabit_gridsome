const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				sans: ['Lato', ...defaultTheme.fontFamily.sans],
			},
			boxShadow: {
				'2xl': '0px 10px 30px rgba(0, 0, 0, 0.3)'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};	