declare module 'virtual:config' {
  const Config: import('astro-pure/types').ConfigOutput
  export default Config
}

declare module 'public/links.json' {
  const links: {
    friends: Array<Array<{
      name: string
      url: string
      avatar?: string
      description?: string
    }>>
  }
  export default links
}
