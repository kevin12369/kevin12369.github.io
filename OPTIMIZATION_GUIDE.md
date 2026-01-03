# 博客项目优化指南

## 当前问题

### 1. 配置过时告警

#### 问题1：container已弃用
```
container is deprecated, please use "hint" instead.
```
**状态**：✅ 已修复
**修复内容**：将`mdEnhance`配置中的`container: true`改为`hint: true`

#### 问题2：presentation插件配置
```
vuepress-plugin-md-enhance: ✖ presentation is no longer supported, please use revealJs instead.
```
**状态**：✅ 已修复
**修复内容**：将`presentation`配置改为`revealJs`

### 2. Frontmatter配置告警

#### 问题：tags已弃用
```
vuepress-theme-hope: ⚠ tags is deprecated in ... frontmatter, please use "tag" instead.
```
**状态**：⏳ 待修复
**影响文件**：约30篇文章
**修复方法**：
```bash
# 运行修复脚本
python fix-tags.py
```

### 3. 依赖过时告警

#### 问题：Browserslist过时
```
Browserslist: caniuse-lite is outdated. Please run: npx update-browserslist-db@latest
```
**状态**：✅ 已修复
**修复内容**：已更新到最新版本 1.0.30001762

### 4. 性能告警

#### 问题：Chunk过大
```
Some chunks are larger than 1024 kB after minification.
```
**状态**：⏳ 待优化
**影响**：加载性能
**优化建议**：
1. 使用动态导入进行代码分割
2. 配置chunk大小限制
3. 优化依赖包

**优化配置示例**：
```typescript
// docs/.vuepress/config.ts
export default defineUserConfig({
  // ... 其他配置
  bundler: {
    vite: {
      build: {
        rollupOptions: {
          output: {
            manualChunks: {
              'vue-vendor': ['vue', 'vue-router'],
              'theme-vendor': ['vuepress-theme-hope'],
            },
          },
        },
        chunkSizeWarningLimit: 1000,
      },
    },
  },
});
```

### 5. Vue警告

#### 问题：无效的vnode类型
```
[Vue warn]: Invalid vnode type when creating vnode: undefined.
```
**状态**：⏳ 待排查
**影响**：可能有组件渲染问题
**排查方法**：
1. 检查自定义组件配置
2. 检查插件配置
3. 查看浏览器控制台错误信息

## 优化步骤

### 步骤1：修复frontmatter（推荐）

```bash
# 运行修复脚本
python fix-tags.py

# 查看修改
git diff

# 确认无误后提交
git add .
git commit -m "fix: 更新frontmatter中的tags为tag"
```

### 步骤2：优化构建性能（可选）

在`docs/.vuepress/config.ts`中添加：
```typescript
export default defineUserConfig({
  bundler: {
    vite: {
      build: {
        rollupOptions: {
          output: {
            manualChunks(id) {
              if (id.includes('node_modules')) {
                if (id.includes('vue')) {
                  return 'vue-vendor';
                }
                if (id.includes('vuepress-theme-hope')) {
                  return 'theme-vendor';
                }
                return 'vendor';
              }
            },
          },
        },
        chunkSizeWarningLimit: 1000,
      },
    },
  },
});
```

### 步骤3：验证修复

```bash
# 清理缓存
pnpm docs:clean-dev

# 重新构建
pnpm docs:build

# 检查告警是否减少
```

## 依赖更新建议

### 当前版本
```json
{
  "devDependencies": {
    "@vuepress/client": "2.0.0-rc.0",
    "vue": "^3.3.10",
    "vuepress": "2.0.0-rc.0",
    "vuepress-theme-hope": "2.0.0-rc.2"
  }
}
```

### 建议更新
```bash
# 更新所有依赖
pnpm update

# 或者更新到最新版本
pnpm update @vuepress/client vue vuepress vuepress-theme-hope
```

## 优化效果预期

### 修复前
- 告警数量：约40个
- 构建时间：85.50秒
- Chunk大小：>1024KB

### 修复后（预期）
- 告警数量：约5个（仅剩Vue警告）
- 构建时间：80-85秒（略有改善）
- Chunk大小：<=1000KB

## 注意事项

1. **备份重要文件**：在进行批量修改前，建议先备份
2. **逐步修复**：建议逐步修复，每次修复后验证
3. **测试构建**：每次修改后都要测试构建是否成功
4. **检查功能**：修复后要检查博客功能是否正常

## 后续优化建议

1. **定期更新依赖**：每月检查一次依赖更新
2. **监控构建性能**：定期检查构建时间和告警
3. **优化图片资源**：压缩图片，使用WebP格式
4. **启用PWA**：考虑启用PWA功能提升体验
5. **配置CDN**：使用CDN加速静态资源加载

## 参考文档

- [VuePress官方文档](https://v2.vuepress.vuejs.org/)
- [vuepress-theme-hope文档](https://theme-hope.vuejs.press/)
- [Vite构建优化](https://vitejs.dev/guide/build.html)