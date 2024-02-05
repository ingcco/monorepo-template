/** @type {import('tailwindcss').Config} */
import { colors, typography } from '@common/styles'
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: [],
  theme: {
    extend: { colors },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ...typography,
      })
    }),
  ],
}
