<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
const catalogue = (navigation.value || []).map(v => ({
  title: v._path.replace('/', ''),
  path: v._path,
}))
</script>

<template>
  <article m="x10 y20">
    <h1 text-6xl mb3>
      Hi!
    </h1>
    <h2 text-4xl mb4>
      I'm
      <code p="x1 y0.5" bg="gray-2/60" text-3xl text-black rounded>
        <span class="code">`</span>余声里<span class="code">`</span>
      </code>
      or yuusheng.
    </h2>
    <p>A front-end developer / music lover / amateur photographer / ...</p>
    <p>Volunteer to be a slash youth.</p>
    <ContactRect />
  </article>

  <!-- <TitleCardList :posts="catalogue" /> -->
</template>

<style scoped>
.code {
  color: #DB6262;
}
p {
  margin-top: 0.6rem;
  margin-bottom: 1rem;
  font-size: 20px;
}
</style>
