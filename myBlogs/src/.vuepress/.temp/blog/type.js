export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-de10551e","v-b7a6730e","v-1fdafb5e","v-9cc963a8","v-5287abb8","v-2550d0d5","v-8ddddf9a","v-8aaadb50","v-69ca7ca6","v-5566609c","v-51ec4a7d","v-1ddff33c","v-6838c058","v-3ba2a5fc","v-06bf7748","v-c91ec6ca","v-184f4da6","v-2e3eac9e"]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-de10551e","v-b7a6730e","v-1fdafb5e","v-9cc963a8","v-5287abb8","v-2550d0d5","v-8ddddf9a","v-8aaadb50","v-69ca7ca6","v-5566609c","v-51ec4a7d","v-1ddff33c","v-6838c058","v-3ba2a5fc","v-06bf7748","v-c91ec6ca"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

