export const data = JSON.parse("{\"key\":\"v-33cb24bd\",\"path\":\"/blogs/3.html\",\"title\":\"Apple 1\",\"lang\":\"zh-CN\",\"frontmatter\":{\"icon\":\"edit\",\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"Programing\"],\"tag\":[\"red\",\"big\",\"round\"],\"description\":\"Apple 1 Heading 2 Here is the content. Heading 3 Here is the content.\"},\"headers\":[{\"level\":2,\"title\":\"Heading 2\",\"slug\":\"heading-2\",\"link\":\"#heading-2\",\"children\":[{\"level\":3,\"title\":\"Heading 3\",\"slug\":\"heading-3\",\"link\":\"#heading-3\",\"children\":[]}]}],\"readingTime\":{\"minutes\":0.09,\"words\":26},\"filePathRelative\":\"blogs/3.md\",\"localizedDate\":\"2022年1月1日\",\"excerpt\":\"<h1> Apple 1</h1>\\n<h2> Heading 2</h2>\\n<p>Here is the content.</p>\\n<h3> Heading 3</h3>\\n<p>Here is the content.</p>\\n\",\"autoDesc\":true}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
