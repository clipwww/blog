import dayjs from 'dayjs'

export interface PostItem {
  title: string
  url: string
  date: string
  summary: string
  tags: string[]
  author?: string
  location?: string
}

export interface UmamusumePostItem {
  title: string
  url: string
  date: string
  summary: string
  icon?: string
  group: 'champions-meeting' | 'gacha'
}

export interface TagEntry {
  name: string
  count: number
}

export interface PostYearGroup<T extends { date: string }> {
  year: number
  posts: T[]
}

export function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
  }

  if (typeof value === 'string' && value.trim()) {
    return [value.trim()]
  }

  return []
}

export function normalizeDateValue(value: unknown): string {
  if (typeof value === 'string') {
    return value
  }

  if (value instanceof Date) {
    return value.toISOString()
  }

  return ''
}

export function normalizeDocUrl(url: string): string {
  const cleaned = url
    .replace(/index\.html$/, '')
    .replace(/\.html$/, '')
    .replace(/\/$/, '')

  if (!cleaned || cleaned === '/') {
    return '/'
  }

  return cleaned.startsWith('/') ? `${cleaned}/` : `/${cleaned}/`
}

export function resolveBlogPostUrl(rawUrl: string, dateValue: unknown): string {
  const normalized = normalizeDocUrl(rawUrl).replace(/\/$/, '')

  if (/^\/\d{4}\/\d{2}\/\d{2}\/.+/.test(normalized)) {
    return `${normalized}/`
  }

  const fileName = normalized.split('/').filter(Boolean).pop() ?? ''
  const fileMatch = fileName.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/)

  if (fileMatch) {
    const [, year, month, day, slug] = fileMatch
    return `/${year}/${month}/${day}/${slug.toLowerCase()}/`
  }

  const date = dayjs(normalizeDateValue(dateValue))
  if (date.isValid() && fileName) {
    const slug = fileName.replace(/^\d{4}-\d{2}-\d{2}-/, '').toLowerCase()
    return `/${date.format('YYYY/MM/DD')}/${slug}/`
  }

  return normalizeDocUrl(rawUrl)
}

export function formatPostDate(dateValue: unknown, pattern = 'YYYY/MM/DD'): string {
  const normalized = normalizeDateValue(dateValue)
  const date = dayjs(normalized)
  return date.isValid() ? date.format(pattern) : dateValue
}

export function sortByDateDesc<T extends { date: string }>(left: T, right: T): number {
  return dayjs(right.date).valueOf() - dayjs(left.date).valueOf()
}

export function groupPostsByYear<T extends { date: string }>(posts: T[]): PostYearGroup<T>[] {
  const groups = new Map<number, T[]>()

  for (const post of posts) {
    const year = dayjs(post.date).year()
    const bucket = groups.get(year) ?? []
    bucket.push(post)
    groups.set(year, bucket)
  }

  return [...groups.entries()]
    .sort((left, right) => right[0] - left[0])
    .map(([year, items]) => ({
      year,
      posts: [...items].sort(sortByDateDesc),
    }))
}

export function collectTags(posts: PostItem[]): TagEntry[] {
  const counts = new Map<string, number>()

  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1)
    }
  }

  return [...counts.entries()]
    .map(([name, count]) => ({ name, count }))
    .sort((left, right) => {
      if (right.count !== left.count) {
        return right.count - left.count
      }

      return left.name.localeCompare(right.name, 'zh-Hant')
    })
}

export function tagToPath(tag: string): string {
  return `/tag/${encodeURIComponent(tag)}/`
}

export function isArticlePage(relativePath: string, layout?: string): boolean {
  return relativePath.startsWith('_posts/')
    || /^\d{4}\/\d{2}\/\d{2}\/.+\.md$/.test(relativePath)
    || layout === 'Post'
}