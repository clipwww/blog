<template>
<div class="icon">
  <component  :is="iconComponent" @click="isDark = !isDark" />
</div>
</template>

<script>
import {
  SunIcon,
  MoonIcon
} from 'vue-feather-icons'

const KEY = "is-dark";

export default {
  data() {
    const isDark =
      window.localStorage.getItem(KEY) ??
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    return {
      isDark,
    };
  },
  computed: {
    iconComponent() {
      return this.isDark ? MoonIcon: SunIcon;
    }
  },
  watch: {
    isDark: {
      immediate: true,
      handler(bool) {
        window.localStorage.setItem(KEY, bool);
        this.setTheme(bool);
      },
    },
  },
  methods: {
    setTheme(isDark) {
      if (isDark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
  },
};
</script>


<style scoped>
.icon {
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
}
</style>