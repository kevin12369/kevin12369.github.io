import { sidebar } from 'vuepress-theme-hope'

export const zhSidebar = sidebar({
  '/': [
    '',
    // {
    //   text: '物联网知识合集',
    //   icon: 'note',
    //   prefix: 'programming/thingsboard/',
    //   children: [
    //     {
    //       text: '什么是物联网',
    //       link: '什么是物联网',
    //     },
    //     {
    //       text: '什么是ThingsBoard',
    //       link: '什么是ThingsBoard',
    //     },
    //     {
    //       text: '在Ubuntu（Linux）中部署ThingsBoard',
    //       link: '在Ubuntu（Linux）中部署ThingsBoard',
    //     },
    //     {
    //       text: '在Windows10中部署ThingsBoard',
    //       link: '在Windows10中部署ThingsBoard',
    //     },
    //   ],
    // },
    {
      text: '前端面试资料',
      icon: 'note',
      prefix: 'programming/vue/',
      children: [
        {
          text: '2023年前端面试系列-vue篇',
          link: '2023年前端面试系列-vue篇',
        },
        {
          text: '2023年前端面试系列-JS篇',
          link: '2023年前端面试系列-JS篇',
        },
        {
          text: '2023年前端面试系列-HTML&CSS篇',
          link: '2023年前端面试系列-HTML&CSS篇',
        },
      ],
    },
    {
      text: '前端学习资料',
      icon: 'note',
      prefix: 'programming/technology/',
      children: [
        {
          text: 'AST抽象语法树',
          link: 'AST抽象语法树',
        },
        {
          text: 'post为什么会发送两次请求',
          link: 'post为什么会发送两次请求',
        },
      ],
    },
    {
      text: '小白的游戏历程',
      icon: 'note',
      prefix: 'GamesStudio/GameProductionTutorial/',
      children: [
        {
          text: 'Unity是什么',
          link: 'Unity是什么',
        },
        {
          text: '打地鼠',
          link: '打地鼠',
        },
      ],
    },
    {
      text: '探索人工智能',
      icon: 'note',
      prefix: 'GamesStudio/GameProductionTutorial/',
      children: [
        {
          text: 'OpenAI接口文档',
          link: 'OpenAI接口文档',
        },
        {
          text: 'Llama 2：详解Meta的大语言模型!',
          link: 'Llama 2：详解Meta的大语言模型!',
        },
      ],
    },
    'intro',
    'slides',
  ],
})
