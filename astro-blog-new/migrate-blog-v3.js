import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = 'D:/Coder/myBlogs/astro-blog-backup/src/content/blog';
const targetDir = 'D:/Coder/myBlogs/astro-blog-new/src/content/blog';

// 递归复制并转换文件
function copyAndConvertFiles(sourcePath, targetPath) {
  const files = fs.readdirSync(sourcePath);

  files.forEach(file => {
    const sourceFilePath = path.join(sourcePath, file);
    const targetFilePath = path.join(targetPath, file);
    const stat = fs.statSync(sourceFilePath);

    if (stat.isDirectory()) {
      // 如果是目录，递归处理
      if (!fs.existsSync(targetFilePath)) {
        fs.mkdirSync(targetFilePath, { recursive: true });
      }
      copyAndConvertFiles(sourceFilePath, targetFilePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      // 如果是 markdown 文件，转换 frontmatter 并复制
      let content = fs.readFileSync(sourceFilePath, 'utf-8');

      // 转换 frontmatter
      content = convertFrontmatter(content);

      // 写入目标文件
      fs.writeFileSync(targetFilePath, content, 'utf-8');
      console.log(`✅ 已转换: ${path.relative(sourceDir, sourceFilePath)}`);
    } else {
      // 其他文件直接复制
      fs.copyFileSync(sourceFilePath, targetFilePath);
      console.log(`📄 已复制: ${path.relative(sourceDir, sourceFilePath)}`);
    }
  });
}

// 转换 frontmatter 格式
function convertFrontmatter(content) {
  // 匹配 frontmatter 部分（支持Windows和Unix换行符）
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) {
    return content;
  }

  const frontmatter = match[1];
  const body = content.slice(match[0].length);

  // 解析 frontmatter
  const lines = frontmatter.split('\n');
  const newLines = ["language: 'zh-CN'"];

  lines.forEach(line => {
    const trimmedLine = line.trim();
    if (!trimmedLine) return;

    // 跳过不需要的字段
    if (trimmedLine.startsWith('category:') || trimmedLine.startsWith('draft:')) {
      return;
    }

    // 转换 pubDate 为 publishDate
    if (trimmedLine.startsWith('pubDate:')) {
      const value = trimmedLine.split(':')[1].trim();
      // 确保日期用引号包裹
      const quotedValue = value.startsWith("'") ? value : `'${value}'`;
      newLines.push(`publishDate: ${quotedValue}`);
    } else {
      newLines.push(line);
    }
  });

  // 重新构建内容
  return `---\n${newLines.join('\n')}\n---${body}`;
}

// 执行迁移
console.log('🚀 开始迁移文章...\n');
copyAndConvertFiles(sourceDir, targetDir);
console.log('\n✅ 迁移完成！');