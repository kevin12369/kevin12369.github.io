import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as n,e as a,d as s,o as l}from"./app-ry7nqkQQ.js";const r={};function v(t,i){return l(),d("div",null,[i[0]||(i[0]=n("blockquote",null,[n("p",null,"二维数组是处理矩阵、图像等二维数据的核心数据结构")],-1)),a(" more "),i[1]||(i[1]=s(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>二维数组是一种特殊的数组结构，它将每个元素变成了一维数组，本质上仍然是连续存储的。二维数组广泛应用于：</p><ul><li><strong>矩阵运算</strong>：线性代数、图像处理</li><li><strong>游戏开发</strong>：地图、棋盘</li><li><strong>数据可视化</strong>：表格、图表</li><li><strong>机器学习</strong>：特征矩阵、图像数据</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>二维数组的内存模型</li><li>矩阵操作的核心技巧</li><li>2025年高频面试题</li><li>高级遍历技巧</li></ol><h2 id="二维数组的本质" tabindex="-1"><a class="header-anchor" href="#二维数组的本质" aria-hidden="true">#</a> 二维数组的本质</h2><h3 id="内存布局" tabindex="-1"><a class="header-anchor" href="#内存布局" aria-hidden="true">#</a> 内存布局</h3><p>二维数组在内存中仍然是<strong>连续存储</strong>的，只是逻辑上分为多行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>二维数组: [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12]]

内存布局（行优先）:
地址: 1000 1004 1008 1012 1016 1020 1024 1028 1032 1036 1040 1044
值:   [1]  [2]  [3]  [4]  [5]  [6]  [7]  [8]  [9]  [10] [11] [12]
索引: [0,0][0,1][0,2][0,3][1,0][1,1][1,2][1,3][2,0][2,1][2,2][2,3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关键点</strong>：</p><ul><li>物理上是一维连续存储</li><li>逻辑上是二维结构</li><li>通过行优先或列优先方式映射</li></ul><h3 id="访问原理" tabindex="-1"><a class="header-anchor" href="#访问原理" aria-hidden="true">#</a> 访问原理</h3><p>访问<code>matrix[i][j]</code>的步骤：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 行优先存储（大多数语言）
def access(matrix, i, j):
    row_size = len(matrix[0])  # 每行元素个数
    element_size = 4  # 假设每个元素4字节
    base_address = get_base_address(matrix)
    
    # 计算偏移量
    offset = (i * row_size + j) * element_size
    target_address = base_address + offset
    
    return read_memory(target_address)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>时间复杂度</strong>：O(1)</p><h2 id="二维数组的基本操作" tabindex="-1"><a class="header-anchor" href="#二维数组的基本操作" aria-hidden="true">#</a> 二维数组的基本操作</h2><h3 id="_1-初始化" tabindex="-1"><a class="header-anchor" href="#_1-初始化" aria-hidden="true">#</a> 1. 初始化</h3><p><strong>方法1：直接初始化</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 3x4矩阵
matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：使用列表推导式</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 3x4全零矩阵
matrix = [[0 for _ in range(4)] for _ in range(3)]

# 3x4单位矩阵
n = 3
identity = [[1 if i == j else 0 for j in range(n)] for i in range(n)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法3：使用NumPy</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>import numpy as np

# 3x4全零矩阵
matrix = np.zeros((3, 4))

# 3x3随机矩阵
matrix = np.random.rand(3, 3)

# 3x3单位矩阵
identity = np.eye(3)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-遍历" tabindex="-1"><a class="header-anchor" href="#_2-遍历" aria-hidden="true">#</a> 2. 遍历</h3><p><strong>方法1：行优先遍历</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>for i in range(len(matrix)):
    for j in range(len(matrix[0])):
        print(matrix[i][j])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法2：列优先遍历</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>for j in range(len(matrix[0])):
    for i in range(len(matrix)):
        print(matrix[i][j])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>方法3：对角线遍历</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n = len(matrix)
for i in range(n):
    print(matrix[i][i])  # 主对角线

for i in range(n):
    print(matrix[i][n - 1 - i])  # 副对角线
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-矩阵操作" tabindex="-1"><a class="header-anchor" href="#_3-矩阵操作" aria-hidden="true">#</a> 3. 矩阵操作</h3><h4 id="矩阵加法" tabindex="-1"><a class="header-anchor" href="#矩阵加法" aria-hidden="true">#</a> 矩阵加法</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def matrix_add(A, B):
    n, m = len(A), len(A[0])
    result = [[0 for _ in range(m)] for _ in range(n)]
    
    for i in range(n):
        for j in range(m):
            result[i][j] = A[i][j] + B[i][j]
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="矩阵转置" tabindex="-1"><a class="header-anchor" href="#矩阵转置" aria-hidden="true">#</a> 矩阵转置</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def transpose(matrix):
    n, m = len(matrix), len(matrix[0])
    result = [[0 for _ in range(n)] for _ in range(m)]
    
    for i in range(n):
        for j in range(m):
            result[j][i] = matrix[i][j]
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="矩阵乘法" tabindex="-1"><a class="header-anchor" href="#矩阵乘法" aria-hidden="true">#</a> 矩阵乘法</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def matrix_multiply(A, B):
    n, m, p = len(A), len(A[0]), len(B[0])
    result = [[0 for _ in range(p)] for _ in range(n)]
    
    for i in range(n):
        for j in range(p):
            for k in range(m):
                result[i][j] += A[i][k] * B[k][j]
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-旋转矩阵" tabindex="-1"><a class="header-anchor" href="#题目1-旋转矩阵" aria-hidden="true">#</a> 题目1：旋转矩阵</h3><p><strong>题目描述</strong>： 给你一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：转置 + 翻转</strong></p><ol><li>转置矩阵：行列互换</li><li>水平翻转：每行左右对称交换</li></ol><p><strong>步骤</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始矩阵:
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]

步骤1：转置
[1, 4, 7]
[2, 5, 8]
[3, 6, 9]

步骤2：水平翻转
[7, 4, 1]
[8, 5, 2]
[9, 6, 3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def rotate(matrix):
    n = len(matrix)
    
    # 转置
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    
    # 水平翻转
    for i in range(n):
        for j in range(n // 2):
            matrix[i][j], matrix[i][n - 1 - j] = matrix[i][n - 1 - j], matrix[i][j]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function rotate(matrix) {
    const n = matrix.length;
    
    // 转置
    for (let i = 0; i &lt; n; i++) {
        for (let j = i; j &lt; n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 水平翻转
    for (let i = 0; i &lt; n; i++) {
        for (let j = 0; j &lt; n / 2; j++) {
            [matrix[i][j], matrix[i][n - 1 - j]] = [matrix[i][n - 1 - j], matrix[i][j]];
        }
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n²) - 转置O(n²) + 翻转O(n²)</li><li><strong>空间复杂度</strong>：O(1) - 原地修改</li></ul><h3 id="题目2-零矩阵" tabindex="-1"><a class="header-anchor" href="#题目2-零矩阵" aria-hidden="true">#</a> 题目2：零矩阵</h3><p><strong>题目描述</strong>： 编写一种算法，若 M × N 矩阵中某个元素为 0，则将其所在的行与列清零。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：
[
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1]
]
输出：
[
  [1, 0, 1],
  [0, 0, 0],
  [1, 0, 1]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：使用集合记录</strong></p><ol><li>遍历矩阵，记录所有0所在的行和列</li><li>根据记录的行和列，将对应位置置0</li></ol><p><strong>方法2：原地标记（优化空间）</strong></p><ol><li>使用第一行和第一列作为标记</li><li>额外两个变量记录第一行和第一列是否有0</li></ol><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python（方法1）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    rows, cols = set(), set()
    
    # 记录0的位置
    for i in range(m):
        for j in range(n):
            if matrix[i][j] == 0:
                rows.add(i)
                cols.add(j)
    
    # 置零行
    for i in rows:
        for j in range(n):
            matrix[i][j] = 0
    
    # 置零列
    for j in cols:
        for i in range(m):
            matrix[i][j] = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Python（方法2：原地标记）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def setZeroes(matrix):
    m, n = len(matrix), len(matrix[0])
    first_row_zero = any(matrix[0][j] == 0 for j in range(n))
    first_col_zero = any(matrix[i][0] == 0 for i in range(m))
    
    # 使用第一行和第一列作为标记
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][j] == 0:
                matrix[i][0] = 0
                matrix[0][j] = 0
    
    # 根据标记置零
    for i in range(1, m):
        for j in range(1, n):
            if matrix[i][0] == 0 or matrix[0][j] == 0:
                matrix[i][j] = 0
    
    # 处理第一行和第一列
    if first_row_zero:
        for j in range(n):
            matrix[0][j] = 0
    
    if first_col_zero:
        for i in range(m):
            matrix[i][0] = 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><p><strong>方法1</strong>：</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(m + n)</li></ul><p><strong>方法2</strong>：</p><ul><li>时间复杂度：O(mn)</li><li>空间复杂度：O(1)</li></ul><h3 id="题目3-对角线遍历" tabindex="-1"><a class="header-anchor" href="#题目3-对角线遍历" aria-hidden="true">#</a> 题目3：对角线遍历</h3><p><strong>题目描述</strong>： 给你一个大小为 m x n 的矩阵 mat ，请以对角线遍历的顺序，用一个数组返回这个矩阵中的所有元素。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：mat = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,4,7,5,3,6,8,9]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：模拟遍历</strong></p><p>观察对角线遍历的规律：</p><ul><li>对角线索引和 i + j 为常数</li><li>方向交替：右上、左下、右上...</li></ul><p><strong>步骤</strong>：</p><ol><li>确定对角线数量：m + n - 1</li><li>遍历每条对角线</li><li>根据对角线索引确定方向</li><li>收集元素</li></ol><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def findDiagonalOrder(mat):
    if not mat or not mat[0]:
        return []
    
    m, n = len(mat), len(mat[0])
    result = []
    
    for d in range(m + n - 1):
        # 确定对角线的起始点和方向
        if d % 2 == 0:
            # 从下往上
            i = min(d, m - 1)
            j = d - i
            while i &gt;= 0 and j &lt; n:
                result.append(mat[i][j])
                i -= 1
                j += 1
        else:
            # 从上往下
            j = min(d, n - 1)
            i = d - j
            while j &gt;= 0 and i &lt; m:
                result.append(mat[i][j])
                i += 1
                j -= 1
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function findDiagonalOrder(mat) {
    if (!mat || !mat[0]) return [];
    
    const m = mat.length;
    const n = mat[0].length;
    const result = [];
    
    for (let d = 0; d &lt; m + n - 1; d++) {
        if (d % 2 === 0) {
            // 从下往上
            let i = Math.min(d, m - 1);
            let j = d - i;
            while (i &gt;= 0 &amp;&amp; j &lt; n) {
                result.push(mat[i][j]);
                i--;
                j++;
            }
        } else {
            // 从上往下
            let j = Math.min(d, n - 1);
            let i = d - j;
            while (j &gt;= 0 &amp;&amp; i &lt; m) {
                result.push(mat[i][j]);
                i++;
                j--;
            }
        }
    }
    
    return result;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(mn) - 每个元素访问一次</li><li><strong>空间复杂度</strong>：O(1) - 不考虑输出数组</li></ul><h2 id="高级技巧" tabindex="-1"><a class="header-anchor" href="#高级技巧" aria-hidden="true">#</a> 高级技巧</h2><h3 id="_1-螺旋矩阵" tabindex="-1"><a class="header-anchor" href="#_1-螺旋矩阵" aria-hidden="true">#</a> 1. 螺旋矩阵</h3><p><strong>题目</strong>：按螺旋顺序输出矩阵元素</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def spiralOrder(matrix):
    if not matrix:
        return []
    
    result = []
    top, bottom = 0, len(matrix) - 1
    left, right = 0, len(matrix[0]) - 1
    
    while top &lt;= bottom and left &lt;= right:
        # 从左到右
        for j in range(left, right + 1):
            result.append(matrix[top][j])
        top += 1
        
        # 从上到下
        for i in range(top, bottom + 1):
            result.append(matrix[i][right])
        right -= 1
        
        if top &lt;= bottom:
            # 从右到左
            for j in range(right, left - 1, -1):
                result.append(matrix[bottom][j])
            bottom -= 1
        
        if left &lt;= right:
            # 从下到上
            for i in range(bottom, top - 1, -1):
                result.append(matrix[i][left])
            left += 1
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-矩阵搜索" tabindex="-1"><a class="header-anchor" href="#_2-矩阵搜索" aria-hidden="true">#</a> 2. 矩阵搜索</h3><p><strong>题目</strong>：在每行从左到右递增、每行第一个元素大于上一行最后一个元素的矩阵中搜索目标值</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def searchMatrix(matrix, target):
    if not matrix or not matrix[0]:
        return False
    
    m, n = len(matrix), len(matrix[0])
    row, col = 0, n - 1
    
    while row &lt; m and col &gt;= 0:
        if matrix[row][col] == target:
            return True
        elif matrix[row][col] &gt; target:
            col -= 1
        else:
            row += 1
    
    return False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-动态规划矩阵" tabindex="-1"><a class="header-anchor" href="#_3-动态规划矩阵" aria-hidden="true">#</a> 3. 动态规划矩阵</h3><p><strong>示例：最大正方形</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maximalSquare(matrix):
    if not matrix:
        return 0
    
    m, n = len(matrix), len(matrix[0])
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    max_side = 0
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if matrix[i - 1][j - 1] == &#39;1&#39;:
                dp[i][j] = min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
                max_side = max(max_side, dp[i][j])
    
    return max_side * max_side
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-索引越界" tabindex="-1"><a class="header-anchor" href="#_1-索引越界" aria-hidden="true">#</a> 1. 索引越界</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未检查边界
for i in range(len(matrix)):
    for j in range(len(matrix[0])):
        if i + 1 &lt; len(matrix) and j + 1 &lt; len(matrix[0]):
            # 处理matrix[i+1][j+1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>m, n = len(matrix), len(matrix[0])
for i in range(m - 1):
    for j in range(n - 1):
        # 处理matrix[i+1][j+1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-原地修改" tabindex="-1"><a class="header-anchor" href="#_2-原地修改" aria-hidden="true">#</a> 2. 原地修改</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：原地修改导致后续操作错误
def process(matrix):
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            matrix[i][j] = modify(matrix[i][j])
            # 修改后的值可能影响后续操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def process(matrix):
    # 创建副本
    result = [row[:] for row in matrix]
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            result[i][j] = modify(matrix[i][j])
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-方向混淆" tabindex="-1"><a class="header-anchor" href="#_3-方向混淆" aria-hidden="true">#</a> 3. 方向混淆</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：混淆行和列
for i in range(len(matrix[0])):  # 应该是len(matrix)
    for j in range(len(matrix)):  # 应该是len(matrix[0])
        print(matrix[i][j])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><h3 id="_1-图像处理" tabindex="-1"><a class="header-anchor" href="#_1-图像处理" aria-hidden="true">#</a> 1. 图像处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 图像灰度化
def grayscale(image):
    height, width = len(image), len(image[0])
    result = [[0 for _ in range(width)] for _ in range(height)]
    
    for i in range(height):
        for j in range(width):
            r, g, b = image[i][j]
            gray = int(0.299 * r + 0.587 * g + 0.114 * b)
            result[i][j] = gray
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-游戏地图" tabindex="-1"><a class="header-anchor" href="#_2-游戏地图" aria-hidden="true">#</a> 2. 游戏地图</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 迷宫搜索
def solve_maze(maze, start, end):
    m, n = len(maze), len(maze[0])
    visited = [[False] * n for _ in range(m)]
    queue = [(start[0], start[1], [])]
    
    while queue:
        x, y, path = queue.pop(0)
        
        if (x, y) == end:
            return path + [(x, y)]
        
        if visited[x][y]:
            continue
        
        visited[x][y] = True
        
        for dx, dy in [(0, 1), (0, -1), (1, 0), (-1, 0)]:
            nx, ny = x + dx, y + dy
            if 0 &lt;= nx &lt; m and 0 &lt;= ny &lt; n and maze[nx][ny] == 0:
                queue.append((nx, ny, path + [(x, y)]))
    
    return None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-数据分析" tabindex="-1"><a class="header-anchor" href="#_3-数据分析" aria-hidden="true">#</a> 3. 数据分析</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 热力图生成
def heatmap(data, bins=10):
    import numpy as np
    
    # 将数据分箱
    x_bins = np.linspace(min(data[0]), max(data[0]), bins + 1)
    y_bins = np.linspace(min(data[1]), max(data[1]), bins + 1)
    
    # 创建热力图矩阵
    heatmap = np.zeros((bins, bins))
    
    for x, y in zip(data[0], data[1]):
        i = np.digitize(x, x_bins) - 1
        j = np.digitize(y, y_bins) - 1
        heatmap[j][i] += 1
    
    return heatmap
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-结合实际场景" tabindex="-1"><a class="header-anchor" href="#_1-结合实际场景" aria-hidden="true">#</a> 1. 结合实际场景</h3><p><strong>趋势</strong>：</p><ul><li>图像处理相关问题增多</li><li>游戏开发相关题目</li><li>数据分析场景</li></ul><h3 id="_2-空间优化" tabindex="-1"><a class="header-anchor" href="#_2-空间优化" aria-hidden="true">#</a> 2. 空间优化</h3><p><strong>趋势</strong>：</p><ul><li>更强调原地操作</li><li>要求O(1)空间复杂度</li><li>优化内存使用</li></ul><h3 id="_3-综合能力" tabindex="-1"><a class="header-anchor" href="#_3-综合能力" aria-hidden="true">#</a> 3. 综合能力</h3><p><strong>趋势</strong>：</p><ul><li>结合多种算法思想</li><li>动态规划 + 矩阵</li><li>搜索 + 矩阵</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>二维数组是处理二维数据的核心工具，掌握二维数组的关键在于：</p><ol><li><strong>理解内存模型</strong>：知道二维数组在内存中的实际存储方式</li><li><strong>掌握遍历技巧</strong>：行优先、列优先、对角线、螺旋等</li><li><strong>熟练矩阵操作</strong>：转置、旋转、翻转等</li><li><strong>优化空间使用</strong>：原地修改、标记技巧等</li><li><strong>结合实际应用</strong>：图像处理、游戏地图等</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解矩阵变换</li><li>练习不同遍历方式</li><li>掌握常见矩阵操作</li><li>结合实际场景练习</li></ul><p><strong>下一步</strong>：让我们继续学习链表，掌握动态数据结构的精髓。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>NumPy文档：https://numpy.org/</li><li>《剑指Offer》</li></ul>`,140))])}const c=e(r,[["render",v],["__file","数据结构与算法3-二维数组.html.vue"]]);export{c as default};
