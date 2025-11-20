<script setup lang="ts">
const props = defineProps<{
  strokeDasharray?: string
}>()
</script>

<template>
  <svg width="1" height="100%">
    <line
      x1="0.5" y1="0" x2="0.5" y2="100%" stroke="currentColor" stroke-linecap="round"
      :stroke-dasharray="props.strokeDasharray"
    />
  </svg>
</template>
