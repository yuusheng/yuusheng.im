// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  css: [
    '/index.css',
  ],

  devtools: {
    enabled: true,
  },
})
