<template>
  <div class="inline-block">
    <img :class="{ 'is-active': showZoomIn }" :src="src" :alt="alt" @click="showZoomIn = !showZoomIn" />
  </div>
</template>

<script>
export default {
  name: "ZoomImage",
  props: {
    src: {
      type: String,
    },
    alt: {
      type: String,
    },
  },
  data() {
    return {
      showZoomIn: false,
    };
  },
};
</script>

<style scoped>
img {
  cursor: zoom-in;
}
.is-active {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 30px);
  height: calc(100% - 60px);
  padding: 30px 15px;
  object-fit: contain;
  background-color: rgba(0,0,0,.75);
  z-index: 51;
  cursor: zoom-out;
}
</style>