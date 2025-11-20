import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default <Partial<Config>>{
  safelist: ['align-middle'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      spacing: {
        1.5: '0.375rem',
      },
      maxWidth: {
        '80ch': '80ch',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.navigate-btn': {
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem',
          paddingTop: '0.25rem',
          paddingBottom: '0.375rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
          borderRadius: '0.25rem',
        },
        '.essay': {
          maxWidth: '80ch',
        },
        '.essay-list': {
          'fontSize': '1rem',
          'lineHeight': '1.25rem', // leading-5 is a bit more standard than 1rem for 1rem text
          'color': 'rgba(120, 113, 108, 0.7)', // warm-gray-800 with opacity
          '@media (prefers-color-scheme: dark)': {
            color: 'rgba(250, 250, 249, 0.7)', // warm-gray-100 with opacity
          },
          '&:hover': {
            opacity: '1',
          },
        },
        '.container': {
          marginInline: 'auto',
          borderInline: '1px rgb(229 231 235 / 0.2) solid',
        },
      })
    }),
  ],
}
