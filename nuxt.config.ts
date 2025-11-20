// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  icon: {
    mode: 'css',
    cssLayer: 'base',
    class: 'align-middle',
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
    '@nuxt/icon',
  ],

  colorMode: { classSuffix: '' },

  css: [
    '~/assets/css/post.css',
    '~/assets/css/global.css',
  ],

  compatibilityDate: '2025-02-24',
})
