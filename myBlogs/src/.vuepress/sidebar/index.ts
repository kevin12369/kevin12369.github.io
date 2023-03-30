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
      ],
    },
    'intro',
    'slides',
  ],
})
