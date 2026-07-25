import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

import matter from 'gray-matter'

function walkMarkdownFiles(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = join(dir, entry.name)

    if (entry.isDirectory()) {
      return walkMarkdownFiles(fullPath)
    }

    return entry.name.endsWith('.md') ? [fullPath] : []
  })
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.filter((tag): tag is string => typeof tag === 'string' && tag.trim().length > 0)
  }

  if (typeof value === 'string' && value.trim()) {
    return [value.trim()]
  }

  return []
}

export default {
  paths() {
    const postsDir = fileURLToPath(new URL('../_posts/', import.meta.url))
    const tagSet = new Set<string>()

    for (const filePath of walkMarkdownFiles(postsDir)) {
      const source = readFileSync(filePath, 'utf-8')
      const { data } = matter(source)

      for (const tag of normalizeTags(data.tags)) {
        tagSet.add(tag)
      }
    }

    return [...tagSet]
      .sort((left, right) => left.localeCompare(right, 'zh-Hant'))
      .map((tag) => ({
        params: {
          tag,
        },
      }))
  },
}