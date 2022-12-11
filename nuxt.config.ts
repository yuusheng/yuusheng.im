// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  css: [
    '/index.css',
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
})
