import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as n,e as d,d as r,o as a}from"./app-ry7nqkQQ.js";const l={};function t(v,i){return a(),s("div",null,[i[0]||(i[0]=n("blockquote",null,[n("p",null,"贪心算法通过局部最优选择来寻找全局最优解，简单高效但适用范围有限")],-1)),d(" more "),i[1]||(i[1]=r(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>贪心算法是一种在每一步选择中都采取当前状态下最优（或最有利）的选择，从而希望导致结果是全局最优的算法。</p><p><strong>核心应用</strong>：</p><ul><li><strong>活动选择</strong>：会议室调度</li><li><strong>最短路径</strong>：Dijkstra算法</li><li><strong>最小生成树</strong>：Prim算法、Kruskal算法</li><li><strong>哈夫曼编码</strong>：数据压缩</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>贪心算法的核心思想</li><li>贪心算法的适用条件</li><li>经典贪心问题</li><li>2025年高频面试题</li></ol><h2 id="贪心算法基础" tabindex="-1"><a class="header-anchor" href="#贪心算法基础" aria-hidden="true">#</a> 贪心算法基础</h2><h3 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h3><p><strong>定义</strong>：贪心算法在对问题求解时，总是做出在当前看来是最好的选择。也就是说，不从整体最优上加以考虑，它所做出的仅仅是在某种意义上的局部最优解。</p><p><strong>关键特征</strong>：</p><ol><li><strong>贪心选择性质</strong>：每一步都做出当前最优选择</li><li><strong>最优子结构</strong>：问题的最优解包含子问题的最优解</li></ol><h3 id="贪心算法-vs-动态规划" tabindex="-1"><a class="header-anchor" href="#贪心算法-vs-动态规划" aria-hidden="true">#</a> 贪心算法 vs 动态规划</h3><table><thead><tr><th>特性</th><th>贪心算法</th><th>动态规划</th></tr></thead><tbody><tr><td>决策方式</td><td>每步局部最优</td><td>考虑所有可能</td></tr><tr><td>时间复杂度</td><td>通常较低</td><td>通常较高</td></tr><tr><td>适用范围</td><td>有限</td><td>广泛</td></tr><tr><td>最优性</td><td>不一定保证</td><td>保证最优</td></tr></tbody></table><p><strong>示例：找零问题</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 贪心算法 - 不一定最优
def coin_change_greedy(amount, coins):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count

# 动态规划 - 一定最优
def coin_change_dp(amount, coins):
    dp = [amount + 1] * (amount + 1)
    dp[0] = 0
    for i in range(1, amount + 1):
        for coin in coins:
            if coin &lt;= i:
                dp[i] = min(dp[i], dp[i - coin] + 1)
    return dp[amount] if dp[amount] != amount + 1 else -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="适用条件" tabindex="-1"><a class="header-anchor" href="#适用条件" aria-hidden="true">#</a> 适用条件</h3><p>贪心算法能获得最优解的两个必要条件：</p><h4 id="_1-贪心选择性质" tabindex="-1"><a class="header-anchor" href="#_1-贪心选择性质" aria-hidden="true">#</a> 1. 贪心选择性质</h4><p><strong>定义</strong>：一个全局最优解可以通过一系列局部最优的选择来达到。</p><p><strong>示例</strong>：活动选择问题</p><ul><li>每次选择结束时间最早的活动</li><li>这样可以为后面的活动留出更多时间</li></ul><h4 id="_2-最优子结构" tabindex="-1"><a class="header-anchor" href="#_2-最优子结构" aria-hidden="true">#</a> 2. 最优子结构</h4><p><strong>定义</strong>：问题的最优解包含其子问题的最优解。</p><p><strong>示例</strong>：最短路径问题</p><ul><li>从A到B的最短路径，包含从A到B路径上某点C的最短路径</li></ul><h2 id="经典贪心问题" tabindex="-1"><a class="header-anchor" href="#经典贪心问题" aria-hidden="true">#</a> 经典贪心问题</h2><h3 id="_1-活动选择问题" tabindex="-1"><a class="header-anchor" href="#_1-活动选择问题" aria-hidden="true">#</a> 1. 活动选择问题</h3><p><strong>题目</strong>：给定n个活动，每个活动有开始时间和结束时间，求能参加的最多活动数量。</p><p><strong>贪心策略</strong>：每次选择结束时间最早的活动。</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def activity_selection(activities):
    # 按结束时间排序
    activities.sort(key=lambda x: x[1])
    
    selected = [activities[0]]
    last_end = activities[0][1]
    
    for activity in activities[1:]:
        start, end = activity
        if start &gt;= last_end:
            selected.append(activity)
            last_end = end
    
    return selected

# 示例
activities = [(1, 4), (3, 5), (0, 6), (5, 7), (3, 9), (5, 9), (6, 10), (8, 11), (8, 12), (2, 14), (12, 16)]
result = activity_selection(activities)
print(result)  # [(1, 4), (5, 7), (8, 11), (12, 16)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-分发饼干" tabindex="-1"><a class="header-anchor" href="#_2-分发饼干" aria-hidden="true">#</a> 2. 分发饼干</h3><p><strong>题目</strong>：假设你是一位很棒的家长，想要给你的孩子们分发小饼干。但是，每个孩子最多只能给一块饼干。对每个孩子 i，都有一个胃口值 g[i]，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 j，都有一个尺寸 s[j]。如果 s[j] &gt;= g[i]，我们可以将这个饼干 j 分配给孩子 i，这个孩子会得到满足。你的目标是尽可能满足越多数量的孩子，并输出这个最大数值。</p><p><strong>贪心策略</strong>：将最小的饼干分给胃口最小的孩子。</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def findContentChildren(g, s):
    g.sort()  # 孩子胃口
    s.sort()  # 饼干尺寸
    
    child = cookie = 0
    while child &lt; len(g) and cookie &lt; len(s):
        if s[cookie] &gt;= g[child]:
            child += 1
        cookie += 1
    
    return child

# 示例
g = [1, 2, 3]
s = [1, 1]
result = findContentChildren(g, s)
print(result)  # 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-无重叠区间" tabindex="-1"><a class="header-anchor" href="#_3-无重叠区间" aria-hidden="true">#</a> 3. 无重叠区间</h3><p><strong>题目</strong>：给定一个区间的集合，找到需要移除区间的最小数量，使剩余区间互不重叠。</p><p><strong>贪心策略</strong>：按结束时间排序，选择结束时间最早的区间。</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def eraseOverlapIntervals(intervals):
    if not intervals:
        return 0
    
    # 按结束时间排序
    intervals.sort(key=lambda x: x[1])
    
    count = 1
    end = intervals[0][1]
    
    for interval in intervals[1:]:
        if interval[0] &gt;= end:
            count += 1
            end = interval[1]
    
    return len(intervals) - count

# 示例
intervals = [[1,2],[2,3],[3,4],[1,3]]
result = eraseOverlapIntervals(intervals)
print(result)  # 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-跳跃游戏" tabindex="-1"><a class="header-anchor" href="#_4-跳跃游戏" aria-hidden="true">#</a> 4. 跳跃游戏</h3><p><strong>题目</strong>：给定一个非负整数数组 nums，你最初位于数组的第一个位置。数组中的每个元素代表你在该位置可以跳跃的最大长度。判断你是否能够到达最后一个位置。</p><p><strong>贪心策略</strong>：维护能够到达的最远位置。</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def canJump(nums):
    max_reach = 0
    
    for i in range(len(nums)):
        if i &gt; max_reach:
            return False
        max_reach = max(max_reach, i + nums[i])
    
    return True

# 示例
nums = [2,3,1,1,4]
result = canJump(nums)
print(result)  # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-加油站" tabindex="-1"><a class="header-anchor" href="#_5-加油站" aria-hidden="true">#</a> 5. 加油站</h3><p><strong>题目</strong>：在一条环路上有 n 个加油站，其中第 i 个加油站有汽油 gas[i] 升。你有一辆油箱容量无限的的汽车，从第 i 个加油站开往第 i+1 个加油站需要消耗汽油 cost[i] 升。你从其中的一个加油站出发，开始时油箱为空。给定两个整数数组 gas 和 cost，如果你可以绕环路行驶一周，则返回出发时加油站的编号，否则返回 -1。</p><p><strong>贪心策略</strong>：从总油量大于总消耗量的加油站出发。</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def canCompleteCircuit(gas, cost):
    total_gas = 0
    total_cost = 0
    current_gas = 0
    start = 0
    
    for i in range(len(gas)):
        total_gas += gas[i]
        total_cost += cost[i]
        current_gas += gas[i] - cost[i]
        
        if current_gas &lt; 0:
            start = i + 1
            current_gas = 0
    
    return start if total_gas &gt;= total_cost else -1

# 示例
gas = [1,2,3,4,5]
cost = [3,4,5,1,2]
result = canCompleteCircuit(gas, cost)
print(result)  # 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-买卖股票的最佳时机" tabindex="-1"><a class="header-anchor" href="#题目1-买卖股票的最佳时机" aria-hidden="true">#</a> 题目1：买卖股票的最佳时机</h3><p><strong>题目描述</strong>： 给定一个数组 prices，它的第 i 个元素 prices[i] 是一支给定股票第 i 天的价格。如果你最多只允许完成一笔交易（即买入和卖出一只股票），设计一个算法来计算你所能获取的最大利润。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：[7,1,5,3,6,4]
输出：5
解释：在第2天（价格=1）的时候买入，在第5天（价格=6）的时候卖出，最大利润 = 6-1 = 5。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：贪心算法</strong></p><p>记录最小价格，计算每天的最大利润。</p><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maxProfit(prices):
    if not prices:
        return 0
    
    min_price = prices[0]
    max_profit = 0
    
    for price in prices[1:]:
        max_profit = max(max_profit, price - min_price)
        min_price = min(min_price, price)
    
    return max_profit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n)</li><li><strong>空间复杂度</strong>：O(1)</li></ul><h3 id="题目2-买卖股票的最佳时机-ii" tabindex="-1"><a class="header-anchor" href="#题目2-买卖股票的最佳时机-ii" aria-hidden="true">#</a> 题目2：买卖股票的最佳时机 II</h3><p><strong>题目描述</strong>： 给定一个数组 prices，其中 prices[i] 是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：[7,1,5,3,6,4]
输出：7
解释：在第2天（价格=1）的时候买入，在第3天（价格=5）的时候卖出，利润 = 5-1 = 4。然后在第4天（价格=3）的时候买入，在第5天（价格=6）的时候卖出，利润 = 6-3 = 3。总利润为 4 + 3 = 7。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：贪心算法</strong></p><p>只要第二天价格比今天高，就进行交易。</p><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maxProfit(prices):
    profit = 0
    
    for i in range(1, len(prices)):
        if prices[i] &gt; prices[i - 1]:
            profit += prices[i] - prices[i - 1]
    
    return profit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n)</li><li><strong>空间复杂度</strong>：O(1)</li></ul><h3 id="题目3-柠檬水找零" tabindex="-1"><a class="header-anchor" href="#题目3-柠檬水找零" aria-hidden="true">#</a> 题目3：柠檬水找零</h3><p><strong>题目描述</strong>： 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。每位顾客只买一杯柠檬水，然后向你支付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。注意，一开始你手头没有任何零钱。给你一个整数数组 bills，其中 bills[i] 是第 i 位顾客支付的账单。如果你能给每位顾客正确找零，返回 true，否则返回 false。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：bills = [5,5,5,10,20]
输出：true
解释：
- 前3位顾客，我们按顺序收取3张5美元的钞票。
- 第4位顾客，我们收取一张10美元的钞票，并返还5美元。
- 第5位顾客，我们找还一张10美元的钞票和一张5美元的钞票。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：贪心算法</strong></p><p>优先使用大面额钞票找零。</p><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def lemonadeChange(bills):
    five = ten = 0
    
    for bill in bills:
        if bill == 5:
            five += 1
        elif bill == 10:
            five -= 1
            ten += 1
        elif bill == 20:
            if ten &gt; 0 and five &gt; 0:
                ten -= 1
                five -= 1
            elif five &gt;= 3:
                five -= 3
            else:
                return False
        
        if five &lt; 0:
            return False
    
    return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n)</li><li><strong>空间复杂度</strong>：O(1)</li></ul><h3 id="题目4-根据身高重建队列" tabindex="-1"><a class="header-anchor" href="#题目4-根据身高重建队列" aria-hidden="true">#</a> 题目4：根据身高重建队列</h3><p><strong>题目描述</strong>： 假设有打乱顺序的一群人站成一个队列，数组 people 表示队列中一些人的属性（不一定按顺序）。每个 people[i] = [hi, ki] 表示第 i 个人的身高为 hi ，前面正好有 ki 个身高大于或等于 hi 的人。请你重新构造并返回输入数组 people 所表示的队列。返回的队列应该格式化为数组 queue，其中 queue[j] = [hj, kj] 是队列中第 j 个人的属性（queue[0] 是排在队列前面的人）。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
输出：[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-3" tabindex="-1"><a class="header-anchor" href="#解题思路-3" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：贪心算法</strong></p><p>按身高降序排序，然后按ki插入到指定位置。</p><h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def reconstructQueue(people):
    # 按身高降序，如果身高相同则按ki升序
    people.sort(key=lambda x: (-x[0], x[1]))
    
    queue = []
    for person in people:
        queue.insert(person[1], person)
    
    return queue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n²) - 插入操作是O(n)</li><li><strong>空间复杂度</strong>：O(n)</li></ul><h2 id="贪心算法的局限性" tabindex="-1"><a class="header-anchor" href="#贪心算法的局限性" aria-hidden="true">#</a> 贪心算法的局限性</h2><h3 id="_1-不一定得到最优解" tabindex="-1"><a class="header-anchor" href="#_1-不一定得到最优解" aria-hidden="true">#</a> 1. 不一定得到最优解</h3><p><strong>示例</strong>：找零问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 硬币面额：1, 3, 4
# 目标金额：6

# 贪心算法
def coin_change_greedy(amount, coins):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        count += amount // coin
        amount %= coin
    return count

coins = [1, 3, 4]
print(coin_change_greedy(6, coins))  # 3个硬币：4 + 1 + 1

# 最优解：2个硬币：3 + 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-需要证明贪心选择性质" tabindex="-1"><a class="header-anchor" href="#_2-需要证明贪心选择性质" aria-hidden="true">#</a> 2. 需要证明贪心选择性质</h3><p>不是所有问题都适合用贪心算法，需要证明贪心选择性质和最优子结构。</p><h2 id="贪心算法-vs-其他算法" tabindex="-1"><a class="header-anchor" href="#贪心算法-vs-其他算法" aria-hidden="true">#</a> 贪心算法 vs 其他算法</h2><h3 id="贪心-vs-动态规划" tabindex="-1"><a class="header-anchor" href="#贪心-vs-动态规划" aria-hidden="true">#</a> 贪心 vs 动态规划</h3><p><strong>示例</strong>：背包问题</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 贪心算法 - 不一定最优
def knapsack_greedy(weights, values, W):
    # 计算价值密度
    items = [(values[i] / weights[i], weights[i], values[i]) 
             for i in range(len(weights))]
    items.sort(reverse=True, key=lambda x: x[0])
    
    total_value = 0
    remaining_weight = W
    
    for density, weight, value in items:
        if weight &lt;= remaining_weight:
            total_value += value
            remaining_weight -= weight
    
    return total_value

# 动态规划 - 一定最优
def knapsack_dp(weights, values, W):
    n = len(weights)
    dp = [[0] * (W + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(1, W + 1):
            if w &gt;= weights[i - 1]:
                dp[i][w] = max(dp[i - 1][w], 
                              dp[i - 1][w - weights[i - 1]] + values[i - 1])
    
    return dp[n][W]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-贪心策略选择错误" tabindex="-1"><a class="header-anchor" href="#_1-贪心策略选择错误" aria-hidden="true">#</a> 1. 贪心策略选择错误</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：贪心策略选择不当
def maxProfit(prices):
    # 每次都买，每次都卖
    profit = 0
    for i in range(len(prices) - 1):
        if prices[i + 1] &gt; prices[i]:
            profit += prices[i + 1] - prices[i]
    return profit  # 对于只能交易一次的情况是错误的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maxProfit(prices):
    # 只能交易一次
    if not prices:
        return 0
    
    min_price = prices[0]
    max_profit = 0
    
    for price in prices[1:]:
        max_profit = max(max_profit, price - min_price)
        min_price = min(min_price, price)
    
    return max_profit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-边界条件处理" tabindex="-1"><a class="header-anchor" href="#_2-边界条件处理" aria-hidden="true">#</a> 2. 边界条件处理</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未处理空数组
def canJump(nums):
    for i in range(len(nums)):  # nums可能为空
        # ...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def canJump(nums):
    if not nums:
        return False
    
    max_reach = 0
    for i in range(len(nums)):
        if i &gt; max_reach:
            return False
        max_reach = max(max_reach, i + nums[i])
    
    return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>贪心 + 排序</li><li>贪心 + 栈</li><li>贪心 + 哈希表</li></ul><h3 id="_2-实际场景" tabindex="-1"><a class="header-anchor" href="#_2-实际场景" aria-hidden="true">#</a> 2. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>资源调度</li><li>任务分配</li><li>路径规划</li></ul><h3 id="_3-证明技巧" tabindex="-1"><a class="header-anchor" href="#_3-证明技巧" aria-hidden="true">#</a> 3. 证明技巧</h3><p><strong>趋势</strong>：</p><ul><li>反证法</li><li>交换法</li><li>归纳法</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>贪心算法是一种简单高效的算法思想，掌握贪心算法的关键在于：</p><ol><li><strong>理解核心思想</strong>：局部最优选择</li><li><strong>掌握适用条件</strong>：贪心选择性质、最优子结构</li><li><strong>熟练经典问题</strong>：活动选择、分发饼干、跳跃游戏等</li><li><strong>注意局限性</strong>：不一定得到最优解</li><li><strong>处理边界条件</strong>：正确处理空数组、边界情况</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解贪心策略</li><li>练习经典贪心问题</li><li>掌握证明技巧</li><li>注意时间复杂度分析</li></ul><p><strong>算法系列总结</strong>：</p><p>本系列文章涵盖了数据结构与算法的核心内容：</p><ol><li><strong>前言</strong>：学习路径和方法</li><li><strong>数组</strong>：线性数据结构基础</li><li><strong>二维数组</strong>：矩阵操作</li><li><strong>链表</strong>：动态数据结构</li><li><strong>栈与队列</strong>：受限线性结构</li><li><strong>树</strong>：非线性数据结构</li><li><strong>排序算法</strong>：数据排序</li><li><strong>查找算法</strong>：数据检索</li><li><strong>动态规划</strong>：优化问题</li><li><strong>贪心算法</strong>：局部最优策略</li></ol><p>建议继续深入学习：</p><ul><li>图算法</li><li>字符串算法</li><li>高级数据结构</li></ul><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《算法导论》</li><li>《算法竞赛入门经典》</li></ul>`,144))])}const o=e(l,[["render",t],["__file","数据结构与算法10-贪心算法.html.vue"]]);export{o as default};
