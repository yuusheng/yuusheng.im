// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
  ],
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,

    // core options
    shortcuts: [{
      'navigate-btn': 'mx2 my3 cursor-pointer',
    }],
    rules: [],
  },
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
})
