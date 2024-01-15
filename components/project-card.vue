<script setup lang="ts">
const props = defineProps<{
  title: string
  logo: string
  url: string
  description: string
  github: string
}>()

function handleClick() {
  window.open(props.url, '_blank')
}
</script>

<template>
  <div
    w90 p="1.5" flex items-center rounded space-x-3 bg="hover:gray1/50"
    @click="handleClick"
  >
    <img h13 w13 rounded bg="gray3/40" :src="logo">
    <div spacey2>
      <div text-5>
        {{ title }} <a :href="github" target="_blank" i-ri-github-fill @click="(e) => e.stopPropagation()" />
      </div>
      <div text-3>
        {{ description }}
      </div>
    </div>
  </div>
</template>
