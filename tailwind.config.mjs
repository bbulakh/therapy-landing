/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
			'black': '#000000',
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': '#3ab7bf',
			'silver': '#ecebff',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
			'bg-dark': '#2e3617',
			'bg-light-green': '#f3f6ea',
			'bg-light-beige': '#fcf9ef',
		},
		extend: {
			backgroundImage: {
				'hero-image': "url('/img/bg-image.jpg')",
				'quote-image': "url('/img/bg-quote.jpg')",
			}
		},
	},
	plugins: [],
}
