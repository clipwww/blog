<script setup lang="ts">
import { data as posts } from '../data/posts.data'
import PostCard from './PostCard.vue'

const featuredPost = posts[0]
const restPosts = posts.slice(1)
</script>

<template>
  <section class="blog-home">
    <div v-if="featuredPost" class="blog-home__feature">
      <PostCard featured :post="featuredPost" />
    </div>

    <div class="blog-home__list">
      <PostCard v-for="post in restPosts" :key="post.url" :post="post" />
    </div>
  </section>
</template>

<style scoped>
.blog-home {
  position: relative;
  display: grid;
  gap: 1.3rem;
  padding: 0.75rem 0 1.25rem;
}

.blog-home::before {
  position: absolute;
  inset: -5rem auto auto -4rem;
  width: min(48vw, 24rem);
  height: min(48vw, 24rem);
  border-radius: 999px;
  background: radial-gradient(circle, rgba(66, 184, 131, 0.16), transparent 72%);
  content: '';
  filter: blur(12px);
  pointer-events: none;
}

.blog-home__feature,
.blog-home__list {
  position: relative;
  z-index: 1;
}

.blog-home__list {
  display: grid;
  gap: 1.15rem;
}
</style>