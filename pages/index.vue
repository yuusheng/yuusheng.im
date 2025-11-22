<script setup lang="ts">
</script>

<template>
  <UiSvgRowSvg class="text-gray-200/20" />

  <main class="font-outfit">
    <div class="container border-x">
      <div class="border-x-1 relative grid aspect-[24/12] grid-rows-12 border-gray-200/20 " style="grid-template-columns: repeat(24, 1fr);">
        <UiHeaderBg class="-z-1" />
        <article class="z-10 col-[3/16] row-[1/-1] flex flex-col justify-center">
          <h1 class="mb-3 text-6xl font-bold">
            Hi!
          </h1>
          <h2 class="mb-4 text-4xl">
            I'm
            <code class="p-x1 rounded bg-gray-200 py-0.5 text-3xl text-black">
              <span class="code">`</span>Ethan<span class="code">`</span>
            </code>
            or <span class="italic">yuusheng</span>.
          </h2>
          <p>A software engineer / music lover / amateur photographer / ...</p>
          <p>A slash youth.</p>
          <ContactRect />
        </article>
        <div class="z-10 col-[16/-1] row-[1/-1] grid grid-cols-9 grid-rows-12">
          <AsciiImage class="col-[2/-1] row-[4/-4] translate-x-[0.5px]" />
        </div>
      </div>
    </div>

    <UiSvgRowSvg class="text-gray-200/20" />

    <div class="h-screen" />
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
