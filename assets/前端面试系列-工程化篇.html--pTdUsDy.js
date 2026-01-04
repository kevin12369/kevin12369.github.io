import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as s,o as d}from"./app-BnzN889n.js";const l={};function a(r,e){return d(),n("div",null,[...e[0]||(e[0]=[s(`<h1 id="前端工程化总结-2025版" tabindex="-1"><a class="header-anchor" href="#前端工程化总结-2025版" aria-hidden="true">#</a> 前端工程化总结（2025版）</h1><h2 id="_2025年前端工程化趋势" tabindex="-1"><a class="header-anchor" href="#_2025年前端工程化趋势" aria-hidden="true">#</a> 2025年前端工程化趋势</h2><ul><li><strong>Vite 成为主流</strong>：取代 Webpack 成为默认构建工具</li><li><strong>Monorepo 普及</strong>：pnpm workspace、Turborepo</li><li><strong>CI/CD 自动化</strong>：GitHub Actions、GitLab CI</li><li><strong>微前端架构</strong>：qiankun、Module Federation</li><li><strong>低代码平台</strong>：提升开发效率</li></ul><h2 id="什么是前端工程化" tabindex="-1"><a class="header-anchor" href="#什么是前端工程化" aria-hidden="true">#</a> 什么是前端工程化？</h2><p>前端工程化是指使用软件工程的技术和方法，来规范前端开发流程，提高开发效率、代码质量和可维护性。</p><p><strong>核心要素</strong>：</p><ol><li><strong>模块化</strong>：代码组织</li><li><strong>组件化</strong>：UI 组件复用</li><li><strong>规范化</strong>：代码规范、Git 规范</li><li><strong>自动化</strong>：构建、测试、部署</li><li><strong>工具化</strong>：开发工具、调试工具</li></ol><h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2><h3 id="_1-模块化方案" tabindex="-1"><a class="header-anchor" href="#_1-模块化方案" aria-hidden="true">#</a> 1. 模块化方案</h3><p><strong>CommonJS</strong>（Node.js）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 导出
module.exports = {
  name: &#39;module&#39;
};

// 或
exports.name = &#39;module&#39;;

// 导入
const module = require(&#39;./module&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ES Modules</strong>（现代浏览器、Node.js）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 导出
export const name = &#39;module&#39;;
export default function() {}

// 导入
import module, { name } from &#39;./module&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>AMD</strong>（RequireJS）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 定义模块
define([&#39;dependency&#39;], function(dependency) {
  return {
    name: &#39;module&#39;
  };
});

// 使用模块
require([&#39;module&#39;], function(module) {
  console.log(module.name);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>UMD</strong>（通用模块定义）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>(function (root, factory) {
  if (typeof define === &#39;function&#39; &amp;&amp; define.amd) {
    define([&#39;dependency&#39;], factory);
  } else if (typeof module === &#39;object&#39; &amp;&amp; module.exports) {
    module.exports = factory(require(&#39;dependency&#39;));
  } else {
    root.Module = factory(root.Dependency);
  }
}(this, function (dependency) {
  return {
    name: &#39;module&#39;
  };
}));
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-模块化最佳实践" tabindex="-1"><a class="header-anchor" href="#_2-模块化最佳实践" aria-hidden="true">#</a> 2. 模块化最佳实践</h3><ul><li>优先使用 ES Modules</li><li>使用绝对路径导入</li><li>避免循环依赖</li><li>合理拆分模块</li></ul><h2 id="构建工具" tabindex="-1"><a class="header-anchor" href="#构建工具" aria-hidden="true">#</a> 构建工具</h2><h3 id="_3-webpack" tabindex="-1"><a class="header-anchor" href="#_3-webpack" aria-hidden="true">#</a> 3. Webpack</h3><p><strong>核心概念</strong>：</p><ul><li><strong>Entry</strong>：入口</li><li><strong>Output</strong>：输出</li><li><strong>Loader</strong>：转换器</li><li><strong>Plugin</strong>：插件</li><li><strong>Mode</strong>：模式</li></ul><p><strong>配置示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const path = require(&#39;path&#39;);
const HtmlWebpackPlugin = require(&#39;html-webpack-plugin&#39;);

module.exports = {
  mode: &#39;production&#39;,
  entry: &#39;./src/index.js&#39;,
  output: {
    path: path.resolve(__dirname, &#39;dist&#39;),
    filename: &#39;bundle.js&#39;,
    clean: true
  },
  module: {
    rules: [
      {
        test: /\\.js$/,
        exclude: /node_modules/,
        use: {
          loader: &#39;babel-loader&#39;
        }
      },
      {
        test: /\\.css$/,
        use: [&#39;style-loader&#39;, &#39;css-loader&#39;]
      },
      {
        test: /\\.(png|jpg|gif)$/,
        type: &#39;asset/resource&#39;
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: &#39;./src/index.html&#39;
    })
  ],
  optimization: {
    splitChunks: {
      chunks: &#39;all&#39;
    }
  },
  devServer: {
    static: &#39;./dist&#39;,
    hot: true
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-vite" tabindex="-1"><a class="header-anchor" href="#_4-vite" aria-hidden="true">#</a> 4. Vite</h3><p><strong>优势</strong>：</p><ul><li>极快的冷启动</li><li>即时热更新（HMR）</li><li>原生 ES Modules 支持</li><li>开箱即用的 TypeScript 支持</li></ul><p><strong>配置示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>import { defineConfig } from &#39;vite&#39;;
import react from &#39;@vitejs/plugin-react&#39;;

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: &#39;dist&#39;,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [&#39;react&#39;, &#39;react-dom&#39;]
        }
      }
    }
  },
  server: {
    port: 3000,
    proxy: {
      &#39;/api&#39;: &#39;http://localhost:8080&#39;
    }
  }
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-webpack-vs-vite" tabindex="-1"><a class="header-anchor" href="#_5-webpack-vs-vite" aria-hidden="true">#</a> 5. Webpack vs Vite</h3><table><thead><tr><th>特性</th><th>Webpack</th><th>Vite</th></tr></thead><tbody><tr><td>启动速度</td><td>慢</td><td>快</td></tr><tr><td>HMR 速度</td><td>慢</td><td>快</td></tr><tr><td>配置复杂度</td><td>高</td><td>低</td></tr><tr><td>生态成熟度</td><td>高</td><td>中</td></tr><tr><td>适用场景</td><td>大型项目</td><td>中小型项目</td></tr></tbody></table><h2 id="包管理工具" tabindex="-1"><a class="header-anchor" href="#包管理工具" aria-hidden="true">#</a> 包管理工具</h2><h3 id="_6-npm-vs-yarn-vs-pnpm" tabindex="-1"><a class="header-anchor" href="#_6-npm-vs-yarn-vs-pnpm" aria-hidden="true">#</a> 6. npm vs yarn vs pnpm</h3><p><strong>npm</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install
npm run build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yarn install
yarn build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pnpm</strong>（推荐）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pnpm install
pnpm build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>pnpm 优势</strong>：</p><ul><li>节省磁盘空间</li><li>更快的安装速度</li><li>严格的依赖管理</li><li>支持 Monorepo</li></ul><h3 id="_7-monorepo" tabindex="-1"><a class="header-anchor" href="#_7-monorepo" aria-hidden="true">#</a> 7. Monorepo</h3><p><strong>pnpm workspace</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>// pnpm-workspace.yaml
packages:
  - &#39;packages/*&#39;

// package.json
{
  &quot;name&quot;: &quot;my-monorepo&quot;,
  &quot;private&quot;: true,
  &quot;scripts&quot;: {
    &quot;dev&quot;: &quot;pnpm --filter &#39;./packages/**&#39; dev&quot;,
    &quot;build&quot;: &quot;pnpm --filter &#39;./packages/**&#39; build&quot;
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Turborepo</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>// turbo.json
{
  &quot;pipeline&quot;: {
    &quot;build&quot;: {
      &quot;dependsOn&quot;: [&quot;^build&quot;],
      &quot;outputs&quot;: [&quot;dist/**&quot;]
    },
    &quot;test&quot;: {
      &quot;dependsOn&quot;: [&quot;build&quot;],
      &quot;outputs&quot;: [&quot;coverage/**&quot;]
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码规范" tabindex="-1"><a class="header-anchor" href="#代码规范" aria-hidden="true">#</a> 代码规范</h2><h3 id="_8-eslint" tabindex="-1"><a class="header-anchor" href="#_8-eslint" aria-hidden="true">#</a> 8. ESLint</h3><p><strong>配置示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    &#39;eslint:recommended&#39;,
    &#39;plugin:react/recommended&#39;,
    &#39;plugin:react-hooks/recommended&#39;,
    &#39;plugin:@typescript-eslint/recommended&#39;
  ],
  parser: &#39;@typescript-eslint/parser&#39;,
  parserOptions: {
    ecmaVersion: &#39;latest&#39;,
    sourceType: &#39;module&#39;,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    &#39;react&#39;,
    &#39;react-hooks&#39;,
    &#39;@typescript-eslint&#39;
  ],
  rules: {
    &#39;no-console&#39;: &#39;warn&#39;,
    &#39;no-unused-vars&#39;: &#39;off&#39;,
    &#39;@typescript-eslint/no-unused-vars&#39;: &#39;error&#39;
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-prettier" tabindex="-1"><a class="header-anchor" href="#_9-prettier" aria-hidden="true">#</a> 9. Prettier</h3><p><strong>配置示例</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;semi&quot;: false,
  &quot;singleQuote&quot;: true,
  &quot;tabWidth&quot;: 2,
  &quot;trailingComma&quot;: &quot;es5&quot;,
  &quot;printWidth&quot;: 100
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-stylelint" tabindex="-1"><a class="header-anchor" href="#_10-stylelint" aria-hidden="true">#</a> 10. Stylelint</h3><p><strong>配置示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module.exports = {
  extends: [
    &#39;stylelint-config-standard&#39;,
    &#39;stylelint-config-recommended-scss&#39;
  ],
  rules: {
    &#39;indentation&#39;: 2,
    &#39;string-quotes&#39;: &#39;single&#39;,
    &#39;no-duplicate-selectors&#39;: true
  }
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_11-husky-lint-staged" tabindex="-1"><a class="header-anchor" href="#_11-husky-lint-staged" aria-hidden="true">#</a> 11. Husky + lint-staged</h3><p><strong>配置 Husky</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install husky --save-dev
npx husky install
npx husky add .husky/pre-commit &quot;npx lint-staged&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>配置 lint-staged</strong>：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>{
  &quot;lint-staged&quot;: {
    &quot;*.{js,jsx,ts,tsx}&quot;: [
      &quot;eslint --fix&quot;,
      &quot;prettier --write&quot;
    ],
    &quot;*.{css,scss}&quot;: [
      &quot;stylelint --fix&quot;,
      &quot;prettier --write&quot;
    ],
    &quot;*.{json,md}&quot;: [
      &quot;prettier --write&quot;
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ci-cd" tabindex="-1"><a class="header-anchor" href="#ci-cd" aria-hidden="true">#</a> CI/CD</h2><h3 id="_12-github-actions" tabindex="-1"><a class="header-anchor" href="#_12-github-actions" aria-hidden="true">#</a> 12. GitHub Actions</h3><p><strong>配置示例</strong>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>name: CI/CD

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: &#39;18&#39;
      - name: Install dependencies
        run: pnpm install
      - name: Run tests
        run: pnpm test
      - name: Build
        run: pnpm build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == &#39;refs/heads/main&#39;
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: \${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: \${{ secrets.ORG_ID }}
          vercel-project-id: \${{ secrets.PROJECT_ID }}
          vercel-args: &#39;--prod&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_13-gitlab-ci" tabindex="-1"><a class="header-anchor" href="#_13-gitlab-ci" aria-hidden="true">#</a> 13. GitLab CI</h3><p><strong>配置示例</strong>：</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - pnpm install
    - pnpm test

build:
  stage: build
  script:
    - pnpm build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h2><h3 id="_14-单元测试" tabindex="-1"><a class="header-anchor" href="#_14-单元测试" aria-hidden="true">#</a> 14. 单元测试</h3><p><strong>Jest</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// math.test.js
import { add, subtract } from &#39;./math&#39;;

describe(&#39;Math&#39;, () =&gt; {
  test(&#39;add&#39;, () =&gt; {
    expect(add(1, 2)).toBe(3);
  });

  test(&#39;subtract&#39;, () =&gt; {
    expect(subtract(5, 3)).toBe(2);
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Vitest</strong>（推荐）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// math.test.js
import { describe, it, expect } from &#39;vitest&#39;;
import { add, subtract } from &#39;./math&#39;;

describe(&#39;Math&#39;, () =&gt; {
  it(&#39;add&#39;, () =&gt; {
    expect(add(1, 2)).toBe(3);
  });

  it(&#39;subtract&#39;, () =&gt; {
    expect(subtract(5, 3)).toBe(2);
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-端到端测试" tabindex="-1"><a class="header-anchor" href="#_15-端到端测试" aria-hidden="true">#</a> 15. 端到端测试</h3><p><strong>Cypress</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// cypress/e2e/home.cy.js
describe(&#39;Home Page&#39;, () =&gt; {
  it(&#39;should display welcome message&#39;, () =&gt; {
    cy.visit(&#39;/&#39;);
    cy.contains(&#39;Welcome&#39;);
  });

  it(&#39;should navigate to about page&#39;, () =&gt; {
    cy.visit(&#39;/&#39;);
    cy.get(&#39;a[href=&quot;/about&quot;]&#39;).click();
    cy.url().should(&#39;include&#39;, &#39;/about&#39;);
  });
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Playwright</strong>（推荐）：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// tests/home.spec.ts
import { test, expect } from &#39;@playwright/test&#39;;

test(&#39;should display welcome message&#39;, async ({ page }) =&gt; {
  await page.goto(&#39;/&#39;);
  await expect(page.locator(&#39;text=Welcome&#39;)).toBeVisible();
});

test(&#39;should navigate to about page&#39;, async ({ page }) =&gt; {
  await page.goto(&#39;/&#39;);
  await page.click(&#39;a[href=&quot;/about&quot;]&#39;);
  await expect(page).toHaveURL(/.*\\/about/);
});
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><h3 id="_16-部署平台" tabindex="-1"><a class="header-anchor" href="#_16-部署平台" aria-hidden="true">#</a> 16. 部署平台</h3><p><strong>Vercel</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install -g vercel
vercel
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Netlify</strong>：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npm install -g netlify-cli
netlify deploy --prod
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Docker</strong>：</p><div class="language-docker line-numbers-mode" data-ext="docker"><pre class="language-docker"><code># Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD [&quot;npm&quot;, &quot;start&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_17-docker-compose" tabindex="-1"><a class="header-anchor" href="#_17-docker-compose" aria-hidden="true">#</a> 17. Docker Compose</h3><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code>version: &#39;3.8&#39;

services:
  app:
    build: .
    ports:
      - &quot;3000:3000&quot;
    environment:
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: postgres:14
    environment:
      - POSTGRES_PASSWORD=password
    volumes:
      - db-data:/var/lib/postgresql/data

volumes:
  db-data:
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="微前端" tabindex="-1"><a class="header-anchor" href="#微前端" aria-hidden="true">#</a> 微前端</h2><h3 id="_18-qiankun" tabindex="-1"><a class="header-anchor" href="#_18-qiankun" aria-hidden="true">#</a> 18. qiankun</h3><p><strong>主应用</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// main.js
import { registerMicroApps, start } from &#39;qiankun&#39;;

registerMicroApps([
  {
    name: &#39;reactApp&#39;,
    entry: &#39;//localhost:7100&#39;,
    container: &#39;#container&#39;,
    activeRule: &#39;/react&#39;,
  },
  {
    name: &#39;vueApp&#39;,
    entry: &#39;//localhost:7200&#39;,
    container: &#39;#container&#39;,
    activeRule: &#39;/vue&#39;,
  },
]);

start();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>子应用</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// public-path.js
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

// main.js
import &#39;./public-path&#39;;
import React from &#39;react&#39;;
import ReactDOM from &#39;react-dom&#39;;
import App from &#39;./App&#39;;

let root;

function render(props) {
  const { container } = props;
  root = ReactDOM.createRoot(
    container ? container.querySelector(&#39;#root&#39;) : document.querySelector(&#39;#root&#39;)
  );
  root.render(&lt;App /&gt;);
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log(&#39;[react16] react app bootstraped&#39;);
}

export async function mount(props) {
  console.log(&#39;[react16] props from main framework&#39;, props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  root.unmount(
    container ? container.querySelector(&#39;#root&#39;) : document.querySelector(&#39;#root&#39;)
  );
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_19-module-federation" tabindex="-1"><a class="header-anchor" href="#_19-module-federation" aria-hidden="true">#</a> 19. Module Federation</h3><p><strong>配置示例</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// webpack.config.js
const ModuleFederationPlugin = require(&#39;webpack/lib/container/ModuleFederationPlugin&#39;);

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: &#39;app1&#39;,
      filename: &#39;remoteEntry.js&#39;,
      exposes: {
        &#39;./Button&#39;: &#39;./src/Button&#39;,
      },
      shared: {
        react: { singleton: true },
        &#39;react-dom&#39;: { singleton: true },
      },
    }),
  ],
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="性能优化" tabindex="-1"><a class="header-anchor" href="#性能优化" aria-hidden="true">#</a> 性能优化</h2><h3 id="_20-构建优化" tabindex="-1"><a class="header-anchor" href="#_20-构建优化" aria-hidden="true">#</a> 20. 构建优化</h3><p><strong>代码分割</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 动态导入
const LazyComponent = React.lazy(() =&gt; import(&#39;./LazyComponent&#39;));

// 路由级别代码分割
const Home = () =&gt; import(&#39;./views/Home.vue&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Tree Shaking</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>// 使用 ES6 模块
import { debounce } from &#39;lodash-es&#39;;

// 配置
module.exports = {
  mode: &#39;production&#39;,
  optimization: {
    usedExports: true,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>压缩</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>const TerserPlugin = require(&#39;terser-webpack-plugin&#39;);

module.exports = {
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年新技术" tabindex="-1"><a class="header-anchor" href="#_2025年新技术" aria-hidden="true">#</a> 2025年新技术</h2><h3 id="_21-bun" tabindex="-1"><a class="header-anchor" href="#_21-bun" aria-hidden="true">#</a> 21. Bun</h3><p><strong>特点</strong>：</p><ul><li>更快的包管理</li><li>内置测试框架</li><li>原生 TypeScript 支持</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bun install
bun run build
bun test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_22-nx" tabindex="-1"><a class="header-anchor" href="#_22-nx" aria-hidden="true">#</a> 22. Nx</h3><p><strong>特点</strong>：</p><ul><li>高性能 Monorepo 工具</li><li>智能缓存</li><li>并行执行</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>npx create-nx-workspace@latest my-workspace
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_23-rspack" tabindex="-1"><a class="header-anchor" href="#_23-rspack" aria-hidden="true">#</a> 23. Rspack</h3><p><strong>特点</strong>：</p><ul><li>Rust 编写</li><li>兼容 Webpack API</li><li>更快的构建速度</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module.exports = {
  mode: &#39;development&#39;,
  devServer: {
    port: 3000,
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践" aria-hidden="true">#</a> 最佳实践</h2><h3 id="_24-工程化最佳实践" tabindex="-1"><a class="header-anchor" href="#_24-工程化最佳实践" aria-hidden="true">#</a> 24. 工程化最佳实践</h3><p><strong>项目结构</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my-project/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── public/
├── tests/
├── docs/
├── .eslintrc.js
├── .prettierrc
├── package.json
├── tsconfig.json
├── vite.config.js
└── README.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Git 工作流</strong>：</p><ol><li><code>main</code>：生产环境</li><li><code>develop</code>：开发环境</li><li><code>feature/*</code>：功能分支</li><li><code>bugfix/*</code>：修复分支</li><li><code>hotfix/*</code>：紧急修复</li></ol><p><strong>Commit 规范</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>feat: 添加新功能
fix: 修复bug
docs: 文档更新
style: 代码格式调整
refactor: 重构
test: 测试相关
chore: 构建/工具相关
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_25-工程化清单" tabindex="-1"><a class="header-anchor" href="#_25-工程化清单" aria-hidden="true">#</a> 25. 工程化清单</h3><p><strong>开发阶段</strong>：</p><ul><li>[ ] 使用 Vite 或 Webpack</li><li>[ ] 配置 TypeScript</li><li>[ ] 配置 ESLint、Prettier</li><li>[ ] 配置 Husky、lint-staged</li><li>[ ] 使用 Git Flow 工作流</li></ul><p><strong>测试阶段</strong>：</p><ul><li>[ ] 配置单元测试</li><li>[ ] 配置 E2E 测试</li><li>[ ] 配置测试覆盖率</li><li>[ ] 集成 CI/CD</li></ul><p><strong>部署阶段</strong>：</p><ul><li>[ ] 配置构建优化</li><li>[ ] 配置环境变量</li><li>[ ] 配置自动化部署</li><li>[ ] 配置监控告警</li></ul><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="_26-如何选择构建工具" tabindex="-1"><a class="header-anchor" href="#_26-如何选择构建工具" aria-hidden="true">#</a> 26. 如何选择构建工具？</h3><p><strong>选择 Vite</strong>：</p><ul><li>中小型项目</li><li>快速原型开发</li><li>需要快速启动</li></ul><p><strong>选择 Webpack</strong>：</p><ul><li>大型项目</li><li>复杂的构建需求</li><li>需要丰富的插件生态</li></ul><h3 id="_27-如何优化构建速度" tabindex="-1"><a class="header-anchor" href="#_27-如何优化构建速度" aria-hidden="true">#</a> 27. 如何优化构建速度？</h3><ol><li><strong>使用缓存</strong>：Webpack cache、Vite 预构建缓存</li><li><strong>并行处理</strong>：thread-loader、happypack</li><li><strong>减少依赖</strong>：按需引入、使用轻量级库</li><li><strong>使用更快的工具</strong>：pnpm、Bun、Rspack</li></ol><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>前端工程化是现代前端开发的基础，它通过模块化、规范化、自动化等手段，提高了开发效率和代码质量。选择合适的工具和流程，建立完善的工程化体系，是项目成功的关键。</p><p><strong>工程化原则</strong>：</p><ol><li><strong>自动化优先</strong>：减少手动操作</li><li><strong>规范化统一</strong>：统一代码风格和流程</li><li><strong>可维护性</strong>：代码易于理解和修改</li><li><strong>可扩展性</strong>：系统易于扩展和升级</li></ol><h2 id="参考链接" tabindex="-1"><a class="header-anchor" href="#参考链接" aria-hidden="true">#</a> 参考链接</h2><p><a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite 官方文档</a><a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">Webpack 官方文档</a><a href="https://docs.github.com/en/actions" target="_blank" rel="noopener noreferrer">GitHub Actions 文档</a><a href="https://qiankun.umijs.org/" target="_blank" rel="noopener noreferrer">qiankun 官方文档</a></p>`,149)])])}const c=i(l,[["render",a],["__file","前端面试系列-工程化篇.html.vue"]]);export{c as default};
