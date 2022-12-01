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
  <article m="x10 t20">
    <h1 text-5xl mb3>
      Hi!
    </h1>
    <h2 text-3xl mb4>
      I'm
      <code p="x1 y0.5" bg="gray-2/60" text-2xl text-black rounded>
        <span class="code">`</span>余声里<span class="code">`</span>
      </code>
      or yuushèng.
    </h2>
    <p>A front-end developer / music lover / amateur photographer / ...</p>
    <p>Volunteer to be a slash youth.</p>
  </article>

  <!-- <TitleCardList :posts="catalogue" /> -->
</template>

<style scoped>
.code {
  color: #DB6262;
}
p {
  margin-top: 0.6rem;
  font-size: 18px;
}
</style>
