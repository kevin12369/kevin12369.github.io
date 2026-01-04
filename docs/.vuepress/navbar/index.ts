import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "📚 深度学习",
    icon: "book",
    link: "/learning/",
  },
  {
    text: "🛠️ 实战项目",
    icon: "tools",
    link: "/projects/",
  },
  {
    text: "💡 面试准备",
    icon: "graduation-cap",
    link: "/interview/",
  },
  {
    text: "📰 技术资讯",
    icon: "newspaper",
    link: "/news/",
  },
  {
    text: "📝 个人随笔",
    icon: "pen",
    link: "/essays/",
  },
  {
    text: "🏷️ 标签云",
    icon: "tags",
    link: "/tags/",
  },
]);
