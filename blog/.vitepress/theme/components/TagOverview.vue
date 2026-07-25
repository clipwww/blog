<script setup lang="ts">
import { computed } from 'vue'

import { data as posts } from '../data/posts.data'
import { collectTags } from '../lib/posts'
import ArchiveTimeline from './ArchiveTimeline.vue'
import TagPill from './TagPill.vue'

const tags = computed(() => collectTags(posts))
</script>

<template>
  <section class="tag-overview">
    <header class="tag-overview__header">
      <p class="tag-overview__eyebrow">Browse</p>
      <h1 class="tag-overview__title">Tags</h1>
      <p class="tag-overview__description">依標籤快速找文章，也保留一份完整時間軸。</p>
    </header>

    <div class="tag-overview__tags">
      <TagPill v-for="tag in tags" :key="tag.name" :count="tag.count" :tag="tag.name" />
    </div>

    <ArchiveTimeline :posts="posts" />
  </section>
</template>

<style scoped>
.tag-overview {
  display: grid;
  gap: 1.5rem;
}

.tag-overview__header {
  display: grid;
  gap: 0.4rem;
}

.tag-overview__eyebrow {
  margin: 0;
  color: var(--vp-c-brand-1);
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.tag-overview__title {
  margin: 0;
}

.tag-overview__description {
  margin: 0;
  color: var(--vp-c-text-2);
}

.tag-overview__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>