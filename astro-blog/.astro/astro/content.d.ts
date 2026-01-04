declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"essays/blogs/music/page.md": {
	id: "essays/blogs/music/page.md";
  slug: "essays/blogs/music/page";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"essays/blogs/notes/page.md": {
	id: "essays/blogs/notes/page.md";
  slug: "essays/blogs/notes/page";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"essays/blogs/photography/page.md": {
	id: "essays/blogs/photography/page.md";
  slug: "essays/blogs/photography/page";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/2023年前端面试系列-HTML&CSS篇.md": {
	id: "interview/frontend/2023年前端面试系列-HTML&CSS篇.md";
  slug: "interview/frontend/2023年前端面试系列-htmlcss篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/2023年前端面试系列-JS篇.md": {
	id: "interview/frontend/2023年前端面试系列-JS篇.md";
  slug: "interview/frontend/2023年前端面试系列-js篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/2023年前端面试系列-vue篇.md": {
	id: "interview/frontend/2023年前端面试系列-vue篇.md";
  slug: "interview/frontend/2023年前端面试系列-vue篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/前端面试系列-50道CSS基础面试题（附答案）.md": {
	id: "interview/frontend/前端面试系列-50道CSS基础面试题（附答案）.md";
  slug: "interview/frontend/前端面试系列-50道css基础面试题附答案";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/前端面试系列-HTML 5 语义化.md": {
	id: "interview/frontend/前端面试系列-HTML 5 语义化.md";
  slug: "interview/frontend/前端面试系列-html-5-语义化";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/前端面试系列-TypeScript篇.md": {
	id: "interview/frontend/前端面试系列-TypeScript篇.md";
  slug: "interview/frontend/前端面试系列-typescript篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/前端面试系列-工程化篇.md": {
	id: "interview/frontend/前端面试系列-工程化篇.md";
  slug: "interview/frontend/前端面试系列-工程化篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"interview/frontend/前端面试系列-性能优化篇.md": {
	id: "interview/frontend/前端面试系列-性能优化篇.md";
  slug: "interview/frontend/前端面试系列-性能优化篇";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/01-AI增强型全栈开发者：2026年技术角色全景解析.md": {
	id: "learning/ai-fullstack/01-AI增强型全栈开发者：2026年技术角色全景解析.md";
  slug: "learning/ai-fullstack/01-ai增强型全栈开发者2026年技术角色全景解析";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/02-全栈开发的技术演进：从工具时代到智能体时代.md": {
	id: "learning/ai-fullstack/02-全栈开发的技术演进：从工具时代到智能体时代.md";
  slug: "learning/ai-fullstack/02-全栈开发的技术演进从工具时代到智能体时代";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/03-AI编程效率的实证研究：从神话到现实.md": {
	id: "learning/ai-fullstack/03-AI编程效率的实证研究：从神话到现实.md";
  slug: "learning/ai-fullstack/03-ai编程效率的实证研究从神话到现实";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/04-Agents vs Skills - 技术范式之争.md": {
	id: "learning/ai-fullstack/04-Agents vs Skills - 技术范式之争.md";
  slug: "learning/ai-fullstack/04-agents-vs-skills---技术范式之争";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/05-Vibe Coding的批判性分析.md": {
	id: "learning/ai-fullstack/05-Vibe Coding的批判性分析.md";
  slug: "learning/ai-fullstack/05-vibe-coding的批判性分析";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/06-Claude Skills深度解析.md": {
	id: "learning/ai-fullstack/06-Claude Skills深度解析.md";
  slug: "learning/ai-fullstack/06-claude-skills深度解析";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/07-AI工具链的工程化实践.md": {
	id: "learning/ai-fullstack/07-AI工具链的工程化实践.md";
  slug: "learning/ai-fullstack/07-ai工具链的工程化实践";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/08-企业级AI应用的最佳实践.md": {
	id: "learning/ai-fullstack/08-企业级AI应用的最佳实践.md";
  slug: "learning/ai-fullstack/08-企业级ai应用的最佳实践";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/09-AI时代的系统设计思维.md": {
	id: "learning/ai-fullstack/09-AI时代的系统设计思维.md";
  slug: "learning/ai-fullstack/09-ai时代的系统设计思维";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/10-Prompt Engineering的工程化方法.md": {
	id: "learning/ai-fullstack/10-Prompt Engineering的工程化方法.md";
  slug: "learning/ai-fullstack/10-prompt-engineering的工程化方法";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/11-AI Agent的记忆与上下文管理.md": {
	id: "learning/ai-fullstack/11-AI Agent的记忆与上下文管理.md";
  slug: "learning/ai-fullstack/11-ai-agent的记忆与上下文管理";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/ai-fullstack/12-2026-2030技术趋势大胆预测与多方向展望.md": {
	id: "learning/ai-fullstack/12-2026-2030技术趋势大胆预测与多方向展望.md";
  slug: "learning/ai-fullstack/12-2026-2030技术趋势大胆预测与多方向展望";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法1-前言.md": {
	id: "learning/algorithm/数据结构与算法1-前言.md";
  slug: "learning/algorithm/数据结构与算法1-前言";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法10-贪心算法.md": {
	id: "learning/algorithm/数据结构与算法10-贪心算法.md";
  slug: "learning/algorithm/数据结构与算法10-贪心算法";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法2-数组.md": {
	id: "learning/algorithm/数据结构与算法2-数组.md";
  slug: "learning/algorithm/数据结构与算法2-数组";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法3-二维数组.md": {
	id: "learning/algorithm/数据结构与算法3-二维数组.md";
  slug: "learning/algorithm/数据结构与算法3-二维数组";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法4-链表.md": {
	id: "learning/algorithm/数据结构与算法4-链表.md";
  slug: "learning/algorithm/数据结构与算法4-链表";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法5-栈与队列.md": {
	id: "learning/algorithm/数据结构与算法5-栈与队列.md";
  slug: "learning/algorithm/数据结构与算法5-栈与队列";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法6-树.md": {
	id: "learning/algorithm/数据结构与算法6-树.md";
  slug: "learning/algorithm/数据结构与算法6-树";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法7-排序算法.md": {
	id: "learning/algorithm/数据结构与算法7-排序算法.md";
  slug: "learning/algorithm/数据结构与算法7-排序算法";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法8-查找算法.md": {
	id: "learning/algorithm/数据结构与算法8-查找算法.md";
  slug: "learning/algorithm/数据结构与算法8-查找算法";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/algorithm/数据结构与算法9-动态规划.md": {
	id: "learning/algorithm/数据结构与算法9-动态规划.md";
  slug: "learning/algorithm/数据结构与算法9-动态规划";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-AST抽象语法树.md": {
	id: "learning/frontend-deep/前端技术学习-AST抽象语法树.md";
  slug: "learning/frontend-deep/前端技术学习-ast抽象语法树";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-HTTP协议详解.md": {
	id: "learning/frontend-deep/前端技术学习-HTTP协议详解.md";
  slug: "learning/frontend-deep/前端技术学习-http协议详解";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-POST请求发送两次的原因.md": {
	id: "learning/frontend-deep/前端技术学习-POST请求发送两次的原因.md";
  slug: "learning/frontend-deep/前端技术学习-post请求发送两次的原因";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-Vue+Axios全局接口防抖节流封装.md": {
	id: "learning/frontend-deep/前端技术学习-Vue+Axios全局接口防抖节流封装.md";
  slug: "learning/frontend-deep/前端技术学习-vueaxios全局接口防抖节流封装";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-Web安全.md": {
	id: "learning/frontend-deep/前端技术学习-Web安全.md";
  slug: "learning/frontend-deep/前端技术学习-web安全";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-浏览器渲染原理.md": {
	id: "learning/frontend-deep/前端技术学习-浏览器渲染原理.md";
  slug: "learning/frontend-deep/前端技术学习-浏览器渲染原理";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/frontend-deep/前端技术学习-跨域问题详解.md": {
	id: "learning/frontend-deep/前端技术学习-跨域问题详解.md";
  slug: "learning/frontend-deep/前端技术学习-跨域问题详解";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/game-deep/Godot是什么.md": {
	id: "learning/game-deep/Godot是什么.md";
  slug: "learning/game-deep/godot是什么";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/game-deep/Unity是什么.md": {
	id: "learning/game-deep/Unity是什么.md";
  slug: "learning/game-deep/unity是什么";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"learning/game-deep/Unreal Engine是什么.md": {
	id: "learning/game-deep/Unreal Engine是什么.md";
  slug: "learning/game-deep/unreal-engine是什么";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI应用/2025年AIGC年度回顾特刊.md": {
	id: "news/aigc/AI应用/2025年AIGC年度回顾特刊.md";
  slug: "news/aigc/ai应用/2025年aigc年度回顾特刊";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI应用/本周AIGC资讯-第1期.md": {
	id: "news/aigc/AI应用/本周AIGC资讯-第1期.md";
  slug: "news/aigc/ai应用/本周aigc资讯-第1期";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI应用/本周AIGC资讯-第2期.md": {
	id: "news/aigc/AI应用/本周AIGC资讯-第2期.md";
  slug: "news/aigc/ai应用/本周aigc资讯-第2期";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI框架/2025年大模型部署框架全解析：vLLM vs Ollama.md": {
	id: "news/aigc/AI框架/2025年大模型部署框架全解析：vLLM vs Ollama.md";
  slug: "news/aigc/ai框架/2025年大模型部署框架全解析vllm-vs-ollama";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI框架/AutoGen + FastChat + ChatGLM2-6B 实现本地化部署.md": {
	id: "news/aigc/AI框架/AutoGen + FastChat + ChatGLM2-6B 实现本地化部署.md";
  slug: "news/aigc/ai框架/autogen--fastchat--chatglm2-6b-实现本地化部署";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/AI框架/LangChain：构建AI智能体的操作系统.md": {
	id: "news/aigc/AI框架/LangChain：构建AI智能体的操作系统.md";
  slug: "news/aigc/ai框架/langchain构建ai智能体的操作系统";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/page.md": {
	id: "news/aigc/page.md";
  slug: "news/aigc/page";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/大语言模型/2025年大模型技术突破与趋势.md": {
	id: "news/aigc/大语言模型/2025年大模型技术突破与趋势.md";
  slug: "news/aigc/大语言模型/2025年大模型技术突破与趋势";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/大语言模型/Llama 2：详解Meta的大语言模型!.md": {
	id: "news/aigc/大语言模型/Llama 2：详解Meta的大语言模型!.md";
  slug: "news/aigc/大语言模型/llama-2详解meta的大语言模型";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/大语言模型/Llama 3：Meta开源大模型的进化之路.md": {
	id: "news/aigc/大语言模型/Llama 3：Meta开源大模型的进化之路.md";
  slug: "news/aigc/大语言模型/llama-3meta开源大模型的进化之路";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"news/aigc/大语言模型/OpenAI接口文档.md": {
	id: "news/aigc/大语言模型/OpenAI接口文档.md";
  slug: "news/aigc/大语言模型/openai接口文档";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/game/打地鼠-Godot-CSharp完整教程.md": {
	id: "projects/game/打地鼠-Godot-CSharp完整教程.md";
  slug: "projects/game/打地鼠-godot-csharp完整教程";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/iot/什么是ThingsBoard.md": {
	id: "projects/iot/什么是ThingsBoard.md";
  slug: "projects/iot/什么是thingsboard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/iot/什么是物联网.md": {
	id: "projects/iot/什么是物联网.md";
  slug: "projects/iot/什么是物联网";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/iot/在Ubuntu（Linux）中部署ThingsBoard.md": {
	id: "projects/iot/在Ubuntu（Linux）中部署ThingsBoard.md";
  slug: "projects/iot/在ubuntulinux中部署thingsboard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/iot/在Windows10中部署ThingsBoard.md": {
	id: "projects/iot/在Windows10中部署ThingsBoard.md";
  slug: "projects/iot/在windows10中部署thingsboard";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"projects/iot/基于MQTT的RPC协议.md": {
	id: "projects/iot/基于MQTT的RPC协议.md";
  slug: "projects/iot/基于mqtt的rpc协议";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
"welcome.md": {
	id: "welcome.md";
  slug: "welcome";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../../src/content/config.js");
}
