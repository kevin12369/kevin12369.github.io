import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://kevin12369.github.io',
  base: '/',
  trailingSlash: 'always',

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
  
  // AstroPaper 主题配置
  title: 'Kevin.AI',
  description: '探索AI增强型全栈开发的实践与思考',
  author: 'Kevin',
  siteLogo: '/logo.svg',
  siteFavicon: '/favicon.ico',
  ogLocale: 'zh_CN',
});