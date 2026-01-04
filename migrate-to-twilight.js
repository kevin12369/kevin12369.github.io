const fs = require('fs');
const path = require('path');

const sourceDir = './astro-blog/src/content/blog';
const targetDir = './Twilight/src/content/posts';

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 递归查找所有 Markdown 文件
function findFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory()) {
      files.push(...findFiles(fullPath));
    } else if (item.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

const files = findFiles(sourceDir);
console.log(`找到 ${files.length} 个 Markdown 文件`);

let success = 0;
let failed = 0;

files.forEach(file => {
  try {
    const content = fs.readFileSync(file, 'utf-8');
    const relativePath = path.relative(sourceDir, file);
    const targetPath = path.join(targetDir, relativePath);
    const targetDirPath = path.dirname(targetPath);
    
    // 确保目标目录存在
    if (!fs.existsSync(targetDirPath)) {
      fs.mkdirSync(targetDirPath, { recursive: true });
    }
    
    let newContent = content;
    
    // 解析 frontmatter
    const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
    
    if (frontmatterMatch) {
      const frontmatter = frontmatterMatch[1];
      let newFrontmatter = frontmatter;
      
      // 添加必需的字段
      if (!newFrontmatter.includes('published:')) {
        const dateMatch = frontmatter.match(/date:\s*["']?([^"'\n\r]+)/);
        if (dateMatch) {
          newFrontmatter = newFrontmatter.replace(/date:\s*["']?([^"'\n\r]+)/, 'published: $1');
        } else {
          newFrontmatter = newFrontmatter.replace(/---/, '---\npublished: 2024-01-04');
        }
      }
      
      if (!newFrontmatter.includes('updated:')) {
        newFrontmatter = newFrontmatter.replace(/---/, '---\nupdated: 2024-01-04');
      }
      
      if (!newFrontmatter.includes('draft:')) {
        newFrontmatter = newFrontmatter.replace(/---/, '---\ndraft: false');
      }
      
      if (!newFrontmatter.includes('tags:')) {
        newFrontmatter = newFrontmatter.replace(/---/, '---\ntags: []');
      }
      
      if (!newFrontmatter.includes('category:')) {
        newFrontmatter = newFrontmatter.replace(/---/, '---\ncategory: null');
      }
      
      // 替换 frontmatter
      newContent = content.replace(frontmatterMatch[0], '---\n' + newFrontmatter.trim() + '\n---');
    }
    
    fs.writeFileSync(targetPath, newContent, 'utf-8');
    console.log(`✓ ${relativePath}`);
    success++;
  } catch (err) {
    console.log(`✗ ${relativePath}`, err.message);
    failed++;
  }
});

console.log(`\n迁移完成！成功：${success}，失败：${failed}`);