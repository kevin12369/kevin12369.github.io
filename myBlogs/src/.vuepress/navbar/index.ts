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
                text: "2023年面试资料",
                icon: "edit",
                prefix: "vue/",
                children: [
                    { text: "Vue面试资料", icon: "computer", link: "2023年vue面试资料" },
                ],

            },
            {
                text: "编程技术",
                icon: "edit",
                prefix: "technology/",
                children: [
                    { text: "编程技术", icon: "computer", link: "menu" },
                ],

            },
        ],
    },
    {
        text: "游戏与设计",
        icon: "launch",
        link: "https://theme-hope.vuejs.vuepress/zh/",
    },
]);
