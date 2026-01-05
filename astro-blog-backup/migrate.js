import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.join(__dirname, '..', 'docs');
const targetDir = path.join(__dirname, 'src', 'content', 'blog');

// 确保目标目录存在
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 递归获取所有 Markdown 文件
function getAllMarkdownFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getAllMarkdownFiles(filePath, fileList);
    } else if (file.endsWith('.md') && file !== 'README.md' && file !== 'slides.md' && file !== 'intro.md') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 转换 frontmatter
function convertFrontmatter(content, filePath) {
  const lines = content.split('\n');
  const frontmatterStart = lines.findIndex(line => line.trim() === '---');
  const frontmatterEnd = lines.findIndex((line, index) => index > frontmatterStart && line.trim() === '---');

  if (frontmatterStart === -1 || frontmatterEnd === -1) {
    return content; // 没有 frontmatter，直接返回
  }

  const oldFrontmatter = lines.slice(frontmatterStart + 1, frontmatterEnd).join('\n');
  const body = lines.slice(frontmatterEnd + 1).join('\n');

  // 提取标题
  const titleMatch = body.match(/^#\s+(.+)$/m);
  const title = titleMatch ? titleMatch[1].trim() : path.basename(filePath, '.md');

  // 提取描述（第一段）
  const descMatch = body.match(/^([^{#\n][^\n]+)$/m);
  const description = descMatch ? descMatch[1].trim() : '';

  // 解析旧 frontmatter
  const oldData = {};
  oldFrontmatter.split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      oldData[match[1]] = match[2].trim();
    }
  });

  // 构建新 frontmatter
  const newFrontmatter = `---
title: '${title.replace(/'/g, "''")}'
description: '${description.replace(/'/g, "''")}'
pubDate: ${oldData.date || '2024-01-01'}
${oldData.lastUpdated ? `updatedDate: ${oldData.date}` : ''}
category: ${Array.isArray(oldData.category) ? `'${oldData.category[0]}'` : `'${oldData.category || '未分类'}'`}
tags: ${Array.isArray(oldData.tag) ? JSON.stringify(oldData.tag) : JSON.stringify(oldData.tag ? [oldData.tag] : [])}
draft: false
---`;

  return newFrontmatter + '\n\n' + body;
}

// 迁移文件
function migrateFiles() {
  const files = getAllMarkdownFiles(sourceDir);
  console.log(`找到 ${files.length} 个 Markdown 文件`);

  let successCount = 0;
  let errorCount = 0;

  files.forEach(filePath => {
    try {
      const content = fs.readFileSync(filePath, 'utf-8');
      const converted = convertFrontmatter(content, filePath);

      // 生成新文件名
      const relativePath = path.relative(sourceDir, filePath);
      const newPath = path.join(targetDir, relativePath);

      // 确保目录存在
      const newDir = path.dirname(newPath);
      if (!fs.existsSync(newDir)) {
        fs.mkdirSync(newDir, { recursive: true });
      }

      // 写入新文件
      fs.writeFileSync(newPath, converted, 'utf-8');
      successCount++;
      console.log(`✓ ${relativePath}`);
    } catch (error) {
      errorCount++;
      console.error(`✗ ${filePath}: ${error.message}`);
    }
  });

  console.log(`\n迁移完成！成功：${successCount}，失败：${errorCount}`);
}

// 执行迁移
migrateFiles();
