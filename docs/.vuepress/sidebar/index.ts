import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    '',
    {
      text: 'AIGC',
      icon: 'robot',
      prefix: 'aigc/',
      children: [
        // 大语言模型系列已隐藏
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
        // AI框架系列已隐藏
        // {
        //   text: 'AI框架',
        //   icon: 'note',
        //   prefix: 'AI框架/',
        //   children: [
        //     {
        //       text: 'LangChain：构建AI智能体的操作系统',
        //       link: 'LangChain：构建AI智能体的操作系统',
        //     },
        //     {
        //       text: '2025年大模型部署框架全解析：vLLM vs Ollama',
        //       link: '2025年大模型部署框架全解析：vLLM vs Ollama',
        //     },
        //   ],
        // },
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
      text: 'AI全栈开发',
      icon: 'cpu',
      prefix: 'ai-fullstack/',
      children: [
        {
          text: '认知与趋势',
          icon: 'lightbulb',
          children: [
            {
              text: '01. 技术角色全景解析',
              link: '01-AI增强型全栈开发者：2026年技术角色全景解析',
            },
            {
              text: '02. 技术演进历程',
              link: '02-全栈开发的技术演进：从工具时代到智能体时代',
            },
            {
              text: '03. 编程效率实证研究',
              link: '03-AI编程效率的实证研究：从神话到现实',
            },
          ],
        },
        {
          text: '技术范式',
          icon: 'robot',
          children: [
            {
              text: '04. Agents vs Skills',
              link: '04-Agents vs Skills - 技术范式之争',
            },
            {
              text: '05. Vibe Coding分析',
              link: '05-Vibe Coding的批判性分析',
            },
            {
              text: '06. Claude Skills解析',
              link: '06-Claude Skills深度解析',
            },
          ],
        },
        {
          text: '工程实践',
          icon: 'tools',
          children: [
            {
              text: '07. 工具链工程化实践',
              link: '07-AI工具链的工程化实践',
            },
            {
              text: '08. 企业级应用实践',
              link: '08-企业级AI应用的最佳实践',
            },
            {
              text: '09. 系统设计思维',
              link: '09-AI时代的系统设计思维',
            },
          ],
        },
        {
          text: '能力与方法',
          icon: 'brain',
          children: [
            {
              text: '10. Prompt Engineering',
              link: '10-Prompt Engineering的工程化方法',
            },
            {
              text: '11. 记忆与上下文管理',
              link: '11-AI Agent的记忆与上下文管理',
            },
            {
              text: '12. 技术趋势预测',
              link: '12-2026-2030技术趋势大胆预测与多方向展望',
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
              text: 'TypeScript篇',
              link: '前端面试系列-TypeScript篇',
            },
            {
              text: '性能优化篇',
              link: '前端面试系列-性能优化篇',
            },
            {
              text: '工程化篇',
              link: '前端面试系列-工程化篇',
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
              link: '前端技术学习-AST抽象语法树',
            },
            {
              text: 'POST请求发送两次的原因',
              link: '前端技术学习-POST请求发送两次的原因',
            },
            {
              text: 'Vue+Axios全局接口防抖节流封装',
              link: '前端技术学习-Vue+Axios全局接口防抖节流封装',
            },
            {
              text: '浏览器渲染原理',
              link: '前端技术学习-浏览器渲染原理',
            },
            {
              text: 'HTTP协议详解',
              link: '前端技术学习-HTTP协议详解',
            },
            {
              text: '跨域问题详解',
              link: '前端技术学习-跨域问题详解',
            },
            {
              text: 'Web安全详解',
              link: '前端技术学习-Web安全',
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
        {
          text: '链表',
          link: '数据结构与算法4-链表',
        },
        {
          text: '栈与队列',
          link: '数据结构与算法5-栈与队列',
        },
        {
          text: '树',
          link: '数据结构与算法6-树',
        },
        {
          text: '排序算法',
          link: '数据结构与算法7-排序算法',
        },
        {
          text: '查找算法',
          link: '数据结构与算法8-查找算法',
        },
        {
          text: '动态规划',
          link: '数据结构与算法9-动态规划',
        },
        {
          text: '贪心算法',
          link: '数据结构与算法10-贪心算法',
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
