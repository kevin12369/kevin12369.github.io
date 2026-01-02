import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "AIGC",
        icon: "robot",
        prefix: "/aigc/",
        children: [
            {
                text: "大语言模型",
                icon: "brain",
                prefix: "大语言模型/",
                children: [
                    { text: "OpenAI接口文档", icon: "code", link: "OpenAI接口文档" },
                    { text: "Llama 3：Meta开源大模型的进化之路", icon: "language", link: "Llama 3：Meta开源大模型的进化之路" },
                    { text: "2025年大模型技术突破与趋势", icon: "trending-up", link: "2025年大模型技术突破与趋势" },
                ],
            },
            {
                text: "AI框架",
                icon: "puzzle-piece",
                prefix: "AI框架/",
                children: [
                    { text: "LangChain：构建AI智能体的操作系统", icon: "robot", link: "LangChain：构建AI智能体的操作系统" },
                    { text: "2025年大模型部署框架全解析：vLLM vs Ollama", icon: "server", link: "2025年大模型部署框架全解析：vLLM vs Ollama" },
                ],
            },
            {
                text: "本周AIGC资讯",
                icon: "newspaper",
                prefix: "AI应用/",
                children: [
                    { text: "第2期", icon: "fire", link: "本周AIGC资讯-第2期" },
                    { text: "第1期", icon: "fire", link: "本周AIGC资讯-第1期" },
                ],
            },
            {
                text: "年度回顾",
                icon: "star",
                prefix: "AI应用/",
                children: [
                    { text: "2025年AIGC年度回顾", icon: "trophy", link: "2025年AIGC年度回顾特刊" },
                ],
            },
        ]
    },
    {
        text: "前端开发",
        icon: "code",
        prefix: "/frontend/",
        children: [
            {
                text: "面试资料",
                icon: "graduation-cap",
                children: [
                    { text: "Vue篇", icon: "vuejs", link: "2023年前端面试系列-vue篇" },
                    { text: "JS篇", icon: "javascript", link: "2023年前端面试系列-JS篇" },
                    {text: "HTML&CSS篇", icon: "html5", link: "2023年前端面试系列-HTML&CSS篇" },
                    { text: "TypeScript篇", icon: "code", link: "前端面试系列-TypeScript篇" },
                    { text: "性能优化篇", icon: "rocket", link: "前端面试系列-性能优化篇" },
                    { text: "工程化篇", icon: "tools", link: "前端面试系列-工程化篇" },
                    { text: "50道CSS基础面试题", icon: "css3-alt", link: "前端面试系列-50道CSS基础面试题（附答案）" },
                    { text: "HTML 5 语义化", icon: "file-code", link: "前端面试系列-HTML 5 语义化" },
                ],
            },
            {
                text: "技术学习",
                icon: "lightbulb",
                children: [
                    { text: "AST抽象语法树", icon: "tree", link: "AST抽象语法树" },
                    { text: "POST请求发送两次的原因", icon: "question-circle", link: "post为什么会发送两次请求" },
                    { text: "Vue+Axios全局接口防抖、节流封装", icon: "shield-check", link: "Vue+Axios全局接口防抖、节流封装实现，让你前端开发更高效" },
                    { text: "浏览器渲染原理", icon: "monitor", link: "前端技术学习-浏览器渲染原理" },
                    { text: "HTTP协议详解", icon: "network-wired", link: "前端技术学习-HTTP协议详解" },
                    { text: "跨域问题详解", icon: "globe", link: "前端技术学习-跨域问题详解" },
                    { text: "Web安全详解", icon: "shield-alt", link: "前端技术学习-Web安全" },
                ],
            },
        ]
    },
    {
        text: "数据结构与算法",
        icon: "function",
        prefix: "/algorithm/",
        children: [
            { text: "前言", icon: "list-ol", link: "数据结构与算法1-前言" },
            { text: "数组", icon: "database", link: "数据结构与算法2-数组" },
            { text: "二维数组", icon: "table", link: "数据结构与算法3-二维数组" },
            { text: "链表", icon: "link", link: "数据结构与算法4-链表" },
            { text: "栈与队列", icon: "layer-group", link: "数据结构与算法5-栈与队列" },
            { text: "树", icon: "sitemap", link: "数据结构与算法6-树" },
            { text: "排序算法", icon: "sort", link: "数据结构与算法7-排序算法" },
            { text: "查找算法", icon: "search", link: "数据结构与算法8-查找算法" },
            { text: "动态规划", icon: "brain", link: "数据结构与算法9-动态规划" },
            { text: "贪心算法", icon: "bolt", link: "数据结构与算法10-贪心算法" },
        ]
    },
    {
        text: "游戏开发",
        icon: "gamepad",
        prefix: "/game/",
        children: [
            { text: "Unity是什么", icon: "controller", link: "Unity是什么" },
            { text: "Unreal Engine是什么", icon: "cube", link: "Unreal Engine是什么" },
            { text: "Godot是什么", icon: "dice", link: "Godot是什么" },
            { text: "打地鼠", icon: "game-controller", link: "打地鼠" },
        ]
    },
    {
        text: "物联网",
        icon: "cloud",
        prefix: "/thingsboard/",
        children: [
            { text: "什么是物联网", icon: "wifi", link: "什么是物联网" },
            { text: "什么是ThingsBoard", icon: "server", link: "什么是ThingsBoard" },
            { text: "基于MQTT的RPC协议", icon: "network-wired", link: "基于MQTT的RPC协议" },
            { text: "在Ubuntu（Linux）中部署ThingsBoard", icon: "ubuntu", link: "在Ubuntu（Linux）中部署ThingsBoard" },
            { text: "在Windows10中部署ThingsBoard", icon: "windows", link: "在Windows10中部署ThingsBoard" },
        ]
    },
    {
        text: "兴趣爱好",
        icon: "heart",
        prefix: "/blogs/",
        children: [
            {
                text: "随笔",
                icon: "pen",
                prefix: "notes/",
                children: [
                    { text: "笔记", icon: "book", link: "page" },
                ],
            },
            {
                text: "摄影",
                icon: "camera",
                prefix: "photography/",
                children: [
                    { text: "摄影", icon: "image", link: "page" },
                ],
            },
            {
                text: "音乐",
                icon: "music",
                prefix: "music/",
                children: [
                    { text: "音乐", icon: "headphones", link: "page" },
                ],
            },
        ]
    },
]);
