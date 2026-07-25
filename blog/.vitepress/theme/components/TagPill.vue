<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

import { tagToPath } from '../lib/posts'

const props = defineProps<{
  count?: number
  compact?: boolean
  tag: string
}>()

const href = computed(() => withBase(tagToPath(props.tag)))
</script>

<template>
  <a class="tag-pill" :class="{ 'tag-pill--compact': compact }" :href="href">
    <span>{{ tag }}</span>
    <span v-if="typeof count === 'number'" class="tag-pill__count">{{ count }}</span>
  </a>
</template>

<style scoped>
.tag-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  border-radius: 999px;
  padding: 0.46rem 0.92rem;
  text-decoration: none;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  font-weight: 650;
  line-height: 1;
  white-space: nowrap;
  transition: transform 0.2s ease, background 0.2s ease;
}

.tag-pill:hover {
  transform: translateY(-1px);
}

.tag-pill--compact {
  padding: 0.34rem 0.72rem;
  font-size: 0.94rem;
}

.tag-pill__count {
  color: var(--vp-c-text-2);
  font-size: 0.84rem;
}
</style>