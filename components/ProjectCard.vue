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
    class="w-[22.5rem] p-1.5 flex items-center rounded space-x-3 hover:bg-gray-100/50"
    @click="handleClick"
  >
    <img class="h-[3.25rem] w-[3.25rem] rounded bg-gray-300/40" :src="logo">
    <div class="space-y-2">
      <div class="text-xl">
        {{ title }} <a :href="github" target="_blank" i-ri-github-fill @click="(e) => e.stopPropagation()" />
      </div>
      <div text-3>
        {{ description }}
      </div>
    </div>
  </div>
</template>
