import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  bundler: viteBundler(),

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Kevin的技术博客",
      description: "一个在泥潭挣扎的工具人 - 技术博客，涵盖AI全栈、前端开发、算法、游戏开发等领域",
    },
  },

  theme,

  shouldPrefetch: false,

  // SEO优化配置
  head: [
    ["meta", { name: "keywords", content: "AI全栈,前端开发,算法,游戏开发,物联网,AIGC" }],
    ["meta", { name: "author", content: "Kevin" }],
    ["meta", { name: "robots", content: "all" }],
  ],

  // 插件配置
  plugins: [
    ['@vuepress/plugin-pwa', {
      skipWaiting: true,
    }],
  ],
});