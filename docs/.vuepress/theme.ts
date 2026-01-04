import { hopeTheme } from "vuepress-theme-hope";
import { zhNavbar } from "./navbar/index.js";
import { zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: 'https://kevin12369.github.io',

  author: {
    name: 'Kevin',
    url: 'https://github.com/kevin12369',
  },

  iconAssets: 'iconify',

  logo: '/logo.svg',

  docsDir: 'docs',

  locales: {
    '/': {
      navbar: zhNavbar,
      sidebar: zhSidebar,
      footer: '默认页脚',
      displayFooter: true,
      metaLocales: {
        editLink: '在 GitHub 上编辑此页',
      },
    },
  },

  plugins: {
    mdEnhance: {
      gfm: true,
      hint: true,
      mark: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },
  },
});