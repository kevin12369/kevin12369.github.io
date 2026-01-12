declare module 'virtual:config' {
  const Config: import('astro-pure/types').ConfigOutput
  export default Config
}

declare module 'public/links.json' {
  const links: {
    friends: Array<{
      id_name: string
      desc: string
      link_list: Array<{
        avatar: string
        avatar_cache?: {
          hash: string
          path: string
        }
        name: string
        intro: string
        link: string
      }>
    }>
  }
  export default links
}
