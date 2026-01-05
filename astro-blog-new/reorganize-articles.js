import fs from 'fs';
import path from 'path';

const contentDir = 'D:/Coder/myBlogs/astro-blog-new/src/content';
const blogDir = path.join(contentDir, 'blog');
const docsDir = path.join(contentDir, 'docs');

// 需要移动到 docs 的目录
const moveDocs = ['learning', 'interview'];

// 需要保留在 blog 的目录
const keepBlog = ['news', '技术随笔', 'projects'];

console.log('🚀 开始重新分类文章...\n');

// 递归复制目录
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 移动到 docs
moveDocs.forEach(dir => {
  const sourcePath = path.join(blogDir, dir);
  const targetPath = path.join(docsDir, dir);

  if (fs.existsSync(sourcePath)) {
    // 复制整个目录
    copyDirectory(sourcePath, targetPath);
    const count = getMarkdownCount(targetPath);
    console.log(`✅ 已复制 ${dir} 到 docs (${count} 篇)`);

    // 删除源目录
    fs.rmSync(sourcePath, { recursive: true, force: true });
    console.log(`  已删除源目录: ${dir}`);
  }
});

// 统计结果
console.log('\n📊 分类结果：');
console.log('---');
console.log(`docs 目录：`);
moveDocs.forEach(dir => {
  const targetPath = path.join(docsDir, dir);
  if (fs.existsSync(targetPath)) {
    const count = getMarkdownCount(targetPath);
    console.log(`  - ${dir}: ${count} 篇`);
  }
});
console.log(`blog 目录：`);
keepBlog.forEach(dir => {
  const sourcePath = path.join(blogDir, dir);
  if (fs.existsSync(sourcePath)) {
    const count = getMarkdownCount(sourcePath);
    console.log(`  - ${dir}: ${count} 篇`);
  }
});

const totalDocs = moveDocs.reduce((sum, dir) => {
  const targetPath = path.join(docsDir, dir);
  return sum + (fs.existsSync(targetPath) ? getMarkdownCount(targetPath) : 0);
}, 0);

const totalBlog = keepBlog.reduce((sum, dir) => {
  const sourcePath = path.join(blogDir, dir);
  return sum + (fs.existsSync(sourcePath) ? getMarkdownCount(sourcePath) : 0);
}, 0);

console.log('---');
console.log(`总计：docs ${totalDocs} 篇，blog ${totalBlog} 篇`);
console.log('\n✅ 分类完成！');

// 统计 markdown 文件数量
function getMarkdownCount(dirPath) {
  let count = 0;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      count += getMarkdownCount(filePath);
    } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
      count++;
    }
  });
  return count;
}