<script lang="ts" setup>
import type { MarkdownRoot } from '@nuxt/content/dist/runtime/types'

defineProps<{
  toc: MarkdownRoot['toc']
}>()
</script>

<template>
  <ul>
    <li
      v-for="title in toc?.links"
      :key="title.id"
      text="xs"
      color="black/60 dark:warm-gray-100/70"
    >
      <a :href="`#${title.id}`" class="hover:text-black dark:hover:text-warm-gray-100">{{ title.text }}</a>

      <div v-for="subTitle in title.children" :key="subTitle.id" pl3 text="hover:black dark:hover:warm-gray-100">
        <i i-tabler-point-filled text-xs />
        <a :href="`#${subTitle.id}`">{{ subTitle.text }}</a>
      </div>
    </li>
  </ul>
</template>
