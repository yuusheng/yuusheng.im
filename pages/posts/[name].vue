<script setup lang="ts">
const route = useRoute()
const path = computed(() => route.params.name as string)

const content = await queryContent<PostContent>(path.value).findOne()
</script>

<template>
  <div w-full>
    <article p="x5 md:x15 y8" mx-auto>
      <div h-60 flex="~">
        <Toc :toc="content.body?.toc" />
        <div>
          <h1 text-5xl font-900>
            {{ content.title }}
          </h1>
          <div>{{ content.description }}</div>
        </div>
      </div>
      <ContentDoc class="post-container scroll-smooth" :path="path" />
    </article>
  </div>
</template>
