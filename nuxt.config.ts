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
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    attributify: true, // enabled `@unocss/preset-attributify`,
    icons: {
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }, // enabled `@unocss/preset-icons`
    webFonts: {
      fonts: {
        sans: 'Outfit:400,700',
      },
      provider: 'google',
    },

    // core options
    shortcuts: [{
      'navigate-btn': 'px2 pt1 pb1.5 my2 rounded',
    }],
    rules: [],
  },
  content: {
    highlight: {
      theme: 'github-light',
    },
  },
})
