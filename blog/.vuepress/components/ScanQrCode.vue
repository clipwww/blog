<template>
  <div class="relative">
    <input v-model="result" class="w-full text-lg" />
    <div
      class="
        absolute
        top-0
        left-0
        z-1
        flex
        items-center
        justify-center
        w-full
        h-full
      "
    >
      <div
        class="border-4 border-solid rounded w-64 h-64"
        :class="{ 'border-red-400': scanned }"
      ></div>
    </div>
    <video
      id="js-video"
      ref="videoEl"
      class="w-full h-full bg-black"
      autoplay="true"
    ></video>
    <canvas
      id="js-canvas"
      ref="canvasEl"
      class="bg-black hidden"
      :width="videoWidth"
      :height="videoHeight"
    ></canvas>

    <!-- <div v-show="scanned">
      <div ref="trEl" class="absolute z-40 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div ref="tlEl" class="absolute z-40 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div ref="brEl" class="absolute z-40 w-2 h-2 bg-blue-400 rounded-full"></div>
      <div ref="blEl" class="absolute z-40 w-2 h-2 bg-blue-400 rounded-full"></div>
    </div> -->
  </div>
</template>

<script>
import {
  defineComponent,
  onMounted,
  onBeforeUnmount,
  reactive,
  toRefs,
} from "@vue/composition-api";
import jsQR from "jsqr";

export default defineComponent({
  setup() {
    const state = reactive({
      videoEl: null,
      canvasEl: null,
      trEl: null,
      tlEl: null,
      brEl: null,
      blEl: null,
      videoWidth: 0,
      videoHeight: 0,
      scanned: false,
      qrcode: null,
      result: "",
    });

    onMounted(() => {
      openWebCamera();
    });

    onBeforeUnmount(() => {
      state.videoEl.srcObject.getTracks().forEach((stream) => {
        stream.stop();
      });
    });

    async function openWebCamera() {
      try {
        if (!state.videoEl) return;

        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });
        /* use the stream */

        state.videoEl.srcObject = stream;
        console.log(state.videoEl.srcObject);
        state.videoEl.addEventListener("timeupdate", checkQRcode);
      } catch (err) {
        /* handle the error */
        alert(err.message);
      }
    }

    function checkQRcode() {
      state.scanned = false;

      if (!state.canvasEl || !state.videoEl) return;

      const { videoWidth, videoHeight } = state.videoEl;
      const radio = videoWidth / window.innerWidth;

      state.videoWidth = window.innerWidth;
      state.videoHeight = videoHeight / radio;
      const top = window.innerHeight / 2 - state.videoHeight / 2;
      const ctx = state.canvasEl.getContext("2d");

      if (!ctx) return;

      ctx?.drawImage(state.videoEl, 0, 0, state.videoWidth, state.videoHeight);
      const { data, width, height } = ctx?.getImageData(
        0,
        0,
        state.videoWidth,
        state.videoHeight
      );

      if (!data) return;

      const code = jsQR(data, width, height);

      if (!code) return;

      state.scanned = true;
      state.qrcode = code;
      state.result = state.qrcode.data;

      // const {
      //   topLeftCorner,
      //   topRightCorner,
      //   bottomRightCorner,
      //   bottomLeftCorner,
      // } = state.qrcode.location;
      // if (
      //   state.tlEl?.style &&
      //   state.trEl?.style &&
      //   state.blEl?.style &&
      //   state.brEl?.style
      // ) {
      //   state.tlEl.style.left = topLeftCorner.x + "px";
      //   state.tlEl.style.top = topLeftCorner.y + top + "px";
      //   state.trEl.style.left = topRightCorner.x + "px";
      //   state.trEl.style.top = topRightCorner.y + top + "px";
      //   state.brEl.style.left = bottomRightCorner.x + "px";
      //   state.brEl.style.top = bottomRightCorner.y + top + "px";
      //   state.blEl.style.left = bottomLeftCorner.x + "px";
      //   state.blEl.style.top = bottomLeftCorner.y + top + "px";
      // }
    }

    return {
      ...toRefs(state),
    };
  },
});
</script>

<style lang="postcss" scoped>
</style>