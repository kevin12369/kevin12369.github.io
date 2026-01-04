import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,a as i,e as r,d as s,o as l}from"./app-ry7nqkQQ.js";const a={};function t(v,n){return l(),d("div",null,[n[0]||(n[0]=i("blockquote",null,[i("p",null,"排序算法是算法学习的基础，掌握排序算法对理解算法思想至关重要")],-1)),r(" more "),n[1]||(n[1]=s(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>排序是将一组数据按照特定顺序排列的过程，是计算机科学中最基础也是最重要的算法之一。</p><p><strong>核心应用</strong>：</p><ul><li><strong>数据处理</strong>：数据清洗、数据分析</li><li><strong>搜索优化</strong>：二分查找的前提</li><li><strong>算法基础</strong>：很多高级算法的基础步骤</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>排序算法的基本概念和评价指标</li><li>常见排序算法的原理和实现</li><li>排序算法的复杂度分析</li><li>2025年高频面试题</li></ol><h2 id="排序算法基础" tabindex="-1"><a class="header-anchor" href="#排序算法基础" aria-hidden="true">#</a> 排序算法基础</h2><h3 id="评价指标" tabindex="-1"><a class="header-anchor" href="#评价指标" aria-hidden="true">#</a> 评价指标</h3><h4 id="_1-时间复杂度" tabindex="-1"><a class="header-anchor" href="#_1-时间复杂度" aria-hidden="true">#</a> 1. 时间复杂度</h4><p>衡量排序算法执行时间随数据规模增长的变化</p><table><thead><tr><th>复杂度</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>O(n²)</td><td>平方级，数据量大时效率低</td><td>冒泡、选择、插入排序</td></tr><tr><td>O(n log n)</td><td>对数线性级，效率较高</td><td>快速、归并、堆排序</td></tr><tr><td>O(n)</td><td>线性级，效率最高</td><td>计数、桶、基数排序</td></tr></tbody></table><h4 id="_2-空间复杂度" tabindex="-1"><a class="header-anchor" href="#_2-空间复杂度" aria-hidden="true">#</a> 2. 空间复杂度</h4><p>衡量排序算法所需额外空间</p><table><thead><tr><th>复杂度</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>O(1)</td><td>原地排序，不需要额外空间</td><td>冒泡、选择、插入排序</td></tr><tr><td>O(n)</td><td>需要额外空间存储数据</td><td>归并排序</td></tr><tr><td>O(log n)</td><td>递归栈空间</td><td>快速排序</td></tr></tbody></table><h4 id="_3-稳定性" tabindex="-1"><a class="header-anchor" href="#_3-稳定性" aria-hidden="true">#</a> 3. 稳定性</h4><p>相同元素的相对顺序在排序后是否保持不变</p><p><strong>稳定排序</strong>：冒泡、插入、归并、基数排序 <strong>不稳定排序</strong>：选择、快速、堆排序</p><h3 id="排序算法分类" tabindex="-1"><a class="header-anchor" href="#排序算法分类" aria-hidden="true">#</a> 排序算法分类</h3><h4 id="按稳定性分类" tabindex="-1"><a class="header-anchor" href="#按稳定性分类" aria-hidden="true">#</a> 按稳定性分类</h4><ul><li><strong>稳定排序</strong>：保持相等元素的相对顺序</li><li><strong>不稳定排序</strong>：可能改变相等元素的相对顺序</li></ul><h4 id="按时间复杂度分类" tabindex="-1"><a class="header-anchor" href="#按时间复杂度分类" aria-hidden="true">#</a> 按时间复杂度分类</h4><ul><li><strong>O(n²)排序</strong>：冒泡、选择、插入排序</li><li><strong>O(n log n)排序</strong>：快速、归并、堆排序</li><li><strong>O(n)排序</strong>：计数、桶、基数排序（特定条件）</li></ul><h4 id="按是否原地排序分类" tabindex="-1"><a class="header-anchor" href="#按是否原地排序分类" aria-hidden="true">#</a> 按是否原地排序分类</h4><ul><li><strong>原地排序</strong>：只使用常数额外空间</li><li><strong>非原地排序</strong>：需要O(n)额外空间</li></ul><h2 id="基础排序算法" tabindex="-1"><a class="header-anchor" href="#基础排序算法" aria-hidden="true">#</a> 基础排序算法</h2><h3 id="_1-冒泡排序" tabindex="-1"><a class="header-anchor" href="#_1-冒泡排序" aria-hidden="true">#</a> 1. 冒泡排序</h3><p><strong>原理</strong>：重复遍历数组，比较相邻元素，若顺序错误则交换，直到没有需要交换的元素</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
第一轮: [3, 5, 4, 2, 8]  ← 8冒泡到末尾
第二轮: [3, 4, 2, 5, 8]  ← 5冒泡到倒数第二
第三轮: [3, 2, 4, 5, 8]  ← 4冒泡到倒数第三
第四轮: [2, 3, 4, 5, 8]  ← 完成
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def bubble_sort(arr):
    n = len(arr)
    for i in range(n):
        # 优化：如果本轮没有交换，说明已排序
        swapped = False
        for j in range(0, n - i - 1):
            if arr[j] &gt; arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
        if not swapped:
            break
    return arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n²) - 最坏和平均情况</li><li>空间复杂度：O(1) - 原地排序</li><li>稳定性：稳定</li></ul><h3 id="_2-选择排序" tabindex="-1"><a class="header-anchor" href="#_2-选择排序" aria-hidden="true">#</a> 2. 选择排序</h3><p><strong>原理</strong>：每次从未排序部分选择最小元素，放到已排序部分的末尾</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
第一轮: [2, 5, 8, 4, 3]  ← 选择2，与5交换
第二轮: [2, 3, 8, 4, 5]  ← 选择3，与5交换
第三轮: [2, 3, 4, 8, 5]  ← 选择4，与8交换
第四轮: [2, 3, 4, 5, 8]  ← 选择5，与8交换
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def selection_sort(arr):
    n = len(arr)
    for i in range(n):
        # 找到未排序部分的最小元素
        min_idx = i
        for j in range(i + 1, n):
            if arr[j] &lt; arr[min_idx]:
                min_idx = j
        # 交换
        arr[i], arr[min_idx] = arr[min_idx], arr[i]
    return arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n²) - 无论什么情况都需要比较n²/2次</li><li>空间复杂度：O(1) - 原地排序</li><li>稳定性：不稳定</li></ul><h3 id="_3-插入排序" tabindex="-1"><a class="header-anchor" href="#_3-插入排序" aria-hidden="true">#</a> 3. 插入排序</h3><p><strong>原理</strong>：将未排序元素插入到已排序部分的正确位置</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
第一轮: [3, 5, 8, 4, 2]  ← 插入3
第二轮: [3, 5, 8, 4, 2]  ← 插入8
第三轮: [3, 4, 5, 8, 2]  ← 插入4
第四轮: [2, 3, 4, 5, 8]  ← 插入2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1
        # 将大于key的元素向后移动
        while j &gt;= 0 and arr[j] &gt; key:
            arr[j + 1] = arr[j]
            j -= 1
        arr[j + 1] = key
    return arr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n²) - 最坏和平均情况，O(n) - 最好情况（已排序）</li><li>空间复杂度：O(1) - 原地排序</li><li>稳定性：稳定</li></ul><h2 id="高级排序算法" tabindex="-1"><a class="header-anchor" href="#高级排序算法" aria-hidden="true">#</a> 高级排序算法</h2><h3 id="_4-快速排序" tabindex="-1"><a class="header-anchor" href="#_4-快速排序" aria-hidden="true">#</a> 4. 快速排序</h3><p><strong>原理</strong>：选择一个基准元素，将数组分为两部分，小于基准的放左边，大于基准的放右边，递归排序</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
选择5作为基准:
[3, 4, 2] &lt; 5 &lt; [8]
递归排序左部分:
[2, 3, 4]
递归排序右部分:
[8]
合并: [2, 3, 4, 5, 8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def quick_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    
    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x &lt; pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x &gt; pivot]
    
    return quick_sort(left) + middle + quick_sort(right)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>原地实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def quick_sort_inplace(arr, low=0, high=None):
    if high is None:
        high = len(arr) - 1
    
    if low &lt; high:
        # 分区
        pivot_index = partition(arr, low, high)
        # 递归排序
        quick_sort_inplace(arr, low, pivot_index - 1)
        quick_sort_inplace(arr, pivot_index + 1, high)

def partition(arr, low, high):
    pivot = arr[high]
    i = low - 1
    
    for j in range(low, high):
        if arr[j] &lt;= pivot:
            i += 1
            arr[i], arr[j] = arr[j], arr[i]
    
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    return i + 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n log n) - 平均情况，O(n²) - 最坏情况（已排序）</li><li>空间复杂度：O(log n) - 递归栈空间</li><li>稳定性：不稳定</li></ul><h3 id="_5-归并排序" tabindex="-1"><a class="header-anchor" href="#_5-归并排序" aria-hidden="true">#</a> 5. 归并排序</h3><p><strong>原理</strong>：将数组分成两半，递归排序每半，然后合并两个有序数组</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
分: [5, 3, 8] 和 [4, 2]
分: [5, 3] 和 [8] 和 [4, 2]
分: [5] 和 [3] 和 [8] 和 [4] 和 [2]
合: [3, 5] 和 [8] 和 [2, 4]
合: [3, 5, 8] 和 [2, 4]
合: [2, 3, 4, 5, 8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def merge_sort(arr):
    if len(arr) &lt;= 1:
        return arr
    
    mid = len(arr) // 2
    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])
    
    return merge(left, right)

def merge(left, right):
    result = []
    i = j = 0
    
    while i &lt; len(left) and j &lt; len(right):
        if left[i] &lt;= right[j]:
            result.append(left[i])
            i += 1
        else:
            result.append(right[j])
            j += 1
    
    result.extend(left[i:])
    result.extend(right[j:])
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n log n) - 无论什么情况</li><li>空间复杂度：O(n) - 需要额外空间</li><li>稳定性：稳定</li></ul><h3 id="_6-堆排序" tabindex="-1"><a class="header-anchor" href="#_6-堆排序" aria-hidden="true">#</a> 6. 堆排序</h3><p><strong>原理</strong>：利用堆这种数据结构，将数组构建成最大堆，然后依次取出堆顶元素</p><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始: [5, 3, 8, 4, 2]
构建最大堆: [8, 4, 5, 3, 2]
取出8: [5, 4, 2, 3]
重新堆化: [5, 4, 2, 3]
取出5: [4, 3, 2]
重新堆化: [4, 3, 2]
取出4: [3, 2]
重新堆化: [3, 2]
取出3: [2]
取出2: []
结果: [2, 3, 4, 5, 8]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def heap_sort(arr):
    n = len(arr)
    
    # 构建最大堆
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)
    
    # 逐个取出堆顶元素
    for i in range(n - 1, 0, -1):
        arr[0], arr[i] = arr[i], arr[0]
        heapify(arr, i, 0)
    
    return arr

def heapify(arr, n, i):
    largest = i
    left = 2 * i + 1
    right = 2 * i + 2
    
    if left &lt; n and arr[left] &gt; arr[largest]:
        largest = left
    
    if right &lt; n and arr[right] &gt; arr[largest]:
        largest = right
    
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n log n) - 无论什么情况</li><li>空间复杂度：O(1) - 原地排序</li><li>稳定性：不稳定</li></ul><h2 id="特殊排序算法" tabindex="-1"><a class="header-anchor" href="#特殊排序算法" aria-hidden="true">#</a> 特殊排序算法</h2><h3 id="_7-计数排序" tabindex="-1"><a class="header-anchor" href="#_7-计数排序" aria-hidden="true">#</a> 7. 计数排序</h3><p><strong>原理</strong>：统计每个元素出现的次数，然后根据计数结果输出有序数组</p><p><strong>适用条件</strong>：元素范围有限且较小</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def counting_sort(arr):
    if not arr:
        return arr
    
    # 找到最大值和最小值
    max_val = max(arr)
    min_val = min(arr)
    
    # 创建计数数组
    count = [0] * (max_val - min_val + 1)
    
    # 统计每个元素出现的次数
    for num in arr:
        count[num - min_val] += 1
    
    # 重建有序数组
    result = []
    for i in range(len(count)):
        result.extend([i + min_val] * count[i])
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n + k) - k为元素范围</li><li>空间复杂度：O(k)</li><li>稳定性：稳定</li></ul><h3 id="_8-桶排序" tabindex="-1"><a class="header-anchor" href="#_8-桶排序" aria-hidden="true">#</a> 8. 桶排序</h3><p><strong>原理</strong>：将元素分配到多个桶中，每个桶单独排序，然后合并</p><p><strong>适用条件</strong>：元素分布均匀</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def bucket_sort(arr, bucket_size=5):
    if not arr:
        return arr
    
    # 找到最大值和最小值
    max_val = max(arr)
    min_val = min(arr)
    
    # 计算桶的数量
    bucket_count = (max_val - min_val) // bucket_size + 1
    buckets = [[] for _ in range(bucket_count)]
    
    # 将元素分配到桶中
    for num in arr:
        bucket_index = (num - min_val) // bucket_size
        buckets[bucket_index].append(num)
    
    # 对每个桶进行排序
    for bucket in buckets:
        bucket.sort()
    
    # 合并所有桶
    result = []
    for bucket in buckets:
        result.extend(bucket)
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(n + k) - 平均情况</li><li>空间复杂度：O(n + k)</li><li>稳定性：稳定</li></ul><h3 id="_9-基数排序" tabindex="-1"><a class="header-anchor" href="#_9-基数排序" aria-hidden="true">#</a> 9. 基数排序</h3><p><strong>原理</strong>：按照元素的每一位进行排序，从最低位到最高位</p><p><strong>适用条件</strong>：元素可以分解为多个关键字</p><p><strong>代码实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def radix_sort(arr):
    if not arr:
        return arr
    
    # 找到最大值
    max_val = max(arr)
    
    # 按照每一位进行排序
    exp = 1
    while max_val // exp &gt; 0:
        counting_sort_by_digit(arr, exp)
        exp *= 10
    
    return arr

def counting_sort_by_digit(arr, exp):
    n = len(arr)
    output = [0] * n
    count = [0] * 10
    
    # 统计当前位出现的次数
    for i in range(n):
        index = (arr[i] // exp) % 10
        count[index] += 1
    
    # 计算累积计数
    for i in range(1, 10):
        count[i] += count[i - 1]
    
    # 构建输出数组
    for i in range(n - 1, -1, -1):
        index = (arr[i] // exp) % 10
        output[count[index] - 1] = arr[i]
        count[index] -= 1
    
    # 复制回原数组
    for i in range(n):
        arr[i] = output[i]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>复杂度分析</strong>：</p><ul><li>时间复杂度：O(d * n) - d为数字位数</li><li>空间复杂度：O(n + k)</li><li>稳定性：稳定</li></ul><h2 id="排序算法对比" tabindex="-1"><a class="header-anchor" href="#排序算法对比" aria-hidden="true">#</a> 排序算法对比</h2><table><thead><tr><th>算法</th><th>时间复杂度(平均)</th><th>时间复杂度(最坏)</th><th>空间复杂度</th><th>稳定性</th><th>适用场景</th></tr></thead><tbody><tr><td>冒泡排序</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>稳定</td><td>数据量小，基本有序</td></tr><tr><td>选择排序</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>不稳定</td><td>数据量小，交换成本高</td></tr><tr><td>插入排序</td><td>O(n²)</td><td>O(n²)</td><td>O(1)</td><td>稳定</td><td>数据量小，基本有序</td></tr><tr><td>快速排序</td><td>O(n log n)</td><td>O(n²)</td><td>O(log n)</td><td>不稳定</td><td>数据量大，随机分布</td></tr><tr><td>归并排序</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td><td>稳定</td><td>数据量大，要求稳定</td></tr><tr><td>堆排序</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td><td>不稳定</td><td>数据量大，内存有限</td></tr><tr><td>计数排序</td><td>O(n + k)</td><td>O(n + k)</td><td>O(k)</td><td>稳定</td><td>元素范围小</td></tr><tr><td>桶排序</td><td>O(n + k)</td><td>O(n²)</td><td>O(n + k)</td><td>稳定</td><td>元素分布均匀</td></tr><tr><td>基数排序</td><td>O(d * n)</td><td>O(d * n)</td><td>O(n + k)</td><td>稳定</td><td>元素可分解为关键字</td></tr></tbody></table><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-颜色分类" tabindex="-1"><a class="header-anchor" href="#题目1-颜色分类" aria-hidden="true">#</a> 题目1：颜色分类</h3><p><strong>题目描述</strong>： 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [2,0,2,1,1,0]
输出：[0,0,1,1,2,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：三指针法</strong></p><p>使用三个指针：</p><ul><li>left：指向红色的边界</li><li>current：当前遍历的指针</li><li>right：指向蓝色的边界</li></ul><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def sortColors(nums):
    left, current, right = 0, 0, len(nums) - 1
    
    while current &lt;= right:
        if nums[current] == 0:
            nums[left], nums[current] = nums[current], nums[left]
            left += 1
            current += 1
        elif nums[current] == 1:
            current += 1
        else:  # nums[current] == 2
            nums[current], nums[right] = nums[right], nums[current]
            right -= 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 一次遍历</li><li><strong>空间复杂度</strong>：O(1) - 原地排序</li></ul><h3 id="题目2-最大数" tabindex="-1"><a class="header-anchor" href="#题目2-最大数" aria-hidden="true">#</a> 题目2：最大数</h3><p><strong>题目描述</strong>： 给定一组非负整数 nums，重新排列每个数的顺序（每个数不可拆分）使之组成一个最大的整数。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：nums = [10,2]
输出：&quot;210&quot;

输入：nums = [3,30,34,5,9]
输出：&quot;9534330&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：自定义排序</strong></p><ol><li>将数字转换为字符串</li><li>自定义排序规则：a + b &gt; b + a</li><li>拼接结果</li></ol><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from functools import cmp_to_key

def largestNumber(nums):
    # 转换为字符串
    nums_str = list(map(str, nums))
    
    # 自定义排序
    def compare(a, b):
        if a + b &gt; b + a:
            return -1
        elif a + b &lt; b + a:
            return 1
        else:
            return 0
    
    nums_str.sort(key=cmp_to_key(compare))
    
    # 处理前导零
    result = &#39;&#39;.join(nums_str)
    return &#39;0&#39; if result[0] == &#39;0&#39; else result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n log n * k) - k为平均数字长度</li><li><strong>空间复杂度</strong>：O(n)</li></ul><h3 id="题目3-合并区间" tabindex="-1"><a class="header-anchor" href="#题目3-合并区间" aria-hidden="true">#</a> 题目3：合并区间</h3><p><strong>题目描述</strong>： 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [start_i, end_i] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
输出：[[1,6],[8,10],[15,18]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：排序 + 合并</strong></p><ol><li>按区间起点排序</li><li>遍历区间，合并重叠区间</li></ol><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def merge(intervals):
    if not intervals:
        return []
    
    # 按起点排序
    intervals.sort(key=lambda x: x[0])
    
    merged = [intervals[0]]
    
    for interval in intervals[1:]:
        last = merged[-1]
        
        # 如果重叠，合并
        if interval[0] &lt;= last[1]:
            last[1] = max(last[1], interval[1])
        else:
            merged.append(interval)
    
    return merged
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n log n) - 排序</li><li><strong>空间复杂度</strong>：O(log n) - 排序栈空间</li></ul><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><h3 id="_1-数据库索引" tabindex="-1"><a class="header-anchor" href="#_1-数据库索引" aria-hidden="true">#</a> 1. 数据库索引</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># B+树索引使用排序
class BPlusTreeIndex:
    def __init__(self):
        self.root = None
    
    def insert(self, key, value):
        # 插入时保持有序
        pass
    
    def search(self, key):
        # 利用有序性快速查找
        pass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-排行榜系统" tabindex="-1"><a class="header-anchor" href="#_2-排行榜系统" aria-hidden="true">#</a> 2. 排行榜系统</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class Leaderboard:
    def __init__(self):
        self.scores = []
    
    def add_score(self, player_id, score):
        self.scores.append((player_id, score))
        # 使用快速排序
        quick_sort(self.scores, key=lambda x: x[1], reverse=True)
    
    def get_top_k(self, k):
        return self.scores[:k]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-文件管理" tabindex="-1"><a class="header-anchor" href="#_3-文件管理" aria-hidden="true">#</a> 3. 文件管理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class FileManager:
    def sort_files(self, files, criterion=&#39;name&#39;):
        if criterion == &#39;name&#39;:
            return sorted(files, key=lambda x: x[&#39;name&#39;])
        elif criterion == &#39;size&#39;:
            return sorted(files, key=lambda x: x[&#39;size&#39;])
        elif criterion == &#39;date&#39;:
            return sorted(files, key=lambda x: x[&#39;date&#39;])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-边界条件" tabindex="-1"><a class="header-anchor" href="#_1-边界条件" aria-hidden="true">#</a> 1. 边界条件</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未处理空数组
def sort(arr):
    return quick_sort(arr)  # arr可能为空
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def sort(arr):
    if not arr:
        return []
    return quick_sort(arr)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-稳定性问题" tabindex="-1"><a class="header-anchor" href="#_2-稳定性问题" aria-hidden="true">#</a> 2. 稳定性问题</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：使用不稳定排序导致相同元素顺序改变
arr = [(1, &#39;a&#39;), (2, &#39;b&#39;), (1, &#39;c&#39;)]
quick_sort(arr, key=lambda x: x[0])  # (1, &#39;a&#39;)和(1, &#39;c&#39;)的顺序可能改变
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 使用稳定排序
arr = [(1, &#39;a&#39;), (2, &#39;b&#39;), (1, &#39;c&#39;)]
merge_sort(arr, key=lambda x: x[0])  # 保持(1, &#39;a&#39;)在(1, &#39;c&#39;)之前
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>排序 + 查找</li><li>排序 + 动态规划</li><li>排序 + 贪心算法</li></ul><h3 id="_2-实际场景" tabindex="-1"><a class="header-anchor" href="#_2-实际场景" aria-hidden="true">#</a> 2. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>大数据排序</li><li>分布式排序</li><li>实时排序</li></ul><h3 id="_3-优化技巧" tabindex="-1"><a class="header-anchor" href="#_3-优化技巧" aria-hidden="true">#</a> 3. 优化技巧</h3><p><strong>趋势</strong>：</p><ul><li>并行排序</li><li>外部排序</li><li>混合排序</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>排序算法是算法学习的基础，掌握排序算法的关键在于：</p><ol><li><strong>理解算法原理</strong>：清楚每种排序算法的工作方式</li><li><strong>掌握复杂度分析</strong>：能够分析时间和空间复杂度</li><li><strong>了解稳定性</strong>：知道哪些算法是稳定的</li><li><strong>选择合适算法</strong>：根据数据特点选择合适的排序算法</li><li><strong>注意边界条件</strong>：处理空数组、单元素数组等情况</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解排序过程</li><li>练习不同排序算法的实现</li><li>掌握复杂度分析方法</li><li>了解实际应用场景</li></ul><p><strong>下一步</strong>：让我们继续学习查找算法，掌握高效数据检索的技巧。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《算法（第4版）》</li><li>《算法导论》</li></ul>`,175))])}const m=e(a,[["render",t],["__file","数据结构与算法7-排序算法.html.vue"]]);export{m as default};
