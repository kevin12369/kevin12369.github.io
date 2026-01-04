const fs = require('fs');
const path = require('path');

// 递归查找所有Markdown文件
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

const files = findFiles('./Twilight/src/content/posts');
let fixed = 0;

files.forEach(filePath => {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    let newContent = content;

    // 将 pubDate 替换为 published
    if (newContent.includes('pubDate:')) {
      newContent = newContent.replace(/pubDate:/g, 'published:');
      fs.writeFileSync(filePath, newContent, 'utf-8');
      console.log(`✓ ${path.relative('./Twilight/src/content/posts', filePath)}`);
      fixed++;
    }
  } catch (err) {
    console.log(`✗ ${filePath}`, err.message);
  }
});

console.log(`\n修复完成！共修复 ${fixed} 个文件。`);
