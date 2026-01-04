import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "📚 Deep Learning",
    icon: "book",
    prefix: "/en/learning/",
    children: [
      { text: "AI Full Stack", icon: "brain", link: "ai-fullstack/" },
      { text: "Data Structures & Algorithms", icon: "function", link: "algorithm/" },
      { text: "Frontend Deep Dive", icon: "code", link: "frontend-deep/" },
      { text: "Game Development", icon: "gamepad", link: "game-deep/" },
    ],
  },
  {
    text: "🛠️ Projects",
    icon: "tools",
    prefix: "/en/projects/",
    children: [
      { text: "Game Projects", icon: "gamepad", link: "game/" },
      { text: "IoT Projects", icon: "cloud", link: "iot/" },
      { text: "Frontend Projects", icon: "code", link: "frontend/" },
      { text: "AI Projects", icon: "robot", link: "ai/" },
    ],
  },
  {
    text: "💡 Interview Prep",
    icon: "graduation-cap",
    prefix: "/en/interview/",
    children: [
      { text: "Frontend Interview", icon: "code", link: "frontend/" },
      { text: "Algorithm Practice", icon: "function", link: "algorithm/" },
      { text: "System Design", icon: "sitemap", link: "system-design/" },
      { text: "Interview Skills", icon: "lightbulb", link: "skills/" },
    ],
  },
  {
    text: "📰 Tech News",
    icon: "newspaper",
    prefix: "/en/news/",
    children: [
      { text: "AIGC News", icon: "robot", link: "aigc/" },
      { text: "Industry Reports", icon: "chart-line", link: "reports/" },
      { text: "Tech Trends", icon: "trending-up", link: "trends/" },
      { text: "Annual Review", icon: "star", link: "annual/" },
    ],
  },
  {
    text: "📝 Personal",
    icon: "pen",
    prefix: "/en/essays/",
    children: [
      { text: "Music", icon: "music", link: "blogs/music/page" },
      { text: "Notes", icon: "note", link: "blogs/notes/page" },
      { text: "Photography", icon: "camera", link: "blogs/photography/page" },
    ],
  },
  {
    text: "🏷️ Tags",
    icon: "tags",
    prefix: "/en/tags/",
    children: [
      { text: "Technology", icon: "layers", link: "technology/" },
      { text: "Content Type", icon: "list", link: "type/" },
      { text: "Difficulty", icon: "signal", link: "difficulty/" },
    ],
  },
  // Language switch button
  {
    text: "🌐 中文",
    link: "/",
    icon: "language",
  },
]);