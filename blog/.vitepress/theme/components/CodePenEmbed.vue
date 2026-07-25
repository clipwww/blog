<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  defaultTab?: string
  height?: number
  slugHash: string
  themeId?: string
  title: string
  user: string
}>(), {
  defaultTab: 'result',
  height: 500,
  themeId: 'dark',
})

const src = computed(() => {
  const query = new URLSearchParams({
    defaultTab: props.defaultTab,
    themeId: props.themeId,
  })

  return `https://codepen.io/${props.user}/embed/${props.slugHash}?${query.toString()}`
})
</script>

<template>
  <div class="codepen-embed" :style="{ height: `${height}px` }">
    <iframe
      class="codepen-embed__frame"
      :title="title"
      :src="src"
      loading="lazy"
      allowfullscreen
    />
  </div>
</template>

<style scoped>
.codepen-embed {
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  border-radius: 18px;
  background: var(--vp-c-bg-soft);
}

.codepen-embed__frame {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>