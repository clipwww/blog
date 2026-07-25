<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import { data as posts } from '../data/umamusume.data'
import { formatPostDate } from '../lib/posts'

const championsMeetingPosts = computed(() => posts.filter((post) => post.group === 'champions-meeting'))
const gachaPosts = computed(() => posts.filter((post) => post.group === 'gacha'))
</script>

<template>
  <section class="umamusume-index">
    <div class="umamusume-index__section">
      <h2>チャンピオンズミーティング</h2>

      <article v-for="post in championsMeetingPosts" :key="post.url" class="umamusume-index__card">
        <img v-if="post.icon" class="umamusume-index__icon" :src="post.icon" :alt="post.title" />

        <div class="umamusume-index__content">
          <div class="umamusume-index__date">{{ formatPostDate(post.date) }}</div>
          <h3 class="umamusume-index__title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </h3>
          <p v-if="post.summary" class="umamusume-index__summary">{{ post.summary }}</p>
        </div>
      </article>
    </div>

    <div class="umamusume-index__section">
      <h2>ガチャ</h2>

      <article v-for="post in gachaPosts" :key="post.url" class="umamusume-index__card umamusume-index__card--compact">
        <div class="umamusume-index__content">
          <div class="umamusume-index__date">{{ formatPostDate(post.date) }}</div>
          <h3 class="umamusume-index__title">
            <a :href="withBase(post.url)">{{ post.title }}</a>
          </h3>
          <p v-if="post.summary" class="umamusume-index__summary">{{ post.summary }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.umamusume-index {
  display: grid;
  gap: 2rem;
}

.umamusume-index__section {
  display: grid;
  gap: 1rem;
}

.umamusume-index__card {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1rem;
  border-top: 1px dashed var(--vp-c-divider);
  padding-top: 1rem;
}

.umamusume-index__card--compact {
  grid-template-columns: 1fr;
}

.umamusume-index__icon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
  object-fit: cover;
}

.umamusume-index__content {
  min-width: 0;
}

.umamusume-index__date {
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.umamusume-index__title {
  margin: 0.3rem 0 0;
  font-size: 1.1rem;
}

.umamusume-index__title a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.umamusume-index__title a:hover {
  color: var(--vp-c-brand-1);
}

.umamusume-index__summary {
  margin: 0.35rem 0 0;
  color: var(--vp-c-text-2);
}

@media (max-width: 640px) {
  .umamusume-index__card {
    grid-template-columns: 1fr;
  }
}
</style>