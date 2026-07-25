<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import type { PostItem } from '../data/posts.data'
import { formatPostDate, tagToPath } from '../lib/posts'
import TagPill from './TagPill.vue'

const props = defineProps<{
  featured?: boolean
  post: PostItem
}>()

const href = computed(() => withBase(props.post.url))
const stampYear = computed(() => formatPostDate(props.post.date, 'YYYY'))
const stampMonthDay = computed(() => formatPostDate(props.post.date, 'MM/DD'))
</script>

<template>
  <article class="post-card" :class="{ 'post-card--featured': featured }">
    <div class="post-card__stamp">
      <span class="post-card__stamp-year">{{ stampYear }}</span>
      <time :datetime="post.date" class="post-card__stamp-date">{{ stampMonthDay }}</time>
    </div>

    <div class="post-card__content">
      <div v-if="post.tags.length" class="post-card__tags">
        <TagPill v-for="tag in post.tags" :key="tag" compact :tag="tag" />
      </div>

      <h2 class="post-card__title">
        <a :href="href">{{ post.title }}</a>
      </h2>

      <p v-if="post.summary" class="post-card__summary">{{ post.summary }}</p>

      <div v-if="post.author || post.location" class="post-card__meta">
        <span v-if="post.author">{{ post.author }}</span>
        <span v-if="post.location">{{ post.location }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped>
.post-card {
  position: relative;
  display: grid;
  grid-template-columns: minmax(86px, 104px) 1fr;
  gap: 1.35rem;
  overflow: hidden;
  border: 1px solid rgba(66, 184, 131, 0.14);
  border-radius: 30px;
  padding: 1.6rem;
  background: linear-gradient(180deg, color-mix(in srgb, var(--vp-c-bg-soft) 94%, white 6%), var(--vp-c-bg));
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
  transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease;
}

.post-card::before {
  position: absolute;
  right: -2.4rem;
  bottom: -4rem;
  width: 14rem;
  height: 14rem;
  border-radius: 999px;
  background: radial-gradient(circle, rgba(66, 184, 131, 0.16), transparent 72%);
  content: '';
  pointer-events: none;
}

.post-card:hover {
  border-color: rgba(66, 184, 131, 0.3);
  box-shadow: 0 24px 54px rgba(15, 23, 42, 0.14);
  transform: translateY(-3px);
}

.post-card--featured {
  grid-template-columns: minmax(92px, 116px) 1fr;
  padding: 1.85rem;
}

.post-card__stamp {
  display: grid;
  align-content: start;
  align-content: start;
  gap: 0.16rem;
  padding-top: 0.15rem;
}

.post-card__stamp,
.post-card__content {
  position: relative;
  z-index: 1;
}

.post-card__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: 0.95rem;
}

.post-card__stamp-year {
  color: var(--vp-c-text-3);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.12em;
}

.post-card__stamp-date {
  color: var(--vp-c-text-1);
  font-size: clamp(1.5rem, 2vw, 1.9rem);
  font-weight: 720;
  line-height: 0.95;
}

.post-card__content {
  min-width: 0;
}

.post-card__title {
  margin: 0;
  font-size: clamp(1.55rem, 2vw, 1.9rem);
  line-height: 1.1;
}

.post-card--featured .post-card__title {
  font-size: clamp(2rem, 4vw, 2.75rem);
}

.post-card__title a {
  color: var(--blog-post-title-color);
  text-decoration: none;
}

.post-card__title a:hover {
  color: var(--vp-c-brand-1);
}

.post-card__summary {
  margin: 0.72rem 0 0;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
}

.post-card--featured .post-card__summary {
  max-width: 44rem;
  font-size: 1.08rem;
}

.post-card__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-top: 0.95rem;
  color: var(--vp-c-text-3);
  font-size: 0.88rem;
}

@media (max-width: 640px) {
  .post-card {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 1.3rem;
  }

  .post-card__stamp {
    grid-auto-flow: column;
    justify-content: start;
    align-items: end;
    gap: 0.6rem;
  }

  .post-card__stamp-date {
    line-height: 1;
  }
}
</style>