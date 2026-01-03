import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Kevin的博客",
      description: "KevinSong的博客 - 技术博客，涵盖AIGC、前端开发、AI全栈开发等领域",
    },
  },

  theme,

  shouldPrefetch: false,

  // SEO优化配置
  head: [
    ["meta", { name: "keywords", content: "AIGC,前端开发,AI全栈开发,VuePress,技术博客" }],
    ["meta", { name: "author", content: "Kevin" }],
    ["meta", { name: "robots", content: "all" }],
  ],
});
