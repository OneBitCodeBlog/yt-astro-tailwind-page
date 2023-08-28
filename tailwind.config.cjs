/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF2E63',
				secondary: '#08D906',
				dark: '#252A34',
				light: '#EAEAEA'
			}
		},
		fontFamily: {
			'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
		}
	},
	plugins: [],
}
