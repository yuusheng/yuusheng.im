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
    serverBundle: {
      collections: ['ri'],
    },
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
    '@nuxt/icon',
    'motion-v/nuxt',
  ],

  colorMode: { classSuffix: '', storage: 'cookie' },

  css: [
    '~/assets/css/post.css',
    '~/assets/css/global.css',
  ],

  compatibilityDate: '2025-02-24',
})
