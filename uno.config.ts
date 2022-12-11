import { defineConfig, presetAttributify, presetIcons, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetAttributify(),
    presetWebFonts({
      fonts: {
        sans: 'Outfit:400,700',
      },
      provider: 'google',
    }),
  ],
  shortcuts: [{
    'navigate-btn': 'px2 pt1 pb1.5 my2 rounded',
  }],
})
