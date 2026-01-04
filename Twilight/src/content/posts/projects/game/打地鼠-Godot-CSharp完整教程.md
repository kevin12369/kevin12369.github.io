---
title: '《打地鼠》游戏开发教程：Godot 4.x + C# 从零到完成'
description: '- [第一章：准备工作](#第一章准备工作)'
published: 2025-01-04
updatedDate: 2025-01-04
category: '未分类'
tags: []
draft: false
---


# 《打地鼠》游戏开发教程：Godot 4.x + C# 从零到完成

## 📖 目录

- [第一章：准备工作](#第一章准备工作)
- [第二章：创建项目](#第二章创建项目)
- [第三章：像素美术制作](#第三章像素美术制作)
- [第四章：创建主场景](#第四章创建主场景)
- [第五章：创建地洞系统](#第五章创建地洞系统)
- [第六章：创建地鼠系统](#第六章创建地鼠系统)
- [第七章：游戏管理器](#第七章游戏管理器)
- [第八章：连击系统](#第八章连击系统)
- [第九章：难度曲线](#第九章难度曲线)
- [第十章：排行榜系统](#第十章排行榜系统)
- [第十一章：音效制作](#第十一章音效制作)
- [第十二章：音效系统](#第十二章音效系统)
- [第十三章：UI界面](#第十三章ui界面)
- [第十四章：视觉特效](#第十四章视觉特效)
- [第十五章：性能优化](#第十五章性能优化)
- [第十六章：测试与调试](#第十六章测试与调试)
- [第十七章：导出发布](#第十七章导出发布)
- [第十八章：进阶扩展](#第十八章进阶扩展)

---

## 第一章：准备工作

### 1.1 下载安装 Godot 4.x

#### 下载 Godot
1. 访问 Godot 官网：https://godotengine.org/
2. 点击 "Download" 按钮
3. 选择 **Godot 4.x（最新稳定版）**
4. 选择 **.NET 版本**（支持 C#）
5. 下载对应系统的版本（Windows/Mac/Linux）

#### 安装 Godot
1. 运行下载的安装程序
2. 选择安装路径（建议：`C:\Godot\` 或 `D:\Godot\`）
3. 等待安装完成
4. 运行 Godot，首次启动会提示选择项目路径

**✅ 验证安装**
- 打开 Godot，能看到欢迎界面
- 点击 "新建项目"，能正常创建项目
- 编辑器界面正常显示

### 1.2 安装开发环境

#### 安装 Visual Studio 2022
1. 访问 Visual Studio 官网：https://visualstudio.microsoft.com/
2. 下载 **Community 版本**（免费）
3. 运行安装程序
4. 选择 **.NET 桌面开发** 工作负载
5. 确保勾选以下组件：
   - .NET 6.0 SDK
   - .NET 7.0 SDK
   - .NET 8.0 SDK
   - C# 和 Visual Basic Roslyn 编译器
6. 点击安装，等待完成

#### 安装 .NET SDK（备选）
如果 Visual Studio 安装失败，可以单独安装 .NET SDK：
1. 访问 .NET 官网：https://dotnet.microsoft.com/
2. 下载 **.NET 8.0 SDK**
3. 运行安装程序
4. 验证安装：打开命令行，输入 `dotnet --version`

**✅ 验证安装**
- 打开 Visual Studio 2022
- 能创建新的 C# 项目
- 能正常编译和运行 C# 代码

### 1.3 安装像素美术工具

#### 选项一：Aseprite（付费，推荐）
1. 访问 Aseprite 官网：https://www.aseprite.org/
2. 下载并安装（$19.99）
3. 学习基础操作（约30分钟）

#### 选项二：Piskel（免费，在线）
1. 访问 Piskel 官网：https://www.piskelapp.com/
2. 无需安装，直接在线使用
3. 学习基础操作（约30分钟）

#### 选项三：Photoshop（如果你已有）
1. 使用 Photoshop 的像素画功能
2. 设置网格显示（视图 > 显示 > 网格）
3. 使用铅笔工具绘制

**✅ 准备完成**
- 能创建 16x16 像素画布
- 能使用基本绘图工具
- 能导出 PNG 格式图片

### 1.4 准备音效工具

#### Bfxr（免费，在线）
1. 访问 Bfxr 官网：https://www.bfxr.net/
2. 无需安装，直接在线使用
3. 可以生成各种游戏音效

#### 其他选择
- **ChipTone**：https://sfbgames.itch.io/chiptone
- **Jfxr**：https://chr15m.itch.io/jfxr

**✅ 准备完成**
- 能生成简单的音效
- 能导出 WAV 格式文件

### 1.5 检查清单

在开始之前，请确认以下内容：

- [ ] Godot 4.x .NET 版本已安装
- [ ] Visual Studio 2022 已安装
- [ ] .NET SDK 已安装
- [ ] 像素美术工具已准备
- [ ] 音效工具已准备
- [ ] 有足够的磁盘空间（至少 2GB）

---

## 第二章：创建项目

### 2.1 创建新项目

#### 步骤
1. 打开 Godot 4.x
2. 点击 "新建项目"
3. 选择项目路径（建议：`D:\GodotProjects\WhackAMole`）
4. 项目名称填写：`WhackAMole`
5. 渲染器选择：**Forward+**（默认）
6. 点击 "创建并编辑"

**✅ 验证**
- 项目创建成功
- 编辑器界面正常显示
-能看到默认的 3D 场景

### 2.2 项目设置

#### 窗口设置
1. 点击菜单：**项目 > 项目设置**
2. 选择 **应用 > 配置**
3. 设置以下参数：
   - **应用名称**：`WhackAMole`
   - **项目名称**：`WhackAMole`
   - **运行 > 主场景**：留空（稍后设置）

#### 显示设置
1. 选择 **显示 > 窗口**
2. 设置以下参数：
   - **初始位置**：居中
   - **初始大小**：`800` x `600`
   - **可调整**：勾选
   - **无边框**：不勾选

#### 像素完美缩放
1. 选择 **显示 > 窗口 > 拉伸**
2. 设置以下参数：
   - **模式**：`viewport`
   - **纵横比**：`keep`

#### C# 设置
1. 选择 **应用 > C# > Dotnet**
2. 确认以下设置：
   - **项目**：`WhackAMole.csproj`
   - **目标框架**：`net8.0`

3. 点击 "关闭" 保存设置

**✅ 验证**
- 项目设置已保存
- 窗口大小为 800x600
- C# 项目配置正确

### 2.3 创建项目文件夹结构

#### 在文件系统中创建文件夹
1. 在 Godot 编辑器左侧，点击 "文件系统" 标签
2. 右键点击 `res://`，选择 "新建文件夹"
3. 创建以下文件夹：
   - `scenes`（场景文件）
   - `scripts`（脚本文件）
   - `assets`（素材文件）
   - `assets/images`（图片资源）
   - `assets/audio`（音效资源）
   - `assets/fonts`（字体资源）

**✅ 验证**
- 文件夹结构创建成功
- 文件系统面板显示正确的文件夹

### 2.4 保存主场景

#### 创建主场景
1. 在场景树中，右键点击 "根节点"，选择 "更改类型"
2. 选择 **Node2D**
3. 在检查器中，将节点重命名为 `Main`

#### 保存场景
1. 点击菜单：**场景 > 另存为**
2. 保存到 `res://scenes/Main.tscn`
3. 点击菜单：**项目 > 项目设置**
4. 选择 **应用 > 配置**
5. 设置 **运行 > 主场景**：`res://scenes/Main.tscn`
6. 点击 "关闭" 保存

#### 设置为主场景
1. 点击菜单：**项目 > 项目设置**
2. 选择 **应用 > 配置**
3. 设置 **运行 > 主场景**：`res://scenes/Main.tscn`
4. 点击 "关闭"

**✅ 验证**
- 主场景已保存
- 按 F5 能运行项目
- 运行后能看到空白窗口

### 2.5 创建 C# 脚本

#### 创建主脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `Main.cs`
5. 点击 "创建"

#### 编辑脚本
1. 双击 `Main.cs` 打开编辑器（Visual Studio）
2. 替换为以下代码：

```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 游戏主入口
    /// </summary>
    public partial class Main : Node2D
    {
        public override void _Ready()
        {
            GD.Print("游戏启动成功！");
        }
    }
}
```

3. 保存文件（Ctrl + S）

#### 附加脚本
1. 在场景树中选择 `Main` 节点
2. 在检查器中，点击 "附加脚本"
3. 选择 `res://scripts/Main.cs`
4. 点击 "打开"

**✅ 验证**
- 脚本已附加到主场景
- 按 F5 运行，控制台输出 "游戏启动成功！"

---

## 第三章：像素美术制作

### 3.1 制作地洞素材

#### 地洞设计
- **尺寸**：16x16 像素
- **形状**：椭圆形
- **颜色**：深棕色 (#4A3728)
- **风格**：像素风格

#### 制作步骤（使用 Piskel）
1. 打开 Piskel：https://www.piskelapp.com/
2. 创建新画布：16x16 像素
3. 使用铅笔工具绘制地洞：
   - 绘制一个椭圆形
   - 填充深棕色
   - 添加一些阴影细节
4. 导出为 PNG：`hole.png`

#### 地洞像素参考
```
地洞 16x16 像素图示：
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
```

### 3.2 制作地鼠素材

#### 普通地鼠设计
- **尺寸**：16x16 像素
- **颜色**：棕色 (#8B5A2B)
- **特征**：黑色眼睛，小鼻子

#### 制作步骤
1. 创建新画布：16x16 像素
2. 绘制地鼠：
   - 身体：棕色圆形
   - 眼睛：黑色小点
   - 鼻子：粉色小点
3. 导出为 PNG：`mole_normal.png`

#### 普通地鼠像素参考
```
普通地鼠 16x16 像素图示：
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
```

#### 快速地鼠设计
- **颜色**：灰色 (#696969)
- **特征**：红色眼睛

#### 制作步骤
1. 复制普通地鼠
2. 修改身体颜色为灰色
3. 修改眼睛颜色为红色
4. 导出为 PNG：`mole_fast.png`

#### 金地鼠设计
- **颜色**：金色 (#FFD700)
- **特征**：发光效果

#### 制作步骤
1. 复制普通地鼠
2. 修改身体颜色为金色
3. 添加高光效果
4. 导出为 PNG：`mole_gold.png`

### 3.3 制作背景素材

#### 背景设计
- **尺寸**：800x600 像素
- **颜色**：草绿色 (#90EE90)
- **风格**：简单草地

#### 制作步骤
1. 创建新画布：800x600 像素
2. 填充草绿色
3. 添加一些草地细节（可选）
4. 导出为 PNG：`background.png`

### 3.4 制作 UI 素材

#### 分数显示
- 使用 Godot 默认字体
- 或下载像素字体（推荐：Press Start 2P）

#### 按钮素材（可选）
- 简单的矩形按钮
- 16x16 或 32x32 像素

### 3.5 导入素材到 Godot

#### 导入步骤
1. 在 Godot 编辑器中，点击 "文件系统" 标签
2. 将所有 PNG 文件拖到 `res://assets/images` 文件夹
3. Godot 会自动导入

#### 设置导入参数（可选）
1. 选择图片文件
2. 在检查器中，点击 "导入" 标签
3. 设置 **过滤**：`Nearest`（像素风格必需）
4. 点击 "重新导入"

**✅ 验证**
- 所有素材已导入
- 图片能正常预览
- 像素风格清晰

---

## 第四章：创建主场景

### 4.1 添加背景

#### 添加背景 Sprite
1. 打开 `res://scenes/Main.tscn`
2. 在场景树中，右键点击 `Main`
3. 选择 "添加子节点"
4. 选择 **Sprite2D**
5. 重命名为 `Background`

#### 设置背景图片
1. 在检查器中，找到 **纹理** 属性
2. 点击下拉菜单，选择 "加载"
3. 选择 `res://assets/images/background.png`
4. 调整位置：X=400, Y=300（居中）

**✅ 验证**
- 按 F5 运行
- 能看到背景图片

### 4.2 创建地洞容器

#### 添加容器节点
1. 在场景树中，右键点击 `Main`
2. 选择 "添加子节点"
3. 选择 **Node2D**
4. 重命名为 `HoleContainer`

#### 设置容器位置
1. 在检查器中，设置 **位置**：
   - X: 400
   - Y: 300

**✅ 验证**
- 容器已创建
- 位置在屏幕中央

### 4.3 创建 UI 层

#### 添加 CanvasLayer
1. 在场景树中，右键点击 `Main`
2. 选择 "添加子节点"
3. 选择 **CanvasLayer**
4. 重命名为 `UI`

#### 添加 HUD
1. 在场景树中，右键点击 `UI`
2. 选择 "添加子节点"
3. 选择 **Control**
4. 重命名为 `HUD`
5. 在检查器中，设置 **布局**：
   - **锚点**：左上
   - **左边距**：0
   - **上边距**：0
   - **右边距**：0
   - **下边距**：0

**✅ 验证**
- UI 层已创建
- HUD 覆盖整个屏幕

### 4.4 添加分数显示

#### 添加分数标签
1. 在场景树中，右键点击 `HUD`
2. 选择 "添加子节点"
3. 选择 **Label**
4. 重命名为 `ScoreLabel`
5. 在检查器中，设置：
   - **文本**：`分数: 0`
   - **位置**：X=20, Y=20
   - **字体大小**：24
   - **颜色**：白色

**✅ 验证**
- 按 F5 运行
- 能看到左上角的分数显示

### 4.5 添加时间显示

#### 添加时间标签
1. 在场景树中，右键点击 `HUD`
2. 选择 "添加子节点"
3. 选择 **Label**
4. 重命名为 `TimeLabel`
5. 在检查器中，设置：
   - **文本**：`时间: 60`
   - **位置**：X=700, Y=20
   - **字体大小**：24
   - **颜色**：白色
   - **水平对齐**：右

**✅ 验证**
- 按 F5 运行
- 能看到右上角的时间显示

### 4.6 添加连击显示

#### 添加连击标签
1. 在场景树中，右键点击 `HUD`
2. 选择 "添加子节点"
3. 选择 **Label**
4. 重命名为 `ComboLabel`
5. 在检查器中，设置：
   - **文本**：`连击: 0`
   - **位置**：X=400, Y=50
   - **字体大小**：32
   - **颜色**：黄色
   - **水平对齐**：居中

**✅ 验证**
- 按 F5 运行
- 能看到上方的连击显示

### 4.7 保存场景

1. 点击菜单：**场景 > 保存**
2. 确认保存成功

**✅ 验证**
- 按 F5 运行
- 能看到完整的 UI 界面

---

## 第五章：创建地洞系统

### 5.1 创建地洞场景

#### 创建地洞节点
1. 点击菜单：**场景 > 新建场景**
2. 选择 **Area2D**
3. 重命名为 `Hole`

#### 添加地洞 Sprite
1. 在场景树中，右键点击 `Hole`
2. 选择 "添加子节点"
3. 选择 **Sprite2D**
4. 重命名为 `HoleSprite`
5. 在检查器中，设置 **纹理**：`res://assets/images/hole.png`

#### 添加碰撞形状
1. 在场景树中，右键点击 `Hole`
2. 选择 "添加子节点"
3. 选择 **CollisionShape2D**
4. 在检查器中，设置 **形状**：新建 **CircleShape2D**
5. 调整半径：约 20（覆盖地洞）

#### 设置输入检测
1. 在检查器中，找到 **Input** 部分
2. 勾选 **拾取**（Pickable）

#### 保存场景
1. 点击菜单：**场景 > 另存为**
2. 保存到 `res://scenes/Hole.tscn`

**✅ 验证**
- 地洞场景已创建
- 能预览地洞外观

### 5.2 创建地洞脚本

#### 创建脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `Hole.cs`
5. 点击 "创建"

#### 编写脚本
```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 地鼠类型枚举
    /// </summary>
    public enum MoleType
    {
        Normal,  // 普通地鼠
        Fast,    // 快速地鼠
        Gold     // 金地鼠
    }

    /// <summary>
    /// 地洞节点，负责管理地鼠的生成和状态
    /// </summary>
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

        /// <summary>
        /// 生成地鼠
        /// </summary>
        public void SpawnMole(MoleType moleType)
        {
            if (_hasMole) return;

            // 创建地鼠实例
            _currentMole = ResourceLoader.Load<PackedScene>("res://scenes/Mole.tscn").Instantiate<Mole>();
            _currentMole.MoleType = moleType;
            _currentMole.MoleHit += OnMoleHit;
            _currentMole.MoleMissed += OnMoleMissed;

            AddChild(_currentMole);
            _hasMole = true;
        }

        /// <summary>
        /// 移除地鼠
        /// </summary>
        public void RemoveMole()
        {
            if (_currentMole != null)
            {
                _currentMole.QueueFree();
                _currentMole = null;
                _hasMole = false;
            }
        }

        /// <summary>
        /// 检查是否有地鼠
        /// </summary>
        public bool HasMole()
        {
            return _hasMole;
        }

        #endregion

        #region 私有方法

        private void OnInputEvent(Node viewport, InputEvent @event, long shapeIdx)
        {
            // 检测鼠标点击
            if (@event is InputEventMouseButton mouseEvent && mouseEvent.Pressed)
            {
                if (_hasMole && _currentMole != null)
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
```

3. 保存文件（Ctrl + S）

#### 附加脚本
1. 在场景树中选择 `Hole` 节点
2. 在检查器中，点击 "附加脚本"
3. 选择 `res://scripts/Hole.cs`
4. 点击 "打开"

**✅ 验证**
- 脚本已附加
- 没有编译错误

### 5.3 创建地洞布局

#### 在主场景中创建地洞
1. 打开 `res://scenes/Main.tscn`
2. 在场景树中，右键点击 `HoleContainer`
3. 选择 "实例化子场景"
4. 选择 `res://scenes/Hole.tscn`
5. 重命名为 `Hole01`
6. 在检查器中，设置 **HoleIndex**：`0`
7. 设置位置：X=200, Y=200

#### 复制地洞
1. 右键点击 `Hole01`
2. 选择 "复制"
3. 粘贴 8 次，创建 9 个地洞
4. 分别命名为 `Hole02` 到 `Hole09`
5. 设置各自的 `HoleIndex`：1 到 8

#### 调整地洞位置（3x3 网格）
```
Hole01: X=200, Y=200
Hole02: X=400, Y=200
Hole03: X=600, Y=200
Hole04: X=200, Y=350
Hole05: X=400, Y=350
Hole06: X=600, Y=350
Hole07: X=200, Y=500
Hole08: X=400, Y=500
Hole09: X=600, Y=500
```

**✅ 验证**
- 按 F5 运行
- 能看到 9 个地洞排列成 3x3 网格

---

## 第六章：创建地鼠系统

### 6.1 创建地鼠场景

#### 创建地鼠节点
1. 点击菜单：**场景 > 新建场景**
2. 选择 **Area2D**
3. 重命名为 `Mole`

#### 添加地鼠 Sprite
1. 在场景树中，右键点击 `Mole`
2. 选择 "添加子节点"
3. 选择 **Sprite2D**
4. 重命名为 `MoleSprite`
5. 在检查器中，设置 **纹理**：`res://assets/images/mole_normal.png`

#### 添加碰撞形状
1. 在场景树中，右键点击 `Mole`
2. 选择 "添加子节点"
3. 选择 **CollisionShape2D**
4. 在检查器中，设置 **形状**：新建 **CircleShape2D**
5. 调整半径：约 15

#### 设置位置
1. 在检查器中，设置 **位置**：
   - X: 0
   - Y: -10（稍微向上）

#### 保存场景
1. 点击菜单：**场景 > 另存为**
2. 保存到 `res://scenes/Mole.tscn`

**✅ 验证**
- 地鼠场景已创建
- 能预览地鼠外观

### 6.2 创建地鼠脚本

#### 创建脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `Mole.cs`
5. 点击 "创建"

#### 编写脚本
```csharp
using Godot;
using System;

namespace WhackAMole
{
    /// <summary>
    /// 地鼠节点，负责地鼠的显示和消失
    /// </summary>
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

        /// <summary>
        /// 地鼠被击中
        /// </summary>
        public void OnHit()
        {
            if (_isHit) return;

            _isHit = true;

            // 播放击中动画（简单缩放）
            Tween tween = CreateTween();
            tween.SetParallel(true);
            tween.TweenProperty(this, "scale", new Vector2(1.2f, 1.2f), 0.1f);
            tween.TweenProperty(this, "modulate", Colors.Red, 0.1f);
            tween.TweenInterval(0.1f);
            tween.TweenProperty(this, "scale", Vector2.Zero, 0.2f);
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

        /// <summary>
        /// 更新地鼠外观
        /// </summary>
        private void UpdateMoleAppearance()
        {
            Sprite2D sprite = GetNode<Sprite2D>("MoleSprite");
            string texturePath = MoleType switch
            {
                MoleType.Normal => "res://assets/images/mole_normal.png",
                MoleType.Fast => "res://assets/images/mole_fast.png",
                MoleType.Gold => "res://assets/images/mole_gold.png",
                _ => "res://assets/images/mole_normal.png"
            };

            sprite.Texture = ResourceLoader.Load<Texture2D>(texturePath);
        }

        /// <summary>
        /// 获取停留时间
        /// </summary>
        private float GetStayTime()
        {
            return MoleType switch
            {
                MoleType.Normal => 1.5f,
                MoleType.Fast => 0.8f,
                MoleType.Gold => 1.0f,
                _ => 1.5f
            };
        }

        /// <summary>
        /// 设置消失计时器
        /// </summary>
        private void SetupDisappearTimer(float time)
        {
            _disappearTimer = new Timer();
            _disappearTimer.WaitTime = time;
            _disappearTimer.OneShot = true;
            _disappearTimer.Timeout += OnDisappearTimeout;
            AddChild(_disappearTimer);
            _disappearTimer.Start();
        }

        /// <summary>
        /// 消失计时器超时
        /// </summary>
        private void OnDisappearTimeout()
        {
            if (!_isHit)
            {
                // 播放消失动画
                Tween tween = CreateTween();
                tween.TweenProperty(this, "scale", Vector2.Zero, 0.2f);
                tween.TweenInterval(0.2f);
                tween.TweenCallback(Callable.From(() =>
                {
                    EmitSignal(SignalName.MoleMissed);
                    QueueFree();
                }));
            }
        }

        #endregion
    }
}
```

3. 保存文件（Ctrl + S）

#### 附加脚本
1. 在场景树中选择 `Mole` 节点
2. 在检查器中，点击 "附加脚本"
3. 选择 `res://scripts/Mole.cs`
4. 点击 "打开"

**✅ 验证**
- 脚本已附加
- 没有编译错误

---

## 第七章：游戏管理器

### 7.1 创建游戏管理器节点

#### 添加游戏管理器
1. 打开 `res://scenes/Main.tscn`
2. 在场景树中，右键点击 `Main`
3. 选择 "添加子节点"
4. 选择 **Node**
5. 重命名为 `GameManager`

### 7.2 创建游戏管理器脚本

#### 创建脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `GameManager.cs`
5. 点击 "创建"

#### 编写脚本
```csharp
using Godot;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WhackAMole
{
    /// <summary>
    /// 游戏管理器，负责游戏的核心逻辑
    /// </summary>
    public partial class GameManager : Node
    {
        #region 常量

        private const int GAME_DURATION = 60; // 游戏时长（秒）
        private const int HOLE_COUNT = 9;     // 地洞数量

        #endregion

        #region 私有变量

        private Timer _gameTimer;
        private Timer _spawnTimer;
        private List<Hole> _holes;
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
            _holes = new List<Hole>();
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

        /// <summary>
        /// 开始游戏
        /// </summary>
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

            GD.Print("游戏开始！");
        }

        /// <summary>
        /// 结束游戏
        /// </summary>
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

            GD.Print($"游戏结束！最终分数：{_score}");
        }

        #endregion

        #region 私有方法

        /// <summary>
        /// 初始化地洞
        /// </summary>
        private void InitializeHoles()
        {
            Node2D holeContainer = GetNode<Node2D>("HoleContainer");

            for (int i = 0; i < HOLE_COUNT; i++)
            {
                Hole hole = holeContainer.GetNode<Hole>($"Hole{(i + 1):D2}");
                _holes.Add(hole);

                // 连接地洞信号
                hole.MoleHit += OnMoleHit;
                hole.MoleMissed += OnMoleMissed;
            }
        }

        /// <summary>
        /// 设置游戏计时器
        /// </summary>
        private void SetupGameTimer()
        {
            _gameTimer = new Timer();
            _gameTimer.WaitTime = 1.0f;
            _gameTimer.OneShot = false;
            _gameTimer.Timeout += OnGameTimerTimeout;
            AddChild(_gameTimer);
        }

        /// <summary>
        /// 设置生成计时器
        /// </summary>
        private void SetupSpawnTimer()
        {
            _spawnTimer = new Timer();
            _spawnTimer.WaitTime = 1.0f;
            _spawnTimer.OneShot = false;
            _spawnTimer.Timeout += OnSpawnTimerTimeout;
            AddChild(_spawnTimer);
        }

        /// <summary>
        /// 连接 UI 信号
        /// </summary>
        private void ConnectUISignals()
        {
            // UI 信号连接将在后续章节实现
        }

        /// <summary>
        /// 更新 UI
        /// </summary>
        private void UpdateUI()
        {
            CanvasLayer ui = GetNode<CanvasLayer>("UI");
            Label scoreLabel = ui.GetNode<Label>("HUD/ScoreLabel");
            Label timeLabel = ui.GetNode<Label>("HUD/TimeLabel");
            Label comboLabel = ui.GetNode<Label>("HUD/ComboLabel");

            scoreLabel.Text = $"分数: {_score}";
            timeLabel.Text = $"时间: {_timeRemaining}";
            comboLabel.Text = $"连击: {_combo}";
        }

        /// <summary>
        /// 生成地鼠
        /// </summary>
        private void SpawnMole()
        {
            // 获取空闲的地洞
            var availableHoles = _holes.Where(h => !h.HasMole()).ToList();

            if (availableHoles.Count == 0) return;

            // 随机选择一个地洞
            int randomIndex = _random.Next(availableHoles.Count);
            Hole selectedHole = availableHoles[randomIndex];

            // 随机选择地鼠类型
            MoleType moleType = GetRandomMoleType();

            // 生成地鼠
            selectedHole.SpawnMole(moleType);
        }

        /// <summary>
        /// 获取随机地鼠类型
        /// </summary>
        private MoleType GetRandomMoleType()
        {
            double randomValue = _random.NextDouble();

            // 根据游戏时间调整概率
            float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.5f;

            // 基础概率
            double normalProb = 0.7 * difficultyMultiplier;
            double fastProb = 0.2 * difficultyMultiplier;
            double goldProb = 0.1;

            if (randomValue < normalProb)
            {
                return MoleType.Normal;
            }
            else if (randomValue < normalProb + fastProb)
            {
                return MoleType.Fast;
            }
            else
            {
                return MoleType.Gold;
            }
        }

        /// <summary>
        /// 计算得分
        /// </summary>
        private int CalculateScore(MoleType moleType)
        {
            int baseScore = moleType switch
            {
                MoleType.Normal => 10,
                MoleType.Fast => 20,
                MoleType.Gold => 50,
                _ => 10
            };

            // 连击奖励
            int comboBonus = 0;
            if (_combo >= 5)
            {
                comboBonus = 10;
            }
            else if (_combo >= 3)
            {
                comboBonus = 5;
            }

            return baseScore + comboBonus;
        }

        #endregion

        #region 事件处理

        /// <summary>
        /// 游戏计时器超时
        /// </summary>
        private void OnGameTimerTimeout()
        {
            _timeRemaining--;

            // 更新 UI
            UpdateUI();

            // 检查游戏是否结束
            if (_timeRemaining <= 0)
            {
                EndGame();
            }
        }

        /// <summary>
        /// 生成计时器超时
        /// </summary>
        private void OnSpawnTimerTimeout()
        {
            if (!_isGameRunning) return;

            // 生成地鼠
            SpawnMole();

            // 根据游戏时间调整生成间隔
            float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.5f;
            _spawnTimer.WaitTime = 1.0f * difficultyMultiplier;
        }

        /// <summary>
        /// 地鼠被击中
        /// </summary>
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

            GD.Print($"击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}");
        }

        /// <summary>
        /// 地鼠自然消失
        /// </summary>
        private void OnMoleMissed(int holeIndex)
        {
            if (!_isGameRunning) return;

            // 重置连击
            _combo = 0;

            // 更新 UI
            UpdateUI();

            GD.Print($"地鼠消失！连击重置");
        }

        #endregion
    }
}
```

3. 保存文件（Ctrl + S）

#### 附加脚本
1. 在场景树中选择 `GameManager` 节点
2. 在检查器中，点击 "附加脚本"
3. 选择 `res://scripts/GameManager.cs`
4. 点击 "打开"

**✅ 验证**
- 脚本已附加
- 按 F5 运行
- 游戏能正常开始
- 地鼠能随机出现
- 点击地鼠能得分
- 时间倒计时正常
- 60秒后游戏结束

---

## 第八章：连击系统

### 8.1 连击系统说明

连击系统已经在 `GameManager.cs` 中实现，包括：
- 连击计数
- 连击奖励（3连击+5分，5连击+10分）
- 连击中断（地鼠消失时重置）

### 8.2 连击视觉反馈

#### 在 GameManager.cs 中添加连击动画
```csharp
/// <summary>
/// 显示连击动画
/// </summary>
private void ShowComboAnimation()
{
    if (_combo < 3) return;

    CanvasLayer ui = GetNode<CanvasLayer>("UI");
    Label comboLabel = ui.GetNode<Label>("HUD/ComboLabel");

    // 创建缩放动画
    Tween tween = CreateTween();
    tween.SetParallel(true);
    tween.TweenProperty(comboLabel, "scale", new Vector2(1.5f, 1.5f), 0.1f);
    tween.TweenProperty(comboLabel, "modulate", Colors.Yellow, 0.1f);
    tween.TweenInterval(0.1f);
    tween.TweenProperty(comboLabel, "scale", Vector2.One, 0.2f);
    tween.TweenProperty(comboLabel, "modulate", Colors.White, 0.2f);
}
```

#### 在 OnMoleHit 方法中调用
```csharp
// 更新 UI
UpdateUI();

// 显示连击动画
ShowComboAnimation();

GD.Print($"击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}");
```

**✅ 验证**
- 按 F5 运行
- 连击达到3次时，连击文字会放大并变黄
- 连击中断后，连击文字恢复正常

---

## 第九章：难度曲线

### 9.1 难度曲线说明

难度曲线已经在 `GameManager.cs` 中实现，包括：
- 地鼠出现间隔随时间缩短
- 特殊地鼠概率随时间增加
- 地鼠停留时间保持不变

### 9.2 难度调整参数

#### 在 GameManager.cs 中调整
```csharp
// 在 GetRandomMoleType 方法中
private MoleType GetRandomMoleType()
{
    double randomValue = _random.NextDouble();

    // 根据游戏时间调整概率（可调整难度）
    float difficultyMultiplier = 1.0f - ((float)(GAME_DURATION - _timeRemaining) / GAME_DURATION) * 0.7f; // 从0.5改为0.7，增加难度

    // 基础概率
    double normalProb = 0.7 * difficultyMultiplier;
    double fastProb = 0.2 * difficultyMultiplier;
    double goldProb = 0.1;

    if (randomValue < normalProb)
    {
        return MoleType.Normal;
    }
    else if (randomValue < normalProb + fastProb)
    {
        return MoleType.Fast;
    }
    else
    {
        return MoleType.Gold;
    }
}
```

**✅ 验证**
- 按 F5 运行
- 游戏后期难度明显增加
- 特殊地鼠出现更频繁

---

## 第十章：排行榜系统

### 10.1 创建排行榜管理器

#### 创建脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `LeaderboardManager.cs`
5. 点击 "创建"

#### 编写脚本
```csharp
using Godot;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WhackAMole
{
    /// <summary>
    /// 排行榜记录
    /// </summary>
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

    /// <summary>
    /// 排行榜管理器
    /// </summary>
    public partial class LeaderboardManager : Node
    {
        #region 常量

        private const string SAVE_FILE = "user://leaderboard.cfg";
        private const int MAX_ENTRIES = 10;

        #endregion

        #region 私有变量

        private List<LeaderboardEntry> _entries;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            LoadLeaderboard();
        }

        #endregion

        #region 公共方法

        /// <summary>
        /// 添加分数
        /// </summary>
        public void AddScore(int score)
        {
            string date = DateTime.Now.ToString("yyyy-MM-dd HH:mm");

            // 创建新记录
            LeaderboardEntry newEntry = new LeaderboardEntry(0, score, date);
            _entries.Add(newEntry);

            // 按分数排序
            _entries = _entries.OrderByDescending(e => e.Score).ToList();

            // 限制记录数量
            if (_entries.Count > MAX_ENTRIES)
            {
                _entries = _entries.Take(MAX_ENTRIES).ToList();
            }

            // 更新排名
            UpdateRanks();

            // 保存
            SaveLeaderboard();
        }

        /// <summary>
        /// 获取排行榜
        /// </summary>
        public List<LeaderboardEntry> GetLeaderboard()
        {
            return new List<LeaderboardEntry>(_entries);
        }

        /// <summary>
        /// 获取最高分
        /// </summary>
        public int GetHighScore()
        {
            if (_entries.Count == 0) return 0;
            return _entries[0].Score;
        }

        /// <summary>
        /// 检查是否进入排行榜
        /// </summary>
        public bool IsHighScore(int score)
        {
            if (_entries.Count < MAX_ENTRIES) return true;
            return score > _entries.Last().Score;
        }

        /// <summary>
        /// 清空排行榜
        /// </summary>
        public void ClearLeaderboard()
        {
            _entries.Clear();
            SaveLeaderboard();
        }

        #endregion

        #region 私有方法

        /// <summary>
        /// 更新排名
        /// </summary>
        private void UpdateRanks()
        {
            for (int i = 0; i < _entries.Count; i++)
            {
                _entries[i].Rank = i + 1;
            }
        }

        /// <summary>
        /// 保存排行榜
        /// </summary>
        private void SaveLeaderboard()
        {
            var config = new ConfigFile();

            for (int i = 0; i < _entries.Count; i++)
            {
                string section = $"entry_{i}";
                config.SetValue(section, "rank", _entries[i].Rank);
                config.SetValue(section, "score", _entries[i].Score);
                config.SetValue(section, "date", _entries[i].Date);
            }

            config.SetValue("meta", "count", _entries.Count);

            Error error = config.Save(SAVE_FILE);
            if (error != Error.Ok)
            {
                GD.PrintErr($"保存排行榜失败：{error}");
            }
        }

        /// <summary>
        /// 加载排行榜
        /// </summary>
        private void LoadLeaderboard()
        {
            _entries = new List<LeaderboardEntry>();

            if (!FileAccess.FileExists(SAVE_FILE))
            {
                GD.Print("排行榜文件不存在，创建新排行榜");
                return;
            }

            var config = new ConfigFile();
            Error error = config.Load(SAVE_FILE);

            if (error != Error.Ok)
            {
                GD.PrintErr($"加载排行榜失败：{error}");
                return;
            }

            int count = (int)config.GetValue("meta", "count", 0);

            for (int i = 0; i < count; i++)
            {
                string section = $"entry_{i}";
                int rank = (int)config.GetValue(section, "rank", 0);
                int score = (int)config.GetValue(section, "score", 0);
                string date = (string)config.GetValue(section, "date", "");

                LeaderboardEntry entry = new LeaderboardEntry(rank, score, date);
                _entries.Add(entry);
            }

            GD.Print($"加载排行榜成功，共 {_entries.Count} 条记录");
        }

        #endregion
    }
}
```

3. 保存文件（Ctrl + S）

### 10.2 在游戏中集成排行榜

#### 在主场景中添加排行榜管理器
1. 打开 `res://scenes/Main.tscn`
2. 在场景树中，右键点击 `GameManager`
3. 选择 "添加子节点"
4. 选择 **Node**
5. 重命名为 `LeaderboardManager`
6. 附加 `LeaderboardManager.cs` 脚本

#### 在 GameManager.cs 中集成排行榜
```csharp
// 在私有变量中添加
private LeaderboardManager _leaderboardManager;

// 在 _Ready 方法中初始化
_leaderboardManager = GetNode<LeaderboardManager>("LeaderboardManager");

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
        GD.Print($"恭喜！新纪录：{_score} 分");
    }

    GD.Print($"游戏结束！最终分数：{_score}");
}
```

**✅ 验证**
- 按 F5 运行
- 完成一局游戏
- 分数会保存到排行榜
- 重新运行游戏，排行榜数据会加载

---

## 第十一章：音效制作

### 11.1 使用 Bfxr 制作音效

#### 访问 Bfxr
1. 打开浏览器
2. 访问：https://www.bfxr.net/

#### 制作音效步骤

##### 1. 击中普通地鼠音效（hit_normal.wav）
1. 点击 "Pickup/Coin" 预设
2. 调整参数：
   - **Frequency**：约 800-1000 Hz
   - **Decay**：约 0.1-0.2 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `hit_normal.wav`

##### 2. 击中快速地鼠音效（hit_fast.wav）
1. 点击 "Powerup" 预设
2. 调整参数：
   - **Frequency**：约 1200-1500 Hz
   - **Decay**：约 0.08-0.12 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `hit_fast.wav`

##### 3. 击中金地鼠音效（hit_gold.wav）
1. 点击 "Coin" 预设
2. 调整参数：
   - **Frequency**：约 1500-2000 Hz
   - **Decay**：约 0.3-0.5 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `hit_gold.wav`

##### 4. 连击音效（combo.wav）
1. 点击 "Jump" 预设
2. 调整参数：
   - **Frequency**：约 600-800 Hz
   - **Decay**：约 0.15-0.25 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `combo.wav`

##### 5. 地鼠出现音效（mole_appear.wav）
1. 点击 "Blip/Select" 预设
2. 调整参数：
   - **Frequency**：约 400-600 Hz
   - **Decay**：约 0.1-0.15 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `mole_appear.wav`

##### 6. 地鼠消失音效（mole_miss.wav）
1. 点击 "Hit/Hurt" 预设
2. 调整参数：
   - **Frequency**：约 200-400 Hz
   - **Decay**：约 0.2-0.3 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `mole_miss.wav`

##### 7. 时间警告音效（time_warning.wav）
1. 点击 "Laser/Shoot" 预设
2. 调整参数：
   - **Frequency**：约 800-1000 Hz
   - **Decay**：约 0.5-0.8 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `time_warning.wav`

##### 8. 游戏结束音效（game_over.wav）
1. 点击 "Explosion" 预设
2. 调整参数：
   - **Frequency**：约 100-200 Hz
   - **Decay**：约 1.0-1.5 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `game_over.wav`

##### 9. 按钮点击音效（button_click.wav）
1. 点击 "Blip/Select" 预设
2. 调整参数：
   - **Frequency**：约 1000-1200 Hz
   - **Decay**：约 0.05-0.1 秒
3. 点击播放试听
4. 点击 "Export WAV"
5. 保存为 `button_click.wav`

##### 10. 背景音乐（可选）
如果你有背景音乐，可以：
1. 下载免费的 8-bit 风格音乐
2. 或使用在线工具生成
3. 保存为 `background_music.ogg`

### 11.2 导入音效到 Godot

#### 导入步骤
1. 在 Godot 编辑器中，点击 "文件系统" 标签
2. 将所有 WAV 文件拖到 `res://assets/audio` 文件夹
3. Godot 会自动导入

**✅ 验证**
- 所有音效已导入
- 能预览播放音效

---

## 第十二章：音效系统

### 12.1 创建音效管理器

#### 创建脚本
1. 在文件系统中，右键点击 `scripts` 文件夹
2. 选择 "新建 > 脚本"
3. 选择 **C#**
4. 命名为 `AudioManager.cs`
5. 点击 "创建"

#### 编写脚本
```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 音效管理器
    /// </summary>
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
            _sfxPlayer.Name = "SFXPlayer";
            AddChild(_sfxPlayer);

            // 创建音乐播放器
            _musicPlayer = new AudioStreamPlayer();
            _musicPlayer.Name = "MusicPlayer";
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
            AddChild(_musicPlayer);
        }

        #endregion

        #region 公共方法

        /// <summary>
        /// 播放音效
        /// </summary>
        public void PlaySFX(string soundName)
        {
            string soundPath = $"res://assets/audio/{soundName}.wav";

            if (!FileAccess.FileExists(soundPath))
            {
                GD.PrintErr($"音效文件不存在：{soundPath}");
                return;
            }

            AudioStream sound = ResourceLoader.Load<AudioStream>(soundPath);
            _sfxPlayer.Stream = sound;
            _sfxPlayer.VolumeDb = Mathf.LinearToDb(_sfxVolume);
            _sfxPlayer.Play();
        }

        /// <summary>
        /// 播放音乐
        /// </summary>
        public void PlayMusic(string musicName, bool loop = true)
        {
            string musicPath = $"res://assets/audio/{musicName}.ogg";

            if (!FileAccess.FileExists(musicPath))
            {
                GD.PrintErr($"音乐文件不存在：{musicPath}");
                return;
            }

            AudioStream music = ResourceLoader.Load<AudioStream>(musicPath);
            _musicPlayer.Stream = music;
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);

            if (loop)
            {
                _musicPlayer.Autoplay = true;
            }

            _musicPlayer.Play();
        }

        /// <summary>
        /// 停止音乐
        /// </summary>
        public void StopMusic()
        {
            _musicPlayer.Stop();
        }

        /// <summary>
        /// 设置音效音量
        /// </summary>
        public void SetSFXVolume(float volume)
        {
            _sfxVolume = Mathf.Clamp(volume, 0.0f, 1.0f);
        }

        /// <summary>
        /// 设置音乐音量
        /// </summary>
        public void SetMusicVolume(float volume)
        {
            _musicVolume = Mathf.Clamp(volume, 0.0f, 1.0f);
            _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
        }

        #endregion
    }
}
```

3. 保存文件（Ctrl + S）

### 12.2 在游戏中集成音效

#### 在主场景中添加音效管理器
1. 打开 `res://scenes/Main.tscn`
2. 在场景树中，右键点击 `GameManager`
3. 选择 "添加子节点"
4. 选择 **Node**
5. 重命名为 `AudioManager`
6. 附加 `AudioManager.cs` 脚本

#### 在 GameManager.cs 中添加音效
```csharp
// 在 OnMoleHit 方法中添加
private void OnMoleHit(int holeIndex, MoleType moleType)
{
    if (!_isGameRunning) return;

    // 播放击中音效
    string hitSound = moleType switch
    {
        MoleType.Normal => "hit_normal",
        MoleType.Fast => "hit_fast",
        MoleType.Gold => "hit_gold",
        _ => "hit_normal"
    };
    AudioManager.Instance.PlaySFX(hitSound);

    // 增加连击
    _combo++;

    // 连击音效
    if (_combo >= 3)
    {
        AudioManager.Instance.PlaySFX("combo");
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

    GD.Print($"击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}");
}

// 在 OnMoleMissed 方法中添加
private void OnMoleMissed(int holeIndex)
{
    if (!_isGameRunning) return;

    // 播放消失音效
    AudioManager.Instance.PlaySFX("mole_miss");

    // 重置连击
    _combo = 0;

    // 更新 UI
    UpdateUI();

    GD.Print($"地鼠消失！连击重置");
}

// 在 OnSpawnTimerTimeout 方法中添加
private void OnSpawnTimerTimeout()
{
    if (!_isGameRunning) return;

    // 生成地鼠
    SpawnMole();

    // 播放地鼠出现音效（可选，可能太频繁）
    // AudioManager.Instance.PlaySFX("mole_appear");

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
        AudioManager.Instance.PlaySFX("time_warning");
    }

    // 更新 UI
    UpdateUI();

    // 检查游戏是否结束
    if (_timeRemaining <= 0)
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
        GD.Print($"恭喜！新纪录：{_score} 分");
    }

    // 播放游戏结束音效
    AudioManager.Instance.PlaySFX("game_over");

    GD.Print($"游戏结束！最终分数：{_score}");
}
```

**✅ 验证**
- 按 F5 运行
- 击中地鼠有音效
- 连击有音效
- 时间警告有音效
- 游戏结束有音效

---

## 第十三章：UI界面

### 13.1 创建主菜单

#### 创建主菜单场景
1. 点击菜单：**场景 > 新建场景**
2. 选择 **Control**
3. 重命名为 `MainMenu`

#### 添加标题
1. 在场景树中，右键点击 `MainMenu`
2. 选择 "添加子节点"
3. 选择 **Label**
4. 重命名为 `TitleLabel`
5. 在检查器中，设置：
   - **文本**：`打地鼠`
   - **字体大小**：64
   - **位置**：X=400, Y=150
   - **水平对齐**：居中

#### 添加开始按钮
1. 在场景树中，右键点击 `MainMenu`
2. 选择 "添加子节点"
3. 选择 **Button**
4. 重命名为 `StartButton`
5. 在检查器中，设置：
   - **文本**：`开始游戏`
   - **位置**：X=400, Y=300
   - **大小**：X=200, Y=50
   - **水平对齐**：居中

#### 添加排行榜按钮
1. 复制 `StartButton`
2. 重命名为 `LeaderboardButton`
3. 设置：
   - **文本**：`排行榜`
   - **位置**：X=400, Y=380

#### 添加退出按钮
1. 复制 `StartButton`
2. 重命名为 `ExitButton`
3. 设置：
   - **文本**：`退出`
   - **位置**：X=400, Y=460

#### 创建主菜单脚本
```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 主菜单
    /// </summary>
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
            _startButton = GetNode<Button>("StartButton");
            _leaderboardButton = GetNode<Button>("LeaderboardButton");
            _exitButton = GetNode<Button>("ExitButton");

            // 连接按钮信号
            _startButton.Pressed += OnStartButtonPressed;
            _leaderboardButton.Pressed += OnLeaderboardButtonPressed;
            _exitButton.Pressed += OnExitButtonPressed;
        }

        #endregion

        #region 事件处理

        private void OnStartButtonPressed()
        {
            AudioManager.Instance.PlaySFX("button_click");
            GetTree().ChangeSceneToFile("res://scenes/Main.tscn");
        }

        private void OnLeaderboardButtonPressed()
        {
            AudioManager.Instance.PlaySFX("button_click");
            // TODO: 显示排行榜界面
            GD.Print("排行榜功能待实现");
        }

        private void OnExitButtonPressed()
        {
            AudioManager.Instance.PlaySFX("button_click");
            GetTree().Quit();
        }

        #endregion
    }
}
```

#### 保存场景
1. 保存为 `res://scenes/MainMenu.tscn`

### 13.2 创建游戏结束界面

#### 创建游戏结束场景
1. 点击菜单：**场景 > 新建场景**
2. 选择 **Control**
3. 重命名为 `GameOver`

#### 添加标题
1. 添加 `Label`，命名为 `TitleLabel`
2. 设置：
   - **文本**：`游戏结束`
   - **字体大小**：64
   - **位置**：X=400, Y=150
   - **水平对齐**：居中

#### 添加分数显示
1. 添加 `Label`，命名为 `ScoreLabel`
2. 设置：
   - **文本**：`最终分数：0`
   - **字体大小**：32
   - **位置**：X=400, Y=250
   - **水平对齐**：居中

#### 添加重新开始按钮
1. 添加 `Button`，命名为 `RestartButton`
2. 设置：
   - **文本**：`重新开始`
   - **位置**：X=400, Y=350
   - **大小**：X=200, Y=50
   - **水平对齐**：居中

#### 添加返回主菜单按钮
1. 添加 `Button`，命名为 `MainMenuButton`
2. 设置：
   - **文本**：`返回主菜单`
   - **位置**：X=400, Y=430
   - **大小**：X=200, Y=50
   - **水平对齐**：居中

#### 创建游戏结束脚本
```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 游戏结束界面
    /// </summary>
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
            _scoreLabel = GetNode<Label>("ScoreLabel");
            _restartButton = GetNode<Button>("RestartButton");
            _mainMenuButton = GetNode<Button>("MainMenuButton");

            // 显示最终分数
            _scoreLabel.Text = $"最终分数：{FinalScore}";

            // 连接按钮信号
            _restartButton.Pressed += OnRestartButtonPressed;
            _mainMenuButton.Pressed += OnMainMenuButtonPressed;
        }

        #endregion

        #region 事件处理

        private void OnRestartButtonPressed()
        {
            AudioManager.Instance.PlaySFX("button_click");
            GetTree().ChangeSceneToFile("res://scenes/Main.tscn");
        }

        private void OnMainMenuButtonPressed()
        {
            AudioManager.Instance.PlaySFX("button_click");
            GetTree().ChangeSceneToFile("res://scenes/MainMenu.tscn");
        }

        #endregion
    }
}
```

#### 保存场景
1. 保存为 `res://scenes/GameOver.tscn`

### 13.3 在游戏中集成UI

#### 在 GameManager.cs 中添加游戏结束跳转
```csharp
// 在 EndGame 方法中添加场景跳转
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
        GD.Print($"恭喜！新纪录：{_score} 分");
    }

    // 播放游戏结束音效
    AudioManager.Instance.PlaySFX("game_over");

    GD.Print($"游戏结束！最终分数：{_score}");

    // 延迟跳转到游戏结束界面
    GetTree().CreateTimer(2.0).Timeout += () =>
    {
        PackedScene gameOverScene = ResourceLoader.Load<PackedScene>("res://scenes/GameOver.tscn");
        GameOver gameOver = gameOverScene.Instantiate<GameOver>();
        gameOver.FinalScore = _score;
        GetTree().Root.AddChild(gameOver);
        GetTree().CurrentScene.QueueFree();
        GetTree().CurrentScene = gameOver;
    };
}
```

#### 设置主菜单为启动场景
1. 点击菜单：**项目 > 项目设置**
2. 选择 **应用 > 配置**
3. 设置 **运行 > 主场景**：`res://scenes/MainMenu.tscn`
4. 点击 "关闭"

**✅ 验证**
- 按 F5 运行
- 能看到主菜单
- 点击"开始游戏"进入游戏
- 游戏结束后跳转到游戏结束界面
- 能重新开始或返回主菜单

---

## 第十四章：视觉特效

### 14.1 添加击中粒子效果

#### 创建粒子场景
1. 点击菜单：**场景 > 新建场景**
2. 选择 **GPUParticles2D**
3. 重命名为 `HitEffect`

#### 设置粒子参数
1. 在检查器中，设置：
   - ** emitting**：勾选
   - **Amount**：20
   - **Lifetime**：0.5
   - **Process Material**：新建 **ParticleProcessMaterial**

#### 设置粒子材质
1. 在检查器中，展开 **Process Material**
2. 设置：
   - **Gravity**：X=0, Y=100
   - **Scale**：最小=0.5, 最大=1.0
   - **Color**：黄色

#### 保存场景
1. 保存为 `res://scenes/HitEffect.tscn`

### 14.2 在地鼠被击中时显示粒子

#### 在 Mole.cs 中添加粒子效果
```csharp
// 在私有变量中添加
private GPUParticles2D _hitEffect;

// 在 OnHit 方法中添加粒子效果
public void OnHit()
{
    if (_isHit) return;

    _isHit = true;

    // 创建击中粒子效果
    _hitEffect = ResourceLoader.Load<PackedScene>("res://scenes/HitEffect.tscn").Instantiate<GPUParticles2D>();
    AddChild(_hitEffect);

    // 播放击中动画
    Tween tween = CreateTween();
    tween.SetParallel(true);
    tween.TweenProperty(this, "scale", new Vector2(1.2f, 1.2f), 0.1f);
    tween.TweenProperty(this, "modulate", Colors.Red, 0.1f);
    tween.TweenInterval(0.1f);
    tween.TweenProperty(this, "scale", Vector2.Zero, 0.2f);
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
```

**✅ 验证**
- 按 F5 运行
- 击中地鼠时有粒子效果

### 14.3 添加分数飘字效果

#### 创建飘字脚本
```csharp
using Godot;

namespace WhackAMole
{
    /// <summary>
    /// 分数飘字
    /// </summary>
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
            tween.TweenProperty(this, "position", Position - new Vector2(0, _floatDistance), _floatDuration);
            tween.TweenProperty(this, "modulate", Colors.Transparent, _floatDuration);
            tween.TweenInterval(_floatDuration);
            tween.TweenCallback(Callable.From(QueueFree));
        }

        #endregion

        #region 公共方法

        /// <summary>
        /// 创建飘字
        /// </summary>
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
```

#### 在 GameManager.cs 中添加飘字
```csharp
// 在 OnMoleHit 方法中添加飘字
private void OnMoleHit(int holeIndex, MoleType moleType)
{
    if (!_isGameRunning) return;

    // 播放击中音效
    string hitSound = moleType switch
    {
        MoleType.Normal => "hit_normal",
        MoleType.Fast => "hit_fast",
        MoleType.Gold => "hit_gold",
        _ => "hit_normal"
    };
    AudioManager.Instance.PlaySFX(hitSound);

    // 增加连击
    _combo++;

    // 连击音效
    if (_combo >= 3)
    {
        AudioManager.Instance.PlaySFX("combo");
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
        MoleType.Normal => Colors.White,
        MoleType.Fast => Colors.Yellow,
        MoleType.Gold => Colors.Gold,
        _ => Colors.White
    };
    FloatingScore.Create(this, holePosition, $"+{points}", scoreColor);

    // 更新 UI
    UpdateUI();

    // 显示连击动画
    ShowComboAnimation();

    GD.Print($"击中地鼠！类型：{moleType}，得分：{points}，连击：{_combo}");
}
```

**✅ 验证**
- 按 F5 运行
- 击中地鼠时有分数飘字

### 14.4 添加时间警告效果

#### 在 GameManager.cs 中添加时间警告动画
```csharp
// 在 UpdateUI 方法中添加时间警告
private void UpdateUI()
{
    CanvasLayer ui = GetNode<CanvasLayer>("UI");
    Label scoreLabel = ui.GetNode<Label>("HUD/ScoreLabel");
    Label timeLabel = ui.GetNode<Label>("HUD/TimeLabel");
    Label comboLabel = ui.GetNode<Label>("HUD/ComboLabel");

    scoreLabel.Text = $"分数: {_score}";
    timeLabel.Text = $"时间: {_timeRemaining}";
    comboLabel.Text = $"连击: {_combo}";

    // 时间警告效果
    if (_timeRemaining <= 10)
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
```

**✅ 验证**
- 按 F5 运行
- 剩余10秒时时间变红并闪烁

---

## 第十五章：性能优化

### 15.1 对象池优化

#### 创建地鼠对象池
```csharp
using Godot;
using System.Collections.Generic;

namespace WhackAMole
{
    /// <summary>
    /// 地鼠对象池
    /// </summary>
    public partial class MolePool : Node
    {
        #region 私有变量

        private Queue<Mole> _pool;
        private PackedScene _moleScene;
        private int _initialSize = 10;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            _pool = new Queue<Mole>();
            _moleScene = ResourceLoader.Load<PackedScene>("res://scenes/Mole.tscn");

            // 预创建地鼠
            for (int i = 0; i < _initialSize; i++)
            {
                Mole mole = _moleScene.Instantiate<Mole>();
                mole.ProcessMode = ProcessModeEnum.Disabled;
                AddChild(mole);
                _pool.Enqueue(mole);
            }
        }

        #endregion

        #region 公共方法

        /// <summary>
        /// 获取地鼠
        /// </summary>
        public Mole GetMole()
        {
            Mole mole;

            if (_pool.Count > 0)
            {
                mole = _pool.Dequeue();
            }
            else
            {
                mole = _moleScene.Instantiate<Mole>();
                AddChild(mole);
            }

            mole.ProcessMode = ProcessModeEnum.Inherit;
            return mole;
        }

        /// <summary>
        /// 回收地鼠
        /// </summary>
        public void ReturnMole(Mole mole)
        {
            mole.ProcessMode = ProcessModeEnum.Disabled;
            _pool.Enqueue(mole);
        }

        #endregion
    }
}
```

### 15.2 音效预加载

#### 在 AudioManager.cs 中添加预加载
```csharp
// 在私有变量中添加
private Dictionary<string, AudioStream> _sfxCache;

// 在 _Ready 方法中预加载音效
public override void _Ready()
{
    // 设置单例
    Instance = this;

    // 创建音效播放器
    _sfxPlayer = new AudioStreamPlayer();
    _sfxPlayer.Name = "SFXPlayer";
    AddChild(_sfxPlayer);

    // 创建音乐播放器
    _musicPlayer = new AudioStreamPlayer();
    _musicPlayer.Name = "MusicPlayer";
    _musicPlayer.VolumeDb = Mathf.LinearToDb(_musicVolume);
    AddChild(_musicPlayer);

    // 预加载音效
    PreloadSFX();
}

/// <summary>
/// 预加载音效
/// </summary>
private void PreloadSFX()
{
    _sfxCache = new Dictionary<string, AudioStream>();

    string[] soundFiles = {
        "hit_normal",
        "hit_fast",
        "hit_gold",
        "combo",
        "mole_appear",
        "mole_miss",
        "time_warning",
        "game_over",
        "button_click"
    };

    foreach (string soundName in soundFiles)
    {
        string soundPath = $"res://assets/audio/{soundName}.wav";
        if (FileAccess.FileExists(soundPath))
        {
            AudioStream sound = ResourceLoader.Load<AudioStream>(soundPath);
            _sfxCache[soundName] = sound;
        }
    }

    GD.Print($"预加载 {_sfxCache.Count} 个音效");
}
```

---

## 第十六章：测试与调试

### 16.1 功能测试清单

- [ ] 游戏能正常启动
- [ ] 主菜单能正常显示
- [ ] 点击"开始游戏"能进入游戏
- [ ] 地鼠能随机出现
- [ ] 点击地鼠能得分
- [ ] 连击系统正常工作
- [ ] 时间倒计时正常
- [ ] 60秒后游戏结束
- [ ] 分数能保存到排行榜
- [ ] 音效能正常播放
- [ ] 粒子效果正常显示
- [ ] 分数飘字正常显示
- [ ] 时间警告正常显示
- [ ] 能重新开始游戏
- [ ] 能返回主菜单

### 16.2 性能测试

#### 使用 Godot Profiler
1. 点击菜单：**调试 > 性能分析器**
2. 运行游戏
3. 观察性能数据
4. 优化瓶颈

### 16.3 常见问题及修复

#### 问题1：地鼠不出现
- 检查地洞是否正确连接信号
- 检查地鼠场景是否正确加载
- 检查生成计时器是否正常工作

#### 问题2：点击无反应
- 检查碰撞形状是否正确设置
- 检查输入事件是否正确连接
- 检查地鼠是否被击中状态

#### 问题3：音效不播放
- 检查音效文件是否正确导入
- 检查音效路径是否正确
- 检查音量设置

---

## 第十七章：导出发布

### 17.1 配置导出预设

#### 添加 Windows 导出预设
1. 点击菜单：**项目 > 导出**
2. 点击 "添加" 按钮
3. 选择 **Windows Desktop**
4. 设置导出参数：
   - **名称**：`WhackAMole`
   - **图标**：选择图标文件（可选）
   - **启动画面**：选择启动画面（可选）

### 17.2 导出游戏

#### 导出步骤
1. 点击菜单：**项目 > 导出**
2. 选择 **Windows Desktop**
3. 点击 "导出项目"
4. 选择导出路径
5. 点击 "保存"
6. 等待导出完成

### 17.3 打包说明

#### 打包内容
- 可执行文件：`WhackAMole.exe`
- 游戏数据：`WhackAMole.pck`
- 依赖文件：（Godot 自动处理）

#### 分发说明
- 将整个导出文件夹压缩成 ZIP
- 用户解压后直接运行 `WhackAMole.exe`
- 无需安装 Godot

---

## 第十八章：进阶扩展

### 18.1 移动端适配

#### 添加触摸支持
```csharp
// 在 Hole.cs 中添加触摸检测
private void OnInputEvent(Node viewport, InputEvent @event, long shapeIdx)
{
    // 鼠标点击
    if (@event is InputEventMouseButton mouseEvent && mouseEvent.Pressed)
    {
        if (_hasMole && _currentMole != null)
        {
            _currentMole.OnHit();
        }
    }

    // 触摸点击
    if (@event is InputEventScreenTouch touchEvent && touchEvent.Pressed)
    {
        if (_hasMole && _currentMole != null)
        {
            _currentMole.OnHit();
        }
    }
}
```

### 18.2 添加成就系统

#### 创建成就管理器
```csharp
using Godot;
using System.Collections.Generic;

namespace WhackAMole
{
    /// <summary>
    /// 成就
    /// </summary>
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

    /// <summary>
    /// 成就管理器
    /// </summary>
    public partial class AchievementManager : Node
    {
        #region 单例

        public static AchievementManager Instance { get; private set; }

        #endregion

        #region 私有变量

        private Dictionary<string, Achievement> _achievements;

        #endregion

        #region Godot 生命周期方法

        public override void _Ready()
        {
            Instance = this;
            _achievements = new Dictionary<string, Achievement>();

            // 初始化成就
            InitializeAchievements();
        }

        #endregion

        #region 公共方法

        /// <summary>
        /// 解锁成就
        /// </summary>
        public void UnlockAchievement(string achievementId)
        {
            if (_achievements.ContainsKey(achievementId))
            {
                Achievement achievement = _achievements[achievementId];
                if (!achievement.Unlocked)
                {
                    achievement.Unlocked = true;
                    GD.Print($"解锁成就：{achievement.Name}");
                }
            }
        }

        #endregion

        #region 私有方法

        /// <summary>
        /// 初始化成就
        /// </summary>
        private void InitializeAchievements()
        {
            _achievements.Add("first_hit", new Achievement("first_hit", "初次击中", "第一次击中地鼠"));
            _achievements.Add("combo_3", new Achievement("combo_3", "连击大师", "达成3连击"));
            _achievements.Add("combo_5", new Achievement("combo_5", "连击王者", "达成5连击"));
            _achievements.Add("score_100", new Achievement("score_100", "百分达人", "单局得分超过100"));
            _achievements.Add("score_500", new Achievement("score_500", "五百分俱乐部", "单局得分超过500"));
            _achievements.Add("gold_mole", new Achievement("gold_mole", "寻宝猎人", "击中金地鼠"));
        }

        #endregion
    }
}
```

### 18.3 在线排行榜思路

#### 使用 Firebase
1. 创建 Firebase 项目
2. 添加 Firebase Realtime Database
3. 在 Godot 中集成 Firebase SDK
4. 实现数据同步

#### 使用自定义服务器
1. 搭建简单的 HTTP API
2. 使用 Node.js + Express
3. 实现 CRUD 操作
4. 在 Godot 中使用 HTTPRequest 节点

---

## 🎉 恭喜！

你已经完成了整个《打地鼠》游戏的开发！

### 你学会了什么？

✅ Godot 4.x 基础操作  
✅ C# 编程基础  
✅ 2D 游戏开发  
✅ 场景管理和节点系统  
✅ 信号系统  
✅ 计时器系统  
✅ 碰撞检测  
✅ UI 系统  
✅ 音效系统  
✅ 粒子系统  
✅ 本地数据存储  
✅ 性能优化  
✅ 游戏导出  

### 下一步做什么？

1. **完善游戏**
   - 添加更多地鼠类型
   - 添加更多音效
   - 优化视觉效果

2. **学习更多**
   - 学习 Unity 开发
   - 学习 C# 进阶
   - 学习游戏设计

3. **发布游戏**
   - 发布到 Steam
   - 发布到 itch.io
   - 分享给朋友

4. **继续开发**
   - 开发新游戏
   - 参与游戏开发社区
   - 分享你的作品

### 资源推荐

- **Godot 官方文档**：https://docs.godotengine.org/
- **Godot 社区**：https://godotengine.org/community
- **C# 教程**：https://docs.microsoft.com/zh-cn/dotnet/csharp/
- **游戏开发教程**：https://www.youtube.com/c/GodotEngine

---

**祝你游戏开发之路顺利！🎮✨**