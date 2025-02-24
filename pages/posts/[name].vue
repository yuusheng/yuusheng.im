<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.params.name as string)

const { data: content } = await useAsyncData(route.path, () => {
  return queryCollection('posts').path(`/${path.value}`).first()
})
</script>

<template>
  <div w-full p="x5 y8">
    <article v-if="content" max-w-80ch mx-auto>
      <div h-60 flex="~">
        <ContentToc :toc="content.body?.toc" />
        <div>
          <h1 text-5xl font-900>
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
