<template>
<div class="flex text-4xl font-bold">
  <div>{{ countDown.day }}<span class="font-normal text-lg ml-1 mr-2">日</span></div>
  <div>{{ countDown.hour }}<span class="font-normal text-lg ml-1 mr-2">時</span></div>
  <div>{{ countDown.min }}<span class="font-normal text-lg ml-1 mr-2">分</span></div>
  <div>{{ countDown.sec }}<span class="font-normal text-lg ml-1 mr-2">秒</span></div>
</div>
</template>

<script>
import { computed, onUnmounted, ref, } from 'vue'

export default {
  props: {
    end: {
      type: [String, Date, Number]
    }
  },
  setup(props) {
    const secMilliseconds = 1000;
    const minMilliseconds = secMilliseconds * 60;
    const hourMilliseconds = minMilliseconds * 60;
    const dayMilliseconds = hourMilliseconds * 24;

    const now = ref(new Date());
    const intervalInstance = ref(null);

    const end = computed(() => new Date(props.end));
    const diff = computed(() => end.value - now.value);
    const countDown = computed(() => {
      const sec = Math.floor((diff.value / secMilliseconds) % 60 ); 
      const min = Math.floor((diff.value / minMilliseconds) % 60 ); 
      const hour = Math.floor((diff.value / hourMilliseconds) % 24 ); 
      const day = Math.floor(diff.value / dayMilliseconds); 

      return {
        day,
        hour: `${hour}`.padStart(2, '0'),
        min: `${min}`.padStart(2, '0'),
        sec: `${sec}`.padStart(2, '0'),
      }
    })

    intervalInstance.value = setInterval(() => {
      now.value = new Date()
    }, 500)

    onUnmounted(() => {
      clearInterval(intervalInstance.value)
    })

    return {
      countDown
    }
  }
}
</script>

<style>

</style>