import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        outfit: 'Outfit:400,700',
        sans: 'DM Sans',
      },
      provider: 'google',
    }),
  ],
  shortcuts: [{
    'navigate-btn': 'px2 pt1 pb1.5 my2 rounded',
    'essay': 'max-w-80ch',
    'essay-list': 'text-4 line-height-4 text-warm-gray-800 dark:text-warm-gray-100 op-70 hover:op-100',
  }],
  theme: {
    colors: {
      primary: '',
      weak: '',
    },
  },
})
