const daisyui = require('daisyui');
const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				kurort: {
					50: '#f0fdf5',
					100: '#dcfce8',
					200: '#bbf7d2',
					300: '#86efae',
					400: '#4ade82',
					500: '#22c560',
					600: '#16a34c',
					700: '#15803e',
					800: '#166534',
					900: '#14532c',
					950: '#052e15'
				}
			}
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			condensed: ['Roboto Condensed', 'sans-serif']
		}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#329831',

					secondary: '#22c560',

					accent: '#021175',

					neutral: '#202128',

					'base-100': '#f0fdf5',

					info: '#329FCD',

					success: '#1D877A',

					warning: '#F4B72A',

					error: '#EC4169'
				}
			}
		]
	},

	plugins: [forms, typography, daisyui]
};

module.exports = config;
