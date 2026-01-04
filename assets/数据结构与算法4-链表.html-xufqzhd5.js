import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as d,d as n,b as s,a as l,o as r}from"./app-BnzN889n.js";const a={};function t(v,e){return r(),d("div",null,[e[0]||(e[0]=n("blockquote",null,[n("p",null,"链表是动态数据结构的代表，掌握链表是理解指针和引用的关键")],-1)),s(" more "),e[1]||(e[1]=l(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>链表是一种动态数据结构，它通过指针将一系列节点连接起来。与数组不同，链表的元素在内存中不需要连续存储，这使得链表在插入和删除操作上具有天然优势。</p><p>据统计，LeetCode中约有15%的题目涉及链表操作，是面试中的高频考点。</p><p>在本文中，我们将深入探讨：</p><ol><li>链表的核心概念和内存模型</li><li>单向链表、双向链表、循环链表</li><li>链表的基本操作和复杂度分析</li><li>2025年高频面试题</li><li>快慢指针、虚拟头节点等核心技巧</li></ol><h2 id="链表的本质" tabindex="-1"><a class="header-anchor" href="#链表的本质" aria-hidden="true">#</a> 链表的本质</h2><h3 id="链表-vs-数组" tabindex="-1"><a class="header-anchor" href="#链表-vs-数组" aria-hidden="true">#</a> 链表 vs 数组</h3><table><thead><tr><th>特性</th><th>数组</th><th>链表</th></tr></thead><tbody><tr><td>内存存储</td><td>连续</td><td>不连续</td></tr><tr><td>访问元素</td><td>O(1)</td><td>O(n)</td></tr><tr><td>插入/删除</td><td>O(n)</td><td>O(1)</td></tr><tr><td>空间大小</td><td>固定</td><td>动态</td></tr><tr><td>缓存友好</td><td>高</td><td>低</td></tr></tbody></table><p><strong>核心区别</strong>：</p><ul><li>数组：通过索引直接访问，适合读多写少</li><li>链表：通过指针遍历访问，适合写多读少</li></ul><h3 id="链表的内存模型" tabindex="-1"><a class="header-anchor" href="#链表的内存模型" aria-hidden="true">#</a> 链表的内存模型</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单向链表内存布局：

地址:  1000      2000      3000      4000
节点:  [A|2000] -&gt; [B|3000] -&gt; [C|4000] -&gt; [D|null]
       数据|next   数据|next   数据|next   数据|next

特点：
- 每个节点包含数据和指向下一个节点的指针
- 节点在内存中不连续
- 最后一个节点的next指针为null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="链表的类型" tabindex="-1"><a class="header-anchor" href="#链表的类型" aria-hidden="true">#</a> 链表的类型</h2><h3 id="_1-单向链表" tabindex="-1"><a class="header-anchor" href="#_1-单向链表" aria-hidden="true">#</a> 1. 单向链表</h3><p><strong>定义</strong>：每个节点只包含指向下一个节点的指针</p><p><strong>结构</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-双向链表" tabindex="-1"><a class="header-anchor" href="#_2-双向链表" aria-hidden="true">#</a> 2. 双向链表</h3><p><strong>定义</strong>：每个节点包含指向前一个和后一个节点的指针</p><p><strong>结构</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class DoublyListNode:
    def __init__(self, val=0, prev=None, next=None):
        self.val = val
        self.prev = prev
        self.next = next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>None &lt;- 1 &lt;-&gt; 2 &lt;-&gt; 3 &lt;-&gt; 4 -&gt; None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>优势</strong>：</p><ul><li>可以双向遍历</li><li>删除节点更方便（不需要前驱节点）</li></ul><h3 id="_3-循环链表" tabindex="-1"><a class="header-anchor" href="#_3-循环链表" aria-hidden="true">#</a> 3. 循环链表</h3><p><strong>定义</strong>：最后一个节点的next指针指向头节点</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>单向循环链表：
1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 1 (循环)

双向循环链表：
None &lt;- 1 &lt;-&gt; 2 &lt;-&gt; 3 &lt;-&gt; 4 -&gt; 1 (循环)
           ^                    |
           |____________________|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>应用</strong>：</p><ul><li>轮询调度</li><li>约瑟夫问题</li><li>缓存淘汰策略</li></ul><h2 id="链表的基本操作" tabindex="-1"><a class="header-anchor" href="#链表的基本操作" aria-hidden="true">#</a> 链表的基本操作</h2><h3 id="_1-创建链表" tabindex="-1"><a class="header-anchor" href="#_1-创建链表" aria-hidden="true">#</a> 1. 创建链表</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def create_linked_list(values):
    if not values:
        return None
    
    head = ListNode(values[0])
    current = head
    
    for val in values[1:]:
        current.next = ListNode(val)
        current = current.next
    
    return head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-遍历链表" tabindex="-1"><a class="header-anchor" href="#_2-遍历链表" aria-hidden="true">#</a> 2. 遍历链表</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def traverse_linked_list(head):
    current = head
    while current:
        print(current.val)
        current = current.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-插入节点" tabindex="-1"><a class="header-anchor" href="#_3-插入节点" aria-hidden="true">#</a> 3. 插入节点</h3><h4 id="在头部插入" tabindex="-1"><a class="header-anchor" href="#在头部插入" aria-hidden="true">#</a> 在头部插入</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def insert_at_head(head, val):
    new_node = ListNode(val)
    new_node.next = head
    return new_node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在尾部插入" tabindex="-1"><a class="header-anchor" href="#在尾部插入" aria-hidden="true">#</a> 在尾部插入</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def insert_at_tail(head, val):
    new_node = ListNode(val)
    
    if not head:
        return new_node
    
    current = head
    while current.next:
        current = current.next
    
    current.next = new_node
    return head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="在指定位置插入" tabindex="-1"><a class="header-anchor" href="#在指定位置插入" aria-hidden="true">#</a> 在指定位置插入</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def insert_at_position(head, val, position):
    if position == 0:
        return insert_at_head(head, val)
    
    new_node = ListNode(val)
    current = head
    
    for _ in range(position - 1):
        if not current:
            return head
        current = current.next
    
    new_node.next = current.next
    current.next = new_node
    
    return head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-删除节点" tabindex="-1"><a class="header-anchor" href="#_4-删除节点" aria-hidden="true">#</a> 4. 删除节点</h3><h4 id="删除指定值的节点" tabindex="-1"><a class="header-anchor" href="#删除指定值的节点" aria-hidden="true">#</a> 删除指定值的节点</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def delete_node(head, val):
    # 使用虚拟头节点简化操作
    dummy = ListNode(0)
    dummy.next = head
    current = dummy
    
    while current.next:
        if current.next.val == val:
            current.next = current.next.next
        else:
            current = current.next
    
    return dummy.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除指定位置的节点" tabindex="-1"><a class="header-anchor" href="#删除指定位置的节点" aria-hidden="true">#</a> 删除指定位置的节点</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def delete_at_position(head, position):
    if position == 0:
        return head.next if head else None
    
    current = head
    for _ in range(position - 1):
        if not current or not current.next:
            return head
        current = current.next
    
    if current.next:
        current.next = current.next.next
    
    return head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-反转链表" tabindex="-1"><a class="header-anchor" href="#_5-反转链表" aria-hidden="true">#</a> 5. 反转链表</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def reverse_linked_list(head):
    prev = None
    current = head
    
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    return prev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="操作复杂度总结" tabindex="-1"><a class="header-anchor" href="#操作复杂度总结" aria-hidden="true">#</a> 操作复杂度总结</h2><table><thead><tr><th>操作</th><th>单向链表</th><th>双向链表</th><th>说明</th></tr></thead><tbody><tr><td>访问头部</td><td>O(1)</td><td>O(1)</td><td>直接返回head</td></tr><tr><td>访问尾部</td><td>O(n)</td><td>O(1)</td><td>双向链表有tail指针</td></tr><tr><td>访问中间</td><td>O(n)</td><td>O(n)</td><td>需要遍历</td></tr><tr><td>头部插入</td><td>O(1)</td><td>O(1)</td><td>直接操作head</td></tr><tr><td>尾部插入</td><td>O(n)</td><td>O(1)</td><td>双向链表有tail指针</td></tr><tr><td>中间插入</td><td>O(n)</td><td>O(n)</td><td>需要先找到位置</td></tr><tr><td>头部删除</td><td>O(1)</td><td>O(1)</td><td>直接操作head</td></tr><tr><td>尾部删除</td><td>O(n)</td><td>O(1)</td><td>双向链表有tail指针</td></tr><tr><td>中间删除</td><td>O(n)</td><td>O(n)</td><td>需要先找到位置</td></tr></tbody></table><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-反转链表" tabindex="-1"><a class="header-anchor" href="#题目1-反转链表" aria-hidden="true">#</a> 题目1：反转链表</h3><p><strong>题目描述</strong>： 给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：迭代法</strong></p><ol><li>使用三个指针：prev、current、next</li><li>遍历链表，逐个反转指针</li><li>最后返回prev</li></ol><p><strong>步骤</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>原始: 1 -&gt; 2 -&gt; 3 -&gt; None

步骤1:
prev=None, current=1, next=2
1 -&gt; None

步骤2:
prev=1, current=2, next=3
2 -&gt; 1 -&gt; None

步骤3:
prev=2, current=3, next=None
3 -&gt; 2 -&gt; 1 -&gt; None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def reverseList(head):
    prev = None
    current = head
    
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    
    return prev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 遍历一次链表</li><li><strong>空间复杂度</strong>：O(1) - 只使用常数空间</li></ul><h3 id="题目2-合并两个有序链表" tabindex="-1"><a class="header-anchor" href="#题目2-合并两个有序链表" aria-hidden="true">#</a> 题目2：合并两个有序链表</h3><p><strong>题目描述</strong>： 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：迭代法</strong></p><ol><li>使用虚拟头节点简化操作</li><li>比较两个链表的节点值</li><li>将较小的节点连接到结果链表</li><li>处理剩余节点</li></ol><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def mergeTwoLists(l1, l2):
    dummy = ListNode(0)
    current = dummy
    
    while l1 and l2:
        if l1.val &lt;= l2.val:
            current.next = l1
            l1 = l1.next
        else:
            current.next = l2
            l2 = l2.next
        current = current.next
    
    # 连接剩余节点
    current.next = l1 if l1 else l2
    
    return dummy.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let current = dummy;
    
    while (l1 &amp;&amp; l2) {
        if (l1.val &lt;= l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    
    // 连接剩余节点
    current.next = l1 || l2;
    
    return dummy.next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(m + n) - m和n分别为两个链表的长度</li><li><strong>空间复杂度</strong>：O(1) - 只使用常数空间</li></ul><h3 id="题目3-环形链表" tabindex="-1"><a class="header-anchor" href="#题目3-环形链表" aria-hidden="true">#</a> 题目3：环形链表</h3><p><strong>题目描述</strong>： 给你一个链表的头节点 head ，判断链表中是否有环。如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [3,2,0,-4], pos = 1
输出：true
解释：链表中有一个环，其尾部连接到第二个节点。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：哈希表</strong></p><ol><li>遍历链表</li><li>将访问过的节点存入哈希表</li><li>如果节点已在哈希表中，说明有环</li></ol><p><strong>方法2：快慢指针（Floyd判圈算法）</strong></p><ol><li>使用两个指针：慢指针每次走一步，快指针每次走两步</li><li>如果有环，快指针终会追上慢指针</li><li>如果无环，快指针会先到达终点</li></ol><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python（快慢指针）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def hasCycle(head):
    if not head or not head.next:
        return False
    
    slow = head
    fast = head.next
    
    while slow != fast:
        if not fast or not fast.next:
            return False
        slow = slow.next
        fast = fast.next.next
    
    return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript（快慢指针）</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function hasCycle(head) {
    if (!head || !head.next) {
        return false;
    }
    
    let slow = head;
    let fast = head.next;
    
    while (slow !== fast) {
        if (!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    
    return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><p><strong>快慢指针法</strong>：</p><ul><li><strong>时间复杂度</strong>：O(n) - 最坏情况遍历整个链表</li><li><strong>空间复杂度</strong>：O(1) - 只使用常数空间</li></ul><h3 id="题目4-删除链表的倒数第n个节点" tabindex="-1"><a class="header-anchor" href="#题目4-删除链表的倒数第n个节点" aria-hidden="true">#</a> 题目4：删除链表的倒数第N个节点</h3><p><strong>题目描述</strong>： 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-3" tabindex="-1"><a class="header-anchor" href="#解题思路-3" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：两次遍历</strong></p><ol><li>第一次遍历：计算链表长度</li><li>计算要删除的节点位置</li><li>第二次遍历：删除节点</li></ol><p><strong>方法2：快慢指针（一次遍历）</strong></p><ol><li>使用虚拟头节点简化操作</li><li>快指针先走n步</li><li>慢指针和快指针同时走，直到快指针到达末尾</li><li>删除慢指针的下一个节点</li></ol><h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python（快慢指针）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def removeNthFromEnd(head, n):
    dummy = ListNode(0)
    dummy.next = head
    
    fast = dummy
    slow = dummy
    
    # 快指针先走n+1步
    for _ in range(n + 1):
        fast = fast.next
    
    # 同时移动，直到fast到达末尾
    while fast:
        slow = slow.next
        fast = fast.next
    
    # 删除slow的下一个节点
    slow.next = slow.next.next
    
    return dummy.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript（快慢指针）</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    
    let fast = dummy;
    let slow = dummy;
    
    // 快指针先走n+1步
    for (let i = 0; i &lt;= n; i++) {
        fast = fast.next;
    }
    
    // 同时移动，直到fast到达末尾
    while (fast) {
        slow = slow.next;
        fast = fast.next;
    }
    
    // 删除slow的下一个节点
    slow.next = slow.next.next;
    
    return dummy.next;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 一次遍历</li><li><strong>空间复杂度</strong>：O(1) - 只使用常数空间</li></ul><h2 id="核心技巧" tabindex="-1"><a class="header-anchor" href="#核心技巧" aria-hidden="true">#</a> 核心技巧</h2><h3 id="_1-虚拟头节点" tabindex="-1"><a class="header-anchor" href="#_1-虚拟头节点" aria-hidden="true">#</a> 1. 虚拟头节点</h3><p><strong>用途</strong>：简化头节点的操作</p><p><strong>示例</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 不使用虚拟头节点（需要特殊处理）
def delete_node(head, val):
    if head.val == val:
        return head.next
    
    current = head
    while current.next:
        if current.next.val == val:
            current.next = current.next.next
            break
        current = current.next
    
    return head

# 使用虚拟头节点（统一处理）
def delete_node(head, val):
    dummy = ListNode(0)
    dummy.next = head
    current = dummy
    
    while current.next:
        if current.next.val == val:
            current.next = current.next.next
            break
        current = current.next
    
    return dummy.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-快慢指针" tabindex="-1"><a class="header-anchor" href="#_2-快慢指针" aria-hidden="true">#</a> 2. 快慢指针</h3><p><strong>用途</strong>：</p><ul><li>寻找中间节点</li><li>检测环</li><li>寻找环的入口</li></ul><p><strong>示例：寻找中间节点</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def find_middle(head):
    slow = head
    fast = head
    
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    
    return slow
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-递归" tabindex="-1"><a class="header-anchor" href="#_3-递归" aria-hidden="true">#</a> 3. 递归</h3><p><strong>用途</strong>：简化链表操作</p><p><strong>示例：反转链表</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def reverseList(head):
    if not head or not head.next:
        return head
    
    new_head = reverseList(head.next)
    head.next.next = head
    head.next = None
    
    return new_head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-双指针" tabindex="-1"><a class="header-anchor" href="#_4-双指针" aria-hidden="true">#</a> 4. 双指针</h3><p><strong>用途</strong>：</p><ul><li>合并有序链表</li><li>寻找相交节点</li><li>回文链表判断</li></ul><p><strong>示例：寻找相交节点</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def getIntersectionNode(headA, headB):
    if not headA or not headB:
        return None
    
    pA, pB = headA, headB
    
    while pA != pB:
        pA = pA.next if pA else headB
        pB = pB.next if pB else headA
    
    return pA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-空指针异常" tabindex="-1"><a class="header-anchor" href="#_1-空指针异常" aria-hidden="true">#</a> 1. 空指针异常</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未检查空指针
while current.next:
    current = current.next.next  # current.next可能为None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>while current and current.next:
    current = current.next.next
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-丢失链表头" tabindex="-1"><a class="header-anchor" href="#_2-丢失链表头" aria-hidden="true">#</a> 2. 丢失链表头</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：直接修改head
def reverseList(head):
    while head:
        # 修改head，导致丢失原链表
        head.next = None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def reverseList(head):
    prev = None
    current = head
    while current:
        next_node = current.next
        current.next = prev
        prev = current
        current = next_node
    return prev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-循环引用" tabindex="-1"><a class="header-anchor" href="#_3-循环引用" aria-hidden="true">#</a> 3. 循环引用</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：创建循环引用
def create_cycle(head):
    current = head
    while current.next:
        current = current.next
    current.next = head  # 创建循环
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def create_cycle(head):
    # 明确知道需要循环时才创建
    if need_cycle:
        current = head
        while current.next:
            current = current.next
        current.next = head
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><h3 id="_1-lru缓存" tabindex="-1"><a class="header-anchor" href="#_1-lru缓存" aria-hidden="true">#</a> 1. LRU缓存</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.cache = {}  # key -&gt; node
        self.head = ListNode(0)  # 虚拟头节点
        self.tail = ListNode(0)  # 虚拟尾节点
        self.head.next = self.tail
        self.tail.prev = self.head
    
    def get(self, key):
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.value
        return -1
    
    def put(self, key, value):
        if key in self.cache:
            self._remove(self.cache[key])
        
        node = ListNode(key, value)
        self._add(node)
        self.cache[key] = node
        
        if len(self.cache) &gt; self.capacity:
            lru = self.head.next
            self._remove(lru)
            del self.cache[lru.key]
    
    def _remove(self, node):
        prev = node.prev
        next_node = node.next
        prev.next = next_node
        next_node.prev = prev
    
    def _add(self, node):
        prev = self.tail.prev
        prev.next = node
        node.prev = prev
        node.next = self.tail
        self.tail.prev = node
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-浏览器历史记录" tabindex="-1"><a class="header-anchor" href="#_2-浏览器历史记录" aria-hidden="true">#</a> 2. 浏览器历史记录</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class BrowserHistory:
    def __init__(self, homepage):
        self.current = ListNode(homepage)
    
    def visit(self, url):
        new_node = ListNode(url)
        self.current.next = new_node
        new_node.prev = self.current
        self.current = new_node
    
    def back(self, steps):
        for _ in range(steps):
            if self.current.prev:
                self.current = self.current.prev
        return self.current.val
    
    def forward(self, steps):
        for _ in range(steps):
            if self.current.next:
                self.current = self.current.next
        return self.current.val
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-音乐播放列表" tabindex="-1"><a class="header-anchor" href="#_3-音乐播放列表" aria-hidden="true">#</a> 3. 音乐播放列表</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class MusicPlayer:
    def __init__(self):
        self.head = None
        self.current = None
    
    def add_song(self, song):
        new_node = ListNode(song)
        if not self.head:
            self.head = new_node
            self.current = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
    
    def play_next(self):
        if self.current and self.current.next:
            self.current = self.current.next
            return self.current.val
        return None
    
    def play_previous(self):
        if self.current and self.current.prev:
            self.current = self.current.prev
            return self.current.val
        return None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>链表 + 排序</li><li>链表 + 哈希表</li><li>链表 + 递归</li></ul><h3 id="_2-实际场景" tabindex="-1"><a class="header-anchor" href="#_2-实际场景" aria-hidden="true">#</a> 2. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>LRU缓存实现</li><li>浏览器历史记录</li><li>音乐播放列表</li></ul><h3 id="_3-代码质量" tabindex="-1"><a class="header-anchor" href="#_3-代码质量" aria-hidden="true">#</a> 3. 代码质量</h3><p><strong>趋势</strong>：</p><ul><li>边界条件处理</li><li>空指针检查</li><li>代码风格统一</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>链表是动态数据结构的代表，掌握链表的关键在于：</p><ol><li><strong>理解指针概念</strong>：清楚指针如何连接节点</li><li><strong>掌握基本操作</strong>：增删改查的复杂度和实现</li><li><strong>熟练核心技巧</strong>：虚拟头节点、快慢指针、递归等</li><li><strong>注意边界条件</strong>：空指针、头节点、尾节点等</li><li><strong>结合实际应用</strong>：LRU缓存、历史记录等</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解指针操作</li><li>练习不同类型链表</li><li>掌握常见套路和技巧</li><li>注意边界条件和异常处理</li></ul><p><strong>下一步</strong>：让我们继续学习栈与队列，掌握受限线性数据结构的应用。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《剑指Offer》</li><li>《算法（第4版）》</li></ul>`,179))])}const m=i(a,[["render",t],["__file","数据结构与算法4-链表.html.vue"]]);export{m as default};
