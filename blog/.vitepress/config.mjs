import { fileURLToPath } from 'node:url'

import taskLists from 'markdown-it-task-lists'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-Hant-TW',
  title: "David's Blog",
  description: 'なんですか、これ？',
  base: '/blog/',
  lastUpdated: true,
  srcExclude: ['backup/**/*.md'],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  rewrites(id) {
    if (id === 'README.md') {
      return 'index.md'
    }

    const readmeMatch = id.match(/^(.*)\/README\.md$/)
    if (readmeMatch) {
      return `${readmeMatch[1]}/index.md`
    }

    const postMatch = id.match(/^_posts\/(\d{4})\/(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/)
    if (postMatch) {
      const [, year, , month, day, slug] = postMatch
      return `${year}/${month}/${day}/${slug.toLowerCase()}.md`
    }

    return id
  },
  markdown: {
    theme: 'github-dark',
    toc: { level: [2, 4] },
    config(md) {
      md.use(taskLists)
    },
  },
  transformPageData(pageData) {
    const summary = pageData.frontmatter?.summary

    if (!pageData.description && typeof summary === 'string' && summary.trim()) {
      return {
        description: summary.trim(),
      }
    }

    return undefined
  },
  themeConfig: {
    nav: [
      { text: 'About', link: '/about/' },
      { text: 'Posts', link: '/' },
      { text: 'Tags', link: '/tag/' },
    ],
    outline: {
      level: [2, 4],
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/clipwww' },
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026 David, Jian',
    },
    lastUpdated: {
      text: '最後更新',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short',
        forceLocale: true,
      },
    },
  },
  vite: {
    resolve: {
      alias: [
        {
          find: 'vue-feather-icons',
          replacement: fileURLToPath(new URL('./theme/lib/legacy-feather-icons.ts', import.meta.url)),
        },
        {
          find: /^\.\/@\/images\//,
          replacement: `${fileURLToPath(new URL('../assets/images/', import.meta.url))}/`,
        },
        {
          find: /^@\/images\//,
          replacement: `${fileURLToPath(new URL('../assets/images/', import.meta.url))}/`,
        },
      ],
    },
    plugins: [UnoCSS()],
  },
})