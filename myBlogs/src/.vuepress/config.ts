import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Kevin的博客",
      description: "KevinSong的博客",
    },
  },

  theme,

  shouldPrefetch: false,
});
