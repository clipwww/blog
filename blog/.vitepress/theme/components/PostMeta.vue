<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'

import { useViewCount } from '../composables/useViewCount'
import { formatPostDate, normalizeTags, tagToPath } from '../lib/posts'

const { frontmatter } = useData()
const { viewCount } = useViewCount()

const title = computed(() => (typeof frontmatter.value.title === 'string' ? frontmatter.value.title : ''))

const formattedDate = computed(() => {
  return formatPostDate(frontmatter.value.date)
})

const tags = computed(() => normalizeTags(frontmatter.value.tags))
const author = computed(() => (typeof frontmatter.value.author === 'string' ? frontmatter.value.author : ''))
const location = computed(() => (typeof frontmatter.value.location === 'string' ? frontmatter.value.location : ''))
const hasMeta = computed(() => Boolean(formattedDate.value || author.value || location.value || viewCount.value !== null || tags.value.length))
</script>

<template>
  <header v-if="hasMeta" class="post-meta">
    <h1 v-if="title" class="post-meta__title">{{ title }}</h1>

    <div class="post-meta__line">
      <time v-if="formattedDate" :datetime="String(frontmatter.date)" class="post-meta__date">
        {{ formattedDate }}
      </time>
      <span v-if="author" class="post-meta__author">{{ author }}</span>
      <span v-if="location" class="post-meta__location">{{ location }}</span>
      <span v-if="viewCount !== null" class="post-meta__views" :aria-label="`文章瀏覽次數 ${viewCount}`">
        <svg class="post-meta__views-icon" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 11a4 4 0 1 1 0-8a4 4 0 0 1 0 8Zm0-2.5A1.5 1.5 0 1 0 12 10a1.5 1.5 0 0 0 0 3Z" fill="currentColor" />
        </svg>
        <span>{{ viewCount }}</span>
      </span>
    </div>

    <ul v-if="tags.length" class="post-meta__tags">
      <li v-for="tag in tags" :key="tag">
        <a :href="withBase(tagToPath(tag))">{{ tag }}</a>
      </li>
    </ul>
  </header>
</template>

<style scoped>
.post-meta {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--vp-c-divider);
  padding-bottom: 1rem;
}

.post-meta__title {
  margin: 0 0 0.75rem;
  font-size: clamp(2rem, 5vw, 2.8rem);
  line-height: 1.05;
}

.post-meta__line {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: var(--vp-c-text-2);
  font-size: 0.95rem;
}

.post-meta__views {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.post-meta__views-icon {
  width: 1rem;
  height: 1rem;
}

.post-meta__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  margin: 0.85rem 0 0;
  padding: 0;
}

.post-meta__tags a {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--vp-c-brand-soft);
  border-radius: 999px;
  padding: 0.2rem 0.7rem;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.post-meta__tags a:hover {
  border-color: var(--vp-c-brand-1);
}
</style>