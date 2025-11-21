<script setup lang="ts">
const props = defineProps<{
  strokeDasharray?: string
}>()
</script>

<template>
  <svg width="100%" height="1">
    <line
      x1="0" y1="0.5" x2="100%" y2="0.5" stroke="currentColor" stroke-linecap="round"
      :stroke-dasharray="props.strokeDasharray"
    />
  </svg>
</template>
