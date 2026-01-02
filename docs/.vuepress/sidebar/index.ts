import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    '',
    {
      text: 'AIGC',
      icon: 'robot',
      prefix: 'aigc/',
      children: [
        // 大语言模型系列已隐藏，待更新后重新开放
        // {
        //   text: '大语言模型',
        //   icon: 'note',
        //   prefix: '大语言模型/',
        //   children: [
        //     {
        //       text: 'OpenAI接口文档',
        //       link: 'OpenAI接口文档',
        //     },
        //     {
        //       text: 'Llama 3：Meta开源大模型的进化之路',
        //       link: 'Llama 3：Meta开源大模型的进化之路',
        //     },
        //     {
        //       text: '2025年大模型技术突破与趋势',
        //       link: '2025年大模型技术突破与趋势',
        //     },
        //   ],
        // },
        {
          text: 'AI框架',
          icon: 'note',
          prefix: 'AI框架/',
          children: [
            {
              text: 'AutoGen + FastChat + ChatGLM2-6B 实现本地化部署',
              link: 'AutoGen + FastChat + ChatGLM2-6B 实现本地化部署',
            },
          ],
        },
        {
          text: '本周AIGC资讯',
          icon: 'note',
          prefix: 'AI应用/',
          children: [
            {
              text: '第2期',
              link: '本周AIGC资讯-第2期',
            },
            {
              text: '第1期',
              link: '本周AIGC资讯-第1期',
            },
          ],
        },
        {
          text: '年度回顾',
          icon: 'star',
          prefix: 'AI应用/',
          children: [
            {
              text: '2025年AIGC年度回顾',
              link: '2025年AIGC年度回顾特刊',
            },
          ],
        },
      ],
    },
    {
      text: '前端开发',
      icon: 'code',
      prefix: 'frontend/',
      children: [
        {
          text: '面试资料',
          icon: 'note',
          children: [
            {
              text: 'Vue篇',
              link: '2023年前端面试系列-vue篇',
            },
            {
              text: 'JS篇',
              link: '2023年前端面试系列-JS篇',
            },
            {
              text: 'HTML&CSS篇',
              link: '2023年前端面试系列-HTML&CSS篇',
            },
            {
              text: '50道CSS基础面试题',
              link: '前端面试系列-50道CSS基础面试题（附答案）',
            },
            {
              text: 'HTML 5 语义化',
              link: '前端面试系列-HTML 5 语义化',
            },
          ],
        },
        {
          text: '技术学习',
          icon: 'note',
          children: [
            {
              text: 'AST抽象语法树',
              link: 'AST抽象语法树',
            },
            {
              text: 'post为什么会发送两次请求',
              link: 'post为什么会发送两次请求',
            },
            {
              text: 'Vue+Axios全局接口防抖、节流封装',
              link: 'Vue+Axios全局接口防抖、节流封装实现，让你前端开发更高效',
            },
          ],
        },
      ],
    },
    {
      text: '数据结构与算法',
      icon: 'function',
      prefix: 'algorithm/',
      children: [
        {
          text: '前言',
          link: '数据结构与算法1-前言',
        },
        {
          text: '数组',
          link: '数据结构与算法2-数组',
        },
        {
          text: '二维数组',
          link: '数据结构与算法3-二维数组',
        },
      ],
    },
    {
      text: '游戏开发',
      icon: 'gamepad',
      prefix: 'game/',
      children: [
        {
          text: 'Unity是什么',
          link: 'Unity是什么',
        },
        {
          text: 'Unreal Engine是什么',
          link: 'Unreal Engine是什么',
        },
        {
          text: 'Godot是什么',
          link: 'Godot是什么',
        },
        {
          text: '打地鼠',
          link: '打地鼠',
        },
      ],
    },
    {
      text: '物联网',
      icon: 'link',
      prefix: 'thingsboard/',
      children: [
        {
          text: '什么是物联网',
          link: '什么是物联网',
        },
        {
          text: '什么是ThingsBoard',
          link: '什么是ThingsBoard',
        },
        {
          text: '基于MQTT的RPC协议',
          link: '基于MQTT的RPC协议',
        },
        {
          text: '在Ubuntu（Linux）中部署ThingsBoard',
          link: '在Ubuntu（Linux）中部署ThingsBoard',
        },
        {
          text: '在Windows10中部署ThingsBoard',
          link: '在Windows10中部署ThingsBoard',
        },
      ],
    },
    {
      text: '兴趣爱好',
      icon: 'heart',
      prefix: 'blogs/',
      children: [
        {
          text: '随笔',
          icon: 'note',
          prefix: 'notes/',
          children: [
            {
              text: '笔记',
              link: 'page',
            },
          ],
        },
        {
          text: '摄影',
          icon: 'note',
          prefix: 'photography/',
          children: [
            {
              text: '摄影',
              link: 'page',
            },
          ],
        },
        {
          text: '音乐',
          icon: 'note',
          prefix: 'music/',
          children: [
            {
              text: '音乐',
              link: 'page',
            },
          ],
        },
      ],
    },
    'intro',
    'slides',
  ],
})
