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
  <main m="x6 y10">
    <div max-w-60ch flex="~ gap-5 col" m="x-auto t-10" pt-30 relative>
      <div text="8xl stroke-1 stroke-warm-gray/60 transparent" font-serif absolute top-0 cursor-none z--1>
        Yuusheng's
      </div>
      <NuxtLink
        v-for="post in posts" :key="post.path" class="post" :to="`/posts${post.path}`" flex="~ gap-3"
        essay-list
      >
        <span text="18px">{{ post.title }}</span>
        <span text="warm-gray/70">
          {{ post.date ? $dayjs(post.date).format('MMMM D, YYYY') : '' }}
        </span>
      </NuxtLink>
    </div>
  </main>
</template>
