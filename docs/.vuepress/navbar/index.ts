import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "兴趣爱好",
        icon: "debug",
        prefix: "/blogs/",
        children: [
            {
                text: "随笔",
                icon: "edit",
                children: [
                    { text: "2023年个人总结", icon: "computer", link: "2023年个人总结" },
                ],
            },
            {
                text: "摄影",
                icon: "edit",
                children: [
                    { text: "2023年度摄影总结", icon: "computer", link: "2023年度摄影总结" },
                ],
            },
            {
                text: "音乐",
                icon: "edit",
                children: [
                    { text: "CD播放器测评", icon: "computer", link: "CD播放器测评" },
                ],
            },
        ]
    },
    {
        text: "物联网相关",
        icon: "blog",
        prefix: "/thingsboard/",
        children: [
            {
                text: "ThingsBoard",
                icon: "edit",
                children: [
                    { text: "什么是物联网", icon: "computer", link: "什么是物联网" },
                    { text: "什么是ThingsBoard", icon: "computer", link: "什么是ThingsBoard" },
                    { text: "基于MQTT的RPC协议", icon: "computer", link: "基于MQTT的RPC协议" },
                    { text: "在Ubuntu（Linux）中部署ThingsBoard", icon: "computer", link: "在Ubuntu（Linux）中部署ThingsBoard" },
                    { text: "在Windows10中部署ThingsBoard", icon: "computer", link: "在Windows10中部署ThingsBoard" },
                ],

            },
        ]
    },
    {
        text: "编程的知识",
        icon: "computer", 
        prefix: "/programming/",
        children: [
            {
                text: "前端面试资料",
                icon: "edit",
                prefix: "vue/",
                children: [
                    { text: "Vue面试资料", icon: "computer", link: "2023年前端面试系列-vue篇" },
                    { text: "JS面试资料", icon: "computer", link: "2023年前端面试系列-JS篇" },
                    { text: "HTML&CSS面试资料", icon: "computer", link: "2023年前端面试系列-HTML&CSS篇" },
                ],

            },
            {
                text: "前端编程学习",
                icon: "edit",
                prefix: "technology/",
                children: [
                    { text: "AST抽象语法树", icon: "computer", link: "AST抽象语法树" },
                    { text: "post为什么会发送两次请求", icon: "computer", link: "post为什么会发送两次请求" },
                ],

            },
            {
                text: "探索人工智能",
                icon: "edit",
                prefix: "GPT/",
                children: [
                    { text: "OpenAI接口文档", icon: "computer", link: "OpenAI接口文档" },
                    { text: "LIama 2：详解Meta的大语言模型!", icon: "computer", link: "LIama 2：详解Meta的大语言模型!" },
                ],

            },
        ],
    },
    {
        text: "游戏与设计",
        icon: "launch", 
        prefix: "/GamesStudio/",
        children: [
            {
                text: "游戏引擎介绍",
                icon: "edit",
                prefix: "GameProductionTutorial/",
                children: [
                    { text: "Unity是什么", icon: "computer", link: "Unity是什么" },
                    // { text: "第一个游戏：《打地鼠》", icon: "computer", link: "打地鼠" },
                ],

            },
            {
                text: "使用playmaker制作游戏",
                icon: "edit",
                prefix: "GameProductionTutorial/",
                children: [
                    { text: "第一个游戏：《打地鼠》", icon: "computer", link: "打地鼠" },
                    // { text: "第一个游戏：《打地鼠》", icon: "computer", link: "打地鼠" },
                ],

            },
            // {
            //     text: "前端编程学习",
            //     icon: "edit",
            //     prefix: "technology/",
            //     children: [
            //         { text: "前端编程", icon: "computer", link: "menu" },
            //     ],

            // },
        ],
    },
    // {
    //     text: "游戏与设计",
    //     icon: "launch",
    //     link: "https://theme-hope.vuejs.vuepress/zh/",
    // },
]);
