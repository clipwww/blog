<template>
  <table class="w-full table-auto text-right">
    <thead>
      <tr>
        <th></th>
        <th class="whitespace-nowrap">1着</th>
        <th class="whitespace-nowrap">2着</th>
        <th class="whitespace-nowrap">3着</th>
        <th class="whitespace-nowrap">圈外</th>
        <th class="whitespace-nowrap">出場數</th>
        <th class="whitespace-nowrap">勝率</th>
        <th class="whitespace-nowrap">連對率</th>
        <th class="whitespace-nowrap">複勝率</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="record in records" :key="record.name">
        <td class="whitespace-nowrap">{{ record.name }}</td>
        <td>{{ record.first }}</td>
        <td>{{ record.second }}</td>
        <td>{{ record.third }}</td>
        <td>{{ record.out }}</td>
        <td>{{ getSum(record) }}</td>
        <td>{{ getWinRate(record) }}%</td>
        <td>{{ getRendaiRate(record) }}%</td>
        <td>{{ getFukushouRate(record) }}%</td>
      </tr>
      <tr>
        <th>勝率</th>
        <td colspan="8" class="text-left">{{ totalWinRate }}%</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    records: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    totalWinRate() {
      const first = this.records.reduce((sum, item) => {
        return (sum += item.first);
      }, 0);

      return ((first / 80) * 100).toFixed(2);
    },
  },
  methods: {
    getSum(record) {
      const { first, second, third, out } = record;
      return first + second + third + out;
    },
    getWinRate(record) {
      return ((record.first / this.getSum(record)) * 100).toFixed(2);
    },
    getRendaiRate(record) {
      return (((record.first + record.second) / this.getSum(record)) * 100).toFixed(
        2
      );
    },
    getFukushouRate(record) {
      const total = record.first + record.second + record.third;
      return ((total / this.getSum(record)) * 100).toFixed(2);
    },
  },
};
</script>

<style>
</style>