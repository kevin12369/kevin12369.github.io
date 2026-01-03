#!/usr/bin/env python3
"""
批量修复frontmatter中的tags为tag
"""
import os
import re
from pathlib import Path

def fix_frontmatter_tags(file_path):
    """修复单个文件中的tags为tag"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()

        # 检查是否包含frontmatter
        if not content.startswith('---'):
            return False

        # 提取frontmatter部分
        frontmatter_end = content.find('---', 3)
        if frontmatter_end == -1:
            return False

        frontmatter = content[3:frontmatter_end]
        rest_content = content[frontmatter_end + 3:]

        # 替换tags为tag
        new_frontmatter = re.sub(r'^tags:', 'tag:', frontmatter, flags=re.MULTILINE)

        # 如果没有变化，跳过
        if new_frontmatter == frontmatter:
            return False

        # 写回文件
        new_content = '---' + new_frontmatter + '---' + rest_content
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)

        print(f"[OK] 已修复: {file_path}")
        return True

    except Exception as e:
        print(f"[ERROR] 错误: {file_path} - {e}")
        return False

def main():
    """主函数"""
    docs_dir = Path('docs')

    # 查找所有.md文件
    md_files = list(docs_dir.rglob('*.md'))

    print(f"找到 {len(md_files)} 个Markdown文件")

    fixed_count = 0
    for md_file in md_files:
        if fix_frontmatter_tags(md_file):
            fixed_count += 1

    print(f"\n共修复 {fixed_count} 个文件")

if __name__ == '__main__':
    main()