<script setup lang="ts">
import { computed } from 'vue'

interface RaceRecord {
  name: string
  first: number
  second: number
  third: number
  out: number
}

const props = defineProps<{
  records?: RaceRecord[]
}>()

const resolvedRecords = computed(() => props.records ?? [])

function getSum(record: RaceRecord): number {
  return record.first + record.second + record.third + record.out
}

function getWinRate(record: RaceRecord): string {
  return ((record.first / getSum(record)) * 100).toFixed(2)
}

function getRendaiRate(record: RaceRecord): string {
  return (((record.first + record.second) / getSum(record)) * 100).toFixed(2)
}

function getFukushouRate(record: RaceRecord): string {
  return (((record.first + record.second + record.third) / getSum(record)) * 100).toFixed(2)
}

const totalWinRate = computed(() => {
  const firstCount = resolvedRecords.value.reduce((sum, item) => sum + item.first, 0)
  return ((firstCount / 80) * 100).toFixed(2)
})
</script>

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
      <tr v-for="record in resolvedRecords" :key="record.name">
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