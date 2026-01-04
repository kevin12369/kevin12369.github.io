import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,d as n,b as r,a as d,o as s}from"./app-BnzN889n.js";const a={};function t(v,e){return s(),l("div",null,[e[0]||(e[0]=n("blockquote",null,[n("p",null,"树是重要的非线性数据结构，在计算机科学中有着广泛的应用")],-1)),r(" more "),e[1]||(e[1]=d(`<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言" aria-hidden="true">#</a> 前言</h2><p>树是一种分层数据结构，由节点和边组成，模拟了现实世界中的层级关系。</p><p><strong>核心应用</strong>：</p><ul><li><strong>二叉搜索树</strong>：高效的数据查找、插入、删除</li><li><strong>堆</strong>：优先队列、堆排序</li><li><strong>前缀树</strong>：字符串搜索、自动补全</li><li><strong>红黑树</strong>：平衡搜索树，用于C++ STL的map/set</li></ul><p>在本文中，我们将深入探讨：</p><ol><li>树的基本概念和术语</li><li>二叉树、二叉搜索树、平衡树</li><li>树的遍历方式</li><li>2025年高频面试题</li></ol><h2 id="树的基本概念" tabindex="-1"><a class="header-anchor" href="#树的基本概念" aria-hidden="true">#</a> 树的基本概念</h2><h3 id="核心术语" tabindex="-1"><a class="header-anchor" href="#核心术语" aria-hidden="true">#</a> 核心术语</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>        A        &lt;- 根节点
       / \\
      B   C      &lt;- 内部节点
     / \\   \\
    D   E   F    &lt;- 叶子节点
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>基本术语</strong>：</p><ul><li><strong>根节点</strong>：树的顶端节点，没有父节点</li><li><strong>叶子节点</strong>：没有子节点的节点</li><li><strong>内部节点</strong>：除根节点和叶子节点外的节点</li><li><strong>父节点</strong>：直接连接的上级节点</li><li><strong>子节点</strong>：直接连接的下级节点</li><li><strong>兄弟节点</strong>：拥有相同父节点的节点</li><li><strong>深度</strong>：从根节点到该节点的边数</li><li><strong>高度</strong>：从该节点到最远叶子节点的边数</li></ul><h3 id="树的类型" tabindex="-1"><a class="header-anchor" href="#树的类型" aria-hidden="true">#</a> 树的类型</h3><h4 id="二叉树" tabindex="-1"><a class="header-anchor" href="#二叉树" aria-hidden="true">#</a> 二叉树</h4><p><strong>定义</strong>：每个节点最多有两个子节点的树</p><p><strong>特点</strong>：</p><ul><li>每个节点最多有两个子节点（左子节点、右子节点）</li><li>第i层最多有2^(i-1)个节点</li><li>高度为h的二叉树最多有2^h - 1个节点</li></ul><h4 id="二叉搜索树-bst" tabindex="-1"><a class="header-anchor" href="#二叉搜索树-bst" aria-hidden="true">#</a> 二叉搜索树（BST）</h4><p><strong>定义</strong>：左子节点 &lt; 父节点 &lt; 右子节点</p><p><strong>特点</strong>：</p><ul><li>左子树所有节点值 &lt; 根节点值</li><li>右子树所有节点值 &gt; 根节点值</li><li>左右子树也都是二叉搜索树</li></ul><h4 id="平衡树" tabindex="-1"><a class="header-anchor" href="#平衡树" aria-hidden="true">#</a> 平衡树</h4><p><strong>定义</strong>：任意节点的两个子树的高度差不超过1</p><p><strong>类型</strong>：</p><ul><li>AVL树：严格平衡</li><li>红黑树：近似平衡</li></ul><h2 id="二叉树的实现" tabindex="-1"><a class="header-anchor" href="#二叉树的实现" aria-hidden="true">#</a> 二叉树的实现</h2><h3 id="节点定义" tabindex="-1"><a class="header-anchor" href="#节点定义" aria-hidden="true">#</a> 节点定义</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建二叉树" tabindex="-1"><a class="header-anchor" href="#创建二叉树" aria-hidden="true">#</a> 创建二叉树</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def create_tree(values):
    if not values:
        return None
    
    root = TreeNode(values[0])
    queue = [root]
    i = 1
    
    while queue and i &lt; len(values):
        node = queue.pop(0)
        
        if i &lt; len(values) and values[i] is not None:
            node.left = TreeNode(values[i])
            queue.append(node.left)
        i += 1
        
        if i &lt; len(values) and values[i] is not None:
            node.right = TreeNode(values[i])
            queue.append(node.right)
        i += 1
    
    return root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="树的遍历" tabindex="-1"><a class="header-anchor" href="#树的遍历" aria-hidden="true">#</a> 树的遍历</h2><h3 id="_1-前序遍历-根-左-右" tabindex="-1"><a class="header-anchor" href="#_1-前序遍历-根-左-右" aria-hidden="true">#</a> 1. 前序遍历（根-左-右）</h3><p><strong>递归实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def preorder_traversal(root):
    if not root:
        return []
    return [root.val] + preorder_traversal(root.left) + preorder_traversal(root.right)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def preorder_traversal(root):
    if not root:
        return []
    
    stack = [root]
    result = []
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-中序遍历-左-根-右" tabindex="-1"><a class="header-anchor" href="#_2-中序遍历-左-根-右" aria-hidden="true">#</a> 2. 中序遍历（左-根-右）</h3><p><strong>递归实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def inorder_traversal(root):
    if not root:
        return []
    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def inorder_traversal(root):
    stack = []
    result = []
    current = root
    
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        
        current = stack.pop()
        result.append(current.val)
        current = current.right
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-后序遍历-左-右-根" tabindex="-1"><a class="header-anchor" href="#_3-后序遍历-左-右-根" aria-hidden="true">#</a> 3. 后序遍历（左-右-根）</h3><p><strong>递归实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def postorder_traversal(root):
    if not root:
        return []
    return postorder_traversal(root.left) + postorder_traversal(root.right) + [root.val]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>迭代实现</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def postorder_traversal(root):
    if not root:
        return []
    
    stack = [root]
    result = []
    
    while stack:
        node = stack.pop()
        result.append(node.val)
        
        if node.left:
            stack.append(node.left)
        if node.right:
            stack.append(node.right)
    
    return result[::-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-层序遍历-bfs" tabindex="-1"><a class="header-anchor" href="#_4-层序遍历-bfs" aria-hidden="true">#</a> 4. 层序遍历（BFS）</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from collections import deque

def level_order(root):
    if not root:
        return []
    
    queue = deque([root])
    result = []
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="高频面试题" tabindex="-1"><a class="header-anchor" href="#高频面试题" aria-hidden="true">#</a> 高频面试题</h2><h3 id="题目1-二叉树的最大深度" tabindex="-1"><a class="header-anchor" href="#题目1-二叉树的最大深度" aria-hidden="true">#</a> 题目1：二叉树的最大深度</h3><p><strong>题目描述</strong>： 给定一个二叉树，找出其最大深度。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,9,20,null,null,15,7]
输出：3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法1：递归（DFS）</strong></p><ol><li>如果节点为空，深度为0</li><li>否则，深度 = 1 + max(左子树深度, 右子树深度)</li></ol><p><strong>方法2：迭代（BFS）</strong></p><ol><li>层序遍历</li><li>统计层数</li></ol><h4 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python（递归）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Python（迭代）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from collections import deque

def maxDepth(root):
    if not root:
        return 0
    
    queue = deque([root])
    depth = 0
    
    while queue:
        depth += 1
        for _ in range(len(queue)):
            node = queue.popleft()
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
    
    return depth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 访问所有节点</li><li><strong>空间复杂度</strong>：O(h) - h为树的高度</li></ul><h3 id="题目2-翻转二叉树" tabindex="-1"><a class="header-anchor" href="#题目2-翻转二叉树" aria-hidden="true">#</a> 题目2：翻转二叉树</h3><p><strong>题目描述</strong>： 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [4,2,7,1,3,6,9]
输出：[4,7,2,9,6,3,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：递归</strong></p><ol><li>翻转左子树</li><li>翻转右子树</li><li>交换左右子树</li></ol><h4 id="代码实现-1" tabindex="-1"><a class="header-anchor" href="#代码实现-1" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def invertTree(root):
    if not root:
        return None
    
    # 递归翻转左右子树
    left = invertTree(root.left)
    right = invertTree(root.right)
    
    # 交换左右子树
    root.left = right
    root.right = left
    
    return root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>JavaScript</strong>：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>function invertTree(root) {
    if (!root) {
        return null;
    }
    
    // 递归翻转左右子树
    const left = invertTree(root.left);
    const right = invertTree(root.right);
    
    // 交换左右子树
    root.left = right;
    root.right = left;
    
    return root;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 访问所有节点</li><li><strong>空间复杂度</strong>：O(h) - 递归栈深度</li></ul><h3 id="题目3-二叉树的层序遍历" tabindex="-1"><a class="header-anchor" href="#题目3-二叉树的层序遍历" aria-hidden="true">#</a> 题目3：二叉树的层序遍历</h3><p><strong>题目描述</strong>： 给你二叉树的根节点 root ，返回其节点值的层序遍历。（即逐层地，从左到右访问所有节点）。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [3,9,20,null,null,15,7]
输出：[[3],[9,20],[15,7]]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-2" tabindex="-1"><a class="header-anchor" href="#解题思路-2" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：BFS</strong></p><ol><li>使用队列</li><li>每次处理一层的节点</li><li>将下一层节点加入队列</li></ol><h4 id="代码实现-2" tabindex="-1"><a class="header-anchor" href="#代码实现-2" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>from collections import deque

def levelOrder(root):
    if not root:
        return []
    
    result = []
    queue = deque([root])
    
    while queue:
        level = []
        for _ in range(len(queue)):
            node = queue.popleft()
            level.append(node.val)
            
            if node.left:
                queue.append(node.left)
            if node.right:
                queue.append(node.right)
        
        result.append(level)
    
    return result
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 访问所有节点</li><li><strong>空间复杂度</strong>：O(n) - 队列最多存储一层节点</li></ul><h3 id="题目4-验证二叉搜索树" tabindex="-1"><a class="header-anchor" href="#题目4-验证二叉搜索树" aria-hidden="true">#</a> 题目4：验证二叉搜索树</h3><p><strong>题目描述</strong>： 给你一个二叉树的根节点 root ，判断其是否是一个有效的二叉搜索树。</p><p><strong>示例</strong>：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>输入：root = [2,1,3]
输出：true

输入：root = [5,1,4,null,null,3,6]
输出：false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="解题思路-3" tabindex="-1"><a class="header-anchor" href="#解题思路-3" aria-hidden="true">#</a> 解题思路</h4><p><strong>方法：中序遍历</strong></p><ol><li>BST的中序遍历是递增的</li><li>遍历过程中检查是否递增</li></ol><h4 id="代码实现-3" tabindex="-1"><a class="header-anchor" href="#代码实现-3" aria-hidden="true">#</a> 代码实现</h4><p><strong>Python（递归）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def isValidBST(root):
    def validate(node, low=float(&#39;-inf&#39;), high=float(&#39;inf&#39;)):
        if not node:
            return True
        
        if node.val &lt;= low or node.val &gt;= high:
            return False
        
        return (validate(node.left, low, node.val) and 
                validate(node.right, node.val, high))
    
    return validate(root)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Python（中序遍历）</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def isValidBST(root):
    stack = []
    prev = float(&#39;-inf&#39;)
    current = root
    
    while current or stack:
        while current:
            stack.append(current)
            current = current.left
        
        current = stack.pop()
        
        if current.val &lt;= prev:
            return False
        
        prev = current.val
        current = current.right
    
    return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析-3" tabindex="-1"><a class="header-anchor" href="#复杂度分析-3" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：O(n) - 访问所有节点</li><li><strong>空间复杂度</strong>：O(h) - h为树的高度</li></ul><h2 id="常见陷阱" tabindex="-1"><a class="header-anchor" href="#常见陷阱" aria-hidden="true">#</a> 常见陷阱</h2><h3 id="_1-空指针异常" tabindex="-1"><a class="header-anchor" href="#_1-空指针异常" aria-hidden="true">#</a> 1. 空指针异常</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：未检查空指针
def maxDepth(root):
    return 1 + max(maxDepth(root.left), maxDepth(root.right))  # root可能为None
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-递归深度过大" tabindex="-1"><a class="header-anchor" href="#_2-递归深度过大" aria-hidden="true">#</a> 2. 递归深度过大</h3><p><strong>常见错误</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code># 错误：树太深导致栈溢出
def deep_traversal(root):
    if not root:
        return
    deep_traversal(root.left)
    deep_traversal(root.right)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>正确做法</strong>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>def deep_traversal(root):
    stack = [root]
    while stack:
        node = stack.pop()
        if node:
            stack.append(node.right)
            stack.append(node.left)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用" aria-hidden="true">#</a> 实际应用</h2><h3 id="_1-文件系统" tabindex="-1"><a class="header-anchor" href="#_1-文件系统" aria-hidden="true">#</a> 1. 文件系统</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class FileSystem:
    def __init__(self):
        self.root = TreeNode(&quot;/&quot;)
    
    def create_path(self, path, value):
        components = path.split(&#39;/&#39;)[1:]
        current = self.root
        
        for component in components[:-1]:
            if not current.left:
                return False
            current = current.left
        
        if current.left:
            return False
        
        current.left = TreeNode(components[-1])
        current.left.val = value
        return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-表达式树" tabindex="-1"><a class="header-anchor" href="#_2-表达式树" aria-hidden="true">#</a> 2. 表达式树</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>class ExpressionTree:
    def build_expression_tree(self, postfix):
        stack = []
        
        for token in postfix:
            if token in &#39;+-*/&#39;:
                node = TreeNode(token)
                node.right = stack.pop()
                node.left = stack.pop()
                stack.append(node)
            else:
                stack.append(TreeNode(token))
        
        return stack[0] if stack else None
    
    def evaluate(self, root):
        if not root:
            return 0
        
        if root.val not in &#39;+-*/&#39;:
            return int(root.val)
        
        left = self.evaluate(root.left)
        right = self.evaluate(root.right)
        
        if root.val == &#39;+&#39;:
            return left + right
        elif root.val == &#39;-&#39;:
            return left - right
        elif root.val == &#39;*&#39;:
            return left * right
        elif root.val == &#39;/&#39;:
            return left // right
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2025年面试趋势" tabindex="-1"><a class="header-anchor" href="#_2025年面试趋势" aria-hidden="true">#</a> 2025年面试趋势</h2><h3 id="_1-综合考察" tabindex="-1"><a class="header-anchor" href="#_1-综合考察" aria-hidden="true">#</a> 1. 综合考察</h3><p><strong>趋势</strong>：</p><ul><li>树 + 递归</li><li>树 + DFS/BFS</li><li>树 + 动态规划</li></ul><h3 id="_2-平衡树" tabindex="-1"><a class="header-anchor" href="#_2-平衡树" aria-hidden="true">#</a> 2. 平衡树</h3><p><strong>趋势</strong>：</p><ul><li>AVL树操作</li><li>红黑树原理</li><li>平衡因子计算</li></ul><h3 id="_3-实际场景" tabindex="-1"><a class="header-anchor" href="#_3-实际场景" aria-hidden="true">#</a> 3. 实际场景</h3><p><strong>趋势</strong>：</p><ul><li>文件系统设计</li><li>数据库索引</li><li>表达式求值</li></ul><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>树是重要的非线性数据结构，掌握树的关键在于：</p><ol><li><strong>理解基本概念</strong>：根节点、叶子节点、深度、高度等</li><li><strong>掌握遍历方式</strong>：前序、中序、后序、层序</li><li><strong>熟练递归思想</strong>：树的问题通常可以用递归解决</li><li><strong>注意边界条件</strong>：空树、单节点等</li><li><strong>结合实际应用</strong>：文件系统、表达式树等</li></ol><p><strong>学习建议</strong>：</p><ul><li>多画图理解树的结构</li><li>练习不同遍历方式</li><li>掌握递归和迭代实现</li><li>注意时间复杂度分析</li></ul><p><strong>下一步</strong>：继续学习图、排序、动态规划等高级主题。</p><hr><p><strong>参考资料</strong>：</p><ul><li>LeetCode：https://leetcode.cn/</li><li>《算法（第4版）》</li><li>《剑指Offer》</li></ul>`,139))])}const c=i(a,[["render",t],["__file","数据结构与算法6-树.html.vue"]]);export{c as default};
