<script setup lang="ts">
const route = useRoute()
const { data: posts } = await useAsyncData(route.path, () => {
  return queryCollection('posts').all()
})
</script>

<template>
  <main class="mx-6 my-10">
    <div class="relative mx-auto mt-10 flex max-w-[60ch] flex-col gap-5 pt-[7.5rem]">
      <div class="transparent absolute top-0 z-[-1] cursor-none stroke-stone-400/60 stroke-1 font-serif text-8xl">
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
