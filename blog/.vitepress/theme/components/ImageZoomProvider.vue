<script setup lang="ts">
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import { nextTick, onBeforeUnmount, onMounted, watch } from 'vue'

const route = useRoute()
let zoom: ReturnType<typeof mediumZoom> | null = null

async function syncZoom() {
  if (typeof window === 'undefined') {
    return
  }

  await nextTick()

  const images = Array.from(document.querySelectorAll('.vp-doc img[data-action="zoom"]'))

  if (!zoom) {
    zoom = mediumZoom({
      background: 'rgba(15, 23, 42, 0.82)',
      margin: 24,
      scrollOffset: 96,
    })
  }

  zoom.detach()

  if (images.length > 0) {
    zoom.attach(images)
  }
}

onMounted(syncZoom)

watch(() => route.path, syncZoom)

onBeforeUnmount(() => {
  zoom?.detach()
})
</script>

<template>
  <span aria-hidden="true" class="image-zoom-provider" />
</template>

<style scoped>
.image-zoom-provider {
  display: none;
}
</style>