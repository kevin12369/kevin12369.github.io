# Kevin 的博客

基于 VuePress 2.0 + vuepress-theme-hope 主题构建的个人技术博客。

## 项目结构

```
myBlogs/
├── docs/                 # 博客源码目录
│   ├── .vuepress/        # VuePress 配置
│   ├── blogs/            # 博客文章
│   ├── programming/      # 编程相关文章
│   └── thingsboard/      # ThingsBoard 相关文章
├── .github/              # GitHub Actions 配置
├── package.json          # 项目配置
└── pnpm-lock.yaml        # 依赖锁定文件
```

## 本地开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm docs:dev
```

### 构建生产版本

```bash
pnpm docs:build
```

## 部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。

### 部署步骤

1. 将代码推送到 GitHub 仓库
2. 在 GitHub 仓库设置中启用 GitHub Pages：
   - 进入 `Settings` → `Pages`
   - Source 选择 `GitHub Actions`
3. 每次推送到 `master` 分支会自动触发部署

## 技术栈

- **VuePress 2.0**: 静态站点生成器
- **vuepress-theme-hope**: 主题
- **pnpm**: 包管理器

## 许可证

MIT