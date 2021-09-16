<template>
  <div class="slider">
    <div class="slider__item" v-for="n in 5" :key="n">
      <img class="w-full" :src="`https://picsum.photos/800/400?_=${n}`" alt="Lorem Picsum">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.slider {
  @apply w-full;
  display: flex;
  scroll-snap-type: x mandatory;	
	overflow-x: scroll;
}

.slider__item {
  @apply min-w-full;
  scroll-snap-align: start;
}

</style>