<template>
  <div class="text-center">
    <div class="flex justify-center items-center">
      
      <div>
        <h1 class="text-6xl tracking-widest m-0">404</h1>
        <div>Page not found.</div>
      </div>
      <file-text-icon class="ml-4 w-16 h-16" />
    </div>

    <div class="my-10">
      <img class="rounded-lg" :src="$withBase(`/images/pic.png`)" alt="FX">
    </div>

    <RouterLink
      to="/"
      class="
        inline-block
        bg-vue
        text-white
        no-underline
        px-6
        py-3
        rounded
        text-xl
      "
    >
      返回首頁
    </RouterLink>
  </div>
</template>

<script>
import { FileTextIcon } from "vue-feather-icons";

export default {
  components: {
    FileTextIcon,
  },
};
</script>