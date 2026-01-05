const disabledCss = {
	// 禁用代码块的默认样式，使用rehype-pretty-code
	pre: false,
	code: false,
	'pre code': false,
	'code::before': false,
	'code::after': false
};

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: { css: disabledCss },
				sm: { css: disabledCss },
				lg: { css: disabledCss },
				xl: { css: disabledCss },
				'2xl': { css: disabledCss }
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};