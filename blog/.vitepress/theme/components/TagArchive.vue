<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import { data as posts } from '../data/posts.data'
import ArchiveTimeline from './ArchiveTimeline.vue'

const props = defineProps<{
  tag: string
}>()

const normalizedTag = computed(() => decodeURIComponent(props.tag))
const filteredPosts = computed(() => posts.filter((post) => post.tags.includes(normalizedTag.value)))
</script>

<template>
  <section class="tag-archive">
    <header class="tag-archive__header">
      <a class="tag-archive__back" :href="withBase('/tag/')">All tags</a>
      <h1 class="tag-archive__title">{{ normalizedTag }}</h1>
      <p class="tag-archive__description">共 {{ filteredPosts.length }} 篇文章。</p>
    </header>

    <ArchiveTimeline :posts="filteredPosts" />
  </section>
</template>

<style scoped>
.tag-archive {
  display: grid;
  gap: 1.5rem;
}

.tag-archive__header {
  display: grid;
  gap: 0.4rem;
}

.tag-archive__back {
  color: var(--vp-c-brand-1);
  font-size: 0.95rem;
  text-decoration: none;
}

.tag-archive__title,
.tag-archive__description {
  margin: 0;
}

.tag-archive__description {
  color: var(--vp-c-text-2);
}
</style>