import fs from 'fs'
import path from 'path'

// 定义所有文章的标签映射
const tagsMap = {
  '01-AI增强型全栈开发者：2026年技术角色全景解析.md': ['AI', '全栈开发', 'AI Agent', 'Claude Skills', '系统设计', 'Prompt Engineering', '工程化'],
  '02-全栈开发的技术演进：从工具时代到智能体时代.md': ['全栈开发', '技术演进', 'AI Agent', '工具时代', '智能体时代'],
  '03-AI编程效率的实证研究：从神话到现实.md': ['AI', '编程效率', '实证研究', 'Cursor', 'Claude'],
  '04-Agents vs Skills - 技术范式之争.md': ['AI Agent', 'Claude Skills', '技术范式', 'AI框架'],
  '05-Vibe Coding的批判性分析.md': ['Vibe Coding', 'AI编程', '批判性分析', 'Cursor'],
  '06-Claude Skills深度解析.md': ['Claude Skills', 'Anthropic', 'Claude', '技能框架'],
  '07-AI工具链的工程化实践.md': ['AI工具链', '工程化', 'Cursor', 'COZE', 'Dify'],
  '08-企业级AI应用的最佳实践.md': ['企业级应用', 'AI应用', '最佳实践', '工程化'],
  '09-AI时代的系统设计思维.md': ['系统设计', 'AI应用', '架构设计', 'AI Agent'],
  '10-Prompt Engineering的工程化方法.md': ['Prompt Engineering', '提示词工程', '工程化', 'AI交互'],
  '11-AI Agent的记忆与上下文管理.md': ['AI Agent', '记忆系统', '上下文管理', 'RAG'],
  '12-2026-2030技术趋势大胆预测与多方向展望.md': ['技术趋势', 'AI发展', '未来预测', '技术演进'],
  'page.md': ['AIGC', '人工智能', '大语言模型', 'AI应用']
}

// 处理 ai-fullstack 目录
const aiFullstackDir = path.join(process.cwd(), 'src/content/blog/learning/ai-fullstack')
const files = fs.readdirSync(aiFullstackDir)

files.forEach(file => {
  if (tagsMap[file]) {
    const filePath = path.join(aiFullstackDir, file)
    let content = fs.readFileSync(filePath, 'utf-8')

    // 将 JSON 格式的 tags 数组转换为 YAML 格式
    const tags = tagsMap[file]
    const yamlTags = 'tags:\n' + tags.map(tag => ` - ${tag}`).join('\n')

    // 替换 tags 字段
    content = content.replace(/tags:\s*\[\s*\]/, yamlTags)
    content = content.replace(/tags:\s*\[\s*"(.*?)"\s*\]/, yamlTags)
    content = content.replace(/tags:\s*\[\s*'(.*?)'\s*\]/, yamlTags)

    fs.writeFileSync(filePath, content, 'utf-8')
    console.log(`已更新: ${file}`)
  }
})

// 处理 news/aigc/page.md
const pagePath = path.join(process.cwd(), 'src/content/blog/news/aigc/page.md')
if (fs.existsSync(pagePath)) {
  let content = fs.readFileSync(pagePath, 'utf-8')

  const tags = tagsMap['page.md']
  const yamlTags = 'tags:\n' + tags.map(tag => ` - ${tag}`).join('\n')

  // 替换 tags 字段
  content = content.replace(/tags:\s*\[\s*\]/, yamlTags)
  content = content.replace(/tags:\s*\[\s*"(.*?)"\s*\]/, yamlTags)
  content = content.replace(/tags:\s*\[\s*'(.*?)'\s*\]/, yamlTags)

  fs.writeFileSync(pagePath, content, 'utf-8')
  console.log(`已更新: page.md`)
}

console.log('\n所有文章的标签已更新完成！')