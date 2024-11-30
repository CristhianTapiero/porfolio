/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js'
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors:{
				'brand-black': '#1D1E26',
				'brand-gray': '#323240',
				'brand-purple': '#666DF2',
				'brand-deep-purple': '#545ABF',
				'brand-yellow': '#F2DA5E',
				'brand-white': '#F3F4F6',
				'personal-white': '#F0F2F2',
				'personal-gray': '#A3A6A1',
				'personal-slate': '#525957',
				'personal-light-black': '#262626',
				'personal-black': '#0D0D0D'

			},
			fontFamily:{
				'rubik': ['Rubik', 'sans-serif'],
			},
			backgroundImage:{
				'Weather' : "url('./desktopScenario.webp')",
				'Weather-Mobile': "url('./mobileScenario.webp')",
			},
			backgroundSize: {
                'size-200': '200% 200%',
            },
            backgroundPosition: {
                'pos-0': '0% 0%',
                'pos-100': '100% 100%',
            },
		},
	},
	plugins: [require('flowbite/plugin')],
}
