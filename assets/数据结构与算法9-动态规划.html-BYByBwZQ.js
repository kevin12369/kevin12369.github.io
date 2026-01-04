import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as i,e as s,d as a,o as l}from"./app-ry7nqkQQ.js";const r={};function v(t,n){return l(),d("div",null,[n[0]||(n[0]=i("blockquote",null,[i("p",null,"动态规划是解决优化问题的利器，掌握动态规划能让你解决许多看似困难的问题")],-1)),s(" more "),n[1]||(n[1]=a(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>动态规划（Dynamic Programming，简称DP）是一种通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。</p><p><strong>核心应用</strong>：</p><ul><li><strong>最优化问题</strong>：背包问题、最短路径</li><li><strong>计数问题</strong>：路径计数、组合计数</li><li><strong>判定问题</strong>：字符串匹配、子序列问题</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>动态规划的核心思想</li><li>动态规划的解题步骤</li><li>经典动态规划问题</li><li>2025年高频面试题</li></ol><h2 id="动态规划基础" tabindex="-1"><a class="header-anchor" href="#动态规划基础" aria-hidden="true">#</a> 动态规划基础</h2><h3 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h3><p><strong>定义</strong>：动态规划通过保存子问题的解，避免重复计算，从而提高效率。</p><p><strong>关键特征</strong>：</p><ol><li><strong>最优子结构</strong>：问题的最优解包含子问题的最优解</li><li><strong>重叠子问题</strong>：子问题被多次计算</li><li><strong>无后效性</strong>：一旦某个状态确定，就不受之后决策的影响</li></ol><h3 id="与其他算法的区别" tabindex="-1"><a class="header-anchor" href="#与其他算法的区别" aria-hidden="true">#</a> 与其他算法的区别</h3><table><thead><tr><th>算法</th><th>特点</th><th>时间复杂度</th><th>典型问题</th></tr></thead><tbody><tr><td>分治法</td><td>子问题独立</td><td>O(n log n)</td><td>归并排序、快速排序</td></tr><tr><td>贪心算法</td><td>局部最优</td><td>O(n log n)</td><td>活动选择、哈夫曼编码</td></tr><tr><td>动态规划</td><td>子问题重叠</td><td>O(n²)或O(n³)</td><td>背包问题、最长公共子序列</td></tr></tbody></table><h3 id="动态规划-vs-递归" tabindex="-1"><a class="header-anchor" href="#动态规划-vs-递归" aria-hidden="true">#</a> 动态规划 vs 递归</h3><p><strong>递归（带备忘录）</strong>：自顶向下，从大问题分解到小问题 <strong>动态规划</strong>：自底向上，从小问题逐步构建大问题</p><p><strong>示例：斐波那契数列</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 递归（无优化）- 时间复杂度O(2^n）
def fib(n):
    if n &lt;= 1:
        return n
    return fib(n - 1) + fib(n - 2)

# 递归（带备忘录）- 时间复杂度O(n)
def fib_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n &lt;= 1:
        return n
    memo[n] = fib_memo(n - 1, memo) + fib_memo(n - 2, memo)
    return memo[n]

# 动态规划 - 时间复杂度O(n)
def fib_dp(n):
    if n &lt;= 1:
        return n
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]

# 动态规划（空间优化）- 时间复杂度O(n)，空间复杂度O(1)
def fib_optimized(n):
    if n &lt;= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态规划解题步骤" tabindex="-1"><a class="header-anchor" href="#动态规划解题步骤" aria-hidden="true">#</a> 动态规划解题步骤</h2><h3 id="四步法" tabindex="-1"><a class="header-anchor" href="#四步法" aria-hidden="true">#</a> 四步法</h3><h4 id="_1-定义状态" tabindex="-1"><a class="header-anchor" href="#_1-定义状态" aria-hidden="true">#</a> 1. 定义状态</h4><p>明确dp数组的含义，dp[i]表示什么。</p><p><strong>示例</strong>：爬楼梯问题</p><ul><li>状态定义：dp[i]表示爬到第i层的方法数</li></ul><h4 id="_2-状态转移方程" tabindex="-1"><a class="header-anchor" href="#_2-状态转移方程" aria-hidden="true">#</a> 2. 状态转移方程</h4><p>找出dp[i]与dp[i-1]、dp[i-2]等的关系。</p><p><strong>示例</strong>：爬楼梯问题</p><ul><li>状态转移：dp[i] = dp[i-1] + dp[i-2]</li><li>含义：到第i层可以从第i-1层爬1步，或从第i-2层爬2步</li></ul><h4 id="_3-初始化" tabindex="-1"><a class="header-anchor" href="#_3-初始化" aria-hidden="true">#</a> 3. 初始化</h4><p>确定初始条件和边界情况。</p><p><strong>示例</strong>：爬楼梯问题</p><ul><li>dp[0] = 1（第0层有1种方法：不爬）</li><li>dp[1] = 1（第1层有1种方法：爬1步）</li></ul><h4 id="_4-计算顺序" tabindex="-1"><a class="header-anchor" href="#_4-计算顺序" aria-hidden="true">#</a> 4. 计算顺序</h4><p>确定是自底向上还是自顶向下计算。</p><p><strong>示例</strong>：爬楼梯问题</p><ul><li>从dp[2]开始，依次计算到dp[n]</li></ul><h3 id="完整示例-爬楼梯问题" tabindex="-1"><a class="header-anchor" href="#完整示例-爬楼梯问题" aria-hidden="true">#</a> 完整示例：爬楼梯问题</h3><p><strong>题目</strong>：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def climbStairs(n):
    if n &lt;= 2:
        return n
    
    # 1. 定义状态
    dp = [0] * (n + 1)
    
    # 3. 初始化
    dp[0] = 1
    dp[1] = 1
    
    # 4. 计算顺序（自底向上）
    for i in range(2, n + 1):
        # 2. 状态转移方程
        dp[i] = dp[i - 1] + dp[i - 2]
    
    return dp[n]

# 空间优化版本
def climbStairs_optimized(n):
    if n &lt;= 2:
        return n
    
    a, b = 1, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    
    return b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="经典动态规划问题" tabindex="-1"><a class="header-anchor" href="#经典动态规划问题" aria-hidden="true">#</a> 经典动态规划问题</h2><h3 id="_1-背包问题" tabindex="-1"><a class="header-anchor" href="#_1-背包问题" aria-hidden="true">#</a> 1. 背包问题</h3><h4 id="_0-1背包问题" tabindex="-1"><a class="header-anchor" href="#_0-1背包问题" aria-hidden="true">#</a> 0-1背包问题</h4><p><strong>题目</strong>：给定n个物品，每个物品有重量和价值，背包容量为W，求能装入的最大价值。</p><p><strong>状态定义</strong>：dp[i][w]表示前i个物品，容量为w时的最大价值</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i][w] = max(dp[i-1][w], dp[i-1][w-weight[i]] + value[i])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def knapsack_01(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            # 不选第i个物品
            dp[i][w] = dp[i - 1][w]
            
            # 选第i个物品（如果可以）
            if w &gt;= weights[i - 1]:
                dp[i][w] = max(dp[i][w], 
                              dp[i - 1][w - weights[i - 1]] + values[i - 1])
    
    return dp[n][W]

# 空间优化版本
def knapsack_01_optimized(weights, values, W):
    n = len(weights)
    dp = [0] * (W + 1)
    
    for i in range(n):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="完全背包问题" tabindex="-1"><a class="header-anchor" href="#完全背包问题" aria-hidden="true">#</a> 完全背包问题</h4><p><strong>题目</strong>：每个物品可以选取多次。</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i][w] = max(dp[i-1][w], dp[i][w-weight[i]] + value[i])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def knapsack_complete(weights, values, W):
    n = len(weights)
    dp = [0] * (W + 1)
    
    for i in range(n):
        for w in range(weights[i], W + 1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    
    return dp[W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-最长公共子序列-lcs" tabindex="-1"><a class="header-anchor" href="#_2-最长公共子序列-lcs" aria-hidden="true">#</a> 2. 最长公共子序列（LCS）</h3><p><strong>题目</strong>：给定两个字符串text1和text2，返回它们的最长公共子序列的长度。</p><p><strong>状态定义</strong>：dp[i][j]表示text1的前i个字符和text2的前j个字符的最长公共子序列长度</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果text1[i-1] == text2[j-1]:
    dp[i][j] = dp[i-1][j-1] + 1
否则:
    dp[i][j] = max(dp[i-1][j], dp[i][j-1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def longestCommonSubsequence(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m][n]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-最长递增子序列-lis" tabindex="-1"><a class="header-anchor" href="#_3-最长递增子序列-lis" aria-hidden="true">#</a> 3. 最长递增子序列（LIS）</h3><p><strong>题目</strong>：给定一个整数数组nums，找到其中最长严格递增子序列的长度。</p><p><strong>状态定义</strong>：dp[i]表示以nums[i]结尾的最长递增子序列长度</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i] = max(dp[j] + 1) for j &lt; i and nums[j] &lt; nums[i]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def lengthOfLIS(nums):
    if not nums:
        return 0
    
    n = len(nums)
    dp = [1] * n
    
    for i in range(1, n):
        for j in range(i):
            if nums[j] &lt; nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    
    return max(dp)

# 优化版本：二分查找 - O(n log n)
def lengthOfLIS_optimized(nums):
    if not nums:
        return 0
    
    tails = []
    
    for num in nums:
        # 二分查找
        left, right = 0, len(tails)
        while left &lt; right:
            mid = (left + right) // 2
            if tails[mid] &lt; num:
                left = mid + 1
            else:
                right = mid
        
        if left == len(tails):
            tails.append(num)
        else:
            tails[left] = num
    
    return len(tails)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-编辑距离" tabindex="-1"><a class="header-anchor" href="#_4-编辑距离" aria-hidden="true">#</a> 4. 编辑距离</h3><p><strong>题目</strong>：给定两个单词word1和word2，计算出将word1转换成word2所使用的最少操作数。</p><p><strong>操作</strong>：插入、删除、替换</p><p><strong>状态定义</strong>：dp[i][j]表示word1的前i个字符转换成word2的前j个字符的最少操作数</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>如果word1[i-1] == word2[j-1]:
    dp[i][j] = dp[i-1][j-1]
否则:
    dp[i][j] = min(dp[i-1][j] + 1,      # 删除
                  dp[i][j-1] + 1,      # 插入
                  dp[i-1][j-1] + 1)    # 替换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def minDistance(word1, word2):
    m, n = len(word1), len(word2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # 初始化
    for i in range(m + 1):
        dp[i][0] = i
    for j in range(n + 1):
        dp[0][j] = j
    
    # 填充dp表
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if word1[i - 1] == word2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1]
            else:
                dp[i][j] = min(dp[i - 1][j] + 1,      # 删除
                              dp[i][j - 1] + 1,      # 插入
                              dp[i - 1][j - 1] + 1)    # 替换
    
    return dp[m][n]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-零钱兑换" tabindex="-1"><a class="header-anchor" href="#_5-零钱兑换" aria-hidden="true">#</a> 5. 零钱兑换</h3><p><strong>题目</strong>：给定不同面额的硬币和一个总金额，计算可以凑成总金额所需的硬币的最少个数。</p><p><strong>状态定义</strong>：dp[i]表示凑成金额i所需的最少硬币数</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i] = min(dp[i - coin] + 1) for coin in coins if coin &lt;= i
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def coinChange(coins, amount):
    if amount == 0:
        return 0
    
    # 初始化为amount + 1（表示不可能）
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    
    for i in range(1, amount + 1):
        for coin in coins:
            if coin &lt;= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    
    return dp[amount] if dp[amount] != amount + 1 else -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-不同路径" tabindex="-1"><a class="header-anchor" href="#题目1-不同路径" aria-hidden="true">#</a> 题目1：不同路径</h3><p><strong>题目描述</strong>： 一个机器人位于一个 m x n 网格的左上角，机器人每次只能向下或向右移动一步。机器人试图达到网格的右下角，问总共有多少条不同的路径？</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：m = 3, n = 7
输出：28
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：动态规划</strong></p><p><strong>状态定义</strong>：dp[i][j]表示到达位置(i, j)的路径数</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i][j] = dp[i-1][j] + dp[i][j-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def uniquePaths(m, n):
    # 初始化第一行和第一列
    dp = [[1] * n for _ in range(m)]
    
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    
    return dp[m - 1][n - 1]

# 空间优化版本
def uniquePaths_optimized(m, n):
    dp = [1] * n
    
    for i in range(1, m):
        for j in range(1, n):
            dp[j] += dp[j - 1]
    
    return dp[n - 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(m * n)</li><li><strong>空间复杂度</strong>：O(n) - 优化后</li></ul><h3 id="题目2-最小路径和" tabindex="-1"><a class="header-anchor" href="#题目2-最小路径和" aria-hidden="true">#</a> 题目2：最小路径和</h3><p><strong>题目描述</strong>： 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。每次只能向下或向右移动一步。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：路径 1→3→1→1→1 的总和最小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：动态规划</strong></p><p><strong>状态定义</strong>：dp[i][j]表示到达位置(i, j)的最小路径和</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def minPathSum(grid):
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    
    # 初始化
    dp[0][0] = grid[0][0]
    for i in range(1, m):
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    for j in range(1, n):
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    
    # 填充dp表
    for i in range(1, m):
        for j in range(1, n):
            dp[i][j] = grid[i][j] + min(dp[i - 1][j], dp[i][j - 1])
    
    return dp[m - 1][n - 1]

# 空间优化版本
def minPathSum_optimized(grid):
    m, n = len(grid), len(grid[0])
    dp = [0] * n
    
    dp[0] = grid[0][0]
    for j in range(1, n):
        dp[j] = dp[j - 1] + grid[0][j]
    
    for i in range(1, m):
        dp[0] += grid[i][0]
        for j in range(1, n):
            dp[j] = grid[i][j] + min(dp[j], dp[j - 1])
    
    return dp[n - 1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(m * n)</li><li><strong>空间复杂度</strong>：O(n) - 优化后</li></ul><h3 id="题目3-打家劫舍" tabindex="-1"><a class="header-anchor" href="#题目3-打家劫舍" aria-hidden="true">#</a> 题目3：打家劫舍</h3><p><strong>题目描述</strong>： 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。给定一个代表每个房屋存放金额的非负整数数组，计算你不触动警报装置的情况下，一夜之内能够偷窃到的最高金额。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：[2,7,9,3,1]
输出：12
解释：偷窃第1、3、5号房屋，金额为2+9+1=12。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：动态规划</strong></p><p><strong>状态定义</strong>：dp[i]表示前i个房屋能偷窃到的最高金额</p><p><strong>状态转移</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[i] = max(dp[i-1], dp[i-2] + nums[i-1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def rob(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    dp = [0] * len(nums)
    dp[0] = nums[0]
    dp[1] = max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        dp[i] = max(dp[i - 1], dp[i - 2] + nums[i])
    
    return dp[-1]

# 空间优化版本
def rob_optimized(nums):
    if not nums:
        return 0
    if len(nums) == 1:
        return nums[0]
    
    prev2, prev1 = nums[0], max(nums[0], nums[1])
    
    for i in range(2, len(nums)):
        current = max(prev1, prev2 + nums[i])
        prev2, prev1 = prev1, current
    
    return prev1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n)</li><li><strong>空间复杂度</strong>：O(1) - 优化后</li></ul><h2 id="动态规划优化技巧" tabindex="-1"><a class="header-anchor" href="#动态规划优化技巧" aria-hidden="true">#</a> 动态规划优化技巧</h2><h3 id="_1-空间优化" tabindex="-1"><a class="header-anchor" href="#_1-空间优化" aria-hidden="true">#</a> 1. 空间优化</h3><p><strong>原理</strong>：如果dp[i]只依赖于dp[i-1]和dp[i-2]，可以用滚动数组优化。</p><p><strong>示例</strong>：斐波那契数列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 未优化
def fib(n):
    dp = [0, 1]
    for i in range(2, n + 1):
        dp.append(dp[i - 1] + dp[i - 2])
    return dp[n]

# 优化后
def fib_optimized(n):
    if n &lt;= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-状态压缩" tabindex="-1"><a class="header-anchor" href="#_2-状态压缩" aria-hidden="true">#</a> 2. 状态压缩</h3><p><strong>原理</strong>：将二维dp数组压缩为一维数组。</p><p><strong>示例</strong>：0-1背包问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 未优化
def knapsack(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if w &gt;= weights[i - 1]:
                dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1])
    return dp[n][W]

# 优化后
def knapsack_optimized(weights, values, W):
    n = len(weights)
    dp = [0] * (W + 1)
    for i in range(n):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    return dp[W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-路径记录" tabindex="-1"><a class="header-anchor" href="#_3-路径记录" aria-hidden="true">#</a> 3. 路径记录</h3><p><strong>原理</strong>：不仅记录最优值，还记录路径。</p><p><strong>示例</strong>：最长公共子序列</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def lcs_with_path(text1, text2):
    m, n = len(text1), len(text2)
    dp = [[0] * (n + 1) for _ in range(m + 1)]
    
    # 填充dp表
    for i in range(1, m + 1):
        for j in range(1, n + 1):
            if text1[i - 1] == text2[j - 1]:
                dp[i][j] = dp[i - 1][j - 1] + 1
            else:
                dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])
    
    # 回溯路径
    i, j = m, n
    lcs = []
    while i &gt; 0 and j &gt; 0:
        if text1[i - 1] == text2[j - 1]:
            lcs.append(text1[i - 1])
            i -= 1
            j -= 1
        elif dp[i - 1][j] &gt; dp[i][j - 1]:
            i -= 1
        else:
            j -= 1
    
    return &#39;&#39;.join(reversed(lcs))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-状态定义错误" tabindex="-1"><a class="header-anchor" href="#_1-状态定义错误" aria-hidden="true">#</a> 1. 状态定义错误</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：状态定义不清晰
def longestIncreasingSubsequence(nums):
    dp = [0] * len(nums)  # dp[i]的含义不明确
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def longestIncreasingSubsequence(nums):
    dp = [1] * len(nums)  # dp[i]表示以nums[i]结尾的最长递增子序列长度
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-初始化错误" tabindex="-1"><a class="header-anchor" href="#_2-初始化错误" aria-hidden="true">#</a> 2. 初始化错误</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：初始化不正确
def minPathSum(grid):
    dp = [[0] * n for _ in range(m)]  # 未初始化第一行和第一列
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def minPathSum(grid):
    m, n = len(grid), len(grid[0])
    dp = [[0] * n for _ in range(m)]
    dp[0][0] = grid[0][0]
    # 初始化第一行
    for j in range(1, n):
        dp[0][j] = dp[0][j - 1] + grid[0][j]
    # 初始化第一列
    for i in range(1, m):
        dp[i][0] = dp[i - 1][0] + grid[i][0]
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-边界条件处理" tabindex="-1"><a class="header-anchor" href="#_3-边界条件处理" aria-hidden="true">#</a> 3. 边界条件处理</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未处理边界条件
def knapsack(weights, values, W):
    dp = [0] * (W + 1)
    for i in range(len(weights)):
        for w in range(W + 1):  # 应该从weights[i]开始
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def knapsack(weights, values, W):
    dp = [0] * (W + 1)
    for i in range(len(weights)):
        for w in range(W, weights[i] - 1, -1):
            dp[w] = max(dp[w], dp[w - weights[i]] + values[i])
    # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>DP + 贪心</li><li>DP + BFS/DFS</li><li>DP + 二分查找</li></ul><h3 id="_2-实际场景" tabindex="-1"><a class="header-anchor" href="#_2-实际场景" aria-hidden="true">#</a> 2. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>资源分配</li><li>任务调度</li><li>路径规划</li></ul><h3 id="_3-优化技巧" tabindex="-1"><a class="header-anchor" href="#_3-优化技巧" aria-hidden="true">#</a> 3. 优化技巧</h3><p><strong>趋势</strong>：</p><ul><li>空间优化</li><li>状态压缩</li><li>路径记录</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>动态规划是解决优化问题的利器，掌握动态规划的关键在于：</p><ol><li><strong>理解核心思想</strong>：最优子结构、重叠子问题、无后效性</li><li><strong>掌握解题步骤</strong>：定义状态、状态转移、初始化、计算顺序</li><li><strong>熟练经典问题</strong>：背包、LCS、LIS、编辑距离等</li><li><strong>注意优化技巧</strong>：空间优化、状态压缩、路径记录</li><li><strong>处理边界条件</strong>：正确初始化和处理边界情况</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解状态转移</li><li>练习经典DP问题</li><li>掌握优化技巧</li><li>注意时间复杂度分析</li></ul><p><strong>下一步</strong>：让我们继续学习贪心算法，掌握局部最优策略的应用。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《算法导论》</li><li>《算法竞赛入门经典》</li></ul>`,174))])}const m=e(r,[["render",v],["__file","数据结构与算法9-动态规划.html.vue"]]);export{m as default};
