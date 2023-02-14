export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-c91ec6ca","v-6035d8f4","v-07c63ada","v-097b1379","v-4c8267f4","v-515653ef","v-1ddff33c","v-6838c058","v-3ba2a5fc","v-06bf7748","v-184f4da6","v-2e3eac9e","v-19917f40","v-8c7d51fa","v-11149dbb","v-7065ffef"]}},"star":{"/":{"path":"/star/","keys":["v-c91ec6ca"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-6035d8f4","v-07c63ada","v-097b1379","v-4c8267f4","v-515653ef","v-1ddff33c","v-6838c058","v-3ba2a5fc","v-06bf7748","v-c91ec6ca"]}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType)
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  });

