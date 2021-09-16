<template>
  <div class="icon">
    <component :is="iconComponent" @click="isDark = !isDark" />
  </div>
</template>

<script>
import { SunIcon, MoonIcon } from "vue-feather-icons";
import { useThemeLocalStorage } from "./util";

const themeLocalStorage = useThemeLocalStorage();

export default {
  data() {
    const isDark = themeLocalStorage.get();

    return {
      isDark,
    };
  },
  computed: {
    iconComponent() {
      return this.isDark ? MoonIcon : SunIcon;
    },
  },
  watch: {
    isDark(bool) {
      themeLocalStorage.set(bool);
      this.setTheme();
      window.dispatchEvent(new CustomEvent("theme-changed"));
    },
  },
  created() {
    this.setTheme();
  },
  methods: {
    setTheme() {
      if (this.isDark) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
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