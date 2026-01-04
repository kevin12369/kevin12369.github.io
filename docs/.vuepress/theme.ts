import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: 'https://kevin12369.github.io',

  author: {
    name: 'Kevin',
    url: 'https://github.com/kevin12369',
  },

  logo: '/logo.svg',

  docsDir: 'docs',

  // 禁用主题切换功能
  themePlugins: {
    // 移除主题切换插件
    themeColor: false,
    // 移除返回顶部按钮
    backToTop: false,
  },

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '© 2024-present Kevin | MIT License',
      displayFooter: true,
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  plugins: {
    icon: {
      assets: 'iconify',
    },

    blog: {
      description: '探索AI增强型全栈开发的实践与思考',
      intro: '/intro.html',
      medias: {
        GitHub: 'https://github.com/kevin12369',
        Email: 'mailto:491750329@qq.com',
      },
    },

    mdEnhance: {
      align: true,
      attrs: true,
      chartjs: true,
      codeTabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      hint: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ['ts', 'vue'],
      },
      stylize: [
        {
          matcher: 'Recommended',
          replacer: ({ tag }) => {
            if (tag === 'em')
              return {
                tag: 'Badge',
                attrs: { type: 'tip' },
                content: 'Recommended',
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: '/favicon.ico',
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: '/assets/icon/apple-icon-152.png',
        statusBarColor: 'black',
      },
      msTile: {
        image: '/assets/icon/ms-icon-144.png',
        color: '#ffffff',
      },
      manifest: {
        icons: [
          {
            src: '/assets/icon/chrome-mask-512.png',
            sizes: '512x512',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-mask-192.png',
            sizes: '192x192',
            purpose: 'maskable',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/assets/icon/chrome-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
        ],
      },
    },

    seo: true,
    sitemap: true,
  },
});