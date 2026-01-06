# MDX 文件格式规范

## 1. 文件命名规范

### 1.1 基本规则
- 使用中文或英文命名，简洁明了
- 避免使用特殊字符（除连字符 `-` 外）
- 文件扩展名统一使用 `.mdx`

### 1.2 文件夹结构
```
src/content/blog/
├── essays/          # 技术随笔
├── learning/        # 学习笔记
│   ├── algorithm/   # 算法
│   ├── frontend-deep/  # 前端深度
│   ├── game-deep/      # 游戏开发
│   └── llm/            # 大语言模型
├── interview/       # 面试题库
├── showcase/        # 项目展示
├── news/            # 技术资讯
│   └── aigc/        # AIGC资讯
└── tutorials/       # 教程
```

### 1.3 命名示例
```
✅ 正确示例：
- 程序员的成长之路.mdx
- TypeScript进阶指南.mdx
- 2025年AIGC年度回顾特刊.mdx
- 本周AIGC资讯-第1期.mdx

❌ 错误示例：
- My Blog Post.mdx (中英文混用)
- 测试@#$%.mdx (包含特殊字符)
- 测试 文件.mdx (包含空格)
```

## 2. Frontmatter 规范

### 2.1 必需字段

```yaml
---
title: '文章标题'
description: '文章描述'
publishDate: 2024-01-15
---
```

**说明：**
- `title`: 文章标题，最多60字符
- `description`: 文章描述，最多160字符，用于SEO和列表展示
- `publishDate`: 发布日期，格式为 `YYYY-MM-DD`

### 2.2 可选字段

```yaml
---
language: 'zh-CN'
updatedDate: 2024-01-20
tags:
  - 标签1
  - 标签2
draft: false
comment: true
---
```

**说明：**
- `language`: 语言代码，默认 `zh-CN`
- `updatedDate`: 更新日期，格式为 `YYYY-MM-DD`
- `tags`: 标签数组，自动转为小写并去重
- `draft`: 草稿标记，`true` 不会发布
- `comment`: 是否开启评论，默认 `true`

### 2.3 完整示例

```yaml
---
language: 'zh-CN'
title: 'TypeScript进阶指南：从入门到精通'
description: '深入理解TypeScript的高级特性，包括泛型、装饰器、类型推断等核心概念'
publishDate: 2024-01-15
updatedDate: 2024-01-20
tags:
  - TypeScript
  - 前端开发
  - 类型系统
draft: false
comment: true
---
```

## 3. 组件使用规范

### 3.1 可用组件

从 `astro-pure/user` 导入的组件：
- `Card`: 卡片容器
- `Label`: 标签
- `Collapse`: 折叠内容
- `Aside`: 侧边说明

### 3.2 Card 组件

**用途：** 突出显示重要内容、案例、提示

```mdx
import { Card } from 'astro-pure/user'

<Card>
**重要提示**：这是一个卡片组件，用于突出显示重要内容
</Card>

<Card title="卡片标题">
带有标题的卡片内容
</Card>
```

### 3.3 Label 组件

**用途：** 标记重点内容、分类

```mdx
import { Label } from 'astro-pure/user'

<Label>重点内容</Label>
<Label color="red">警告</Label>
<Label color="green">成功</Label>
```

### 3.4 Collapse 组件

**用途：** 折叠长内容、额外信息

```mdx
import { Collapse } from 'astro-pure/user'

<Collapse title="点击展开更多内容">
这里是折叠的内容，默认不显示，点击标题后展开
</Collapse>
```

### 3.5 Aside 组件

**用途：** 侧边说明、补充信息

```mdx
import { Aside } from 'astro-pure/user'

<Aside>
**补充说明**：这是侧边说明，通常用于补充主内容的细节
</Aside>
```

## 4. Markdown 语法规范

### 4.1 标题层级

```mdx
# 一级标题（文章标题，通常不使用）

## 二级标题（章节标题）

### 三级标题（小节标题）

#### 四级标题（子小节标题）
```

**注意：**
- 不要使用一级标题（`#`），文章标题已在 frontmatter 中定义
- 标题层级不要跳跃，如从二级直接跳到四级

### 4.2 文本格式

```mdx
**粗体文本**
*斜体文本*
`行内代码`
~~删除线~~

[链接文本](https://example.com)
![图片描述](/images/pic.png)
```

### 4.3 列表

**无序列表：**
```mdx
- 列表项1
- 列表项2
  - 子列表项1
  - 子列表项2
```

**有序列表：**
```mdx
1. 第一步
2. 第二步
3. 第三步
```

### 4.4 引用

```mdx
> 这是一段引用文本
>
> 可以有多行
```

### 4.5 代码块

```mdx
\`\`\`javascript
const greeting = 'Hello, World!';
console.log(greeting);
\`\`\`
```

**支持的语言：**
- `javascript` / `js`
- `typescript` / `ts`
- `python`
- `java`
- `go`
- `rust`
- `css`
- `html`
- `bash` / `sh`
- 等其他常见语言

### 4.6 表格

```mdx
| 列1 | 列2 | 列3 |
|-----|-----|-----|
| 内容1 | 内容2 | 内容3 |
| 内容4 | 内容5 | 内容6 |
```

### 4.7 分隔线

```mdx
---
```

### 4.8 数学公式

**行内公式：**
```mdx
$E = mc^2$
```

**块级公式：**
```mdx
$$
E = mc^2
$$

$$
\int_{a}^{b} f(x) dx = F(b) - F(a)
$$
```

## 5. 文章结构模板

### 5.1 技术文章模板

```mdx
---
language: 'zh-CN'
title: '文章标题'
description: '文章描述'
publishDate: 2024-01-15
tags:
  - 标签1
  - 标签2
---

import { Card, Label, Collapse, Aside } from 'astro-pure/user'

# 文章标题

## 前言

简要介绍文章的背景和目的

## 正文

### 小节1

内容...

<Card>
**重要提示**：重要内容
</Card>

### 小节2

内容...

<Label>重点</Label>

<Collapse title="额外信息">
折叠内容
</Collapse>

## 总结

总结文章的核心观点

---

**参考链接：**
- [链接1](https://example.com)
- [链接2](https://example.com)
```

### 5.2 教程文章模板

```mdx
---
language: 'zh-CN'
title: '教程标题'
description: '教程描述'
publishDate: 2024-01-15
tags:
  - 教程
  - 技术
---

import { Card, Label } from 'astro-pure/user'

# 教程标题

## 准备工作

### 前置要求

- 要求1
- 要求2

### 安装依赖

\`\`\`bash
npm install package-name
\`\`\`

## 步骤1：xxx

详细说明...

<Label>注意</Label>

## 步骤2：xxx

详细说明...

## 总结

完成后的效果和注意事项
```

## 6. 最佳实践

### 6.1 组件使用原则

1. **适度使用组件**：不要过度使用组件，保持内容简洁
2. **组件嵌套**：避免过深的嵌套（最多3层）
3. **语义化**：根据内容含义选择合适的组件

### 6.2 代码示例

1. **使用代码块**：所有代码示例都应使用代码块
2. **语言标识**：指定正确的语言以获得语法高亮
3. **注释**：关键代码应添加注释

### 6.3 图片使用

1. **路径规范**：使用绝对路径 `/images/xxx.png`
2. **描述**：始终提供alt描述
3. **格式**：推荐使用 WebP 格式

### 6.4 标签使用

1. **数量适中**：每篇文章3-5个标签为宜
2. **相关性**：标签应与文章内容高度相关
3. **一致性**：使用统一的标签命名规范

## 7. 常见错误

### 7.1 组件未闭合

```mdx
❌ 错误：
<Card>
内容

✅ 正确：
<Card>
内容
</Card>
```

### 7.2 属性引号不规范

```mdx
❌ 错误：
<Card title=未引号>

✅ 正确：
<Card title="标题">
```

### 7.3 特殊字符未转义

```mdx
❌ 错误：
这是一个 {变量} 引用

✅ 正确：
这是一个 `{变量}` 引用
```

### 7.4 代码块语言标识错误

```mdx
❌ 错误：
\`\`\`js
const x = 1;
\`\`\`

✅ 正确：
\`\`\`javascript
const x = 1;
\`\`\`
```

## 8. 检查清单

发布文章前，请检查：

- [ ] 文件命名符合规范
- [ ] Frontmatter 包含所有必需字段
- [ ] 标题和描述长度符合要求
- [ ] 标签数量适中且相关
- [ ] 组件正确闭合
- [ ] 代码块指定了正确的语言
- [ ] 图片路径正确
- [ ] 链接有效
- [ ] 文章结构清晰
- [ ] 无语法错误

## 9. 快速参考

### 9.1 Frontmatter 快速模板

```yaml
---
language: 'zh-CN'
title: '文章标题'
description: '文章描述'
publishDate: 2024-01-15
tags:
  - 标签1
  - 标签2
---
```

### 9.2 组件导入

```mdx
import { Card, Label, Collapse, Aside } from 'astro-pure/user'
```

### 9.3 常用语法速查

| 语法 | 示例 | 效果 |
|-----|------|------|
| 粗体 | `**文本**` | **文本** |
| 斜体 | `*文本*` | *文本* |
| 代码 | `` `代码` `` | `代码` |
| 链接 | `[文本](url)` | [文本](url) |
| 图片 | `![alt](url)` | 图片 |
| 代码块 | ` \`\`\`js ` | 代码块 |
| 引用 | `> 文本` | > 文本 |
| 分隔线 | `---` | --- |