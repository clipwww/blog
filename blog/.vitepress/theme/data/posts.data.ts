import { createContentLoader } from 'vitepress'

import { normalizeDateValue, normalizeTags, resolveBlogPostUrl, sortByDateDesc, type PostItem } from '../lib/posts'

export type { PostItem } from '../lib/posts'

export default createContentLoader('_posts/**/*.md', {
  excerpt: true,
  transform(rawData): PostItem[] {
    return rawData
      .map((page) => ({
        author: typeof page.frontmatter.author === 'string' ? page.frontmatter.author : undefined,
        date: normalizeDateValue(page.frontmatter.date),
        location: typeof page.frontmatter.location === 'string' ? page.frontmatter.location : undefined,
        summary: typeof page.frontmatter.summary === 'string' ? page.frontmatter.summary : '',
        tags: normalizeTags(page.frontmatter.tags),
        title: typeof page.frontmatter.title === 'string' ? page.frontmatter.title : 'Untitled',
        url: resolveBlogPostUrl(page.url, page.frontmatter.date),
      }))
      .sort(sortByDateDesc)
  },
})