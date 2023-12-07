import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "心得与总结",
        icon: "debug",
        link: "/blogs/",
    },
    {
        text: "物联网相关",
        icon: "blog",
        link: "/thingsboard/",
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
                    { text: "前端编程", icon: "computer", link: "menu" },
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
                    { text: "第一个游戏：《打地鼠》", icon: "computer", link: "打地鼠" },
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
