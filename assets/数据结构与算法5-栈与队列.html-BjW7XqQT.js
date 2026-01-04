import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,d as n,b as d,a as l,o as a}from"./app-BnzN889n.js";const r={};function t(u,e){return a(),s("div",null,[e[0]||(e[0]=n("blockquote",null,[n("p",null,"栈和队列是受限的线性数据结构，在计算机科学中有着广泛的应用")],-1)),d(" more "),e[1]||(e[1]=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>栈和队列是最重要的受限线性数据结构，它们限制了元素的访问方式，从而在特定场景下提供了更高效的解决方案。</p><p><strong>核心应用</strong>：</p><ul><li><strong>栈</strong>：函数调用、括号匹配、表达式求值、浏览器历史</li><li><strong>队列</strong>：任务调度、消息队列、BFS遍历、缓冲区</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>栈和队列的核心概念</li><li>基本操作和实现方式</li><li>2025年高频面试题</li><li>双端队列、优先队列等高级结构</li></ol><h2 id="栈-stack" tabindex="-1"><a class="header-anchor" href="#栈-stack" aria-hidden="true">#</a> 栈（Stack）</h2><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h3><p><strong>定义</strong>：后进先出（LIFO - Last In First Out）的线性数据结构</p><p><strong>特点</strong>：</p><ul><li>只能在栈顶进行插入和删除</li><li>插入操作称为push（入栈）</li><li>删除操作称为pop（出栈）</li><li>查看栈顶元素称为peek/top</li></ul><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>栈顶 -&gt; [4]  &lt;- push(4)
        [3]
        [2]
        [1]
栈底 -&gt; [ ]  &lt;- pop()返回4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class Stack:
    def __init__(self):
        self.items = []
    
    def push(self, item):
        &quot;&quot;&quot;入栈&quot;&quot;&quot;
        self.items.append(item)
    
    def pop(self):
        &quot;&quot;&quot;出栈&quot;&quot;&quot;
        if not self.is_empty():
            return self.items.pop()
        return None
    
    def peek(self):
        &quot;&quot;&quot;查看栈顶元素&quot;&quot;&quot;
        if not self.is_empty():
            return self.items[-1]
        return None
    
    def is_empty(self):
        &quot;&quot;&quot;判断是否为空&quot;&quot;&quot;
        return len(self.items) == 0
    
    def size(self):
        &quot;&quot;&quot;获取栈大小&quot;&quot;&quot;
        return len(self.items)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h3><table><thead><tr><th>操作</th><th>时间复杂度</th><th>说明</th></tr></thead><tbody><tr><td>push</td><td>O(1)</td><td>数组末尾插入</td></tr><tr><td>pop</td><td>O(1)</td><td>数组末尾删除</td></tr><tr><td>peek</td><td>O(1)</td><td>访问最后一个元素</td></tr><tr><td>is_empty</td><td>O(1)</td><td>检查长度</td></tr><tr><td>size</td><td>O(1)</td><td>返回长度</td></tr></tbody></table><h2 id="队列-queue" tabindex="-1"><a class="header-anchor" href="#队列-queue" aria-hidden="true">#</a> 队列（Queue）</h2><h3 id="核心概念-1" tabindex="-1"><a class="header-anchor" href="#核心概念-1" aria-hidden="true">#</a> 核心概念</h3><p><strong>定义</strong>：先进先出（FIFO - First In First Out）的线性数据结构</p><p><strong>特点</strong>：</p><ul><li>在队尾插入元素（enqueue）</li><li>在队头删除元素（dequeue）</li><li>先进入的元素先被处理</li></ul><p><strong>图示</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>入队 -&gt; [1][2][3][4] -&gt; 出队
队尾              队头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本操作-1" tabindex="-1"><a class="header-anchor" href="#基本操作-1" aria-hidden="true">#</a> 基本操作</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class Queue:
    def __init__(self):
        self.items = []
    
    def enqueue(self, item):
        &quot;&quot;&quot;入队&quot;&quot;&quot;
        self.items.append(item)
    
    def dequeue(self):
        &quot;&quot;&quot;出队&quot;&quot;&quot;
        if not self.is_empty():
            return self.items.pop(0)
        return None
    
    def peek(self):
        &quot;&quot;&quot;查看队头元素&quot;&quot;&quot;
        if not self.is_empty():
            return self.items[0]
        return None
    
    def is_empty(self):
        &quot;&quot;&quot;判断是否为空&quot;&quot;&quot;
        return len(self.items) == 0
    
    def size(self):
        &quot;&quot;&quot;获取队列大小&quot;&quot;&quot;
        return len(self.items)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h3><table><thead><tr><th>操作</th><th>时间复杂度</th><th>说明</th></tr></thead><tbody><tr><td>enqueue</td><td>O(1)</td><td>数组末尾插入</td></tr><tr><td>dequeue</td><td>O(n)</td><td>数组头部删除</td></tr><tr><td>peek</td><td>O(1)</td><td>访问第一个元素</td></tr><tr><td>is_empty</td><td>O(1)</td><td>检查长度</td></tr><tr><td>size</td><td>O(1)</td><td>返回长度</td></tr></tbody></table><p><strong>注意</strong>：使用列表实现队列时，dequeue操作是O(n)，因为需要移动所有元素。实际应用中通常使用双端队列或链表实现。</p><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-有效的括号" tabindex="-1"><a class="header-anchor" href="#题目1-有效的括号" aria-hidden="true">#</a> 题目1：有效的括号</h3><p><strong>题目描述</strong>： 给定一个只包括 &#39;(&#39;，&#39;)&#39;，&#39;{&#39;，&#39;}&#39;，&#39;[&#39;，&#39;]&#39; 的字符串 s ，判断字符串是否有效。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：s = &quot;()[]{}&quot;
输出：true

输入：s = &quot;([)]&quot;
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：使用栈</strong></p><ol><li>遍历字符串</li><li>遇到左括号，压入栈</li><li>遇到右括号，检查栈顶是否匹配</li><li>最后栈为空则有效</li></ol><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def isValid(s):
    stack = []
    mapping = {&#39;)&#39;: &#39;(&#39;, &#39;}&#39;: &#39;{&#39;, &#39;]&#39;: &#39;[&#39;}
    
    for char in s:
        if char in mapping:
            if not stack or stack[-1] != mapping[char]:
                return False
            stack.pop()
        else:
            stack.append(char)
    
    return len(stack) == 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function isValid(s) {
    const stack = [];
    const mapping = {&#39;)&#39;: &#39;(&#39;, &#39;}&#39;: &#39;{&#39;, &#39;]&#39;: &#39;[&#39;};
    
    for (const char of s) {
        if (char in mapping) {
            if (!stack.length || stack[stack.length - 1] !== mapping[char]) {
                return false;
            }
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 遍历一次字符串</li><li><strong>空间复杂度</strong>：O(n) - 最坏情况栈大小为n</li></ul><h3 id="题目2-用栈实现队列" tabindex="-1"><a class="header-anchor" href="#题目2-用栈实现队列" aria-hidden="true">#</a> 题目2：用栈实现队列</h3><p><strong>题目描述</strong>： 请你仅使用两个栈实现先入先出队列。队列应当支持一般队列支持的所有操作（push、pop、peek、empty）。</p><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：双栈法</strong></p><ol><li>使用两个栈：inStack和outStack</li><li>push操作：压入inStack</li><li>pop操作：从outStack弹出，若为空则将inStack全部倒入outStack</li></ol><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class MyQueue:
    def __init__(self):
        self.in_stack = []
        self.out_stack = []
    
    def push(self, x):
        self.in_stack.append(x)
    
    def pop(self):
        self._transfer()
        return self.out_stack.pop()
    
    def peek(self):
        self._transfer()
        return self.out_stack[-1]
    
    def empty(self):
        return not self.in_stack and not self.out_stack
    
    def _transfer(self):
        if not self.out_stack:
            while self.in_stack:
                self.out_stack.append(self.in_stack.pop())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>push</strong>：O(1) - 平均时间复杂度</li><li><strong>pop</strong>：O(1) - 平均时间复杂度</li><li><strong>peek</strong>：O(1)</li><li><strong>empty</strong>：O(1)</li></ul><h3 id="题目3-逆波兰表达式求值" tabindex="-1"><a class="header-anchor" href="#题目3-逆波兰表达式求值" aria-hidden="true">#</a> 题目3：逆波兰表达式求值</h3><p><strong>题目描述</strong>： 根据逆波兰表示法，求表达式的值。有效的运算符包括 +、-、*、/ 。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]
输出：9
解释：((2 + 1) * 3) = 9
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：使用栈</strong></p><ol><li>遍历表达式</li><li>遇到数字，压入栈</li><li>遇到运算符，弹出两个数字计算，结果压入栈</li><li>最后栈中剩下的就是结果</li></ol><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def evalRPN(tokens):
    stack = []
    
    for token in tokens:
        if token in &#39;+-*/&#39;:
            b = stack.pop()
            a = stack.pop()
            if token == &#39;+&#39;:
                stack.append(a + b)
            elif token == &#39;-&#39;:
                stack.append(a - b)
            elif token == &#39;*&#39;:
                stack.append(a * b)
            elif token == &#39;/&#39;:
                stack.append(int(a / b))
        else:
            stack.append(int(token))
    
    return stack[0]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-4" tabindex="-1"><a class="header-anchor" href="#复杂度分析-4" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 遍历一次表达式</li><li><strong>空间复杂度</strong>：O(n) - 栈大小</li></ul><h2 id="高级数据结构" tabindex="-1"><a class="header-anchor" href="#高级数据结构" aria-hidden="true">#</a> 高级数据结构</h2><h3 id="双端队列-deque" tabindex="-1"><a class="header-anchor" href="#双端队列-deque" aria-hidden="true">#</a> 双端队列（Deque）</h3><p><strong>定义</strong>：两端都可以进行插入和删除的队列</p><p><strong>操作</strong>：</p><ul><li>appendleft：从左端插入</li><li>popleft：从左端删除</li><li>append：从右端插入</li><li>pop：从右端删除</li></ul><p><strong>Python实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from collections import deque

d = deque()
d.append(1)  # [1]
d.appendleft(0)  # [0, 1]
d.pop()  # [0]
d.popleft()  # []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="优先队列-priority-queue" tabindex="-1"><a class="header-anchor" href="#优先队列-priority-queue" aria-hidden="true">#</a> 优先队列（Priority Queue）</h3><p><strong>定义</strong>：每个元素都有优先级，优先级高的先出队</p><p><strong>实现</strong>：通常使用堆（Heap）</p><p><strong>Python实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>import heapq

# 最小堆
heap = []
heapq.heappush(heap, 3)
heapq.heappush(heap, 1)
heapq.heappush(heap, 2)
print(heapq.heappop(heap))  # 1

# 最大堆（通过取负数实现）
heap = []
heapq.heappush(heap, -3)
heapq.heappush(heap, -1)
heapq.heappush(heap, -2)
print(-heapq.heappop(heap))  # 3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环队列" tabindex="-1"><a class="header-anchor" href="#循环队列" aria-hidden="true">#</a> 循环队列</h3><p><strong>定义</strong>：首尾相连的队列</p><p><strong>优势</strong>：</p><ul><li>避免数据搬移</li><li>空间利用率高</li></ul><p><strong>实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class CircularQueue:
    def __init__(self, capacity):
        self.capacity = capacity
        self.queue = [None] * capacity
        self.front = 0
        self.rear = 0
        self.size = 0
    
    def enqueue(self, item):
        if self.is_full():
            return False
        self.queue[self.rear] = item
        self.rear = (self.rear + 1) % self.capacity
        self.size += 1
        return True
    
    def dequeue(self):
        if self.is_empty():
            return None
        item = self.queue[self.front]
        self.front = (self.front + 1) % self.capacity
        self.size -= 1
        return item
    
    def is_empty(self):
        return self.size == 0
    
    def is_full(self):
        return self.size == self.capacity
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><h3 id="_1-浏览器前进后退" tabindex="-1"><a class="header-anchor" href="#_1-浏览器前进后退" aria-hidden="true">#</a> 1. 浏览器前进后退</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class BrowserHistory:
    def __init__(self, homepage):
        self.history = [homepage]
        self.current = 0
    
    def visit(self, url):
        # 删除当前页面之后的所有历史
        self.history = self.history[:self.current + 1]
        self.history.append(url)
        self.current += 1
    
    def back(self, steps):
        self.current = max(0, self.current - steps)
        return self.history[self.current]
    
    def forward(self, steps):
        self.current = min(len(self.history) - 1, self.current + steps)
        return self.history[self.current]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-任务调度器" tabindex="-1"><a class="header-anchor" href="#_2-任务调度器" aria-hidden="true">#</a> 2. 任务调度器</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from collections import deque

class TaskScheduler:
    def __init__(self):
        self.queue = deque()
    
    def add_task(self, task):
        self.queue.append(task)
    
    def execute_next(self):
        if self.queue:
            return self.queue.popleft()
        return None
    
    def peek_next(self):
        if self.queue:
            return self.queue[0]
        return None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-函数调用栈" tabindex="-1"><a class="header-anchor" href="#_3-函数调用栈" aria-hidden="true">#</a> 3. 函数调用栈</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class CallStack:
    def __init__(self):
        self.stack = []
    
    def call(self, function):
        self.stack.append(function)
        print(f&quot;调用函数: {function}&quot;)
    
    def return_(self):
        if self.stack:
            function = self.stack.pop()
            print(f&quot;从函数返回: {function}&quot;)
            return function
        return None
    
    def current_function(self):
        if self.stack:
            return self.stack[-1]
        return None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-栈溢出" tabindex="-1"><a class="header-anchor" href="#_1-栈溢出" aria-hidden="true">#</a> 1. 栈溢出</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：无限递归导致栈溢出
def factorial(n):
    return n * factorial(n - 1)  # 缺少终止条件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def factorial(n):
    if n &lt;= 1:
        return 1
    return n * factorial(n - 1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-队列空操作" tabindex="-1"><a class="header-anchor" href="#_2-队列空操作" aria-hidden="true">#</a> 2. 队列空操作</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未检查队列是否为空
queue = Queue()
item = queue.dequeue()  # 可能返回None
process(item)  # 处理None值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>queue = Queue()
if not queue.is_empty():
    item = queue.dequeue()
    process(item)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>栈 + 递归</li><li>队列 + BFS</li><li>双端队列 + 滑动窗口</li></ul><h3 id="_2-实际场景" tabindex="-1"><a class="header-anchor" href="#_2-实际场景" aria-hidden="true">#</a> 2. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>任务调度系统</li><li>消息队列设计</li><li>缓存系统设计</li></ul><h3 id="_3-性能优化" tabindex="-1"><a class="header-anchor" href="#_3-性能优化" aria-hidden="true">#</a> 3. 性能优化</h3><p><strong>趋势</strong>：</p><ul><li>时间复杂度分析</li><li>空间复杂度优化</li><li>并发安全考虑</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>栈和队列是受限的线性数据结构，掌握它们的关键在于：</p><ol><li><strong>理解LIFO和FIFO</strong>：清楚各自的访问顺序</li><li><strong>掌握基本操作</strong>：入栈/出栈、入队/出队</li><li><strong>熟练应用场景</strong>：括号匹配、任务调度等</li><li><strong>了解高级结构</strong>：双端队列、优先队列等</li><li><strong>注意边界条件</strong>：空栈/空队列、栈溢出等</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解操作过程</li><li>练习经典题目</li><li>结合实际应用场景</li><li>注意时间复杂度分析</li></ul><p><strong>下一步</strong>：让我们继续学习树，掌握非线性数据结构的核心。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《剑指Offer》</li><li>《算法图解》</li></ul>`,121))])}const o=i(r,[["render",t],["__file","数据结构与算法5-栈与队列.html.vue"]]);export{o as default};
