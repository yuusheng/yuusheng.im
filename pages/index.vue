<script setup lang="ts">
</script>

<template>
  <main font-outfit>
    <div class="container">
      <div class="relative border-x-1 border-x-gray/20 aspect-ratio-24/12 grid grid-rows-12 grid-cols-24">
        <UiHeaderBg class="-z-1" />
        <article essay class="grid-row-3/14 grid-col-3">
          <h1 text-6xl font-700 mb3 px-auto>
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
          <p>A slash youth.</p>
          <ContactRect />
        </article>
      </div>
    </div>

    <UiSvgRowSvg class="color-gray/20" />
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
