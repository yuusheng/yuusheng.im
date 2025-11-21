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
    class="flex w-[22.5rem] items-center space-x-3 rounded p-1.5 hover:bg-gray-100/50"
    @click="handleClick"
  >
    <img class="size-[3.25rem] rounded bg-gray-300/40" :src="logo">
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
