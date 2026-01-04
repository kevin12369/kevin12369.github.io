import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  {
    text: "📚 深度学习",
    icon: "book",
    prefix: "/learning/",
    children: [
      { text: "AI全栈系列", icon: "brain", link: "ai-fullstack/" },
      { text: "数据结构与算法", icon: "function", link: "algorithm/" },
      { text: "前端深度解析", icon: "code", link: "frontend-deep/" },
      { text: "游戏开发深度", icon: "gamepad", link: "game-deep/" },
    ],
  },
  {
    text: "🛠️ 实战项目",
    icon: "tools",
    prefix: "/projects/",
    children: [
      { text: "游戏项目", icon: "gamepad", link: "game/" },
      { text: "物联网项目", icon: "cloud", link: "iot/" },
      { text: "前端项目", icon: "code", link: "frontend/" },
      { text: "AI项目", icon: "robot", link: "ai/" },
    ],
  },
  {
    text: "💡 面试准备",
    icon: "graduation-cap",
    prefix: "/interview/",
    children: [
      { text: "前端面试", icon: "code", link: "frontend/" },
      { text: "算法刷题", icon: "function", link: "algorithm/" },
      { text: "系统设计", icon: "sitemap", link: "system-design/" },
      { text: "面试技巧", icon: "lightbulb", link: "skills/" },
    ],
  },
  {
    text: "📰 技术资讯",
    icon: "newspaper",
    prefix: "/news/",
    children: [
      { text: "AIGC资讯", icon: "robot", link: "aigc/" },
      { text: "行业报告", icon: "chart-line", link: "reports/" },
      { text: "技术趋势", icon: "trending-up", link: "trends/" },
      { text: "年度回顾", icon: "star", link: "annual/" },
    ],
  },
  {
    text: "📝 个人随笔",
    icon: "pen",
    prefix: "/essays/",
    children: [
      { text: "音乐", icon: "music", link: "blogs/music/page" },
      { text: "笔记", icon: "note", link: "blogs/notes/page" },
      { text: "摄影", icon: "camera", link: "blogs/photography/page" },
    ],
  },
  {
    text: "🏷️ 标签云",
    icon: "tags",
    prefix: "/tags/",
    children: [
      { text: "技术领域", icon: "layers", link: "technology/" },
      { text: "内容类型", icon: "list", link: "type/" },
      { text: "难度等级", icon: "signal", link: "difficulty/" },
    ],
  },
]);
