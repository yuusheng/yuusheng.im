<script setup lang="ts">
import gsap from 'gsap'
import { useGsap } from '~/composables/gsap'

const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('posts').all()
})

useGsap(() =>
  gsap.from('.post', {
    x: '-10',
    stagger: 0.05,
  }),
)
</script>

<template>
  <main class="mx-6 my-10">
    <div class="max-w-[60ch] flex flex-col gap-5 mx-auto mt-10 pt-[7.5rem] relative">
      <div class="text-8xl stroke-1 stroke-stone-400/60 transparent font-serif absolute top-0 cursor-none z-[-1]">
        Yuusheng's
      </div>
      <NuxtLink
        v-for="post in posts" :key="post.path" class="post flex gap-3 essay-list" :to="`/posts${post.path}`"
      >
        <span class="text-[18px]">{{ post.title }}</span>
        <span class="text-stone-400/70">
          {{ post.date ? $dayjs(post.date).format('MMMM D, YYYY') : '' }}
        </span>
      </NuxtLink>
    </div>
  </main>
</template>
