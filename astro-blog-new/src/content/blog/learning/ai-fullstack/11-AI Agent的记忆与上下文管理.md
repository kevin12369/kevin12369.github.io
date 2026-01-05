---
language: 'zh-CN'
title: 'AI Agent的记忆与上下文管理（十一）'
description: 'AI Agent的记忆和上下文管理能力是其智能水平的关键指标。一个优秀的AI Agent不仅需要能够处理当前任务，还需要能够记住历史信息、理解上下文、并在需要时检索相关信息。'
publishDate: '2026-01-03'
updatedDate: '2026-01-05 23:27:21'
tags:
 - AI Agent
 - 记忆系统
 - 上下文管理
 - RAG
---


# AI Agent的记忆与上下文管理

## 前言：记忆是智能的基础

AI Agent的记忆和上下文管理能力是其智能水平的关键指标。一个优秀的AI Agent不仅需要能够处理当前任务，还需要能够记住历史信息、理解上下文、并在需要时检索相关信息。

本文将深入分析AI Agent的记忆和上下文管理，包括记忆类型、记忆架构、上下文管理、记忆检索和优化策略。

### 研究基础

本文的分析基于以下来源：

- **认知科学研究**
- **AI Agent框架文档**
- **向量数据库最佳实践**
- **企业级应用案例**

## 第一部分：记忆类型

### 1.1 短期记忆

**定义：**
临时存储当前对话和工作状态的记忆，容量有限，持续时间短。

**特点：**
- 容量小（通常几千到几万个Token）
- 持续时间短（会话结束即消失）
- 访问速度快
- 适合存储当前对话上下文

**应用场景：**
- 对话历史
- 当前任务状态
- 临时变量

**实现示例：**
```python
# short_term_memory.py
from collections import deque

class ShortTermMemory:
    """短期记忆"""
    
    def __init__(self, max_size=10000):
        self.memory = deque(maxlen=max_size)
    
    def add(self, item):
        """添加记忆"""
        self.memory.append({
            'content': item,
            'timestamp': time.time()
        })
    
    def get_recent(self, n=10):
        """获取最近的记忆"""
        return list(self.memory)[-n:]
    
    def clear(self):
        """清空记忆"""
        self.memory.clear()
```

### 1.2 长期记忆

**定义：**
持久化存储重要信息和知识的记忆，容量大，持续时间长。

**特点：**
- 容量大（几乎无限）
- 持续时间长（永久存储）
- 访问速度相对慢
- 适合存储重要信息和知识

**应用场景：**
- 用户偏好
- 历史对话
- 知识库
- 经验总结

**实现示例：**
```python
# long_term_memory.py
import chromadb
from chromadb.config import Settings

class LongTermMemory:
    """长期记忆"""
    
    def __init__(self, collection_name="agent_memory"):
        self.client = chromadb.Client(Settings(
            chroma_db_impl="duckdb+parquet",
            persist_directory="./chroma_db"
        ))
        self.collection = self.client.get_or_create_collection(
            name=collection_name
        )
    
    def add(self, content, metadata=None):
        """添加记忆"""
        import uuid
        memory_id = str(uuid.uuid4())
        
        self.collection.add(
            documents=[content],
            metadatas=[metadata or {}],
            ids=[memory_id]
        )
        
        return memory_id
    
    def search(self, query, n_results=5):
        """搜索记忆"""
        results = self.collection.query(
            query_texts=[query],
            n_results=n_results
        )
        
        return results
    
    def delete(self, memory_id):
        """删除记忆"""
        self.collection.delete(ids=[memory_id])
```

### 1.3 工作记忆

**定义：**
用于处理当前任务和推理过程的记忆，容量有限，但访问速度快。

**特点：**
- 容量小（通常几十到几百个Token）
- 持续时间短（任务完成即释放）
- 访问速度最快
- 适合存储推理过程中的中间结果

**应用场景：**
- 推理过程
- 中间计算结果
- 临时状态

**实现示例：**
```python
# working_memory.py
class WorkingMemory:
    """工作记忆"""
    
    def __init__(self, max_size=100):
        self.memory = {}
        self.max_size = max_size
    
    def set(self, key, value):
        """设置记忆"""
        if len(self.memory) >= self.max_size:
            # 删除最旧的记录
            oldest_key = next(iter(self.memory))
            del self.memory[oldest_key]
        
        self.memory[key] = {
            'value': value,
            'timestamp': time.time()
        }
    
    def get(self, key):
        """获取记忆"""
        return self.memory.get(key, {}).get('value')
    
    def clear(self):
        """清空记忆"""
        self.memory.clear()
```

## 第二部分：记忆架构

### 2.1 三层记忆架构

**架构图：**
```
┌─────────────────────────────────────────────────┐
│              Working Memory                      │
│  (推理过程、中间结果、临时状态)                  │
│  容量：~100 tokens                              │
│  持续时间：任务期间                              │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              Short-term Memory                   │
│  (对话历史、当前任务状态)                        │
│  容量：~10,000 tokens                           │
│  持续时间：会话期间                              │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              Long-term Memory                   │
│  (用户偏好、历史对话、知识库)                    │
│  容量：无限                                     │
│  持续时间：永久                                  │
└─────────────────────────────────────────────────┘
```

**数据流：**
```
输入 → Working Memory → Short-term Memory → Long-term Memory
```

**实现示例：**
```python
# memory_architecture.py
class MemoryArchitecture:
    """记忆架构"""
    
    def __init__(self):
        self.working_memory = WorkingMemory(max_size=100)
        self.short_term_memory = ShortTermMemory(max_size=10000)
        self.long_term_memory = LongTermMemory()
    
    def add_input(self, input_data):
        """添加输入"""
        # 添加到工作记忆
        self.working_memory.set('current_input', input_data)
        
        # 添加到短期记忆
        self.short_term_memory.add(input_data)
    
    def process_task(self, task):
        """处理任务"""
        # 从工作记忆获取当前输入
        current_input = self.working_memory.get('current_input')
        
        # 处理任务
        result = self._process(task, current_input)
        
        # 存储中间结果到工作记忆
        self.working_memory.set('task_result', result)
        
        return result
    
    def consolidate_memory(self):
        """整合记忆"""
        # 从短期记忆获取重要信息
        recent_memories = self.short_term_memory.get_recent(n=10)
        
        # 评估重要性
        important_memories = self._evaluate_importance(recent_memories)
        
        # 存储到长期记忆
        for memory in important_memories:
            self.long_term_memory.add(
                content=memory['content'],
                metadata={'timestamp': memory['timestamp']}
            )
```

### 2.2 分层记忆架构

**架构图：**
```
┌─────────────────────────────────────────────────┐
│              L1: Working Memory                  │
│  (推理过程、中间结果)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L2: Session Memory                  │
│  (对话历史、任务状态)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L3: User Memory                     │
│  (用户偏好、历史对话)                            │
└───────────────┬─────────────────┬───────────────┘
                │                 │
┌───────────────▼─────────────────▼───────────────┐
│              L4: Knowledge Memory                │
│  (知识库、领域知识)                              │
└─────────────────────────────────────────────────┘
```

**特点：**
- 分层存储
- 逐层抽象
- 优化检索

## 第三部分：上下文管理

### 3.1 上下文窗口

**问题：**
LLM的上下文窗口有限，无法无限存储对话历史。

**解决方案：**

**方案1：滑动窗口**
```python
# sliding_window.py
from collections import deque

class SlidingWindowManager:
    """滑动窗口管理器"""
    
    def __init__(self, window_size=10):
        self.window = deque(maxlen=window_size)
    
    def add_message(self, role, content):
        """添加消息"""
        self.window.append({
            'role': role,
            'content': content
        })
    
    def get_context(self):
        """获取上下文"""
        return list(self.window)
```

**方案2：重要性采样**
```python
# importance_sampling.py
class ImportanceSamplingManager:
    """重要性采样管理器"""
    
    def __init__(self, max_tokens=4000):
        self.messages = []
        self.max_tokens = max_tokens
    
    def add_message(self, role, content, importance=1.0):
        """添加消息"""
        self.messages.append({
            'role': role,
            'content': content,
            'importance': importance,
            'tokens': len(content.split())
        })
    
    def get_context(self):
        """获取上下文（基于重要性）"""
        # 按重要性排序
        sorted_messages = sorted(
            self.messages,
            key=lambda x: x['importance'],
            reverse=True
        )
        
        # 选择最重要的消息
        selected_messages = []
        total_tokens = 0
        
        for message in sorted_messages:
            if total_tokens + message['tokens'] <= self.max_tokens:
                selected_messages.append(message)
                total_tokens += message['tokens']
        
        # 按时间顺序排序
        selected_messages.sort(key=lambda x: self.messages.index(x))
        
        return selected_messages
```

**方案3：摘要压缩**
```python
# summary_compression.py
class SummaryCompressionManager:
    """摘要压缩管理器"""
    
    def __init__(self, max_tokens=4000, summary_ratio=0.3):
        self.messages = []
        self.max_tokens = max_tokens
        self.summary_ratio = summary_ratio
    
    def add_message(self, role, content):
        """添加消息"""
        self.messages.append({
            'role': role,
            'content': content,
            'tokens': len(content.split())
        })
    
    def get_context(self):
        """获取上下文（带摘要压缩）"""
        # 计算总Token数
        total_tokens = sum(m['tokens'] for m in self.messages)
        
        if total_tokens <= self.max_tokens:
            return self.messages
        
        # 压缩旧消息
        summary_tokens = int(self.max_tokens * self.summary_ratio)
        context_tokens = self.max_tokens - summary_tokens
        
        # 选择最近的上下文
        recent_messages = []
        accumulated_tokens = 0
        
        for message in reversed(self.messages):
            if accumulated_tokens + message['tokens'] <= context_tokens:
                recent_messages.insert(0, message)
                accumulated_tokens += message['tokens']
        
        # 生成旧消息的摘要
        old_messages = self.messages[:-len(recent_messages)]
        if old_messages:
            summary = self._generate_summary(old_messages)
            recent_messages.insert(0, {
                'role': 'system',
                'content': f"Previous conversation summary: {summary}",
                'tokens': len(summary.split())
            })
        
        return recent_messages
    
    def _generate_summary(self, messages):
        """生成摘要"""
        # 使用LLM生成摘要
        return "Summary of previous conversation..."
```

### 3.2 上下文增强

**方法1：检索增强（RAG）**
```python
# rag_context.py
class RAGContextManager:
    """检索增强上下文管理器"""
    
    def __init__(self, knowledge_base):
        self.knowledge_base = knowledge_base
        self.context_window = []
    
    def add_message(self, role, content):
        """添加消息"""
        self.context_window.append({
            'role': role,
            'content': content
        })
    
    def get_context(self, query, n_retrievals=3):
        """获取增强的上下文"""
        # 检索相关知识
        retrieved_docs = self.knowledge_base.search(query, n_results=n_retrievals)
        
        # 构建增强的上下文
        context = self.context_window.copy()
        
        # 在上下文中插入检索到的知识
        if retrieved_docs:
            context.insert(0, {
                'role': 'system',
                'content': f"Relevant knowledge: {retrieved_docs}"
            })
        
        return context
```

**方法2：知识图谱增强**
```python
# knowledge_graph_context.py
class KnowledgeGraphContextManager:
    """知识图谱上下文管理器"""
    
    def __init__(self, knowledge_graph):
        self.knowledge_graph = knowledge_graph
        self.context_window = []
    
    def add_message(self, role, content):
        """添加消息"""
        self.context_window.append({
            'role': role,
            'content': content
        })
    
    def get_context(self, query):
        """获取增强的上下文"""
        # 从知识图谱中提取相关实体和关系
        entities = self.knowledge_graph.extract_entities(query)
        relations = self.knowledge_graph.get_relations(entities)
        
        # 构建增强的上下文
        context = self.context_window.copy()
        
        if relations:
            context.insert(0, {
                'role': 'system',
                'content': f"Related entities and relations: {relations}"
            })
        
        return context
```

## 第四部分：记忆检索

### 4.1 向量检索

**原理：**
将文本转换为向量，使用向量相似度进行检索。

**实现：**
```python
# vector_retrieval.py
import chromadb
from chromadb.config import Settings

class VectorRetriever:
    """向量检索器"""
    
    def __init__(self, collection_name="memory"):
        self.client = chromadb.Client(Settings(
            chroma_db_impl="duckdb+parquet",
            persist_directory="./chroma_db"
        ))
        self.collection = self.client.get_or_create_collection(
            name=collection_name
        )
    
    def add(self, content, metadata=None):
        """添加文档"""
        import uuid
        doc_id = str(uuid.uuid4())
        
        self.collection.add(
            documents=[content],
            metadatas=[metadata or {}],
            ids=[doc_id]
        )
        
        return doc_id
    
    def retrieve(self, query, n_results=5, metadata_filter=None):
        """检索文档"""
        results = self.collection.query(
            query_texts=[query],
            n_results=n_results,
            where=metadata_filter
        )
        
        return results
    
    def delete(self, doc_id):
        """删除文档"""
        self.collection.delete(ids=[doc_id])
```

### 4.2 混合检索

**原理：**
结合向量检索和关键词检索，提升检索准确性。

**实现：**
```python
# hybrid_retrieval.py
from vector_retrieval import VectorRetriever
from keyword_retrieval import KeywordRetriever

class HybridRetriever:
    """混合检索器"""
    
    def __init__(self):
        self.vector_retriever = VectorRetriever()
        self.keyword_retriever = KeywordRetriever()
    
    def retrieve(self, query, n_results=5):
        """混合检索"""
        # 向量检索
        vector_results = self.vector_retriever.retrieve(query, n_results=n_results)
        
        # 关键词检索
        keyword_results = self.keyword_retrieval.retrieve(query, n_results=n_results)
        
        # 合并结果
        hybrid_results = self._merge_results(vector_results, keyword_results)
        
        # 返回前n_results个结果
        return hybrid_results[:n_results]
    
    def _merge_results(self, vector_results, keyword_results):
        """合并结果"""
        # 简单的合并策略
        merged = []
        
        # 添加向量检索结果
        for result in vector_results:
            if result not in merged:
                merged.append(result)
        
        # 添加关键词检索结果
        for result in keyword_results:
            if result not in merged:
                merged.append(result)
        
        return merged
```

### 4.3 重排序检索

**原理：**
先使用快速检索获取候选结果，再使用重排序模型进行精排。

**实现：**
```python
# reranking_retrieval.py
from vector_retrieval import VectorRetriever
from reranker import Reranker

class RerankingRetriever:
    """重排序检索器"""
    
    def __init__(self):
        self.vector_retriever = VectorRetriever()
        self.reranker = Reranker()
    
    def retrieve(self, query, n_candidates=20, n_results=5):
        """重排序检索"""
        # 第一阶段：快速检索
        candidates = self.vector_retriever.retrieve(query, n_results=n_candidates)
        
        # 第二阶段：重排序
        reranked_results = self.reranker.rerank(query, candidates)
        
        # 返回前n_results个结果
        return reranked_results[:n_results]
```

## 第五部分：记忆优化

### 5.1 记忆压缩

**方法1：摘要压缩**
```python
# memory_compression.py
class MemoryCompressor:
    """记忆压缩器"""
    
    def compress(self, memories):
        """压缩记忆"""
        # 按时间分组
        grouped = self._group_by_time(memories, group_size=5)
        
        # 为每组生成摘要
        compressed = []
        for group in grouped:
            summary = self._generate_summary(group)
            compressed.append({
                'type': 'summary',
                'content': summary,
                'timestamp': group[-1]['timestamp']
            })
        
        return compressed
    
    def _group_by_time(self, memories, group_size):
        """按时间分组"""
        groups = []
        current_group = []
        
        for memory in memories:
            current_group.append(memory)
            
            if len(current_group) >= group_size:
                groups.append(current_group)
                current_group = []
        
        if current_group:
            groups.append(current_group)
        
        return groups
    
    def _generate_summary(self, memories):
        """生成摘要"""
        # 使用LLM生成摘要
        return "Summary of memories..."
```

**方法2：分层压缩**
```python
# hierarchical_compression.py
class HierarchicalCompressor:
    """分层压缩器"""
    
    def compress(self, memories):
        """分层压缩"""
        # 第一层：摘要压缩
        level1 = self._compress_level1(memories)
        
        # 第二层：主题聚类
        level2 = self._compress_level2(level1)
        
        # 第三层：高层摘要
        level3 = self._compress_level3(level2)
        
        return level3
    
    def _compress_level1(self, memories):
        """第一层压缩：摘要"""
        # 将相似的记忆合并为摘要
        return memories
    
    def _compress_level2(self, memories):
        """第二层压缩：主题聚类"""
        # 按主题聚类记忆
        return memories
    
    def _compress_level3(self, memories):
        """第三层压缩：高层摘要"""
        # 生成高层摘要
        return memories
```

### 5.2 记忆清理

**清理策略：**

**策略1：基于时间的清理**
```python
# time_based_cleanup.py
import time

class TimeBasedCleanup:
    """基于时间的清理"""
    
    def __init__(self, max_age=30*24*3600):  # 30天
        self.max_age = max_age
    
    def cleanup(self, memories):
        """清理过期记忆"""
        current_time = time.time()
        
        cleaned = []
        for memory in memories:
            age = current_time - memory['timestamp']
            
            if age < self.max_age:
                cleaned.append(memory)
        
        return cleaned
```

**策略2：基于重要性的清理**
```python
# importance_based_cleanup.py
class ImportanceBasedCleanup:
    """基于重要性的清理"""
    
    def __init__(self, min_importance=0.5):
        self.min_importance = min_importance
    
    def cleanup(self, memories):
        """清理不重要的记忆"""
        cleaned = []
        
        for memory in memories:
            importance = memory.get('importance', 1.0)
            
            if importance >= self.min_importance:
                cleaned.append(memory)
        
        return cleaned
```

**策略3：基于访问频率的清理**
```python
# frequency_based_cleanup.py
class FrequencyBasedCleanup:
    """基于访问频率的清理"""
    
    def __init__(self, min_access_count=1):
        self.min_access_count = min_access_count
    
    def cleanup(self, memories):
        """清理不常访问的记忆"""
        cleaned = []
        
        for memory in memories:
            access_count = memory.get('access_count', 0)
            
            if access_count >= self.min_access_count:
                cleaned.append(memory)
        
        return cleaned
```

## 第六部分：最佳实践

### 6.1 记忆设计原则

**原则1：分层设计**
- 工作记忆：处理当前任务
- 短期记忆：存储会话信息
- 长期记忆：存储重要信息

**原则2：容量优化**
- 使用滑动窗口
- 使用摘要压缩
- 使用重要性采样

**原则3：检索优化**
- 使用向量检索
- 使用混合检索
- 使用重排序

**原则4：持续优化**
- 定期清理
- 定期压缩
- 定期评估

### 6.2 上下文管理最佳实践

**实践1：合理设置窗口大小**
- 根据任务复杂度设置
- 根据模型上下文窗口设置
- 根据成本考虑设置

**实践2：使用上下文增强**
- 检索相关知识
- 使用知识图谱
- 使用预训练知识

**实践3：优化上下文质量**
- 过滤无关信息
- 优先重要信息
- 使用摘要压缩

**实践4：监控上下文使用**
- 监控Token消耗
- 监控上下文质量
- 监控检索效果

## 第七部分：未来展望

### 7.1 技术发展趋势

**趋势1：记忆架构智能化**
- 自动记忆分层
- 自动记忆压缩
- 自动记忆清理

**趋势2：检索技术进步**
- 多模态检索
- 实时检索
- 个性化检索

**趋势3：上下文管理优化**
- 动态上下文窗口
- 智能上下文压缩
- 上下文预测

### 7.2 挑战与机遇

**挑战：**
1. 记忆容量限制
2. 检索准确性
3. 上下文窗口限制
4. 记忆一致性

**机遇：**
1. 向量数据库发展
2. 检索技术进步
3. 上下文窗口扩大
4. 记忆架构创新

## 总结：AI Agent的记忆与上下文管理

记忆和上下文管理是AI Agent智能水平的关键指标。

**关键要点：**

1. **记忆类型**
   - 短期记忆
   - 长期记忆
   - 工作记忆

2. **记忆架构**
   - 三层记忆架构
   - 分层记忆架构

3. **上下文管理**
   - 上下文窗口
   - 上下文增强
   - 上下文压缩

4. **记忆检索**
   - 向量检索
   - 混合检索
   - 重排序检索

5. **记忆优化**
   - 记忆压缩
   - 记忆清理

**实践建议：**

1. **设计合理的记忆架构**
   - 分层设计
   - 容量优化
   - 检索优化

2. **优化上下文管理**
   - 合理设置窗口大小
   - 使用上下文增强
   - 优化上下文质量

3. **持续优化记忆**
   - 定期清理
   - 定期压缩
   - 定期评估

## 参考文献

1. 认知科学研究
2. AI Agent框架文档
3. 向量数据库最佳实践
4. 企业级应用案例

---

**系列文章导航：**
1. AI增强型全栈开发者的技术定位与能力模型
2. 全栈开发的技术演进：从工具时代到智能体时代
3. AI编程效率的实证研究：从神话到现实
4. Agents vs Skills - 技术范式之争
5. Vibe Coding的批判性分析
6. Claude Skills深度解析
7. AI工具链的工程化实践
8. 企业级AI应用的最佳实践
9. AI时代的系统设计思维
10. Prompt Engineering的工程化方法
11. AI Agent的记忆与上下文管理（本文）
12. 2026-2030技术趋势大胆预测与多方向展望