import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kevin12369.github.io',
  base: '/',

  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],

  build: {
    format: 'directory',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true,
    },
  },

  compressHTML: true,
  
  // 博客配置
  title: 'Kevin.AI',
  description: '探索AI增强型全栈开发的实践与思考',
});