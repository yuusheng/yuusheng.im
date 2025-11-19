// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
  ],

  colorMode: { classSuffix: '' },

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/post.css',
    '~/styles/global.css',
  ],

  compatibilityDate: '2025-02-24',
})
