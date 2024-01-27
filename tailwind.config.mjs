/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'brand-black': '#1D1E26',
				'brand-gray': '#323240',
				'brand-purple': '#666DF2',
				'brand-deep-purple': '#545ABF',
				'brand-yellow': '#F2DA5E',
				'brand-white': '#F3F4F6'
			},
			fontFamily:{
				'rubik': ['Rubik', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
