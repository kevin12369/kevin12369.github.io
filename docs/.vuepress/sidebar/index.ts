import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    '',
    {
      text: '📚 深度学习',
      icon: 'book',
      prefix: '/learning/',
      children: [
        {
          text: 'AI全栈开发',
          icon: 'brain',
          children: [
            {
              text: '01. 技术角色全景解析',
              link: 'ai-fullstack/01-AI增强型全栈开发者：2026年技术角色全景解析',
            },
            {
              text: '02. 技术演进历程',
              link: 'ai-fullstack/02-全栈开发的技术演进：从工具时代到智能体时代',
            },
            {
              text: '03. 编程效率实证研究',
              link: 'ai-fullstack/03-AI编程效率的实证研究：从神话到现实',
            },
            {
              text: '04. Agents vs Skills',
              link: 'ai-fullstack/04-Agents vs Skills - 技术范式之争',
            },
            {
              text: '05. Vibe Coding分析',
              link: 'ai-fullstack/05-Vibe Coding的批判性分析',
            },
            {
              text: '06. Claude Skills解析',
              link: 'ai-fullstack/06-Claude Skills深度解析',
            },
            {
              text: '07. 工具链工程化实践',
              link: 'ai-fullstack/07-AI工具链的工程化实践',
            },
            {
              text: '08. 企业级应用实践',
              link: 'ai-fullstack/08-企业级AI应用的最佳实践',
            },
            {
              text: '09. 系统设计思维',
              link: 'ai-fullstack/09-AI时代的系统设计思维',
            },
            {
              text: '10. Prompt Engineering',
              link: 'ai-fullstack/10-Prompt Engineering的工程化方法',
            },
            {
              text: '11. 记忆与上下文管理',
              link: 'ai-fullstack/11-AI Agent的记忆与上下文管理',
            },
            {
              text: '12. 技术趋势预测',
              link: 'ai-fullstack/12-2026-2030技术趋势大胆预测与多方向展望',
            },
          ],
        },
        {
          text: '数据结构与算法',
          icon: 'function',
          children: [
            { text: '前言', link: 'algorithm/数据结构与算法1-前言' },
            { text: '数组', link: 'algorithm/数据结构与算法2-数组' },
            { text: '二维数组', link: 'algorithm/数据结构与算法3-二维数组' },
            { text: '链表', link: 'algorithm/数据结构与算法4-链表' },
            { text: '栈与队列', link: 'algorithm/数据结构与算法5-栈与队列' },
            { text: '树', link: 'algorithm/数据结构与算法6-树' },
            { text: '排序算法', link: 'algorithm/数据结构与算法7-排序算法' },
            { text: '查找算法', link: 'algorithm/数据结构与算法8-查找算法' },
            { text: '动态规划', link: 'algorithm/数据结构与算法9-动态规划' },
            { text: '贪心算法', link: 'algorithm/数据结构与算法10-贪心算法' },
          ],
        },
        {
          text: '前端深度解析',
          icon: 'code',
          children: [
            { text: 'AST抽象语法树', link: 'frontend-deep/前端技术学习-AST抽象语法树' },
            { text: 'HTTP协议详解', link: 'frontend-deep/前端技术学习-HTTP协议详解' },
            { text: '浏览器渲染原理', link: 'frontend-deep/前端技术学习-浏览器渲染原理' },
            { text: '跨域问题详解', link: 'frontend-deep/前端技术学习-跨域问题详解' },
            { text: 'POST请求发送两次的原因', link: 'frontend-deep/前端技术学习-POST请求发送两次的原因' },
            { text: 'Vue+Axios全局接口防抖节流封装', link: 'frontend-deep/前端技术学习-Vue+Axios全局接口防抖节流封装' },
            { text: 'Web安全', link: 'frontend-deep/前端技术学习-Web安全' },
          ],
        },
        {
          text: '游戏开发深度',
          icon: 'gamepad',
          children: [
            { text: 'Godot是什么', link: 'game-deep/Godot是什么' },
            { text: 'Unity是什么', link: 'game-deep/Unity是什么' },
            { text: 'Unreal Engine是什么', link: 'game-deep/Unreal Engine是什么' },
          ],
        },
      ],
    },
    {
      text: '🛠️ 实战项目',
      icon: 'tools',
      prefix: '/projects/',
      children: [
        {
          text: '游戏项目',
          icon: 'gamepad',
          children: [
            { text: '打地鼠（Godot+C#）', link: 'game/打地鼠-Godot-CSharp完整教程' },
          ],
        },
        {
          text: '物联网项目',
          icon: 'cloud',
          children: [
            { text: '什么是物联网', link: 'iot/什么是物联网' },
            { text: '什么是ThingsBoard', link: 'iot/什么是ThingsBoard' },
            { text: '基于MQTT的RPC协议', link: 'iot/基于MQTT的RPC协议' },
            { text: '在Ubuntu（Linux）中部署ThingsBoard', link: 'iot/在Ubuntu（Linux）中部署ThingsBoard' },
            { text: '在Windows10中部署ThingsBoard', link: 'iot/在Windows10中部署ThingsBoard' },
          ],
        },
        {
          text: '前端项目',
          icon: 'code',
          children: [],
        },
        {
          text: 'AI项目',
          icon: 'robot',
          children: [],
        },
      ],
    },
    {
      text: '💡 面试准备',
      icon: 'graduation-cap',
      prefix: '/interview/',
      children: [
        {
          text: '前端面试',
          icon: 'code',
          children: [
            { text: 'Vue篇', link: 'frontend/2023年前端面试系列-vue篇' },
            { text: 'JS篇', link: 'frontend/2023年前端面试系列-JS篇' },
            { text: 'HTML&CSS篇', link: 'frontend/2023年前端面试系列-HTML&CSS篇' },
            { text: 'TypeScript篇', link: 'frontend/前端面试系列-TypeScript篇' },
            { text: '性能优化篇', link: 'frontend/前端面试系列-性能优化篇' },
            { text: '工程化篇', link: 'frontend/前端面试系列-工程化篇' },
            { text: '50道CSS基础面试题（附答案）', link: 'frontend/前端面试系列-50道CSS基础面试题（附答案）' },
            { text: 'HTML 5 语义化', link: 'frontend/前端面试系列-HTML 5 语义化' },
          ],
        },
        {
          text: '算法刷题',
          icon: 'function',
          children: [],
        },
        {
          text: '系统设计',
          icon: 'sitemap',
          children: [],
        },
        {
          text: '面试技巧',
          icon: 'lightbulb',
          children: [],
        },
      ],
    },
    {
      text: '📰 技术资讯',
      icon: 'newspaper',
      prefix: '/news/',
      children: [
        {
          text: 'AIGC资讯',
          icon: 'robot',
          children: [
            {
              text: '大语言模型',
              prefix: 'aigc/大语言模型/',
              children: [
                { text: 'OpenAI接口文档', link: 'OpenAI接口文档' },
                { text: 'Llama 2：详解Meta的大语言模型!', link: 'Llama 2：详解Meta的大语言模型!' },
                { text: 'Llama 3：Meta开源大模型的进化之路', link: 'Llama 3：Meta开源大模型的进化之路' },
                { text: '2025年大模型技术突破与趋势', link: '2025年大模型技术突破与趋势' },
              ],
            },
            {
              text: 'AI框架',
              prefix: 'aigc/AI框架/',
              children: [
                { text: 'LangChain：构建AI智能体的操作系统', link: 'LangChain：构建AI智能体的操作系统' },
                { text: '2025年大模型部署框架全解析：vLLM vs Ollama', link: '2025年大模型部署框架全解析：vLLM vs Ollama' },
              ],
            },
            {
              text: 'AI应用',
              prefix: 'aigc/AI应用/',
              children: [
                { text: '2025年AIGC年度回顾特刊', link: '2025年AIGC年度回顾特刊' },
                { text: '本周AIGC资讯-第2期', link: '本周AIGC资讯-第2期' },
                { text: '本周AIGC资讯-第1期', link: '本周AIGC资讯-第1期' },
              ],
            },
          ],
        },
        {
          text: '行业报告',
          icon: 'chart-line',
          children: [],
        },
        {
          text: '技术趋势',
          icon: 'trending-up',
          children: [],
        },
        {
          text: '年度回顾',
          icon: 'star',
          children: [],
        },
      ],
    },
    {
      text: '📝 个人随笔',
      icon: 'pen',
      prefix: '/essays/',
      children: [
        { text: '音乐', icon: 'music', link: 'blogs/music/page' },
        { text: '笔记', icon: 'note', link: 'blogs/notes/page' },
        { text: '摄影', icon: 'camera', link: 'blogs/photography/page' },
      ],
    },
    {
      text: '🏷️ 标签云',
      icon: 'tags',
      prefix: '/tags/',
      children: [
        {
          text: '技术领域',
          icon: 'layers',
          children: [],
        },
        {
          text: '内容类型',
          icon: 'list',
          children: [],
        },
        {
          text: '难度等级',
          icon: 'signal',
          children: [],
        },
      ],
    },
    'intro',
    'slides',
  ],
})