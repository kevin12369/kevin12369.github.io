import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,a as l,o as d}from"./app-BnzN889n.js";const s={};function a(r,i){return d(),n("div",null,[...i[0]||(i[0]=[l(`<h1 id="《打地鼠》游戏开发教程-godot-4-x-c-从零到完成" tabindex="-1"><a class="header-anchor" href="#《打地鼠》游戏开发教程-godot-4-x-c-从零到完成" aria-hidden="true">#</a> 《打地鼠》游戏开发教程：Godot 4.x + C# 从零到完成</h1><h2 id="📖-目录" tabindex="-1"><a class="header-anchor" href="#📖-目录" aria-hidden="true">#</a> 📖 目录</h2><ul><li><a href="#%E7%AC%AC%E4%B8%80%E7%AB%A0%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">第一章：准备工作</a></li><li><a href="#%E7%AC%AC%E4%BA%8C%E7%AB%A0%E5%88%9B%E5%BB%BA%E9%A1%B9%E7%9B%AE">第二章：创建项目</a></li><li><a href="#%E7%AC%AC%E4%B8%89%E7%AB%A0%E5%83%8F%E7%B4%A0%E7%BE%8E%E6%9C%AF%E5%88%B6%E4%BD%9C">第三章：像素美术制作</a></li><li><a href="#%E7%AC%AC%E5%9B%9B%E7%AB%A0%E5%88%9B%E5%BB%BA%E4%B8%BB%E5%9C%BA%E6%99%AF">第四章：创建主场景</a></li><li><a href="#%E7%AC%AC%E4%BA%94%E7%AB%A0%E5%88%9B%E5%BB%BA%E5%9C%B0%E6%B4%9E%E7%B3%BB%E7%BB%9F">第五章：创建地洞系统</a></li><li><a href="#%E7%AC%AC%E5%85%AD%E7%AB%A0%E5%88%9B%E5%BB%BA%E5%9C%B0%E9%BC%A0%E7%B3%BB%E7%BB%9F">第六章：创建地鼠系统</a></li><li><a href="#%E7%AC%AC%E4%B8%83%E7%AB%A0%E6%B8%B8%E6%88%8F%E7%AE%A1%E7%90%86%E5%99%A8">第七章：游戏管理器</a></li><li><a href="#%E7%AC%AC%E5%85%AB%E7%AB%A0%E8%BF%9E%E5%87%BB%E7%B3%BB%E7%BB%9F">第八章：连击系统</a></li><li><a href="#%E7%AC%AC%E4%B9%9D%E7%AB%A0%E9%9A%BE%E5%BA%A6%E6%9B%B2%E7%BA%BF">第九章：难度曲线</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E7%AB%A0%E6%8E%92%E8%A1%8C%E6%A6%9C%E7%B3%BB%E7%BB%9F">第十章：排行榜系统</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E4%B8%80%E7%AB%A0%E9%9F%B3%E6%95%88%E5%88%B6%E4%BD%9C">第十一章：音效制作</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E4%BA%8C%E7%AB%A0%E9%9F%B3%E6%95%88%E7%B3%BB%E7%BB%9F">第十二章：音效系统</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E4%B8%89%E7%AB%A0ui%E7%95%8C%E9%9D%A2">第十三章：UI界面</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E5%9B%9B%E7%AB%A0%E8%A7%86%E8%A7%89%E7%89%B9%E6%95%88">第十四章：视觉特效</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E4%BA%94%E7%AB%A0%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96">第十五章：性能优化</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E5%85%AD%E7%AB%A0%E6%B5%8B%E8%AF%95%E4%B8%8E%E8%B0%83%E8%AF%95">第十六章：测试与调试</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E4%B8%83%E7%AB%A0%E5%AF%BC%E5%87%BA%E5%8F%91%E5%B8%83">第十七章：导出发布</a></li><li><a href="#%E7%AC%AC%E5%8D%81%E5%85%AB%E7%AB%A0%E8%BF%9B%E9%98%B6%E6%89%A9%E5%B1%95">第十八章：进阶扩展</a></li></ul><hr><h2 id="第一章-准备工作" tabindex="-1"><a class="header-anchor" href="#第一章-准备工作" aria-hidden="true">#</a> 第一章：准备工作</h2><h3 id="_1-1-下载安装-godot-4-x" tabindex="-1"><a class="header-anchor" href="#_1-1-下载安装-godot-4-x" aria-hidden="true">#</a> 1.1 下载安装 Godot 4.x</h3><h4 id="下载-godot" tabindex="-1"><a class="header-anchor" href="#下载-godot" aria-hidden="true">#</a> 下载 Godot</h4><ol><li>访问 Godot 官网：https://godotengine.org/</li><li>点击 &quot;Download&quot; 按钮</li><li>选择 <strong>Godot 4.x（最新稳定版）</strong></li><li>选择 <strong>.NET 版本</strong>（支持 C#）</li><li>下载对应系统的版本（Windows/Mac/Linux）</li></ol><h4 id="安装-godot" tabindex="-1"><a class="header-anchor" href="#安装-godot" aria-hidden="true">#</a> 安装 Godot</h4><ol><li>运行下载的安装程序</li><li>选择安装路径（建议：<code>C:\\Godot\\</code> 或 <code>D:\\Godot\\</code>）</li><li>等待安装完成</li><li>运行 Godot，首次启动会提示选择项目路径</li></ol><p><strong>✅ 验证安装</strong></p><ul><li>打开 Godot，能看到欢迎界面</li><li>点击 &quot;新建项目&quot;，能正常创建项目</li><li>编辑器界面正常显示</li></ul><h3 id="_1-2-安装开发环境" tabindex="-1"><a class="header-anchor" href="#_1-2-安装开发环境" aria-hidden="true">#</a> 1.2 安装开发环境</h3><h4 id="安装-visual-studio-2022" tabindex="-1"><a class="header-anchor" href="#安装-visual-studio-2022" aria-hidden="true">#</a> 安装 Visual Studio 2022</h4><ol><li>访问 Visual Studio 官网：https://visualstudio.microsoft.com/</li><li>下载 <strong>Community 版本</strong>（免费）</li><li>运行安装程序</li><li>选择 <strong>.NET 桌面开发</strong> 工作负载</li><li>确保勾选以下组件： <ul><li>.NET 6.0 SDK</li><li>.NET 7.0 SDK</li><li>.NET 8.0 SDK</li><li>C# 和 Visual Basic Roslyn 编译器</li></ul></li><li>点击安装，等待完成</li></ol><h4 id="安装-net-sdk-备选" tabindex="-1"><a class="header-anchor" href="#安装-net-sdk-备选" aria-hidden="true">#</a> 安装 .NET SDK（备选）</h4><p>如果 Visual Studio 安装失败，可以单独安装 .NET SDK：</p><ol><li>访问 .NET 官网：https://dotnet.microsoft.com/</li><li>下载 <strong>.NET 8.0 SDK</strong></li><li>运行安装程序</li><li>验证安装：打开命令行，输入 <code>dotnet --version</code></li></ol><p><strong>✅ 验证安装</strong></p><ul><li>打开 Visual Studio 2022</li><li>能创建新的 C# 项目</li><li>能正常编译和运行 C# 代码</li></ul><h3 id="_1-3-安装像素美术工具" tabindex="-1"><a class="header-anchor" href="#_1-3-安装像素美术工具" aria-hidden="true">#</a> 1.3 安装像素美术工具</h3><h4 id="选项一-aseprite-付费-推荐" tabindex="-1"><a class="header-anchor" href="#选项一-aseprite-付费-推荐" aria-hidden="true">#</a> 选项一：Aseprite（付费，推荐）</h4><ol><li>访问 Aseprite 官网：https://www.aseprite.org/</li><li>下载并安装（$19.99）</li><li>学习基础操作（约30分钟）</li></ol><h4 id="选项二-piskel-免费-在线" tabindex="-1"><a class="header-anchor" href="#选项二-piskel-免费-在线" aria-hidden="true">#</a> 选项二：Piskel（免费，在线）</h4><ol><li>访问 Piskel 官网：https://www.piskelapp.com/</li><li>无需安装，直接在线使用</li><li>学习基础操作（约30分钟）</li></ol><h4 id="选项三-photoshop-如果你已有" tabindex="-1"><a class="header-anchor" href="#选项三-photoshop-如果你已有" aria-hidden="true">#</a> 选项三：Photoshop（如果你已有）</h4><ol><li>使用 Photoshop 的像素画功能</li><li>设置网格显示（视图 &gt; 显示 &gt; 网格）</li><li>使用铅笔工具绘制</li></ol><p><strong>✅ 准备完成</strong></p><ul><li>能创建 16x16 像素画布</li><li>能使用基本绘图工具</li><li>能导出 PNG 格式图片</li></ul><h3 id="_1-4-准备音效工具" tabindex="-1"><a class="header-anchor" href="#_1-4-准备音效工具" aria-hidden="true">#</a> 1.4 准备音效工具</h3><h4 id="bfxr-免费-在线" tabindex="-1"><a class="header-anchor" href="#bfxr-免费-在线" aria-hidden="true">#</a> Bfxr（免费，在线）</h4><ol><li>访问 Bfxr 官网：https://www.bfxr.net/</li><li>无需安装，直接在线使用</li><li>可以生成各种游戏音效</li></ol><h4 id="其他选择" tabindex="-1"><a class="header-anchor" href="#其他选择" aria-hidden="true">#</a> 其他选择</h4><ul><li><strong>ChipTone</strong>：https://sfbgames.itch.io/chiptone</li><li><strong>Jfxr</strong>：https://chr15m.itch.io/jfxr</li></ul><p><strong>✅ 准备完成</strong></p><ul><li>能生成简单的音效</li><li>能导出 WAV 格式文件</li></ul><h3 id="_1-5-检查清单" tabindex="-1"><a class="header-anchor" href="#_1-5-检查清单" aria-hidden="true">#</a> 1.5 检查清单</h3><p>在开始之前，请确认以下内容：</p><ul><li>[ ] Godot 4.x .NET 版本已安装</li><li>[ ] Visual Studio 2022 已安装</li><li>[ ] .NET SDK 已安装</li><li>[ ] 像素美术工具已准备</li><li>[ ] 音效工具已准备</li><li>[ ] 有足够的磁盘空间（至少 2GB）</li></ul><hr><h2 id="第二章-创建项目" tabindex="-1"><a class="header-anchor" href="#第二章-创建项目" aria-hidden="true">#</a> 第二章：创建项目</h2><h3 id="_2-1-创建新项目" tabindex="-1"><a class="header-anchor" href="#_2-1-创建新项目" aria-hidden="true">#</a> 2.1 创建新项目</h3><h4 id="步骤" tabindex="-1"><a class="header-anchor" href="#步骤" aria-hidden="true">#</a> 步骤</h4><ol><li>打开 Godot 4.x</li><li>点击 &quot;新建项目&quot;</li><li>选择项目路径（建议：<code>D:\\GodotProjects\\WhackAMole</code>）</li><li>项目名称填写：<code>WhackAMole</code></li><li>渲染器选择：<strong>Forward+</strong>（默认）</li><li>点击 &quot;创建并编辑&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>项目创建成功</li><li>编辑器界面正常显示 -能看到默认的 3D 场景</li></ul><h3 id="_2-2-项目设置" tabindex="-1"><a class="header-anchor" href="#_2-2-项目设置" aria-hidden="true">#</a> 2.2 项目设置</h3><h4 id="窗口设置" tabindex="-1"><a class="header-anchor" href="#窗口设置" aria-hidden="true">#</a> 窗口设置</h4><ol><li>点击菜单：<strong>项目 &gt; 项目设置</strong></li><li>选择 <strong>应用 &gt; 配置</strong></li><li>设置以下参数： <ul><li><strong>应用名称</strong>：<code>WhackAMole</code></li><li><strong>项目名称</strong>：<code>WhackAMole</code></li><li><strong>运行 &gt; 主场景</strong>：留空（稍后设置）</li></ul></li></ol><h4 id="显示设置" tabindex="-1"><a class="header-anchor" href="#显示设置" aria-hidden="true">#</a> 显示设置</h4><ol><li>选择 <strong>显示 &gt; 窗口</strong></li><li>设置以下参数： <ul><li><strong>初始位置</strong>：居中</li><li><strong>初始大小</strong>：<code>800</code> x <code>600</code></li><li><strong>可调整</strong>：勾选</li><li><strong>无边框</strong>：不勾选</li></ul></li></ol><h4 id="像素完美缩放" tabindex="-1"><a class="header-anchor" href="#像素完美缩放" aria-hidden="true">#</a> 像素完美缩放</h4><ol><li>选择 <strong>显示 &gt; 窗口 &gt; 拉伸</strong></li><li>设置以下参数： <ul><li><strong>模式</strong>：<code>viewport</code></li><li><strong>纵横比</strong>：<code>keep</code></li></ul></li></ol><h4 id="c-设置" tabindex="-1"><a class="header-anchor" href="#c-设置" aria-hidden="true">#</a> C# 设置</h4><ol><li><p>选择 <strong>应用 &gt; C# &gt; Dotnet</strong></p></li><li><p>确认以下设置：</p><ul><li><strong>项目</strong>：<code>WhackAMole.csproj</code></li><li><strong>目标框架</strong>：<code>net8.0</code></li></ul></li><li><p>点击 &quot;关闭&quot; 保存设置</p></li></ol><p><strong>✅ 验证</strong></p><ul><li>项目设置已保存</li><li>窗口大小为 800x600</li><li>C# 项目配置正确</li></ul><h3 id="_2-3-创建项目文件夹结构" tabindex="-1"><a class="header-anchor" href="#_2-3-创建项目文件夹结构" aria-hidden="true">#</a> 2.3 创建项目文件夹结构</h3><h4 id="在文件系统中创建文件夹" tabindex="-1"><a class="header-anchor" href="#在文件系统中创建文件夹" aria-hidden="true">#</a> 在文件系统中创建文件夹</h4><ol><li>在 Godot 编辑器左侧，点击 &quot;文件系统&quot; 标签</li><li>右键点击 <code>res://</code>，选择 &quot;新建文件夹&quot;</li><li>创建以下文件夹： <ul><li><code>scenes</code>（场景文件）</li><li><code>scripts</code>（脚本文件）</li><li><code>assets</code>（素材文件）</li><li><code>assets/images</code>（图片资源）</li><li><code>assets/audio</code>（音效资源）</li><li><code>assets/fonts</code>（字体资源）</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>文件夹结构创建成功</li><li>文件系统面板显示正确的文件夹</li></ul><h3 id="_2-4-保存主场景" tabindex="-1"><a class="header-anchor" href="#_2-4-保存主场景" aria-hidden="true">#</a> 2.4 保存主场景</h3><h4 id="创建主场景" tabindex="-1"><a class="header-anchor" href="#创建主场景" aria-hidden="true">#</a> 创建主场景</h4><ol><li>在场景树中，右键点击 &quot;根节点&quot;，选择 &quot;更改类型&quot;</li><li>选择 <strong>Node2D</strong></li><li>在检查器中，将节点重命名为 <code>Main</code></li></ol><h4 id="保存场景" tabindex="-1"><a class="header-anchor" href="#保存场景" aria-hidden="true">#</a> 保存场景</h4><ol><li>点击菜单：<strong>场景 &gt; 另存为</strong></li><li>保存到 <code>res://scenes/Main.tscn</code></li><li>点击菜单：<strong>项目 &gt; 项目设置</strong></li><li>选择 <strong>应用 &gt; 配置</strong></li><li>设置 <strong>运行 &gt; 主场景</strong>：<code>res://scenes/Main.tscn</code></li><li>点击 &quot;关闭&quot; 保存</li></ol><h4 id="设置为主场景" tabindex="-1"><a class="header-anchor" href="#设置为主场景" aria-hidden="true">#</a> 设置为主场景</h4><ol><li>点击菜单：<strong>项目 &gt; 项目设置</strong></li><li>选择 <strong>应用 &gt; 配置</strong></li><li>设置 <strong>运行 &gt; 主场景</strong>：<code>res://scenes/Main.tscn</code></li><li>点击 &quot;关闭&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>主场景已保存</li><li>按 F5 能运行项目</li><li>运行后能看到空白窗口</li></ul><h3 id="_2-5-创建-c-脚本" tabindex="-1"><a class="header-anchor" href="#_2-5-创建-c-脚本" aria-hidden="true">#</a> 2.5 创建 C# 脚本</h3><h4 id="创建主脚本" tabindex="-1"><a class="header-anchor" href="#创建主脚本" aria-hidden="true">#</a> 创建主脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>Main.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编辑脚本" tabindex="-1"><a class="header-anchor" href="#编辑脚本" aria-hidden="true">#</a> 编辑脚本</h4><ol><li>双击 <code>Main.cs</code> 打开编辑器（Visual Studio）</li><li>替换为以下代码：</li></ol><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 游戏主入口
    /// &lt;/summary&gt;
    public partial class Main : Node2D
    {
        public override void _Ready()
        {
            GD.Print(&quot;游戏启动成功！&quot;);
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h4 id="附加脚本" tabindex="-1"><a class="header-anchor" href="#附加脚本" aria-hidden="true">#</a> 附加脚本</h4><ol><li>在场景树中选择 <code>Main</code> 节点</li><li>在检查器中，点击 &quot;附加脚本&quot;</li><li>选择 <code>res://scripts/Main.cs</code></li><li>点击 &quot;打开&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>脚本已附加到主场景</li><li>按 F5 运行，控制台输出 &quot;游戏启动成功！&quot;</li></ul><hr><h2 id="第三章-像素美术制作" tabindex="-1"><a class="header-anchor" href="#第三章-像素美术制作" aria-hidden="true">#</a> 第三章：像素美术制作</h2><h3 id="_3-1-制作地洞素材" tabindex="-1"><a class="header-anchor" href="#_3-1-制作地洞素材" aria-hidden="true">#</a> 3.1 制作地洞素材</h3><h4 id="地洞设计" tabindex="-1"><a class="header-anchor" href="#地洞设计" aria-hidden="true">#</a> 地洞设计</h4><ul><li><strong>尺寸</strong>：16x16 像素</li><li><strong>形状</strong>：椭圆形</li><li><strong>颜色</strong>：深棕色 (#4A3728)</li><li><strong>风格</strong>：像素风格</li></ul><h4 id="制作步骤-使用-piskel" tabindex="-1"><a class="header-anchor" href="#制作步骤-使用-piskel" aria-hidden="true">#</a> 制作步骤（使用 Piskel）</h4><ol><li>打开 Piskel：https://www.piskelapp.com/</li><li>创建新画布：16x16 像素</li><li>使用铅笔工具绘制地洞： <ul><li>绘制一个椭圆形</li><li>填充深棕色</li><li>添加一些阴影细节</li></ul></li><li>导出为 PNG：<code>hole.png</code></li></ol><h4 id="地洞像素参考" tabindex="-1"><a class="header-anchor" href="#地洞像素参考" aria-hidden="true">#</a> 地洞像素参考</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>地洞 16x16 像素图示：
  . . # # # # # # . . . . . . . . .
  . # # # # # # # # . . . . . . . .
  # # # # # # # # # # . . . . . . .
  # # # # # # # # # # . . . . . . .
  # # # # # # # # # # . . . . . . .
  . # # # # # # # # # . . . . . . .
  . . # # # # # # # . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-制作地鼠素材" tabindex="-1"><a class="header-anchor" href="#_3-2-制作地鼠素材" aria-hidden="true">#</a> 3.2 制作地鼠素材</h3><h4 id="普通地鼠设计" tabindex="-1"><a class="header-anchor" href="#普通地鼠设计" aria-hidden="true">#</a> 普通地鼠设计</h4><ul><li><strong>尺寸</strong>：16x16 像素</li><li><strong>颜色</strong>：棕色 (#8B5A2B)</li><li><strong>特征</strong>：黑色眼睛，小鼻子</li></ul><h4 id="制作步骤" tabindex="-1"><a class="header-anchor" href="#制作步骤" aria-hidden="true">#</a> 制作步骤</h4><ol><li>创建新画布：16x16 像素</li><li>绘制地鼠： <ul><li>身体：棕色圆形</li><li>眼睛：黑色小点</li><li>鼻子：粉色小点</li></ul></li><li>导出为 PNG：<code>mole_normal.png</code></li></ol><h4 id="普通地鼠像素参考" tabindex="-1"><a class="header-anchor" href="#普通地鼠像素参考" aria-hidden="true">#</a> 普通地鼠像素参考</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>普通地鼠 16x16 像素图示：
  . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . .
  . . . # # # # # # . . . . . . .
  . . # # # # # # # # . . . . . .
  . # # . # # . # # . . . . . . .
  . # # . # # . # # . . . . . . .
  . # # # # # # # # # . . . . . .
  . # # # # # # # # # . . . . . .
  . # # . # # . # # . . . . . . .
  . # # . # # . # # . . . . . . .
  . # # . . . . . . . . . . . . .
  . # # . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . .
  . . . . . . . . . . . . . . . .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="快速地鼠设计" tabindex="-1"><a class="header-anchor" href="#快速地鼠设计" aria-hidden="true">#</a> 快速地鼠设计</h4><ul><li><strong>颜色</strong>：灰色 (#696969)</li><li><strong>特征</strong>：红色眼睛</li></ul><h4 id="制作步骤-1" tabindex="-1"><a class="header-anchor" href="#制作步骤-1" aria-hidden="true">#</a> 制作步骤</h4><ol><li>复制普通地鼠</li><li>修改身体颜色为灰色</li><li>修改眼睛颜色为红色</li><li>导出为 PNG：<code>mole_fast.png</code></li></ol><h4 id="金地鼠设计" tabindex="-1"><a class="header-anchor" href="#金地鼠设计" aria-hidden="true">#</a> 金地鼠设计</h4><ul><li><strong>颜色</strong>：金色 (#FFD700)</li><li><strong>特征</strong>：发光效果</li></ul><h4 id="制作步骤-2" tabindex="-1"><a class="header-anchor" href="#制作步骤-2" aria-hidden="true">#</a> 制作步骤</h4><ol><li>复制普通地鼠</li><li>修改身体颜色为金色</li><li>添加高光效果</li><li>导出为 PNG：<code>mole_gold.png</code></li></ol><h3 id="_3-3-制作背景素材" tabindex="-1"><a class="header-anchor" href="#_3-3-制作背景素材" aria-hidden="true">#</a> 3.3 制作背景素材</h3><h4 id="背景设计" tabindex="-1"><a class="header-anchor" href="#背景设计" aria-hidden="true">#</a> 背景设计</h4><ul><li><strong>尺寸</strong>：800x600 像素</li><li><strong>颜色</strong>：草绿色 (#90EE90)</li><li><strong>风格</strong>：简单草地</li></ul><h4 id="制作步骤-3" tabindex="-1"><a class="header-anchor" href="#制作步骤-3" aria-hidden="true">#</a> 制作步骤</h4><ol><li>创建新画布：800x600 像素</li><li>填充草绿色</li><li>添加一些草地细节（可选）</li><li>导出为 PNG：<code>background.png</code></li></ol><h3 id="_3-4-制作-ui-素材" tabindex="-1"><a class="header-anchor" href="#_3-4-制作-ui-素材" aria-hidden="true">#</a> 3.4 制作 UI 素材</h3><h4 id="分数显示" tabindex="-1"><a class="header-anchor" href="#分数显示" aria-hidden="true">#</a> 分数显示</h4><ul><li>使用 Godot 默认字体</li><li>或下载像素字体（推荐：Press Start 2P）</li></ul><h4 id="按钮素材-可选" tabindex="-1"><a class="header-anchor" href="#按钮素材-可选" aria-hidden="true">#</a> 按钮素材（可选）</h4><ul><li>简单的矩形按钮</li><li>16x16 或 32x32 像素</li></ul><h3 id="_3-5-导入素材到-godot" tabindex="-1"><a class="header-anchor" href="#_3-5-导入素材到-godot" aria-hidden="true">#</a> 3.5 导入素材到 Godot</h3><h4 id="导入步骤" tabindex="-1"><a class="header-anchor" href="#导入步骤" aria-hidden="true">#</a> 导入步骤</h4><ol><li>在 Godot 编辑器中，点击 &quot;文件系统&quot; 标签</li><li>将所有 PNG 文件拖到 <code>res://assets/images</code> 文件夹</li><li>Godot 会自动导入</li></ol><h4 id="设置导入参数-可选" tabindex="-1"><a class="header-anchor" href="#设置导入参数-可选" aria-hidden="true">#</a> 设置导入参数（可选）</h4><ol><li>选择图片文件</li><li>在检查器中，点击 &quot;导入&quot; 标签</li><li>设置 <strong>过滤</strong>：<code>Nearest</code>（像素风格必需）</li><li>点击 &quot;重新导入&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>所有素材已导入</li><li>图片能正常预览</li><li>像素风格清晰</li></ul><hr><h2 id="第四章-创建主场景" tabindex="-1"><a class="header-anchor" href="#第四章-创建主场景" aria-hidden="true">#</a> 第四章：创建主场景</h2><h3 id="_4-1-添加背景" tabindex="-1"><a class="header-anchor" href="#_4-1-添加背景" aria-hidden="true">#</a> 4.1 添加背景</h3><h4 id="添加背景-sprite" tabindex="-1"><a class="header-anchor" href="#添加背景-sprite" aria-hidden="true">#</a> 添加背景 Sprite</h4><ol><li>打开 <code>res://scenes/Main.tscn</code></li><li>在场景树中，右键点击 <code>Main</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Sprite2D</strong></li><li>重命名为 <code>Background</code></li></ol><h4 id="设置背景图片" tabindex="-1"><a class="header-anchor" href="#设置背景图片" aria-hidden="true">#</a> 设置背景图片</h4><ol><li>在检查器中，找到 <strong>纹理</strong> 属性</li><li>点击下拉菜单，选择 &quot;加载&quot;</li><li>选择 <code>res://assets/images/background.png</code></li><li>调整位置：X=400, Y=300（居中）</li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到背景图片</li></ul><h3 id="_4-2-创建地洞容器" tabindex="-1"><a class="header-anchor" href="#_4-2-创建地洞容器" aria-hidden="true">#</a> 4.2 创建地洞容器</h3><h4 id="添加容器节点" tabindex="-1"><a class="header-anchor" href="#添加容器节点" aria-hidden="true">#</a> 添加容器节点</h4><ol><li>在场景树中，右键点击 <code>Main</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Node2D</strong></li><li>重命名为 <code>HoleContainer</code></li></ol><h4 id="设置容器位置" tabindex="-1"><a class="header-anchor" href="#设置容器位置" aria-hidden="true">#</a> 设置容器位置</h4><ol><li>在检查器中，设置 <strong>位置</strong>： <ul><li>X: 400</li><li>Y: 300</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>容器已创建</li><li>位置在屏幕中央</li></ul><h3 id="_4-3-创建-ui-层" tabindex="-1"><a class="header-anchor" href="#_4-3-创建-ui-层" aria-hidden="true">#</a> 4.3 创建 UI 层</h3><h4 id="添加-canvaslayer" tabindex="-1"><a class="header-anchor" href="#添加-canvaslayer" aria-hidden="true">#</a> 添加 CanvasLayer</h4><ol><li>在场景树中，右键点击 <code>Main</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>CanvasLayer</strong></li><li>重命名为 <code>UI</code></li></ol><h4 id="添加-hud" tabindex="-1"><a class="header-anchor" href="#添加-hud" aria-hidden="true">#</a> 添加 HUD</h4><ol><li>在场景树中，右键点击 <code>UI</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Control</strong></li><li>重命名为 <code>HUD</code></li><li>在检查器中，设置 <strong>布局</strong>： <ul><li><strong>锚点</strong>：左上</li><li><strong>左边距</strong>：0</li><li><strong>上边距</strong>：0</li><li><strong>右边距</strong>：0</li><li><strong>下边距</strong>：0</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>UI 层已创建</li><li>HUD 覆盖整个屏幕</li></ul><h3 id="_4-4-添加分数显示" tabindex="-1"><a class="header-anchor" href="#_4-4-添加分数显示" aria-hidden="true">#</a> 4.4 添加分数显示</h3><h4 id="添加分数标签" tabindex="-1"><a class="header-anchor" href="#添加分数标签" aria-hidden="true">#</a> 添加分数标签</h4><ol><li>在场景树中，右键点击 <code>HUD</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Label</strong></li><li>重命名为 <code>ScoreLabel</code></li><li>在检查器中，设置： <ul><li><strong>文本</strong>：<code>分数: 0</code></li><li><strong>位置</strong>：X=20, Y=20</li><li><strong>字体大小</strong>：24</li><li><strong>颜色</strong>：白色</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到左上角的分数显示</li></ul><h3 id="_4-5-添加时间显示" tabindex="-1"><a class="header-anchor" href="#_4-5-添加时间显示" aria-hidden="true">#</a> 4.5 添加时间显示</h3><h4 id="添加时间标签" tabindex="-1"><a class="header-anchor" href="#添加时间标签" aria-hidden="true">#</a> 添加时间标签</h4><ol><li>在场景树中，右键点击 <code>HUD</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Label</strong></li><li>重命名为 <code>TimeLabel</code></li><li>在检查器中，设置： <ul><li><strong>文本</strong>：<code>时间: 60</code></li><li><strong>位置</strong>：X=700, Y=20</li><li><strong>字体大小</strong>：24</li><li><strong>颜色</strong>：白色</li><li><strong>水平对齐</strong>：右</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到右上角的时间显示</li></ul><h3 id="_4-6-添加连击显示" tabindex="-1"><a class="header-anchor" href="#_4-6-添加连击显示" aria-hidden="true">#</a> 4.6 添加连击显示</h3><h4 id="添加连击标签" tabindex="-1"><a class="header-anchor" href="#添加连击标签" aria-hidden="true">#</a> 添加连击标签</h4><ol><li>在场景树中，右键点击 <code>HUD</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Label</strong></li><li>重命名为 <code>ComboLabel</code></li><li>在检查器中，设置： <ul><li><strong>文本</strong>：<code>连击: 0</code></li><li><strong>位置</strong>：X=400, Y=50</li><li><strong>字体大小</strong>：32</li><li><strong>颜色</strong>：黄色</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到上方的连击显示</li></ul><h3 id="_4-7-保存场景" tabindex="-1"><a class="header-anchor" href="#_4-7-保存场景" aria-hidden="true">#</a> 4.7 保存场景</h3><ol><li>点击菜单：<strong>场景 &gt; 保存</strong></li><li>确认保存成功</li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到完整的 UI 界面</li></ul><hr><h2 id="第五章-创建地洞系统" tabindex="-1"><a class="header-anchor" href="#第五章-创建地洞系统" aria-hidden="true">#</a> 第五章：创建地洞系统</h2><h3 id="_5-1-创建地洞场景" tabindex="-1"><a class="header-anchor" href="#_5-1-创建地洞场景" aria-hidden="true">#</a> 5.1 创建地洞场景</h3><h4 id="创建地洞节点" tabindex="-1"><a class="header-anchor" href="#创建地洞节点" aria-hidden="true">#</a> 创建地洞节点</h4><ol><li>点击菜单：<strong>场景 &gt; 新建场景</strong></li><li>选择 <strong>Area2D</strong></li><li>重命名为 <code>Hole</code></li></ol><h4 id="添加地洞-sprite" tabindex="-1"><a class="header-anchor" href="#添加地洞-sprite" aria-hidden="true">#</a> 添加地洞 Sprite</h4><ol><li>在场景树中，右键点击 <code>Hole</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Sprite2D</strong></li><li>重命名为 <code>HoleSprite</code></li><li>在检查器中，设置 <strong>纹理</strong>：<code>res://assets/images/hole.png</code></li></ol><h4 id="添加碰撞形状" tabindex="-1"><a class="header-anchor" href="#添加碰撞形状" aria-hidden="true">#</a> 添加碰撞形状</h4><ol><li>在场景树中，右键点击 <code>Hole</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>CollisionShape2D</strong></li><li>在检查器中，设置 <strong>形状</strong>：新建 <strong>CircleShape2D</strong></li><li>调整半径：约 20（覆盖地洞）</li></ol><h4 id="设置输入检测" tabindex="-1"><a class="header-anchor" href="#设置输入检测" aria-hidden="true">#</a> 设置输入检测</h4><ol><li>在检查器中，找到 <strong>Input</strong> 部分</li><li>勾选 <strong>拾取</strong>（Pickable）</li></ol><h4 id="保存场景-1" tabindex="-1"><a class="header-anchor" href="#保存场景-1" aria-hidden="true">#</a> 保存场景</h4><ol><li>点击菜单：<strong>场景 &gt; 另存为</strong></li><li>保存到 <code>res://scenes/Hole.tscn</code></li></ol><p><strong>✅ 验证</strong></p><ul><li>地洞场景已创建</li><li>能预览地洞外观</li></ul><h3 id="_5-2-创建地洞脚本" tabindex="-1"><a class="header-anchor" href="#_5-2-创建地洞脚本" aria-hidden="true">#</a> 5.2 创建地洞脚本</h3><h4 id="创建脚本" tabindex="-1"><a class="header-anchor" href="#创建脚本" aria-hidden="true">#</a> 创建脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>Hole.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编写脚本" tabindex="-1"><a class="header-anchor" href="#编写脚本" aria-hidden="true">#</a> 编写脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 地鼠类型枚举
    /// &lt;/summary&gt;
    public enum MoleType
    {
        Normal,  // 普通地鼠
        Fast,    // 快速地鼠
        Gold     // 金地鼠
    }

    /// &lt;summary&gt;
    /// 地洞节点，负责管理地鼠的生成和状态
    /// &lt;/summary&gt;
    public partial class Hole : Area2D
    {
        #region 信号定义

        // 地鼠被击中信号
        [Signal]
        public delegate void MoleHitEventHandler(int holeIndex, MoleType moleType);

        // 地鼠自然消失信号
        [Signal]
        public delegate void MoleMissedEventHandler(int holeIndex);

        #endregion

        #region 导出变量

        [Export]
        public int HoleIndex { get; set; }

        #endregion

        #region 私有变量

        private Mole _currentMole;
        private bool _hasMole;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            // 初始化地洞
            _hasMole = false;

            // 连接输入事件
            InputEvent += OnInputEvent;
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 生成地鼠
        /// &lt;/summary&gt;
        public void SpawnMole(MoleType moleType)
        {
            if (_hasMole) return;

            // 创建地鼠实例
            _currentMole = ResourceLoader.Load&lt;PackedScene&gt;(&quot;res://scenes/Mole.tscn&quot;).Instantiate&lt;Mole&gt;();
            _currentMole.MoleType = moleType;
            _currentMole.MoleHit += OnMoleHit;
            _currentMole.MoleMissed += OnMoleMissed;

            AddChild(_currentMole);
            _hasMole = true;
        }

        /// &lt;summary&gt;
        /// 移除地鼠
        /// &lt;/summary&gt;
        public void RemoveMole()
        {
            if (_currentMole != null)
            {
                _currentMole.QueueFree();
                _currentMole = null;
                _hasMole = false;
            }
        }

        /// &lt;summary&gt;
        /// 检查是否有地鼠
        /// &lt;/summary&gt;
        public bool HasMole()
        {
            return _hasMole;
        }

        #endregion

        #region 私有方法

        private void OnInputEvent(Node viewport, InputEvent @event, long shapeIdx)
        {
            // 检测鼠标点击
            if (@event is InputEventMouseButton mouseEvent &amp;&amp; mouseEvent.Pressed)
            {
                if (_hasMole &amp;&amp; _currentMole != null)
                {
                    _currentMole.OnHit();
                }
            }
        }

        private void OnMoleHit(MoleType moleType)
        {
            EmitSignal(SignalName.MoleHit, HoleIndex, (int)moleType);
        }

        private void OnMoleMissed()
        {
            EmitSignal(SignalName.MoleMissed, HoleIndex);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h4 id="附加脚本-1" tabindex="-1"><a class="header-anchor" href="#附加脚本-1" aria-hidden="true">#</a> 附加脚本</h4><ol><li>在场景树中选择 <code>Hole</code> 节点</li><li>在检查器中，点击 &quot;附加脚本&quot;</li><li>选择 <code>res://scripts/Hole.cs</code></li><li>点击 &quot;打开&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>脚本已附加</li><li>没有编译错误</li></ul><h3 id="_5-3-创建地洞布局" tabindex="-1"><a class="header-anchor" href="#_5-3-创建地洞布局" aria-hidden="true">#</a> 5.3 创建地洞布局</h3><h4 id="在主场景中创建地洞" tabindex="-1"><a class="header-anchor" href="#在主场景中创建地洞" aria-hidden="true">#</a> 在主场景中创建地洞</h4><ol><li>打开 <code>res://scenes/Main.tscn</code></li><li>在场景树中，右键点击 <code>HoleContainer</code></li><li>选择 &quot;实例化子场景&quot;</li><li>选择 <code>res://scenes/Hole.tscn</code></li><li>重命名为 <code>Hole01</code></li><li>在检查器中，设置 <strong>HoleIndex</strong>：<code>0</code></li><li>设置位置：X=200, Y=200</li></ol><h4 id="复制地洞" tabindex="-1"><a class="header-anchor" href="#复制地洞" aria-hidden="true">#</a> 复制地洞</h4><ol><li>右键点击 <code>Hole01</code></li><li>选择 &quot;复制&quot;</li><li>粘贴 8 次，创建 9 个地洞</li><li>分别命名为 <code>Hole02</code> 到 <code>Hole09</code></li><li>设置各自的 <code>HoleIndex</code>：1 到 8</li></ol><h4 id="调整地洞位置-3x3-网格" tabindex="-1"><a class="header-anchor" href="#调整地洞位置-3x3-网格" aria-hidden="true">#</a> 调整地洞位置（3x3 网格）</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Hole01: X=200, Y=200
Hole02: X=400, Y=200
Hole03: X=600, Y=200
Hole04: X=200, Y=350
Hole05: X=400, Y=350
Hole06: X=600, Y=350
Hole07: X=200, Y=500
Hole08: X=400, Y=500
Hole09: X=600, Y=500
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到 9 个地洞排列成 3x3 网格</li></ul><hr><h2 id="第六章-创建地鼠系统" tabindex="-1"><a class="header-anchor" href="#第六章-创建地鼠系统" aria-hidden="true">#</a> 第六章：创建地鼠系统</h2><h3 id="_6-1-创建地鼠场景" tabindex="-1"><a class="header-anchor" href="#_6-1-创建地鼠场景" aria-hidden="true">#</a> 6.1 创建地鼠场景</h3><h4 id="创建地鼠节点" tabindex="-1"><a class="header-anchor" href="#创建地鼠节点" aria-hidden="true">#</a> 创建地鼠节点</h4><ol><li>点击菜单：<strong>场景 &gt; 新建场景</strong></li><li>选择 <strong>Area2D</strong></li><li>重命名为 <code>Mole</code></li></ol><h4 id="添加地鼠-sprite" tabindex="-1"><a class="header-anchor" href="#添加地鼠-sprite" aria-hidden="true">#</a> 添加地鼠 Sprite</h4><ol><li>在场景树中，右键点击 <code>Mole</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Sprite2D</strong></li><li>重命名为 <code>MoleSprite</code></li><li>在检查器中，设置 <strong>纹理</strong>：<code>res://assets/images/mole_normal.png</code></li></ol><h4 id="添加碰撞形状-1" tabindex="-1"><a class="header-anchor" href="#添加碰撞形状-1" aria-hidden="true">#</a> 添加碰撞形状</h4><ol><li>在场景树中，右键点击 <code>Mole</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>CollisionShape2D</strong></li><li>在检查器中，设置 <strong>形状</strong>：新建 <strong>CircleShape2D</strong></li><li>调整半径：约 15</li></ol><h4 id="设置位置" tabindex="-1"><a class="header-anchor" href="#设置位置" aria-hidden="true">#</a> 设置位置</h4><ol><li>在检查器中，设置 <strong>位置</strong>： <ul><li>X: 0</li><li>Y: -10（稍微向上）</li></ul></li></ol><h4 id="保存场景-2" tabindex="-1"><a class="header-anchor" href="#保存场景-2" aria-hidden="true">#</a> 保存场景</h4><ol><li>点击菜单：<strong>场景 &gt; 另存为</strong></li><li>保存到 <code>res://scenes/Mole.tscn</code></li></ol><p><strong>✅ 验证</strong></p><ul><li>地鼠场景已创建</li><li>能预览地鼠外观</li></ul><h3 id="_6-2-创建地鼠脚本" tabindex="-1"><a class="header-anchor" href="#_6-2-创建地鼠脚本" aria-hidden="true">#</a> 6.2 创建地鼠脚本</h3><h4 id="创建脚本-1" tabindex="-1"><a class="header-anchor" href="#创建脚本-1" aria-hidden="true">#</a> 创建脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>Mole.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编写脚本-1" tabindex="-1"><a class="header-anchor" href="#编写脚本-1" aria-hidden="true">#</a> 编写脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;
using System;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 地鼠节点，负责地鼠的显示和消失
    /// &lt;/summary&gt;
    public partial class Mole : Area2D
    {
        #region 信号定义

        // 地鼠被击中信号
        [Signal]
        public delegate void MoleHitEventHandler(MoleType moleType);

        // 地鼠自然消失信号
        [Signal]
        public delegate void MoleMissedEventHandler();

        #endregion

        #region 公共属性

        public MoleType MoleType { get; set; } = MoleType.Normal;

        #endregion

        #region 私有变量

        private Timer _disappearTimer;
        private bool _isHit;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _isHit = false;

            // 根据地鼠类型设置外观
            UpdateMoleAppearance();

            // 设置停留时间
            float stayTime = GetStayTime();
            SetupDisappearTimer(stayTime);
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 地鼠被击中
        /// &lt;/summary&gt;
        public void OnHit()
        {
            if (_isHit) return;

            _isHit = true;

            // 播放击中动画（简单缩放）
            Tween tween = CreateTween();
            tween.SetParallel(true);
            tween.TweenProperty(this, &quot;scale&quot;, new Vector2(1.2f, 1.2f), 0.1f);
            tween.TweenProperty(this, &quot;modulate&quot;, Colors.Red, 0.1f);
            tween.TweenInterval(0.1f);
            tween.TweenProperty(this, &quot;scale&quot;, Vector2.Zero, 0.2f);
            tween.TweenInterval(0.2f);
            tween.TweenCallback(Callable.From(QueueFree));

            // 发出击中信号
            EmitSignal(SignalName.MoleHit, (int)MoleType);

            // 停止消失计时器
            if (_disappearTimer != null)
            {
                _disappearTimer.Stop();
            }
        }

        #endregion

        #region 私有方法

        /// &lt;summary&gt;
        /// 更新地鼠外观
        /// &lt;/summary&gt;
        private void UpdateMoleAppearance()
        {
            Sprite2D sprite = GetNode&lt;Sprite2D&gt;(&quot;MoleSprite&quot;);
            string texturePath = MoleType switch
            {
                MoleType.Normal =&gt; &quot;res://assets/images/mole_normal.png&quot;,
                MoleType.Fast =&gt; &quot;res://assets/images/mole_fast.png&quot;,
                MoleType.Gold =&gt; &quot;res://assets/images/mole_gold.png&quot;,
                _ =&gt; &quot;res://assets/images/mole_normal.png&quot;
            };

            sprite.Texture = ResourceLoader.Load&lt;Texture2D&gt;(texturePath);
        }

        /// &lt;summary&gt;
        /// 获取停留时间
        /// &lt;/summary&gt;
        private float GetStayTime()
        {
            return MoleType switch
            {
                MoleType.Normal =&gt; 1.5f,
                MoleType.Fast =&gt; 0.8f,
                MoleType.Gold =&gt; 1.0f,
                _ =&gt; 1.5f
            };
        }

        /// &lt;summary&gt;
        /// 设置消失计时器
        /// &lt;/summary&gt;
        private void SetupDisappearTimer(float time)
        {
            _disappearTimer = new Timer();
            _disappearTimer.WaitTime = time;
            _disappearTimer.OneShot = true;
            _disappearTimer.Timeout += OnDisappearTimeout;
            AddChild(_disappearTimer);
            _disappearTimer.Start();
        }

        /// &lt;summary&gt;
        /// 消失计时器超时
        /// &lt;/summary&gt;
        private void OnDisappearTimeout()
        {
            if (!_isHit)
            {
                // 播放消失动画
                Tween tween = CreateTween();
                tween.TweenProperty(this, &quot;scale&quot;, Vector2.Zero, 0.2f);
                tween.TweenInterval(0.2f);
                tween.TweenCallback(Callable.From(() =&gt;
                {
                    EmitSignal(SignalName.MoleMissed);
                    QueueFree();
                }));
            }
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h4 id="附加脚本-2" tabindex="-1"><a class="header-anchor" href="#附加脚本-2" aria-hidden="true">#</a> 附加脚本</h4><ol><li>在场景树中选择 <code>Mole</code> 节点</li><li>在检查器中，点击 &quot;附加脚本&quot;</li><li>选择 <code>res://scripts/Mole.cs</code></li><li>点击 &quot;打开&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>脚本已附加</li><li>没有编译错误</li></ul><hr><h2 id="第七章-游戏管理器" tabindex="-1"><a class="header-anchor" href="#第七章-游戏管理器" aria-hidden="true">#</a> 第七章：游戏管理器</h2><h3 id="_7-1-创建游戏管理器节点" tabindex="-1"><a class="header-anchor" href="#_7-1-创建游戏管理器节点" aria-hidden="true">#</a> 7.1 创建游戏管理器节点</h3><h4 id="添加游戏管理器" tabindex="-1"><a class="header-anchor" href="#添加游戏管理器" aria-hidden="true">#</a> 添加游戏管理器</h4><ol><li>打开 <code>res://scenes/Main.tscn</code></li><li>在场景树中，右键点击 <code>Main</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Node</strong></li><li>重命名为 <code>GameManager</code></li></ol><h3 id="_7-2-创建游戏管理器脚本" tabindex="-1"><a class="header-anchor" href="#_7-2-创建游戏管理器脚本" aria-hidden="true">#</a> 7.2 创建游戏管理器脚本</h3><h4 id="创建脚本-2" tabindex="-1"><a class="header-anchor" href="#创建脚本-2" aria-hidden="true">#</a> 创建脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>GameManager.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编写脚本-2" tabindex="-1"><a class="header-anchor" href="#编写脚本-2" aria-hidden="true">#</a> 编写脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 游戏管理器，负责游戏的核心逻辑
    /// &lt;/summary&gt;
    public partial class GameManager : Node
    {
        #region 常量

        private const int GAME_DURATION = 60; // 游戏时长（秒）
        private const int HOLE_COUNT = 9;     // 地洞数量

        #endregion

        #region 私有变量

        private Timer _gameTimer;
        private Timer _spawnTimer;
        private List&lt;Hole&gt; _holes;
        private int _score;
        private int _combo;
        private int _timeRemaining;
        private bool _isGameRunning;
        private Random _random;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _random = new Random();
            _holes = new List&lt;Hole&gt;();
            _score = 0;
            _combo = 0;
            _timeRemaining = GAME_DURATION;
            _isGameRunning = false;

            // 初始化地洞
            InitializeHoles();

            // 设置游戏计时器
            SetupGameTimer();

            // 设置生成计时器
            SetupSpawnTimer();

            // 连接 UI 信号
            ConnectUISignals();

            // 更新 UI
            UpdateUI();

            // 开始游戏
            StartGame();
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 开始游戏
        /// &lt;/summary&gt;
        public void StartGame()
        {
            if (_isGameRunning) return;

            _isGameRunning = true;
            _score = 0;
            _combo = 0;
            _timeRemaining = GAME_DURATION;

            // 清除所有地鼠
            foreach (var hole in _holes)
            {
                hole.RemoveMole();
            }

            // 更新 UI
            UpdateUI();

            // 启动计时器
            _gameTimer.Start();
            _spawnTimer.Start();

            GD.Print(&quot;游戏开始！&quot;);
        }

        /// &lt;summary&gt;
        /// 结束游戏
        /// &lt;/summary&gt;
        public void EndGame()
        {
            if (!_isGameRunning) return;

            _isGameRunning = false;

            // 停止计时器
            _gameTimer.Stop();
            _spawnTimer.Stop();

            // 清除所有地鼠
            foreach (var hole in _holes)
            {
                hole.RemoveMole();
            }

            GD.Print($&quot;游戏结束！最终分数：{_score}&quot;);
        }

        #endregion

        #region 私有方法

        /// &lt;summary&gt;
        /// 初始化地洞
        /// &lt;/summary&gt;
        private void InitializeHoles()
        {
            Node2D holeContainer = GetNode&lt;Node2D&gt;(&quot;HoleContainer&quot;);

            for (int i = 0; i &lt; HOLE_COUNT; i++)
            {
                Hole hole = holeContainer.GetNode&lt;Hole&gt;($&quot;Hole{(i + 1):D2}&quot;);
                _holes.Add(hole);

                // 连接地洞信号
                hole.MoleHit += OnMoleHit;
                hole.MoleMissed += OnMoleMissed;
            }
        }

        /// &lt;summary&gt;
        /// 设置游戏计时器
        /// &lt;/summary&gt;
        private void SetupGameTimer()
        {
            _gameTimer = new Timer();
            _gameTimer.WaitTime = 1.0f;
            _gameTimer.OneShot = false;
            _gameTimer.Timeout += OnGameTimerTimeout;
            AddChild(_gameTimer);
        }

        /// &lt;summary&gt;
        /// 设置生成计时器
        /// &lt;/summary&gt;
        private void SetupSpawnTimer()
        {
            _spawnTimer = new Timer();
            _spawnTimer.WaitTime = 1.0f;
            _spawnTimer.OneShot = false;
            _spawnTimer.Timeout += OnSpawnTimerTimeout;
            AddChild(_spawnTimer);
        }

        /// &lt;summary&gt;
        /// 连接 UI 信号
        /// &lt;/summary&gt;
        private void ConnectUISignals()
        {
            // UI 信号连接将在后续章节实现
        }

        /// &lt;summary&gt;
        /// 更新 UI
        /// &lt;/summary&gt;
        private void UpdateUI()
        {
            CanvasLayer ui = GetNode&lt;CanvasLayer&gt;(&quot;UI&quot;);
            Label scoreLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/ScoreLabel&quot;);
            Label timeLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/TimeLabel&quot;);
            Label comboLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/ComboLabel&quot;);

            scoreLabel.Text = $&quot;分数: {_score}&quot;;
            timeLabel.Text = $&quot;时间: {_timeRemaining}&quot;;
            comboLabel.Text = $&quot;连击: {_combo}&quot;;
        }

        /// &lt;summary&gt;
        /// 生成地鼠
        /// &lt;/summary&gt;
        private void SpawnMole()
        {
            // 获取空闲的地洞
            var availableHoles = _holes.Where(h =&gt; !h.HasMole()).ToList();

            if (availableHoles.Count == 0) return;

            // 随机选择一个地洞
            int randomIndex = _random.Next(availableHoles.Count);
            Hole selectedHole = availableHoles[randomIndex];

            // 随机选择地鼠类型
            MoleType moleType = GetRandomMoleType();

            // 生成地鼠
            selectedHole.SpawnMole(moleType);
        }

        /// &lt;summary&gt;
        /// 获取随机地鼠类型
        /// &lt;/summary&gt;
        private MoleType GetRandomMoleType()
        {
            double randomValue = _random.NextDouble();

            // 根据游戏时间调整概率
            float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.5f;

            // 基础概率
            double normalProb = 0.7 * difficultyMultiplier;
            double fastProb = 0.2 * difficultyMultiplier;
            double goldProb = 0.1;

            if (randomValue &lt; normalProb)
            {
                return MoleType.Normal;
            }
            else if (randomValue &lt; normalProb + fastProb)
            {
                return MoleType.Fast;
            }
            else
            {
                return MoleType.Gold;
            }
        }

        /// &lt;summary&gt;
        /// 计算得分
        /// &lt;/summary&gt;
        private int CalculateScore(MoleType moleType)
        {
            int baseScore = moleType switch
            {
                MoleType.Normal =&gt; 10,
                MoleType.Fast =&gt; 20,
                MoleType.Gold =&gt; 50,
                _ =&gt; 10
            };

            // 连击奖励
            int comboBonus = 0;
            if (_combo &gt;= 5)
            {
                comboBonus = 10;
            }
            else if (_combo &gt;= 3)
            {
                comboBonus = 5;
            }

            return baseScore + comboBonus;
        }

        #endregion

        #region 事件处理

        /// &lt;summary&gt;
        /// 游戏计时器超时
        /// &lt;/summary&gt;
        private void OnGameTimerTimeout()
        {
            _timeRemaining--;

            // 更新 UI
            UpdateUI();

            // 检查游戏是否结束
            if (_timeRemaining &lt;= 0)
            {
                EndGame();
            }
        }

        /// &lt;summary&gt;
        /// 生成计时器超时
        /// &lt;/summary&gt;
        private void OnSpawnTimerTimeout()
        {
            if (!_isGameRunning) return;

            // 生成地鼠
            SpawnMole();

            // 根据游戏时间调整生成间隔
            float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.5f;
            _spawnTimer.WaitTime = 1.0f * difficultyMultiplier;
        }

        /// &lt;summary&gt;
        /// 地鼠被击中
        /// &lt;/summary&gt;
        private void OnMoleHit(int holeIndex, MoleType moleType)
        {
            if (!_isGameRunning) return;

            // 增加连击
            _combo++;

            // 计算得分
            int points = CalculateScore(moleType);
            _score += points;

            // 金地鼠奖励：延长游戏时间
            if (moleType == MoleType.Gold)
            {
                _timeRemaining = Math.Min(_timeRemaining + 2, GAME_DURATION);
            }

            // 更新 UI
            UpdateUI();

            GD.Print($&quot;击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}&quot;);
        }

        /// &lt;summary&gt;
        /// 地鼠自然消失
        /// &lt;/summary&gt;
        private void OnMoleMissed(int holeIndex)
        {
            if (!_isGameRunning) return;

            // 重置连击
            _combo = 0;

            // 更新 UI
            UpdateUI();

            GD.Print($&quot;地鼠消失！连击重置&quot;);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h4 id="附加脚本-3" tabindex="-1"><a class="header-anchor" href="#附加脚本-3" aria-hidden="true">#</a> 附加脚本</h4><ol><li>在场景树中选择 <code>GameManager</code> 节点</li><li>在检查器中，点击 &quot;附加脚本&quot;</li><li>选择 <code>res://scripts/GameManager.cs</code></li><li>点击 &quot;打开&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>脚本已附加</li><li>按 F5 运行</li><li>游戏能正常开始</li><li>地鼠能随机出现</li><li>点击地鼠能得分</li><li>时间倒计时正常</li><li>60秒后游戏结束</li></ul><hr><h2 id="第八章-连击系统" tabindex="-1"><a class="header-anchor" href="#第八章-连击系统" aria-hidden="true">#</a> 第八章：连击系统</h2><h3 id="_8-1-连击系统说明" tabindex="-1"><a class="header-anchor" href="#_8-1-连击系统说明" aria-hidden="true">#</a> 8.1 连击系统说明</h3><p>连击系统已经在 <code>GameManager.cs</code> 中实现，包括：</p><ul><li>连击计数</li><li>连击奖励（3连击+5分，5连击+10分）</li><li>连击中断（地鼠消失时重置）</li></ul><h3 id="_8-2-连击视觉反馈" tabindex="-1"><a class="header-anchor" href="#_8-2-连击视觉反馈" aria-hidden="true">#</a> 8.2 连击视觉反馈</h3><h4 id="在-gamemanager-cs-中添加连击动画" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中添加连击动画" aria-hidden="true">#</a> 在 GameManager.cs 中添加连击动画</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>/// &lt;summary&gt;
/// 显示连击动画
/// &lt;/summary&gt;
private void ShowComboAnimation()
{
    if (_combo &lt; 3) return;

    CanvasLayer ui = GetNode&lt;CanvasLayer&gt;(&quot;UI&quot;);
    Label comboLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/ComboLabel&quot;);

    // 创建缩放动画
    Tween tween = CreateTween();
    tween.SetParallel(true);
    tween.TweenProperty(comboLabel, &quot;scale&quot;, new Vector2(1.5f, 1.5f), 0.1f);
    tween.TweenProperty(comboLabel, &quot;modulate&quot;, Colors.Yellow, 0.1f);
    tween.TweenInterval(0.1f);
    tween.TweenProperty(comboLabel, &quot;scale&quot;, Vector2.One, 0.2f);
    tween.TweenProperty(comboLabel, &quot;modulate&quot;, Colors.White, 0.2f);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-onmolehit-方法中调用" tabindex="-1"><a class="header-anchor" href="#在-onmolehit-方法中调用" aria-hidden="true">#</a> 在 OnMoleHit 方法中调用</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 更新 UI
UpdateUI();

// 显示连击动画
ShowComboAnimation();

GD.Print($&quot;击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}&quot;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>连击达到3次时，连击文字会放大并变黄</li><li>连击中断后，连击文字恢复正常</li></ul><hr><h2 id="第九章-难度曲线" tabindex="-1"><a class="header-anchor" href="#第九章-难度曲线" aria-hidden="true">#</a> 第九章：难度曲线</h2><h3 id="_9-1-难度曲线说明" tabindex="-1"><a class="header-anchor" href="#_9-1-难度曲线说明" aria-hidden="true">#</a> 9.1 难度曲线说明</h3><p>难度曲线已经在 <code>GameManager.cs</code> 中实现，包括：</p><ul><li>地鼠出现间隔随时间缩短</li><li>特殊地鼠概率随时间增加</li><li>地鼠停留时间保持不变</li></ul><h3 id="_9-2-难度调整参数" tabindex="-1"><a class="header-anchor" href="#_9-2-难度调整参数" aria-hidden="true">#</a> 9.2 难度调整参数</h3><h4 id="在-gamemanager-cs-中调整" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中调整" aria-hidden="true">#</a> 在 GameManager.cs 中调整</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 GetRandomMoleType 方法中
private MoleType GetRandomMoleType()
{
    double randomValue = _random.NextDouble();

    // 根据游戏时间调整概率（可调整难度）
    float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.7f; // 从0.5改为0.7，增加难度

    // 基础概率
    double normalProb = 0.7 * difficultyMultiplier;
    double fastProb = 0.2 * difficultyMultiplier;
    double goldProb = 0.1;

    if (randomValue &lt; normalProb)
    {
        return MoleType.Normal;
    }
    else if (randomValue &lt; normalProb + fastProb)
    {
        return MoleType.Fast;
    }
    else
    {
        return MoleType.Gold;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>游戏后期难度明显增加</li><li>特殊地鼠出现更频繁</li></ul><hr><h2 id="第十章-排行榜系统" tabindex="-1"><a class="header-anchor" href="#第十章-排行榜系统" aria-hidden="true">#</a> 第十章：排行榜系统</h2><h3 id="_10-1-创建排行榜管理器" tabindex="-1"><a class="header-anchor" href="#_10-1-创建排行榜管理器" aria-hidden="true">#</a> 10.1 创建排行榜管理器</h3><h4 id="创建脚本-3" tabindex="-1"><a class="header-anchor" href="#创建脚本-3" aria-hidden="true">#</a> 创建脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>LeaderboardManager.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编写脚本-3" tabindex="-1"><a class="header-anchor" href="#编写脚本-3" aria-hidden="true">#</a> 编写脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 排行榜记录
    /// &lt;/summary&gt;
    public class LeaderboardEntry
    {
        public int Rank { get; set; }
        public int Score { get; set; }
        public string Date { get; set; }

        public LeaderboardEntry(int rank, int score, string date)
        {
            Rank = rank;
            Score = score;
            Date = date;
        }
    }

    /// &lt;summary&gt;
    /// 排行榜管理器
    /// &lt;/summary&gt;
    public partial class LeaderboardManager : Node
    {
        #region 常量

        private const string SAVE_FILE = &quot;user://leaderboard.cfg&quot;;
        private const int MAX_ENTRIES = 10;

        #endregion

        #region 私有变量

        private List&lt;LeaderboardEntry&gt; _entries;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            LoadLeaderboard();
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 添加分数
        /// &lt;/summary&gt;
        public void AddScore(int score)
        {
            string date = DateTime.Now.ToString(&quot;yyyy-MM-dd HH:mm&quot;);

            // 创建新记录
            LeaderboardEntry newEntry = new LeaderboardEntry(0, score, date);
            _entries.Add(newEntry);

            // 按分数排序
            _entries = _entries.OrderByDescending(e =&gt; e.Score).ToList();

            // 限制记录数量
            if (_entries.Count &gt; MAX_ENTRIES)
            {
                _entries = _entries.Take(MAX_ENTRIES).ToList();
            }

            // 更新排名
            UpdateRanks();

            // 保存
            SaveLeaderboard();
        }

        /// &lt;summary&gt;
        /// 获取排行榜
        /// &lt;/summary&gt;
        public List&lt;LeaderboardEntry&gt; GetLeaderboard()
        {
            return new List&lt;LeaderboardEntry&gt;(_entries);
        }

        /// &lt;summary&gt;
        /// 获取最高分
        /// &lt;/summary&gt;
        public int GetHighScore()
        {
            if (_entries.Count == 0) return 0;
            return _entries[0].Score;
        }

        /// &lt;summary&gt;
        /// 检查是否进入排行榜
        /// &lt;/summary&gt;
        public bool IsHighScore(int score)
        {
            if (_entries.Count &lt; MAX_ENTRIES) return true;
            return score &gt; _entries.Last().Score;
        }

        /// &lt;summary&gt;
        /// 清空排行榜
        /// &lt;/summary&gt;
        public void ClearLeaderboard()
        {
            _entries.Clear();
            SaveLeaderboard();
        }

        #endregion

        #region 私有方法

        /// &lt;summary&gt;
        /// 更新排名
        /// &lt;/summary&gt;
        private void UpdateRanks()
        {
            for (int i = 0; i &lt; _entries.Count; i++)
            {
                _entries[i].Rank = i + 1;
            }
        }

        /// &lt;summary&gt;
        /// 保存排行榜
        /// &lt;/summary&gt;
        private void SaveLeaderboard()
        {
            var config = new ConfigFile();

            for (int i = 0; i &lt; _entries.Count; i++)
            {
                string section = $&quot;entry_{i}&quot;;
                config.SetValue(section, &quot;rank&quot;, _entries[i].Rank);
                config.SetValue(section, &quot;score&quot;, _entries[i].Score);
                config.SetValue(section, &quot;date&quot;, _entries[i].Date);
            }

            config.SetValue(&quot;meta&quot;, &quot;count&quot;, _entries.Count);

            Error error = config.Save(SAVE_FILE);
            if (error != Error.Ok)
            {
                GD.PrintErr($&quot;保存排行榜失败：{error}&quot;);
            }
        }

        /// &lt;summary&gt;
        /// 加载排行榜
        /// &lt;/summary&gt;
        private void LoadLeaderboard()
        {
            _entries = new List&lt;LeaderboardEntry&gt;();

            if (!FileAccess.FileExists(SAVE_FILE))
            {
                GD.Print(&quot;排行榜文件不存在，创建新排行榜&quot;);
                return;
            }

            var config = new ConfigFile();
            Error error = config.Load(SAVE_FILE);

            if (error != Error.Ok)
            {
                GD.PrintErr($&quot;加载排行榜失败：{error}&quot;);
                return;
            }

            int count = (int)config.GetValue(&quot;meta&quot;, &quot;count&quot;, 0);

            for (int i = 0; i &lt; count; i++)
            {
                string section = $&quot;entry_{i}&quot;;
                int rank = (int)config.GetValue(section, &quot;rank&quot;, 0);
                int score = (int)config.GetValue(section, &quot;score&quot;, 0);
                string date = (string)config.GetValue(section, &quot;date&quot;, &quot;&quot;);

                LeaderboardEntry entry = new LeaderboardEntry(rank, score, date);
                _entries.Add(entry);
            }

            GD.Print($&quot;加载排行榜成功，共 {_entries.Count} 条记录&quot;);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h3 id="_10-2-在游戏中集成排行榜" tabindex="-1"><a class="header-anchor" href="#_10-2-在游戏中集成排行榜" aria-hidden="true">#</a> 10.2 在游戏中集成排行榜</h3><h4 id="在主场景中添加排行榜管理器" tabindex="-1"><a class="header-anchor" href="#在主场景中添加排行榜管理器" aria-hidden="true">#</a> 在主场景中添加排行榜管理器</h4><ol><li>打开 <code>res://scenes/Main.tscn</code></li><li>在场景树中，右键点击 <code>GameManager</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Node</strong></li><li>重命名为 <code>LeaderboardManager</code></li><li>附加 <code>LeaderboardManager.cs</code> 脚本</li></ol><h4 id="在-gamemanager-cs-中集成排行榜" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中集成排行榜" aria-hidden="true">#</a> 在 GameManager.cs 中集成排行榜</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在私有变量中添加
private LeaderboardManager _leaderboardManager;

// 在 _Ready 方法中初始化
_leaderboardManager = GetNode&lt;LeaderboardManager&gt;(&quot;LeaderboardManager&quot;);

// 在 EndGame 方法中保存分数
public void EndGame()
{
    if (!_isGameRunning) return;

    _isGameRunning = false;

    // 停止计时器
    _gameTimer.Stop();
    _spawnTimer.Stop();

    // 清除所有地鼠
    foreach (var hole in _holes)
    {
        hole.RemoveMole();
    }

    // 保存分数到排行榜
    _leaderboardManager.AddScore(_score);

    // 检查是否进入排行榜
    bool isHighScore = _leaderboardManager.IsHighScore(_score);
    if (isHighScore)
    {
        GD.Print($&quot;恭喜！新纪录：{_score} 分&quot;);
    }

    GD.Print($&quot;游戏结束！最终分数：{_score}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>完成一局游戏</li><li>分数会保存到排行榜</li><li>重新运行游戏，排行榜数据会加载</li></ul><hr><h2 id="第十一章-音效制作" tabindex="-1"><a class="header-anchor" href="#第十一章-音效制作" aria-hidden="true">#</a> 第十一章：音效制作</h2><h3 id="_11-1-使用-bfxr-制作音效" tabindex="-1"><a class="header-anchor" href="#_11-1-使用-bfxr-制作音效" aria-hidden="true">#</a> 11.1 使用 Bfxr 制作音效</h3><h4 id="访问-bfxr" tabindex="-1"><a class="header-anchor" href="#访问-bfxr" aria-hidden="true">#</a> 访问 Bfxr</h4><ol><li>打开浏览器</li><li>访问：https://www.bfxr.net/</li></ol><h4 id="制作音效步骤" tabindex="-1"><a class="header-anchor" href="#制作音效步骤" aria-hidden="true">#</a> 制作音效步骤</h4><h5 id="_1-击中普通地鼠音效-hit-normal-wav" tabindex="-1"><a class="header-anchor" href="#_1-击中普通地鼠音效-hit-normal-wav" aria-hidden="true">#</a> 1. 击中普通地鼠音效（hit_normal.wav）</h5><ol><li>点击 &quot;Pickup/Coin&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 800-1000 Hz</li><li><strong>Decay</strong>：约 0.1-0.2 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>hit_normal.wav</code></li></ol><h5 id="_2-击中快速地鼠音效-hit-fast-wav" tabindex="-1"><a class="header-anchor" href="#_2-击中快速地鼠音效-hit-fast-wav" aria-hidden="true">#</a> 2. 击中快速地鼠音效（hit_fast.wav）</h5><ol><li>点击 &quot;Powerup&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 1200-1500 Hz</li><li><strong>Decay</strong>：约 0.08-0.12 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>hit_fast.wav</code></li></ol><h5 id="_3-击中金地鼠音效-hit-gold-wav" tabindex="-1"><a class="header-anchor" href="#_3-击中金地鼠音效-hit-gold-wav" aria-hidden="true">#</a> 3. 击中金地鼠音效（hit_gold.wav）</h5><ol><li>点击 &quot;Coin&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 1500-2000 Hz</li><li><strong>Decay</strong>：约 0.3-0.5 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>hit_gold.wav</code></li></ol><h5 id="_4-连击音效-combo-wav" tabindex="-1"><a class="header-anchor" href="#_4-连击音效-combo-wav" aria-hidden="true">#</a> 4. 连击音效（combo.wav）</h5><ol><li>点击 &quot;Jump&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 600-800 Hz</li><li><strong>Decay</strong>：约 0.15-0.25 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>combo.wav</code></li></ol><h5 id="_5-地鼠出现音效-mole-appear-wav" tabindex="-1"><a class="header-anchor" href="#_5-地鼠出现音效-mole-appear-wav" aria-hidden="true">#</a> 5. 地鼠出现音效（mole_appear.wav）</h5><ol><li>点击 &quot;Blip/Select&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 400-600 Hz</li><li><strong>Decay</strong>：约 0.1-0.15 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>mole_appear.wav</code></li></ol><h5 id="_6-地鼠消失音效-mole-miss-wav" tabindex="-1"><a class="header-anchor" href="#_6-地鼠消失音效-mole-miss-wav" aria-hidden="true">#</a> 6. 地鼠消失音效（mole_miss.wav）</h5><ol><li>点击 &quot;Hit/Hurt&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 200-400 Hz</li><li><strong>Decay</strong>：约 0.2-0.3 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>mole_miss.wav</code></li></ol><h5 id="_7-时间警告音效-time-warning-wav" tabindex="-1"><a class="header-anchor" href="#_7-时间警告音效-time-warning-wav" aria-hidden="true">#</a> 7. 时间警告音效（time_warning.wav）</h5><ol><li>点击 &quot;Laser/Shoot&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 800-1000 Hz</li><li><strong>Decay</strong>：约 0.5-0.8 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>time_warning.wav</code></li></ol><h5 id="_8-游戏结束音效-game-over-wav" tabindex="-1"><a class="header-anchor" href="#_8-游戏结束音效-game-over-wav" aria-hidden="true">#</a> 8. 游戏结束音效（game_over.wav）</h5><ol><li>点击 &quot;Explosion&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 100-200 Hz</li><li><strong>Decay</strong>：约 1.0-1.5 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>game_over.wav</code></li></ol><h5 id="_9-按钮点击音效-button-click-wav" tabindex="-1"><a class="header-anchor" href="#_9-按钮点击音效-button-click-wav" aria-hidden="true">#</a> 9. 按钮点击音效（button_click.wav）</h5><ol><li>点击 &quot;Blip/Select&quot; 预设</li><li>调整参数： <ul><li><strong>Frequency</strong>：约 1000-1200 Hz</li><li><strong>Decay</strong>：约 0.05-0.1 秒</li></ul></li><li>点击播放试听</li><li>点击 &quot;Export WAV&quot;</li><li>保存为 <code>button_click.wav</code></li></ol><h5 id="_10-背景音乐-可选" tabindex="-1"><a class="header-anchor" href="#_10-背景音乐-可选" aria-hidden="true">#</a> 10. 背景音乐（可选）</h5><p>如果你有背景音乐，可以：</p><ol><li>下载免费的 8-bit 风格音乐</li><li>或使用在线工具生成</li><li>保存为 <code>background_music.ogg</code></li></ol><h3 id="_11-2-导入音效到-godot" tabindex="-1"><a class="header-anchor" href="#_11-2-导入音效到-godot" aria-hidden="true">#</a> 11.2 导入音效到 Godot</h3><h4 id="导入步骤-1" tabindex="-1"><a class="header-anchor" href="#导入步骤-1" aria-hidden="true">#</a> 导入步骤</h4><ol><li>在 Godot 编辑器中，点击 &quot;文件系统&quot; 标签</li><li>将所有 WAV 文件拖到 <code>res://assets/audio</code> 文件夹</li><li>Godot 会自动导入</li></ol><p><strong>✅ 验证</strong></p><ul><li>所有音效已导入</li><li>能预览播放音效</li></ul><hr><h2 id="第十二章-音效系统" tabindex="-1"><a class="header-anchor" href="#第十二章-音效系统" aria-hidden="true">#</a> 第十二章：音效系统</h2><h3 id="_12-1-创建音效管理器" tabindex="-1"><a class="header-anchor" href="#_12-1-创建音效管理器" aria-hidden="true">#</a> 12.1 创建音效管理器</h3><h4 id="创建脚本-4" tabindex="-1"><a class="header-anchor" href="#创建脚本-4" aria-hidden="true">#</a> 创建脚本</h4><ol><li>在文件系统中，右键点击 <code>scripts</code> 文件夹</li><li>选择 &quot;新建 &gt; 脚本&quot;</li><li>选择 <strong>C#</strong></li><li>命名为 <code>AudioManager.cs</code></li><li>点击 &quot;创建&quot;</li></ol><h4 id="编写脚本-4" tabindex="-1"><a class="header-anchor" href="#编写脚本-4" aria-hidden="true">#</a> 编写脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 音效管理器
    /// &lt;/summary&gt;
    public partial class AudioManager : Node
    {
        #region 单例

        public static AudioManager Instance { get; private set; }

        #endregion

        #region 私有变量

        private AudioStreamPlayer _sfxPlayer;
        private AudioStreamPlayer _musicPlayer;
        private float _sfxVolume = 1.0f;
        private float _musicVolume = 0.5f;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            // 设置单例
            Instance = this;

            // 创建音效播放器
            _sfxPlayer = new AudioStreamPlayer();
            _sfxPlayer.Name = &quot;SFXPlayer&quot;;
            AddChild(_sfxPlayer);

            // 创建音乐播放器
            _musicPlayer = new AudioStreamPlayer();
            _musicPlayer.Name = &quot;MusicPlayer&quot;;
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
            AddChild(_musicPlayer);
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 播放音效
        /// &lt;/summary&gt;
        public void PlaySFX(string soundName)
        {
            string soundPath = $&quot;res://assets/audio/{soundName}.wav&quot;;

            if (!FileAccess.FileExists(soundPath))
            {
                GD.PrintErr($&quot;音效文件不存在：{soundPath}&quot;);
                return;
            }

            AudioStream sound = ResourceLoader.Load&lt;AudioStream&gt;(soundPath);
            _sfxPlayer.Stream = sound;
            _sfxPlayer.VolumeDb = Mathf.LinearToDb(_sfxVolume);
            _sfxPlayer.Play();
        }

        /// &lt;summary&gt;
        /// 播放音乐
        /// &lt;/summary&gt;
        public void PlayMusic(string musicName, bool loop = true)
        {
            string musicPath = $&quot;res://assets/audio/{musicName}.ogg&quot;;

            if (!FileAccess.FileExists(musicPath))
            {
                GD.PrintErr($&quot;音乐文件不存在：{musicPath}&quot;);
                return;
            }

            AudioStream music = ResourceLoader.Load&lt;AudioStream&gt;(musicPath);
            _musicPlayer.Stream = music;
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);

            if (loop)
            {
                _musicPlayer.Autoplay = true;
            }

            _musicPlayer.Play();
        }

        /// &lt;summary&gt;
        /// 停止音乐
        /// &lt;/summary&gt;
        public void StopMusic()
        {
            _musicPlayer.Stop();
        }

        /// &lt;summary&gt;
        /// 设置音效音量
        /// &lt;/summary&gt;
        public void SetSFXVolume(float volume)
        {
            _sfxVolume = Mathf.Clamp(volume, 0.0f, 1.0f);
        }

        /// &lt;summary&gt;
        /// 设置音乐音量
        /// &lt;/summary&gt;
        public void SetMusicVolume(float volume)
        {
            _musicVolume = Mathf.Clamp(volume, 0.0f, 1.0f);
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保存文件（Ctrl + S）</li></ol><h3 id="_12-2-在游戏中集成音效" tabindex="-1"><a class="header-anchor" href="#_12-2-在游戏中集成音效" aria-hidden="true">#</a> 12.2 在游戏中集成音效</h3><h4 id="在主场景中添加音效管理器" tabindex="-1"><a class="header-anchor" href="#在主场景中添加音效管理器" aria-hidden="true">#</a> 在主场景中添加音效管理器</h4><ol><li>打开 <code>res://scenes/Main.tscn</code></li><li>在场景树中，右键点击 <code>GameManager</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Node</strong></li><li>重命名为 <code>AudioManager</code></li><li>附加 <code>AudioManager.cs</code> 脚本</li></ol><h4 id="在-gamemanager-cs-中添加音效" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中添加音效" aria-hidden="true">#</a> 在 GameManager.cs 中添加音效</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 OnMoleHit 方法中添加
private void OnMoleHit(int holeIndex, MoleType moleType)
{
    if (!_isGameRunning) return;

    // 播放击中音效
    string hitSound = moleType switch
    {
        MoleType.Normal =&gt; &quot;hit_normal&quot;,
        MoleType.Fast =&gt; &quot;hit_fast&quot;,
        MoleType.Gold =&gt; &quot;hit_gold&quot;,
        _ =&gt; &quot;hit_normal&quot;
    };
    AudioManager.Instance.PlaySFX(hitSound);

    // 增加连击
    _combo++;

    // 连击音效
    if (_combo &gt;= 3)
    {
        AudioManager.Instance.PlaySFX(&quot;combo&quot;);
    }

    // 计算得分
    int points = CalculateScore(moleType);
    _score += points;

    // 金地鼠奖励：延长游戏时间
    if (moleType == MoleType.Gold)
    {
        _timeRemaining = Math.Min(_timeRemaining + 2, GAME_DURATION);
    }

    // 更新 UI
    UpdateUI();

    // 显示连击动画
    ShowComboAnimation();

    GD.Print($&quot;击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}&quot;);
}

// 在 OnMoleMissed 方法中添加
private void OnMoleMissed(int holeIndex)
{
    if (!_isGameRunning) return;

    // 播放消失音效
    AudioManager.Instance.PlaySFX(&quot;mole_miss&quot;);

    // 重置连击
    _combo = 0;

    // 更新 UI
    UpdateUI();

    GD.Print($&quot;地鼠消失！连击重置&quot;);
}

// 在 OnSpawnTimerTimeout 方法中添加
private void OnSpawnTimerTimeout()
{
    if (!_isGameRunning) return;

    // 生成地鼠
    SpawnMole();

    // 播放地鼠出现音效（可选，可能太频繁）
    // AudioManager.Instance.PlaySFX(&quot;mole_appear&quot;);

    // 根据游戏时间调整生成间隔
    float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.5f;
    _spawnTimer.WaitTime = 1.0f * difficultyMultiplier;
}

// 在 OnGameTimerTimeout 方法中添加时间警告
private void OnGameTimerTimeout()
{
    _timeRemaining--;

    // 时间警告音效
    if (_timeRemaining == 10)
    {
        AudioManager.Instance.PlaySFX(&quot;time_warning&quot;);
    }

    // 更新 UI
    UpdateUI();

    // 检查游戏是否结束
    if (_timeRemaining &lt;= 0)
    {
        EndGame();
    }
}

// 在 EndGame 方法中添加游戏结束音效
public void EndGame()
{
    if (!_isGameRunning) return;

    _isGameRunning = false;

    // 停止计时器
    _gameTimer.Stop();
    _spawnTimer.Stop();

    // 清除所有地鼠
    foreach (var hole in _holes)
    {
        hole.RemoveMole();
    }

    // 保存分数到排行榜
    _leaderboardManager.AddScore(_score);

    // 检查是否进入排行榜
    bool isHighScore = _leaderboardManager.IsHighScore(_score);
    if (isHighScore)
    {
        GD.Print($&quot;恭喜！新纪录：{_score} 分&quot;);
    }

    // 播放游戏结束音效
    AudioManager.Instance.PlaySFX(&quot;game_over&quot;);

    GD.Print($&quot;游戏结束！最终分数：{_score}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>击中地鼠有音效</li><li>连击有音效</li><li>时间警告有音效</li><li>游戏结束有音效</li></ul><hr><h2 id="第十三章-ui界面" tabindex="-1"><a class="header-anchor" href="#第十三章-ui界面" aria-hidden="true">#</a> 第十三章：UI界面</h2><h3 id="_13-1-创建主菜单" tabindex="-1"><a class="header-anchor" href="#_13-1-创建主菜单" aria-hidden="true">#</a> 13.1 创建主菜单</h3><h4 id="创建主菜单场景" tabindex="-1"><a class="header-anchor" href="#创建主菜单场景" aria-hidden="true">#</a> 创建主菜单场景</h4><ol><li>点击菜单：<strong>场景 &gt; 新建场景</strong></li><li>选择 <strong>Control</strong></li><li>重命名为 <code>MainMenu</code></li></ol><h4 id="添加标题" tabindex="-1"><a class="header-anchor" href="#添加标题" aria-hidden="true">#</a> 添加标题</h4><ol><li>在场景树中，右键点击 <code>MainMenu</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Label</strong></li><li>重命名为 <code>TitleLabel</code></li><li>在检查器中，设置： <ul><li><strong>文本</strong>：<code>打地鼠</code></li><li><strong>字体大小</strong>：64</li><li><strong>位置</strong>：X=400, Y=150</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="添加开始按钮" tabindex="-1"><a class="header-anchor" href="#添加开始按钮" aria-hidden="true">#</a> 添加开始按钮</h4><ol><li>在场景树中，右键点击 <code>MainMenu</code></li><li>选择 &quot;添加子节点&quot;</li><li>选择 <strong>Button</strong></li><li>重命名为 <code>StartButton</code></li><li>在检查器中，设置： <ul><li><strong>文本</strong>：<code>开始游戏</code></li><li><strong>位置</strong>：X=400, Y=300</li><li><strong>大小</strong>：X=200, Y=50</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="添加排行榜按钮" tabindex="-1"><a class="header-anchor" href="#添加排行榜按钮" aria-hidden="true">#</a> 添加排行榜按钮</h4><ol><li>复制 <code>StartButton</code></li><li>重命名为 <code>LeaderboardButton</code></li><li>设置： <ul><li><strong>文本</strong>：<code>排行榜</code></li><li><strong>位置</strong>：X=400, Y=380</li></ul></li></ol><h4 id="添加退出按钮" tabindex="-1"><a class="header-anchor" href="#添加退出按钮" aria-hidden="true">#</a> 添加退出按钮</h4><ol><li>复制 <code>StartButton</code></li><li>重命名为 <code>ExitButton</code></li><li>设置： <ul><li><strong>文本</strong>：<code>退出</code></li><li><strong>位置</strong>：X=400, Y=460</li></ul></li></ol><h4 id="创建主菜单脚本" tabindex="-1"><a class="header-anchor" href="#创建主菜单脚本" aria-hidden="true">#</a> 创建主菜单脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 主菜单
    /// &lt;/summary&gt;
    public partial class MainMenu : Control
    {
        #region 私有变量

        private Button _startButton;
        private Button _leaderboardButton;
        private Button _exitButton;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _startButton = GetNode&lt;Button&gt;(&quot;StartButton&quot;);
            _leaderboardButton = GetNode&lt;Button&gt;(&quot;LeaderboardButton&quot;);
            _exitButton = GetNode&lt;Button&gt;(&quot;ExitButton&quot;);

            // 连接按钮信号
            _startButton.Pressed += OnStartButtonPressed;
            _leaderboardButton.Pressed += OnLeaderboardButtonPressed;
            _exitButton.Pressed += OnExitButtonPressed;
        }

        #endregion

        #region 事件处理

        private void OnStartButtonPressed()
        {
            AudioManager.Instance.PlaySFX(&quot;button_click&quot;);
            GetTree().ChangeSceneToFile(&quot;res://scenes/Main.tscn&quot;);
        }

        private void OnLeaderboardButtonPressed()
        {
            AudioManager.Instance.PlaySFX(&quot;button_click&quot;);
            // TODO: 显示排行榜界面
            GD.Print(&quot;排行榜功能待实现&quot;);
        }

        private void OnExitButtonPressed()
        {
            AudioManager.Instance.PlaySFX(&quot;button_click&quot;);
            GetTree().Quit();
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="保存场景-3" tabindex="-1"><a class="header-anchor" href="#保存场景-3" aria-hidden="true">#</a> 保存场景</h4><ol><li>保存为 <code>res://scenes/MainMenu.tscn</code></li></ol><h3 id="_13-2-创建游戏结束界面" tabindex="-1"><a class="header-anchor" href="#_13-2-创建游戏结束界面" aria-hidden="true">#</a> 13.2 创建游戏结束界面</h3><h4 id="创建游戏结束场景" tabindex="-1"><a class="header-anchor" href="#创建游戏结束场景" aria-hidden="true">#</a> 创建游戏结束场景</h4><ol><li>点击菜单：<strong>场景 &gt; 新建场景</strong></li><li>选择 <strong>Control</strong></li><li>重命名为 <code>GameOver</code></li></ol><h4 id="添加标题-1" tabindex="-1"><a class="header-anchor" href="#添加标题-1" aria-hidden="true">#</a> 添加标题</h4><ol><li>添加 <code>Label</code>，命名为 <code>TitleLabel</code></li><li>设置： <ul><li><strong>文本</strong>：<code>游戏结束</code></li><li><strong>字体大小</strong>：64</li><li><strong>位置</strong>：X=400, Y=150</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="添加分数显示" tabindex="-1"><a class="header-anchor" href="#添加分数显示" aria-hidden="true">#</a> 添加分数显示</h4><ol><li>添加 <code>Label</code>，命名为 <code>ScoreLabel</code></li><li>设置： <ul><li><strong>文本</strong>：<code>最终分数：0</code></li><li><strong>字体大小</strong>：32</li><li><strong>位置</strong>：X=400, Y=250</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="添加重新开始按钮" tabindex="-1"><a class="header-anchor" href="#添加重新开始按钮" aria-hidden="true">#</a> 添加重新开始按钮</h4><ol><li>添加 <code>Button</code>，命名为 <code>RestartButton</code></li><li>设置： <ul><li><strong>文本</strong>：<code>重新开始</code></li><li><strong>位置</strong>：X=400, Y=350</li><li><strong>大小</strong>：X=200, Y=50</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="添加返回主菜单按钮" tabindex="-1"><a class="header-anchor" href="#添加返回主菜单按钮" aria-hidden="true">#</a> 添加返回主菜单按钮</h4><ol><li>添加 <code>Button</code>，命名为 <code>MainMenuButton</code></li><li>设置： <ul><li><strong>文本</strong>：<code>返回主菜单</code></li><li><strong>位置</strong>：X=400, Y=430</li><li><strong>大小</strong>：X=200, Y=50</li><li><strong>水平对齐</strong>：居中</li></ul></li></ol><h4 id="创建游戏结束脚本" tabindex="-1"><a class="header-anchor" href="#创建游戏结束脚本" aria-hidden="true">#</a> 创建游戏结束脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 游戏结束界面
    /// &lt;/summary&gt;
    public partial class GameOver : Control
    {
        #region 私有变量

        private Label _scoreLabel;
        private Button _restartButton;
        private Button _mainMenuButton;

        #endregion

        #region 公共属性

        public int FinalScore { get; set; }

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _scoreLabel = GetNode&lt;Label&gt;(&quot;ScoreLabel&quot;);
            _restartButton = GetNode&lt;Button&gt;(&quot;RestartButton&quot;);
            _mainMenuButton = GetNode&lt;Button&gt;(&quot;MainMenuButton&quot;);

            // 显示最终分数
            _scoreLabel.Text = $&quot;最终分数：{FinalScore}&quot;;

            // 连接按钮信号
            _restartButton.Pressed += OnRestartButtonPressed;
            _mainMenuButton.Pressed += OnMainMenuButtonPressed;
        }

        #endregion

        #region 事件处理

        private void OnRestartButtonPressed()
        {
            AudioManager.Instance.PlaySFX(&quot;button_click&quot;);
            GetTree().ChangeSceneToFile(&quot;res://scenes/Main.tscn&quot;);
        }

        private void OnMainMenuButtonPressed()
        {
            AudioManager.Instance.PlaySFX(&quot;button_click&quot;);
            GetTree().ChangeSceneToFile(&quot;res://scenes/MainMenu.tscn&quot;);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="保存场景-4" tabindex="-1"><a class="header-anchor" href="#保存场景-4" aria-hidden="true">#</a> 保存场景</h4><ol><li>保存为 <code>res://scenes/GameOver.tscn</code></li></ol><h3 id="_13-3-在游戏中集成ui" tabindex="-1"><a class="header-anchor" href="#_13-3-在游戏中集成ui" aria-hidden="true">#</a> 13.3 在游戏中集成UI</h3><h4 id="在-gamemanager-cs-中添加游戏结束跳转" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中添加游戏结束跳转" aria-hidden="true">#</a> 在 GameManager.cs 中添加游戏结束跳转</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 EndGame 方法中添加场景跳转
public void EndGame()
{
    if (!_isGameRunning) return;

    _isGameRunning = false;

    // 停止计时器
    _gameTimer.Stop();
    _spawnTimer.Stop();

    // 清除所有地鼠
    foreach (var hole in _holes)
    {
        hole.RemoveMole();
    }

    // 保存分数到排行榜
    _leaderboardManager.AddScore(_score);

    // 检查是否进入排行榜
    bool isHighScore = _leaderboardManager.IsHighScore(_score);
    if (isHighScore)
    {
        GD.Print($&quot;恭喜！新纪录：{_score} 分&quot;);
    }

    // 播放游戏结束音效
    AudioManager.Instance.PlaySFX(&quot;game_over&quot;);

    GD.Print($&quot;游戏结束！最终分数：{_score}&quot;);

    // 延迟跳转到游戏结束界面
    GetTree().CreateTimer(2.0).Timeout += () =&gt;
    {
        PackedScene gameOverScene = ResourceLoader.Load&lt;PackedScene&gt;(&quot;res://scenes/GameOver.tscn&quot;);
        GameOver gameOver = gameOverScene.Instantiate&lt;GameOver&gt;();
        gameOver.FinalScore = _score;
        GetTree().Root.AddChild(gameOver);
        GetTree().CurrentScene.QueueFree();
        GetTree().CurrentScene = gameOver;
    };
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="设置主菜单为启动场景" tabindex="-1"><a class="header-anchor" href="#设置主菜单为启动场景" aria-hidden="true">#</a> 设置主菜单为启动场景</h4><ol><li>点击菜单：<strong>项目 &gt; 项目设置</strong></li><li>选择 <strong>应用 &gt; 配置</strong></li><li>设置 <strong>运行 &gt; 主场景</strong>：<code>res://scenes/MainMenu.tscn</code></li><li>点击 &quot;关闭&quot;</li></ol><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>能看到主菜单</li><li>点击&quot;开始游戏&quot;进入游戏</li><li>游戏结束后跳转到游戏结束界面</li><li>能重新开始或返回主菜单</li></ul><hr><h2 id="第十四章-视觉特效" tabindex="-1"><a class="header-anchor" href="#第十四章-视觉特效" aria-hidden="true">#</a> 第十四章：视觉特效</h2><h3 id="_14-1-添加击中粒子效果" tabindex="-1"><a class="header-anchor" href="#_14-1-添加击中粒子效果" aria-hidden="true">#</a> 14.1 添加击中粒子效果</h3><h4 id="创建粒子场景" tabindex="-1"><a class="header-anchor" href="#创建粒子场景" aria-hidden="true">#</a> 创建粒子场景</h4><ol><li>点击菜单：<strong>场景 &gt; 新建场景</strong></li><li>选择 <strong>GPUParticles2D</strong></li><li>重命名为 <code>HitEffect</code></li></ol><h4 id="设置粒子参数" tabindex="-1"><a class="header-anchor" href="#设置粒子参数" aria-hidden="true">#</a> 设置粒子参数</h4><ol><li>在检查器中，设置： <ul><li>** emitting**：勾选</li><li><strong>Amount</strong>：20</li><li><strong>Lifetime</strong>：0.5</li><li><strong>Process Material</strong>：新建 <strong>ParticleProcessMaterial</strong></li></ul></li></ol><h4 id="设置粒子材质" tabindex="-1"><a class="header-anchor" href="#设置粒子材质" aria-hidden="true">#</a> 设置粒子材质</h4><ol><li>在检查器中，展开 <strong>Process Material</strong></li><li>设置： <ul><li><strong>Gravity</strong>：X=0, Y=100</li><li><strong>Scale</strong>：最小=0.5, 最大=1.0</li><li><strong>Color</strong>：黄色</li></ul></li></ol><h4 id="保存场景-5" tabindex="-1"><a class="header-anchor" href="#保存场景-5" aria-hidden="true">#</a> 保存场景</h4><ol><li>保存为 <code>res://scenes/HitEffect.tscn</code></li></ol><h3 id="_14-2-在地鼠被击中时显示粒子" tabindex="-1"><a class="header-anchor" href="#_14-2-在地鼠被击中时显示粒子" aria-hidden="true">#</a> 14.2 在地鼠被击中时显示粒子</h3><h4 id="在-mole-cs-中添加粒子效果" tabindex="-1"><a class="header-anchor" href="#在-mole-cs-中添加粒子效果" aria-hidden="true">#</a> 在 Mole.cs 中添加粒子效果</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在私有变量中添加
private GPUParticles2D _hitEffect;

// 在 OnHit 方法中添加粒子效果
public void OnHit()
{
    if (_isHit) return;

    _isHit = true;

    // 创建击中粒子效果
    _hitEffect = ResourceLoader.Load&lt;PackedScene&gt;(&quot;res://scenes/HitEffect.tscn&quot;).Instantiate&lt;GPUParticles2D&gt;();
    AddChild(_hitEffect);

    // 播放击中动画
    Tween tween = CreateTween();
    tween.SetParallel(true);
    tween.TweenProperty(this, &quot;scale&quot;, new Vector2(1.2f, 1.2f), 0.1f);
    tween.TweenProperty(this, &quot;modulate&quot;, Colors.Red, 0.1f);
    tween.TweenInterval(0.1f);
    tween.TweenProperty(this, &quot;scale&quot;, Vector2.Zero, 0.2f);
    tween.TweenInterval(0.2f);
    tween.TweenCallback(Callable.From(QueueFree));

    // 发出击中信号
    EmitSignal(SignalName.MoleHit, (int)MoleType);

    // 停止消失计时器
    if (_disappearTimer != null)
    {
        _disappearTimer.Stop();
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>击中地鼠时有粒子效果</li></ul><h3 id="_14-3-添加分数飘字效果" tabindex="-1"><a class="header-anchor" href="#_14-3-添加分数飘字效果" aria-hidden="true">#</a> 14.3 添加分数飘字效果</h3><h4 id="创建飘字脚本" tabindex="-1"><a class="header-anchor" href="#创建飘字脚本" aria-hidden="true">#</a> 创建飘字脚本</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 分数飘字
    /// &lt;/summary&gt;
    public partial class FloatingScore : Label
    {
        #region 私有变量

        private float _floatDistance = 100.0f;
        private float _floatDuration = 1.0f;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            // 创建飘字动画
            Tween tween = CreateTween();
            tween.SetParallel(true);
            tween.TweenProperty(this, &quot;position&quot;, Position - new Vector2(0, _floatDistance), _floatDuration);
            tween.TweenProperty(this, &quot;modulate&quot;, Colors.Transparent, _floatDuration);
            tween.TweenInterval(_floatDuration);
            tween.TweenCallback(Callable.From(QueueFree));
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 创建飘字
        /// &lt;/summary&gt;
        public static FloatingScore Create(Node parent, Vector2 position, string text, Color color)
        {
            FloatingScore floatingScore = new FloatingScore();
            floatingScore.Text = text;
            floatingScore.Position = position;
            floatingScore.Modulate = color;
            floatingScore.HorizontalAlignment = HorizontalAlignment.Center;
            parent.AddChild(floatingScore);
            return floatingScore;
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在-gamemanager-cs-中添加飘字" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中添加飘字" aria-hidden="true">#</a> 在 GameManager.cs 中添加飘字</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 OnMoleHit 方法中添加飘字
private void OnMoleHit(int holeIndex, MoleType moleType)
{
    if (!_isGameRunning) return;

    // 播放击中音效
    string hitSound = moleType switch
    {
        MoleType.Normal =&gt; &quot;hit_normal&quot;,
        MoleType.Fast =&gt; &quot;hit_fast&quot;,
        MoleType.Gold =&gt; &quot;hit_gold&quot;,
        _ =&gt; &quot;hit_normal&quot;
    };
    AudioManager.Instance.PlaySFX(hitSound);

    // 增加连击
    _combo++;

    // 连击音效
    if (_combo &gt;= 3)
    {
        AudioManager.Instance.PlaySFX(&quot;combo&quot;);
    }

    // 计算得分
    int points = CalculateScore(moleType);
    _score += points;

    // 金地鼠奖励：延长游戏时间
    if (moleType == MoleType.Gold)
    {
        _timeRemaining = Math.Min(_timeRemaining + 2, GAME_DURATION);
    }

    // 创建分数飘字
    Hole hole = _holes[holeIndex];
    Vector2 holePosition = hole.GlobalPosition;
    Color scoreColor = moleType switch
    {
        MoleType.Normal =&gt; Colors.White,
        MoleType.Fast =&gt; Colors.Yellow,
        MoleType.Gold =&gt; Colors.Gold,
        _ =&gt; Colors.White
    };
    FloatingScore.Create(this, holePosition, $&quot;+{points}&quot;, scoreColor);

    // 更新 UI
    UpdateUI();

    // 显示连击动画
    ShowComboAnimation();

    GD.Print($&quot;击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>击中地鼠时有分数飘字</li></ul><h3 id="_14-4-添加时间警告效果" tabindex="-1"><a class="header-anchor" href="#_14-4-添加时间警告效果" aria-hidden="true">#</a> 14.4 添加时间警告效果</h3><h4 id="在-gamemanager-cs-中添加时间警告动画" tabindex="-1"><a class="header-anchor" href="#在-gamemanager-cs-中添加时间警告动画" aria-hidden="true">#</a> 在 GameManager.cs 中添加时间警告动画</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 UpdateUI 方法中添加时间警告
private void UpdateUI()
{
    CanvasLayer ui = GetNode&lt;CanvasLayer&gt;(&quot;UI&quot;);
    Label scoreLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/ScoreLabel&quot;);
    Label timeLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/TimeLabel&quot;);
    Label comboLabel = ui.GetNode&lt;Label&gt;(&quot;HUD/ComboLabel&quot;);

    scoreLabel.Text = $&quot;分数: {_score}&quot;;
    timeLabel.Text = $&quot;时间: {_timeRemaining}&quot;;
    comboLabel.Text = $&quot;连击: {_combo}&quot;;

    // 时间警告效果
    if (_timeRemaining &lt;= 10)
    {
        timeLabel.Modulate = Colors.Red;

        // 闪烁效果
        if (_timeRemaining % 2 == 0)
        {
            timeLabel.Modulate = Colors.Red;
        }
        else
        {
            timeLabel.Modulate = Colors.White;
        }
    }
    else
    {
        timeLabel.Modulate = Colors.White;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>✅ 验证</strong></p><ul><li>按 F5 运行</li><li>剩余10秒时时间变红并闪烁</li></ul><hr><h2 id="第十五章-性能优化" tabindex="-1"><a class="header-anchor" href="#第十五章-性能优化" aria-hidden="true">#</a> 第十五章：性能优化</h2><h3 id="_15-1-对象池优化" tabindex="-1"><a class="header-anchor" href="#_15-1-对象池优化" aria-hidden="true">#</a> 15.1 对象池优化</h3><h4 id="创建地鼠对象池" tabindex="-1"><a class="header-anchor" href="#创建地鼠对象池" aria-hidden="true">#</a> 创建地鼠对象池</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;
using System.Collections.Generic;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 地鼠对象池
    /// &lt;/summary&gt;
    public partial class MolePool : Node
    {
        #region 私有变量

        private Queue&lt;Mole&gt; _pool;
        private PackedScene _moleScene;
        private int _initialSize = 10;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _pool = new Queue&lt;Mole&gt;();
            _moleScene = ResourceLoader.Load&lt;PackedScene&gt;(&quot;res://scenes/Mole.tscn&quot;);

            // 预创建地鼠
            for (int i = 0; i &lt; _initialSize; i++)
            {
                Mole mole = _moleScene.Instantiate&lt;Mole&gt;();
                mole.ProcessMode = ProcessModeEnum.Disabled;
                AddChild(mole);
                _pool.Enqueue(mole);
            }
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 获取地鼠
        /// &lt;/summary&gt;
        public Mole GetMole()
        {
            Mole mole;

            if (_pool.Count &gt; 0)
            {
                mole = _pool.Dequeue();
            }
            else
            {
                mole = _moleScene.Instantiate&lt;Mole&gt;();
                AddChild(mole);
            }

            mole.ProcessMode = ProcessModeEnum.Inherit;
            return mole;
        }

        /// &lt;summary&gt;
        /// 回收地鼠
        /// &lt;/summary&gt;
        public void ReturnMole(Mole mole)
        {
            mole.ProcessMode = ProcessModeEnum.Disabled;
            _pool.Enqueue(mole);
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_15-2-音效预加载" tabindex="-1"><a class="header-anchor" href="#_15-2-音效预加载" aria-hidden="true">#</a> 15.2 音效预加载</h3><h4 id="在-audiomanager-cs-中添加预加载" tabindex="-1"><a class="header-anchor" href="#在-audiomanager-cs-中添加预加载" aria-hidden="true">#</a> 在 AudioManager.cs 中添加预加载</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在私有变量中添加
private Dictionary&lt;string, AudioStream&gt; _sfxCache;

// 在 _Ready 方法中预加载音效
public override void _Ready()
{
    // 设置单例
    Instance = this;

    // 创建音效播放器
    _sfxPlayer = new AudioStreamPlayer();
    _sfxPlayer.Name = &quot;SFXPlayer&quot;;
    AddChild(_sfxPlayer);

    // 创建音乐播放器
    _musicPlayer = new AudioStreamPlayer();
    _musicPlayer.Name = &quot;MusicPlayer&quot;;
    _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
    AddChild(_musicPlayer);

    // 预加载音效
    PreloadSFX();
}

/// &lt;summary&gt;
/// 预加载音效
/// &lt;/summary&gt;
private void PreloadSFX()
{
    _sfxCache = new Dictionary&lt;string, AudioStream&gt;();

    string[] soundFiles = {
        &quot;hit_normal&quot;,
        &quot;hit_fast&quot;,
        &quot;hit_gold&quot;,
        &quot;combo&quot;,
        &quot;mole_appear&quot;,
        &quot;mole_miss&quot;,
        &quot;time_warning&quot;,
        &quot;game_over&quot;,
        &quot;button_click&quot;
    };

    foreach (string soundName in soundFiles)
    {
        string soundPath = $&quot;res://assets/audio/{soundName}.wav&quot;;
        if (FileAccess.FileExists(soundPath))
        {
            AudioStream sound = ResourceLoader.Load&lt;AudioStream&gt;(soundPath);
            _sfxCache[soundName] = sound;
        }
    }

    GD.Print($&quot;预加载 {_sfxCache.Count} 个音效&quot;);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="第十六章-测试与调试" tabindex="-1"><a class="header-anchor" href="#第十六章-测试与调试" aria-hidden="true">#</a> 第十六章：测试与调试</h2><h3 id="_16-1-功能测试清单" tabindex="-1"><a class="header-anchor" href="#_16-1-功能测试清单" aria-hidden="true">#</a> 16.1 功能测试清单</h3><ul><li>[ ] 游戏能正常启动</li><li>[ ] 主菜单能正常显示</li><li>[ ] 点击&quot;开始游戏&quot;能进入游戏</li><li>[ ] 地鼠能随机出现</li><li>[ ] 点击地鼠能得分</li><li>[ ] 连击系统正常工作</li><li>[ ] 时间倒计时正常</li><li>[ ] 60秒后游戏结束</li><li>[ ] 分数能保存到排行榜</li><li>[ ] 音效能正常播放</li><li>[ ] 粒子效果正常显示</li><li>[ ] 分数飘字正常显示</li><li>[ ] 时间警告正常显示</li><li>[ ] 能重新开始游戏</li><li>[ ] 能返回主菜单</li></ul><h3 id="_16-2-性能测试" tabindex="-1"><a class="header-anchor" href="#_16-2-性能测试" aria-hidden="true">#</a> 16.2 性能测试</h3><h4 id="使用-godot-profiler" tabindex="-1"><a class="header-anchor" href="#使用-godot-profiler" aria-hidden="true">#</a> 使用 Godot Profiler</h4><ol><li>点击菜单：<strong>调试 &gt; 性能分析器</strong></li><li>运行游戏</li><li>观察性能数据</li><li>优化瓶颈</li></ol><h3 id="_16-3-常见问题及修复" tabindex="-1"><a class="header-anchor" href="#_16-3-常见问题及修复" aria-hidden="true">#</a> 16.3 常见问题及修复</h3><h4 id="问题1-地鼠不出现" tabindex="-1"><a class="header-anchor" href="#问题1-地鼠不出现" aria-hidden="true">#</a> 问题1：地鼠不出现</h4><ul><li>检查地洞是否正确连接信号</li><li>检查地鼠场景是否正确加载</li><li>检查生成计时器是否正常工作</li></ul><h4 id="问题2-点击无反应" tabindex="-1"><a class="header-anchor" href="#问题2-点击无反应" aria-hidden="true">#</a> 问题2：点击无反应</h4><ul><li>检查碰撞形状是否正确设置</li><li>检查输入事件是否正确连接</li><li>检查地鼠是否被击中状态</li></ul><h4 id="问题3-音效不播放" tabindex="-1"><a class="header-anchor" href="#问题3-音效不播放" aria-hidden="true">#</a> 问题3：音效不播放</h4><ul><li>检查音效文件是否正确导入</li><li>检查音效路径是否正确</li><li>检查音量设置</li></ul><hr><h2 id="第十七章-导出发布" tabindex="-1"><a class="header-anchor" href="#第十七章-导出发布" aria-hidden="true">#</a> 第十七章：导出发布</h2><h3 id="_17-1-配置导出预设" tabindex="-1"><a class="header-anchor" href="#_17-1-配置导出预设" aria-hidden="true">#</a> 17.1 配置导出预设</h3><h4 id="添加-windows-导出预设" tabindex="-1"><a class="header-anchor" href="#添加-windows-导出预设" aria-hidden="true">#</a> 添加 Windows 导出预设</h4><ol><li>点击菜单：<strong>项目 &gt; 导出</strong></li><li>点击 &quot;添加&quot; 按钮</li><li>选择 <strong>Windows Desktop</strong></li><li>设置导出参数： <ul><li><strong>名称</strong>：<code>WhackAMole</code></li><li><strong>图标</strong>：选择图标文件（可选）</li><li><strong>启动画面</strong>：选择启动画面（可选）</li></ul></li></ol><h3 id="_17-2-导出游戏" tabindex="-1"><a class="header-anchor" href="#_17-2-导出游戏" aria-hidden="true">#</a> 17.2 导出游戏</h3><h4 id="导出步骤" tabindex="-1"><a class="header-anchor" href="#导出步骤" aria-hidden="true">#</a> 导出步骤</h4><ol><li>点击菜单：<strong>项目 &gt; 导出</strong></li><li>选择 <strong>Windows Desktop</strong></li><li>点击 &quot;导出项目&quot;</li><li>选择导出路径</li><li>点击 &quot;保存&quot;</li><li>等待导出完成</li></ol><h3 id="_17-3-打包说明" tabindex="-1"><a class="header-anchor" href="#_17-3-打包说明" aria-hidden="true">#</a> 17.3 打包说明</h3><h4 id="打包内容" tabindex="-1"><a class="header-anchor" href="#打包内容" aria-hidden="true">#</a> 打包内容</h4><ul><li>可执行文件：<code>WhackAMole.exe</code></li><li>游戏数据：<code>WhackAMole.pck</code></li><li>依赖文件：（Godot 自动处理）</li></ul><h4 id="分发说明" tabindex="-1"><a class="header-anchor" href="#分发说明" aria-hidden="true">#</a> 分发说明</h4><ul><li>将整个导出文件夹压缩成 ZIP</li><li>用户解压后直接运行 <code>WhackAMole.exe</code></li><li>无需安装 Godot</li></ul><hr><h2 id="第十八章-进阶扩展" tabindex="-1"><a class="header-anchor" href="#第十八章-进阶扩展" aria-hidden="true">#</a> 第十八章：进阶扩展</h2><h3 id="_18-1-移动端适配" tabindex="-1"><a class="header-anchor" href="#_18-1-移动端适配" aria-hidden="true">#</a> 18.1 移动端适配</h3><h4 id="添加触摸支持" tabindex="-1"><a class="header-anchor" href="#添加触摸支持" aria-hidden="true">#</a> 添加触摸支持</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>// 在 Hole.cs 中添加触摸检测
private void OnInputEvent(Node viewport, InputEvent @event, long shapeIdx)
{
    // 鼠标点击
    if (@event is InputEventMouseButton mouseEvent &amp;&amp; mouseEvent.Pressed)
    {
        if (_hasMole &amp;&amp; _currentMole != null)
        {
            _currentMole.OnHit();
        }
    }

    // 触摸点击
    if (@event is InputEventScreenTouch touchEvent &amp;&amp; touchEvent.Pressed)
    {
        if (_hasMole &amp;&amp; _currentMole != null)
        {
            _currentMole.OnHit();
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-2-添加成就系统" tabindex="-1"><a class="header-anchor" href="#_18-2-添加成就系统" aria-hidden="true">#</a> 18.2 添加成就系统</h3><h4 id="创建成就管理器" tabindex="-1"><a class="header-anchor" href="#创建成就管理器" aria-hidden="true">#</a> 创建成就管理器</h4><div class="language-csharp line-numbers-mode" data-ext="cs"><pre class="language-csharp"><code>using Godot;
using System.Collections.Generic;

namespace WhackAMole
{
    /// &lt;summary&gt;
    /// 成就
    /// &lt;/summary&gt;
    public class Achievement
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool Unlocked { get; set; }

        public Achievement(string id, string name, string description)
        {
            Id = id;
            Name = name;
            Description = description;
            Unlocked = false;
        }
    }

    /// &lt;summary&gt;
    /// 成就管理器
    /// &lt;/summary&gt;
    public partial class AchievementManager : Node
    {
        #region 单例

        public static AchievementManager Instance { get; private set; }

        #endregion

        #region 私有变量

        private Dictionary&lt;string, Achievement&gt; _achievements;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            Instance = this;
            _achievements = new Dictionary&lt;string, Achievement&gt;();

            // 初始化成就
            InitializeAchievements();
        }

        #endregion

        #region 公共方法

        /// &lt;summary&gt;
        /// 解锁成就
        /// &lt;/summary&gt;
        public void UnlockAchievement(string achievementId)
        {
            if (_achievements.ContainsKey(achievementId))
            {
                Achievement achievement = _achievements[achievementId];
                if (!achievement.Unlocked)
                {
                    achievement.Unlocked = true;
                    GD.Print($&quot;解锁成就：{achievement.Name}&quot;);
                }
            }
        }

        #endregion

        #region 私有方法

        /// &lt;summary&gt;
        /// 初始化成就
        /// &lt;/summary&gt;
        private void InitializeAchievements()
        {
            _achievements.Add(&quot;first_hit&quot;, new Achievement(&quot;first_hit&quot;, &quot;初次击中&quot;, &quot;第一次击中地鼠&quot;));
            _achievements.Add(&quot;combo_3&quot;, new Achievement(&quot;combo_3&quot;, &quot;连击大师&quot;, &quot;达成3连击&quot;));
            _achievements.Add(&quot;combo_5&quot;, new Achievement(&quot;combo_5&quot;, &quot;连击王者&quot;, &quot;达成5连击&quot;));
            _achievements.Add(&quot;score_100&quot;, new Achievement(&quot;score_100&quot;, &quot;百分达人&quot;, &quot;单局得分超过100&quot;));
            _achievements.Add(&quot;score_500&quot;, new Achievement(&quot;score_500&quot;, &quot;五百分俱乐部&quot;, &quot;单局得分超过500&quot;));
            _achievements.Add(&quot;gold_mole&quot;, new Achievement(&quot;gold_mole&quot;, &quot;寻宝猎人&quot;, &quot;击中金地鼠&quot;));
        }

        #endregion
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_18-3-在线排行榜思路" tabindex="-1"><a class="header-anchor" href="#_18-3-在线排行榜思路" aria-hidden="true">#</a> 18.3 在线排行榜思路</h3><h4 id="使用-firebase" tabindex="-1"><a class="header-anchor" href="#使用-firebase" aria-hidden="true">#</a> 使用 Firebase</h4><ol><li>创建 Firebase 项目</li><li>添加 Firebase Realtime Database</li><li>在 Godot 中集成 Firebase SDK</li><li>实现数据同步</li></ol><h4 id="使用自定义服务器" tabindex="-1"><a class="header-anchor" href="#使用自定义服务器" aria-hidden="true">#</a> 使用自定义服务器</h4><ol><li>搭建简单的 HTTP API</li><li>使用 Node.js + Express</li><li>实现 CRUD 操作</li><li>在 Godot 中使用 HTTPRequest 节点</li></ol><hr><h2 id="🎉-恭喜" tabindex="-1"><a class="header-anchor" href="#🎉-恭喜" aria-hidden="true">#</a> 🎉 恭喜！</h2><p>你已经完成了整个《打地鼠》游戏的开发！</p><h3 id="你学会了什么" tabindex="-1"><a class="header-anchor" href="#你学会了什么" aria-hidden="true">#</a> 你学会了什么？</h3><p>✅ Godot 4.x 基础操作<br> ✅ C# 编程基础<br> ✅ 2D 游戏开发<br> ✅ 场景管理和节点系统<br> ✅ 信号系统<br> ✅ 计时器系统<br> ✅ 碰撞检测<br> ✅ UI 系统<br> ✅ 音效系统<br> ✅ 粒子系统<br> ✅ 本地数据存储<br> ✅ 性能优化<br> ✅ 游戏导出</p><h3 id="下一步做什么" tabindex="-1"><a class="header-anchor" href="#下一步做什么" aria-hidden="true">#</a> 下一步做什么？</h3><ol><li><p><strong>完善游戏</strong></p><ul><li>添加更多地鼠类型</li><li>添加更多音效</li><li>优化视觉效果</li></ul></li><li><p><strong>学习更多</strong></p><ul><li>学习 Unity 开发</li><li>学习 C# 进阶</li><li>学习游戏设计</li></ul></li><li><p><strong>发布游戏</strong></p><ul><li>发布到 Steam</li><li>发布到 itch.io</li><li>分享给朋友</li></ul></li><li><p><strong>继续开发</strong></p><ul><li>开发新游戏</li><li>参与游戏开发社区</li><li>分享你的作品</li></ul></li></ol><h3 id="资源推荐" tabindex="-1"><a class="header-anchor" href="#资源推荐" aria-hidden="true">#</a> 资源推荐</h3><ul><li><strong>Godot 官方文档</strong>：https://docs.godotengine.org/</li><li><strong>Godot 社区</strong>：https://godotengine.org/community</li><li><strong>C# 教程</strong>：https://docs.microsoft.com/zh-cn/dotnet/csharp/</li><li><strong>游戏开发教程</strong>：https://www.youtube.com/c/GodotEngine</li></ul><hr><p><strong>祝你游戏开发之路顺利！🎮✨</strong></p>`,449)])])}const c=e(s,[["render",a],["__file","打地鼠-Godot-CSharp完整教程.html.vue"]]);export{c as default};
