import { sidebar } from 'vuepress-theme-hope'

export const enSidebar = sidebar({
  '/en/': [
    '',
    {
      text: '📚 Deep Learning',
      icon: 'book',
      prefix: '/en/learning/',
      children: [
        {
          text: 'AI Full Stack',
          icon: 'brain',
          children: [
            {
              text: '01. AI-Augmented Full Stack Developer',
              link: 'ai-fullstack/01-AI-Augmented-Full-Stack-Developer',
            },
            {
              text: '02. Evolution of Full Stack Development',
              link: 'ai-fullstack/02-Evolution-of-Full-Stack-Development',
            },
          ],
        },
        {
          text: 'Data Structures & Algorithms',
          icon: 'function',
          children: [],
        },
        {
          text: 'Frontend Deep Dive',
          icon: 'code',
          children: [],
        },
        {
          text: 'Game Development',
          icon: 'gamepad',
          children: [],
        },
      ],
    },
    {
      text: '🛠️ Projects',
      icon: 'tools',
      prefix: '/en/projects/',
      children: [
        {
          text: 'Game Projects',
          icon: 'gamepad',
          children: [],
        },
        {
          text: 'IoT Projects',
          icon: 'cloud',
          children: [],
        },
        {
          text: 'Frontend Projects',
          icon: 'code',
          children: [],
        },
        {
          text: 'AI Projects',
          icon: 'robot',
          children: [],
        },
      ],
    },
    {
      text: '💡 Interview Prep',
      icon: 'graduation-cap',
      prefix: '/en/interview/',
      children: [
        {
          text: 'Frontend Interview',
          icon: 'code',
          children: [],
        },
        {
          text: 'Algorithm Practice',
          icon: 'function',
          children: [],
        },
        {
          text: 'System Design',
          icon: 'sitemap',
          children: [],
        },
        {
          text: 'Interview Skills',
          icon: 'lightbulb',
          children: [],
        },
      ],
    },
    {
      text: '📰 Tech News',
      icon: 'newspaper',
      prefix: '/en/news/',
      children: [
        {
          text: 'AIGC News',
          icon: 'robot',
          children: [],
        },
        {
          text: 'Industry Reports',
          icon: 'chart-line',
          children: [],
        },
        {
          text: 'Tech Trends',
          icon: 'trending-up',
          children: [],
        },
        {
          text: 'Annual Review',
          icon: 'star',
          children: [],
        },
      ],
    },
    {
      text: '📝 Personal',
      icon: 'pen',
      prefix: '/en/essays/',
      children: [
        { text: 'Music', icon: 'music', link: 'blogs/music/page' },
        { text: 'Notes', icon: 'note', link: 'blogs/notes/page' },
        { text: 'Photography', icon: 'camera', link: 'blogs/photography/page' },
      ],
    },
    {
      text: '🏷️ Tags',
      icon: 'tags',
      prefix: '/en/tags/',
      children: [
        {
          text: 'Technology',
          icon: 'layers',
          children: [],
        },
        {
          text: 'Content Type',
          icon: 'list',
          children: [],
        },
        {
          text: 'Difficulty',
          icon: 'signal',
          children: [],
        },
      ],
    },
    'intro',
  ],
})