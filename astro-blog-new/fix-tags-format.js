import fs from 'fs';
import path from 'path';

const blogDir = 'D:/Coder/myBlogs/astro-blog-new/src/content/blog';

// 递归处理所有markdown文件
function processDirectory(dir) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      fixTagsFormat(filePath);
    }
  });
}

// 修复tags格式
function fixTagsFormat(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // 匹配 frontmatter
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return;

  const frontmatter = match[1];
  const body = content.slice(match[0].length);

  // 转换 tags 格式
  const newFrontmatter = frontmatter.replace(/^tags:\s*\[([^\]]*)\]/gm, (match, tagsContent) => {
    // 解析数组内容
    let tags = [];
    if (tagsContent.trim()) {
      try {
        // 移除外层引号并解析
        const cleaned = tagsContent.trim();
        if (cleaned.startsWith('"') || cleaned.startsWith("'")) {
          // 处理字符串数组
          tags = cleaned.match(/"([^"]+)"|'([^']+)'/g).map(tag => tag.slice(1, -1));
        } else {
          // 尝试JSON解析
          tags = JSON.parse(`[${cleaned}]`);
        }
      } catch (e) {
        console.log(`⚠️  无法解析tags: ${tagsContent}`);
        return match;
      }
    }

    // 转换为YAML列表格式
    if (tags.length === 0) {
      return 'tags: []';
    } else {
      return 'tags:\n' + tags.map(tag => ` - ${tag}`).join('\n');
    }
  });

  // 写回文件
  const newContent = `---\r\n${newFrontmatter}\r\n---${body}`;
  fs.writeFileSync(filePath, newContent, 'utf-8');

  const relativePath = path.relative(blogDir, filePath);
  console.log(`✅ 已处理: ${relativePath}`);
}

// 执行
console.log('🚀 开始转换tags格式...\n');
processDirectory(blogDir);
console.log('\n✅ 转换完成！');