<script setup lang="ts">
import { computed } from 'vue'
import { withBase } from 'vitepress'

const props = defineProps<{
  link: string
}>()

const isExternal = computed(() => /^(https?:|mailto:|tel:)/.test(props.link))
const isRelative = computed(() => props.link.startsWith('./') || props.link.startsWith('../') || props.link.startsWith('#'))
const href = computed(() => {
  if (isExternal.value || isRelative.value) {
    return props.link
  }

  return withBase(props.link)
})
</script>

<template>
  <a :href="href" :target="isExternal ? '_blank' : undefined" :rel="isExternal ? 'noreferrer' : undefined">
    <slot />
  </a>
</template>