import { defineClientConfig } from "@vuepress/client";

import HopeIcon from "@theme-hope/components/HopeIcon";
import Layout from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js";
import NotFound from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/layouts/NotFound.js";

import { useScrollPromise } from "@theme-hope/composables/index";
import { injectDarkmode, setupDarkmode } from "@theme-hope/modules/outlook/composables/index";
import { setupSidebarItems } from "@theme-hope/modules/sidebar/composables/index";

import "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/styles/index.scss";

import BloggerInfo from "@theme-hope/modules/blog/components/BloggerInfo";
import { setupBlog } from "@theme-hope/modules/blog/composables/index";
import BlogCategory from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogCategory.js";
import BlogHome from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogHome.js";
import BlogType from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/BlogType.js";
import Timeline from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/modules/blog/layouts/Timeline.js";
import "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/modules/blog/styles/layout.scss";
import GlobalEncrypt from "@theme-hope/modules/encrypt/components/GlobalEncrypt";
import LocalEncrypt from "@theme-hope/modules/encrypt/components/LocalEncrypt";
import Slide from "D:/code/myBlogs/myBlogs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-beta.181_e7jwb2ulu5orbkux7obq5onfau/node_modules/vuepress-theme-hope/lib/client/layouts/Slide.js";

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // render icon for auto-catalog
    app.component("HopeIcon", HopeIcon);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});