<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.params.name as string)

const { data: content } = await useAsyncData(route.path, () => {
  return queryCollection('posts').path(`/${path.value}`).first()
})
</script>

<template>
  <div class="w-full px-5 py-8">
    <article v-if="content" class="mx-auto max-w-80ch">
      <div class="flex h-60">
        <ContentToc :toc="content.body?.toc" />
        <div>
          <h1 class="text-5xl font-extrabold">
            {{ content.title }}
          </h1>
          <div>{{ content.description }}</div>
        </div>
      </div>
      <ContentRenderer :value="content" />
    </article>
    <div v-else>
      not found
    </div>
  </div>
</template>
