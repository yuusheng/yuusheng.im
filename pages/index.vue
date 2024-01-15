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
  <main my-20 px-6 font-outfit>
    <article essay m-auto>
      <h1 text-6xl mb3 px-auto>
        Hi!
      </h1>
      <h2 text-4xl mb4 px-auto>
        I'm
        <code p="x1 y0.5" bg="gray-2/60" text-3xl text-black rounded>
          <span class="code">`</span>Ethan<span class="code">`</span>
        </code>
        or yuusheng.
      </h2>
      <p>A software engineer / music lover / amateur photographer / ...</p>
      <p>Volunteer to be a slash youth.</p>
      <ContactRect />
    </article>
  </main>

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
