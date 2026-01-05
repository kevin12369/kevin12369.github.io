import fs from 'fs'
import path from 'path'

// 定义所有文章的序号映射
const titleMap = {
  '01-AI增强型全栈开发者：2026年技术角色全景解析.md': 'AI增强型全栈开发者的技术定位与能力模型（一）',
  '02-全栈开发的技术演进：从工具时代到智能体时代.md': '全栈开发的技术演进：从工具时代到智能体时代（二）',
  '03-AI编程效率的实证研究：从神话到现实.md': 'AI编程效率的实证研究：从神话到现实（三）',
  '04-Agents vs Skills - 技术范式之争.md': 'Agents vs Skills - 技术范式之争（四）',
  '05-Vibe Coding的批判性分析.md': 'Vibe Coding的批判性分析（五）',
  '06-Claude Skills深度解析.md': 'Claude Skills深度解析（六）',
  '07-AI工具链的工程化实践.md': 'AI工具链的工程化实践（七）',
  '08-企业级AI应用的最佳实践.md': '企业级AI应用的最佳实践（八）',
  '09-AI时代的系统设计思维.md': 'AI时代的系统设计思维（九）',
  '10-Prompt Engineering的工程化方法.md': 'Prompt Engineering的工程化方法（十）',
  '11-AI Agent的记忆与上下文管理.md': 'AI Agent的记忆与上下文管理（十一）',
  '12-2026-2030技术趋势大胆预测与多方向展望.md': '2026-2030技术趋势大胆预测与多方向展望（十二）'
}

// 处理 ai-fullstack 目录
const aiFullstackDir = path.join(process.cwd(), 'src/content/blog/learning/ai-fullstack')
const files = fs.readdirSync(aiFullstackDir)

files.forEach(file => {
  if (titleMap[file]) {
    const filePath = path.join(aiFullstackDir, file)
    let content = fs.readFileSync(filePath, 'utf-8')

    // 1. 更新 title，添加序号
    const newTitle = titleMap[file]
    content = content.replace(/title: '([^']+)'/, `title: '${newTitle}'`)

    // 2. 更新 updatedDate 为精确到秒的格式
    // 使用当前日期时间，格式为 '2026-01-05 23:30:00'
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hours = String(now.getHours()).padStart(2, '0')
    const minutes = String(now.getMinutes()).padStart(2, '0')
    const seconds = String(now.getSeconds()).padStart(2, '0')
    const updatedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`

    // 替换 updatedDate
    content = content.replace(/updatedDate: \d{4}-\d{2}-\d{2}/, `updatedDate: '${updatedDate}'`)

    fs.writeFileSync(filePath, content, 'utf-8')
    console.log(`已更新: ${file}`)
    console.log(`  新标题: ${newTitle}`)
    console.log(`  更新时间: ${updatedDate}\n`)
  }
})

console.log('所有文章的标题和更新时间已更新完成！')