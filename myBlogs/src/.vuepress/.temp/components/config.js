import { defineClientConfig } from "@vuepress/client";
import { hasGlobalComponent } from "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/vuepress-shared@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-shared/lib/client/index.js";
import { h } from "vue";

import { useStyleTag } from "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/@vueuse+core@10.7.0_vue@3.3.10/node_modules/@vueuse/core/index.mjs";
import Badge from "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";
import BackToTop from "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/components/BackToTop.js";

import "E:/newTest/myBlogs/myBlogs/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.2_vuepress@2.0.0-rc.0/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
      useStyleTag(`\
  @import url("https://at.alicdn.com/t/c/font_2410206_5vb9zlyghj.css");
  `);
  },
  rootComponents: [
    () => h(BackToTop, {}),
  ],
});
