// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'dayjs-nuxt',
    '@nuxt/eslint',
  ],
  eslint: {
    config: {
      stylistic: true,
    },
  },
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
  colorMode: { classSuffix: '' },
  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/post.css',
  ],
})
