import { defineConfig } from 'astro/config';
import { remarkReadingTime } from './src/utils/readingTime';
import rehypePrettyCode from 'rehype-pretty-code';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const options = {
	// Specify the theme to use or a custom theme json, in our case
	// it will be a moonlight-II theme from
	// https://github.com/atomiks/moonlight-vscode-theme/blob/master/src/moonlight-ii.json
	// Callbacks to customize the output of the nodes
	//theme: json,
	onVisitLine(node) {
		// Prevent lines from collapsing in `display: grid` mode, and
		// allow empty lines to be copy/pasted
		if (node.children.length === 0) {
			node.children = [
				{
					type: 'text',
					value: ' '
				}
			];
		}
	},
	onVisitHighlightedLine(node) {
		// Adding a class to the highlighted line
		node.properties.className = ['highlighted'];
	}
};

// https://astro.build/config
export default defineConfig({
  site: 'https://kevin12369.github.io',
  base: '/',

  markdown: {
    syntaxHighlight: false,
    // Disable syntax built-in syntax hightlighting from astro
    rehypePlugins: [[rehypePrettyCode, options]],
    remarkPlugins: [remarkReadingTime]
  },

  integrations: [
    mdx(),
    sitemap(),
    react(),
  ],

  build: {
    format: 'directory',
  },

  compressHTML: true,

  vite: {
    plugins: [tailwindcss()]
  },

  // 博客配置
  title: 'Kevin.AI',
  description: '探索AI增强型全栈开发的实践与思考',
});