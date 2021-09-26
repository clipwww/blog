<template>
  <Utterances :theme="theme" :key="theme" />
</template>

<script>
import { useThemeLocalStorage } from "./util";

import Utterances from "./Utterances.vue";

export default {
  components: {
    Utterances,
  },
  data() {
    return {
      theme: "",
    };
  },
  mounted() {
    this.onThemeChanged();

    window.addEventListener("theme-changed", this.onThemeChanged);
  },
  beforeDestroy() {
    window.removeEventListener("theme-changed", this.onThemeChanged);
  },
  methods: {
    onThemeChanged(e) {
      const themeLocalStorage = useThemeLocalStorage();
      const isDark = themeLocalStorage.get();
      this.theme = isDark ? "github-dark" : "github-light";
    },
  },
};
</script>

<style>
</style>