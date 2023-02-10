import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "物联网知识合集",
      icon: "note",
      prefix: "programming/thingsboard/",
      children: [
        {
          text:"什么是物联网",
          link: "什么是物联网",
        },
        {
          text:"什么是ThingsBoard",
          link: "什么是ThingsBoard",
        }
      ],
    },
    {
      text: "文章",
      icon: "note",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    "slides",
  ],
});
