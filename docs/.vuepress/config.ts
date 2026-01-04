import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kevin.AI",
  description: "探索AI增强型全栈开发的实践与思考",

  bundler: viteBundler(),

  theme,

  shouldPrefetch: false,

  head: [
    ["meta", { name: "keywords", content: "AI全栈,前端开发,算法,游戏开发,物联网,AIGC" }],
    ["meta", { name: "author", content: "Kevin" }],
    ["meta", { name: "robots", content: "all" }],
  ],

  // 多语言配置框架（为将来双语化做准备）
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'Kevin.AI',
      description: '探索AI增强型全栈开发的实践与思考'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Kevin.AI',
    //   description: 'Building AI-augmented systems for the future'
    // }
  },
});