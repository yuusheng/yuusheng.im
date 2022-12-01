// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    text: 'yuusheng',
    families: {
      'Poppins': true,
      'Josefin+Sans': true,
      'Lato': [100, 300],
      'Raleway': {
        wght: [100, 400],
        ital: [100],
      },
    },
    display: 'swap',
    preload: true,
    download: true,
    prefetch: true,
  },
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
