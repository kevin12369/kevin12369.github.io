import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
    "/",
    {
        text: "心得杂记",
        icon: "blog",
        link: "/blogs/",
    },
    {
        text: "编程知识",
        icon: "computer", 
        prefix: "/programming/",
        children: [
            {
                text: "物联网开发知识",
                icon: "edit",
                prefix: "thingsboard/",
                children: [
                    { text: "物联网开发知识", icon: "computer", link: "menu" },
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
        text: "游戏设计",
        icon: "launch",
        link: "https://theme-hope.vuejs.vuepress/zh/",
    },
]);
