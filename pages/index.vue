<script setup lang="ts">
</script>

<template>
  <UiSvgRowSvg class="text-gray-200/20" />

  <main class="font-outfit">
    <div class="container border-x">
      <div class="relative border-x-1 border-gray-200/20 aspect-[24/12] grid grid-rows-12 " style="grid-template-columns: repeat(24, 1fr);">
        <UiHeaderBg class="-z-1" />
        <article class="col-[3/18] row-[1/-1] flex flex-col justify-center z-10">
          <h1 class="text-6xl font-bold mb-3">
            Hi!
          </h1>
          <h2 class="text-4xl mb-4">
            I'm
            <code class="p-x1 py-0.5 bg-gray-200/60 text-3xl text-black rounded">
              <span class="code">`</span>Ethan<span class="code">`</span>
            </code>
            or yuusheng.
          </h2>
          <p>A software engineer / music lover / amateur photographer / ...</p>
          <p>A slash youth.</p>
          <ContactRect />
        </article>
      </div>
    </div>

    <UiSvgRowSvg class="text-gray-200/20" />
  </main>
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
