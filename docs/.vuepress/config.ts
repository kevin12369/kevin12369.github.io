import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite';
import { plumeTheme } from "vuepress-theme-plume";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Kevin的技术博客",
  description: "一个在泥潭挣扎的工具人 - 技术博客，涵盖AI全栈、前端开发、算法、游戏开发等领域",

  bundler: viteBundler(),

  theme: plumeTheme({
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      {
        text: '📚 深度学习',
        children: [
          { text: 'AI全栈开发', link: '/learning/ai-fullstack/' },
          { text: '数据结构与算法', link: '/learning/algorithm/' },
          { text: '前端深度解析', link: '/learning/frontend-deep/' },
          { text: '游戏开发深度', link: '/learning/game-deep/' },
        ],
      },
      {
        text: '🛠️ 实战项目',
        children: [
          { text: '游戏项目', link: '/projects/game/' },
          { text: '物联网项目', link: '/projects/iot/' },
        ],
      },
      {
        text: '💡 面试准备',
        children: [
          { text: '前端面试', link: '/interview/frontend/' },
        ],
      },
      {
        text: '📰 技术资讯',
        children: [
          { text: 'AIGC资讯', link: '/news/aigc/' },
        ],
      },
      {
        text: '📝 个人随笔',
        children: [
          { text: '学习笔记', link: '/essays/notes/' },
          { text: '摄影', link: '/essays/photography/' },
          { text: '音乐', link: '/essays/music/' },
        ],
      },
      { text: '🏷️ 标签云', link: '/tags/' },
    ],

    // 侧边栏配置
    sidebar: {
      '/learning/': [
        {
          text: 'AI全栈开发',
          collapsible: true,
          children: [
            'ai-fullstack/01-AI增强型全栈开发者：2026年技术角色全景解析',
            'ai-fullstack/02-全栈开发的技术演进：从工具时代到智能体时代',
            'ai-fullstack/03-AI编程效率的实证研究：从神话到现实',
            'ai-fullstack/04-Agents vs Skills - 技术范式之争',
            'ai-fullstack/05-Vibe Coding的批判性分析',
            'ai-fullstack/06-Claude Skills深度解析',
            'ai-fullstack/07-AI工具链的工程化实践',
            'ai-fullstack/08-企业级AI应用的最佳实践',
            'ai-fullstack/09-AI时代的系统设计思维',
            'ai-fullstack/10-Prompt Engineering的工程化方法',
            'ai-fullstack/11-AI Agent的记忆与上下文管理',
            'ai-fullstack/12-2026-2030技术趋势大胆预测与多方向展望',
          ]
        },
        {
          text: '数据结构与算法',
          collapsible: true,
          children: [
            'algorithm/数据结构与算法1-前言',
            'algorithm/数据结构与算法2-数组',
            'algorithm/数据结构与算法3-二维数组',
            'algorithm/数据结构与算法4-链表',
            'algorithm/数据结构与算法5-栈与队列',
            'algorithm/数据结构与算法6-树',
            'algorithm/数据结构与算法7-排序算法',
            'algorithm/数据结构与算法8-查找算法',
            'algorithm/数据结构与算法9-动态规划',
            'algorithm/数据结构与算法10-贪心算法',
          ]
        },
        {
          text: '前端深度解析',
          collapsible: true,
          children: [
            'frontend-deep/前端技术学习-AST抽象语法树',
            'frontend-deep/前端技术学习-HTTP协议详解',
            'frontend-deep/前端技术学习-浏览器渲染原理',
            'frontend-deep/前端技术学习-跨域问题详解',
            'frontend-deep/前端技术学习-POST请求发送两次的原因',
            'frontend-deep/前端技术学习-Vue+Axios全局接口防抖节流封装',
            'frontend-deep/前端技术学习-Web安全',
          ]
        },
        {
          text: '游戏开发深度',
          collapsible: true,
          children: [
            'game-deep/Godot是什么',
            'game-deep/Unity是什么',
            'game-deep/Unreal Engine是什么',
          ]
        },
      ],
      '/projects/': [
        {
          text: '游戏项目',
          collapsible: true,
          children: [
            'game/打地鼠-Godot-CSharp完整教程',
          ]
        },
        {
          text: '物联网项目',
          collapsible: true,
          children: [
            'iot/什么是物联网',
            'iot/什么是ThingsBoard',
            'iot/基于MQTT的RPC协议',
            'iot/在Ubuntu（Linux）中部署ThingsBoard',
            'iot/在Windows10中部署ThingsBoard',
          ]
        },
      ],
      '/interview/': [
        {
          text: '前端面试',
          collapsible: true,
          children: [
            'frontend/2023年前端面试系列-vue篇',
            'frontend/2023年前端面试系列-JS篇',
            'frontend/2023年前端面试系列-HTML&CSS篇',
            'frontend/前端面试系列-TypeScript篇',
            'frontend/前端面试系列-性能优化篇',
            'frontend/前端面试系列-工程化篇',
            'frontend/前端面试系列-50道CSS基础面试题（附答案）',
            'frontend/前端面试系列-HTML 5 语义化',
          ]
        },
      ],
      '/news/': [
        {
          text: 'AIGC资讯',
          collapsible: true,
          children: [
            'aigc/',
          ]
        },
      ],
      '/essays/': [
        {
          text: '学习笔记',
          collapsible: true,
          children: [
            'notes/page',
          ]
        },
        {
          text: '项目复盘',
          collapsible: true,
          children: [
            'review/page',
          ]
        },
        {
          text: '技术总结',
          collapsible: true,
          children: [
            'summary/page',
          ]
        },
        {
          text: '生活随笔',
          collapsible: true,
          children: [
            'life/page',
          ]
        },
      ],
    },

    // 其他配置
    logo: '/logo.svg',
    repo: 'kevin12369/kevin12369.github.io',
    docsRepo: 'kevin12369/kevin12369.github.io',
    docsBranch: 'master',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: true,
    contributors: true,
    
    // 页脚配置
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present Kevin',
    },
  }),

  shouldPrefetch: false,

  // SEO优化配置
  head: [
    ["meta", { name: "keywords", content: "AI全栈,前端开发,算法,游戏开发,物联网,AIGC" }],
    ["meta", { name: "author", content: "Kevin" }],
    ["meta", { name: "robots", content: "all" }],
  ],
});