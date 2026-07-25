<script setup lang="ts">
defineProps<{
  active?: boolean
  title?: string
}>()
</script>

<template>
  <section class="compat-code-block">
    <div v-if="title" class="compat-code-block__title">{{ title }}</div>
    <div class="compat-code-block__body">
      <slot />
    </div>
  </section>
</template>

<style scoped>
.compat-code-block {
  overflow: hidden;
  border: 1px solid var(--vp-code-block-divider-color);
  border-radius: 14px;
  background: var(--vp-code-block-bg);
}

.compat-code-block__title {
  border-bottom: 1px solid var(--vp-code-block-divider-color);
  padding: 0.7rem 1rem;
  background: var(--vp-code-tab-bg);
  color: var(--vp-code-tab-text-color);
  font-size: 0.9rem;
  font-weight: 600;
}

.compat-code-block__body {
  background: var(--vp-code-block-bg);
}

.compat-code-block__body :deep(.language-bash),
.compat-code-block__body :deep(.language-js),
.compat-code-block__body :deep(.language-md),
.compat-code-block__body :deep(.language-ts) {
  margin: 0;
  border-radius: 0;
}
</style>