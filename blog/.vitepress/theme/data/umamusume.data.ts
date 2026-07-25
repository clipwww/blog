import { createContentLoader } from 'vitepress'

import { normalizeDateValue, normalizeDocUrl, sortByDateDesc, type UmamusumePostItem } from '../lib/posts'

export default createContentLoader('umamusume/**/*.md', {
  transform(rawData): UmamusumePostItem[] {
    return rawData
      .map((page) => {
        const normalizedUrl = normalizeDocUrl(page.url)
        const group = normalizedUrl.includes('/champions-meeting/') ? 'champions-meeting' : 'gacha'

        return {
          date: normalizeDateValue(page.frontmatter.date),
          group,
          icon: typeof page.frontmatter.icon === 'string' ? page.frontmatter.icon : undefined,
          summary: typeof page.frontmatter.summary === 'string' ? page.frontmatter.summary : '',
          title: typeof page.frontmatter.title === 'string' ? page.frontmatter.title : 'Untitled',
          url: normalizedUrl,
        }
      })
      .filter((page) => page.url !== '/umamusume/' && page.url !== '/umamusume/README/')
      .sort(sortByDateDesc)
  },
})