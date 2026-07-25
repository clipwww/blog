<script setup lang="ts">
import { nextTick, useTemplateRef, watch } from 'vue'
import { inBrowser, useData } from 'vitepress'

const root = useTemplateRef<HTMLDivElement>('root')
const { isDark, page } = useData()

function renderUtterances() {
  if (!inBrowser || !root.value) {
    return
  }

  root.value.innerHTML = ''

  const script = document.createElement('script')
  script.src = 'https://utteranc.es/client.js'
  script.async = true
  script.crossOrigin = 'anonymous'
  script.setAttribute('repo', 'clipwww/blog')
  script.setAttribute('issue-term', 'title')
  script.setAttribute('label', 'Utterances')
  script.setAttribute('theme', isDark.value ? 'github-dark' : 'github-light')

  root.value.appendChild(script)
}

watch(
  () => [isDark.value, page.value.relativePath],
  async () => {
    await nextTick()
    renderUtterances()
  },
  { immediate: true },
)
</script>

<template>
  <section class="comment-block">
    <div ref="root" />
  </section>
</template>

<style scoped>
.comment-block {
  margin-top: 2rem;
  border-top: 1px solid var(--vp-c-divider);
  padding-top: 1.5rem;
}
</style>