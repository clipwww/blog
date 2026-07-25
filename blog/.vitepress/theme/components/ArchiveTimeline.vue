<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import type { PostItem } from '../data/posts.data'
import { formatPostDate, groupPostsByYear } from '../lib/posts'
import TagPill from './TagPill.vue'

const props = defineProps<{
  posts: PostItem[]
}>()

const groups = computed(() => groupPostsByYear(props.posts))
</script>

<template>
  <div class="archive-timeline">
    <section v-for="group in groups" :key="group.year" class="archive-timeline__group">
      <h2 class="archive-timeline__year">{{ group.year }}</h2>

      <article v-for="post in group.posts" :key="post.url" class="archive-timeline__item">
        <div class="archive-timeline__date">
          <span class="archive-timeline__month">{{ formatPostDate(post.date, 'MMM') }}</span>
          <span class="archive-timeline__day">{{ formatPostDate(post.date, 'DD') }}</span>
        </div>

        <div class="archive-timeline__body">
          <div v-if="post.tags.length" class="archive-timeline__tags">
            <TagPill v-for="tag in post.tags" :key="tag" compact :tag="tag" />
          </div>

          <h3 class="archive-timeline__title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </h3>

          <p v-if="post.summary" class="archive-timeline__summary">{{ post.summary }}</p>
        </div>
      </article>
    </section>
  </div>
</template>

<style scoped>
.archive-timeline {
  display: grid;
  gap: 2rem;
}

.archive-timeline__group {
  display: grid;
  gap: 1rem;
}

.archive-timeline__year {
  margin: 0;
  font-size: 1.5rem;
}

.archive-timeline__item {
  display: grid;
  grid-template-columns: minmax(72px, 88px) 1fr;
  gap: 1rem;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 1rem;
}

.archive-timeline__date {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: 0.15rem;
  color: var(--vp-c-text-2);
}

.archive-timeline__month {
  font-size: 1.08rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.archive-timeline__day {
  font-size: 1.95rem;
  font-weight: 750;
  line-height: 0.88;
}

.archive-timeline__body {
  min-width: 0;
}

.archive-timeline__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.5rem;
}

.archive-timeline__title {
  margin: 0;
  font-size: 1.15rem;
}

.archive-timeline__title a {
  color: var(--blog-post-title-color);
  text-decoration: none;
}

.archive-timeline__title a:hover {
  color: var(--vp-c-brand-1);
}

.archive-timeline__summary {
  margin: 0.45rem 0 0;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .archive-timeline__item {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }

  .archive-timeline__date {
    grid-auto-flow: column;
    align-items: end;
    gap: 0.5rem;
  }

  .archive-timeline__day {
    font-size: 1.45rem;
    line-height: 1;
  }
}
</style>