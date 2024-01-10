// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode'
  ],
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/post.css',
  ],

  devtools: {
    enabled: true,
  },
  colorMode: { classSuffix: '' },
})
