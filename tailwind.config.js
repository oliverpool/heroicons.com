const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  experimental: {
    uniformColorPalette: true,
    extendedSpacingScale: true,
  },
  purge: {
    mode: 'all',
    content: ['src/**/*.{njk,js,ts}'],
    options: {
      keyframes: true,
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'twitter-blue': '#1DA1F2',
      },
      opacity: {
        10: '0.1',
        12: '0.12',
        20: '0.2',
        40: '0.4',
      },
    },
  },
  variants: {
    opacity: [
      'responsive',
      'hover',
      'focus',
      'group-hover',
      'focus-within',
      'group-focus-within',
    ],
  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('group-focus-within', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.group:focus-within .${e(
            `group-focus-within${separator}${className}`
          )}`
        })
      })
    }),
  ],
}