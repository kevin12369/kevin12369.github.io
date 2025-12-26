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
                icon: "edit",
                prefix: "大语言模型/",
                children: [
                    { text: "OpenAI接口文档", icon: "computer", link: "OpenAI接口文档" },
                    { text: "Llama 2：详解Meta的大语言模型!", icon: "computer", link: "Llama 2：详解Meta的大语言模型!" },
                ],
            },
            {
                text: "AI框架",
                icon: "edit",
                prefix: "AI框架/",
                children: [
                    { text: "AutoGen + FastChat + ChatGLM2-6B 实现本地化部署", icon: "computer", link: "AutoGen + FastChat + ChatGLM2-6B 实现本地化部署" },
                ],
            },
            {
                text: "本周AIGC资讯",
                icon: "edit",
                prefix: "AI应用/",
                children: [
                    { text: "第1期", icon: "computer", link: "本周AIGC资讯-第1期" },
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
                icon: "edit",
                children: [
                    { text: "Vue篇", icon: "computer", link: "2023年前端面试系列-vue篇" },
                    { text: "JS篇", icon: "computer", link: "2023年前端面试系列-JS篇" },
                    { text: "HTML&CSS篇", icon: "computer", link: "2023年前端面试系列-HTML&CSS篇" },
                    { text: "50道CSS基础面试题", icon: "computer", link: "前端面试系列-50道CSS基础面试题（附答案）" },
                    { text: "HTML 5 语义化", icon: "computer", link: "前端面试系列-HTML 5 语义化" },
                ],
            },
            {
                text: "技术学习",
                icon: "edit",
                children: [
                    { text: "AST抽象语法树", icon: "computer", link: "AST抽象语法树" },
                    { text: "post为什么会发送两次请求", icon: "computer", link: "post为什么会发送两次请求" },
                    { text: "Vue+Axios全局接口防抖、节流封装", icon: "computer", link: "Vue+Axios全局接口防抖、节流封装实现，让你前端开发更高效" },
                ],
            },
        ]
    },
    {
        text: "数据结构与算法",
        icon: "function",
        prefix: "/algorithm/",
        children: [
            { text: "前言", icon: "computer", link: "数据结构与算法1-前言" },
            { text: "数组", icon: "computer", link: "数据结构与算法2-数组" },
            { text: "二维数组", icon: "computer", link: "数据结构与算法3-二维数组" },
        ]
    },
    {
        text: "游戏开发",
        icon: "gamepad",
        prefix: "/game/",
        children: [
            { text: "Unity是什么", icon: "computer", link: "Unity是什么" },
            { text: "Unreal Engine是什么", icon: "computer", link: "Unreal Engine是什么" },
            { text: "Godot是什么", icon: "computer", link: "Godot是什么" },
            { text: "打地鼠", icon: "computer", link: "打地鼠" },
        ]
    },
    {
        text: "物联网",
        icon: "link",
        prefix: "/thingsboard/",
        children: [
            { text: "什么是物联网", icon: "computer", link: "什么是物联网" },
            { text: "什么是ThingsBoard", icon: "computer", link: "什么是ThingsBoard" },
            { text: "基于MQTT的RPC协议", icon: "computer", link: "基于MQTT的RPC协议" },
            { text: "在Ubuntu（Linux）中部署ThingsBoard", icon: "computer", link: "在Ubuntu（Linux）中部署ThingsBoard" },
            { text: "在Windows10中部署ThingsBoard", icon: "computer", link: "在Windows10中部署ThingsBoard" },
        ]
    },
    {
        text: "兴趣爱好",
        icon: "heart",
        prefix: "/blogs/",
        children: [
            {
                text: "随笔",
                icon: "edit",
                prefix: "notes/",
                children: [
                    { text: "笔记", icon: "computer", link: "page" },
                ],
            },
            {
                text: "摄影",
                icon: "camera",
                prefix: "photography/",
                children: [
                    { text: "摄影", icon: "computer", link: "page" },
                ],
            },
            {
                text: "音乐",
                icon: "music",
                prefix: "music/",
                children: [
                    { text: "音乐", icon: "computer", link: "page" },
                ],
            },
        ]
    },
]);
