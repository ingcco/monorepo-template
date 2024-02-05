/** @type {import('tailwindcss').Config} */
import { colors, typography } from './src/styles/designToken'
import plugin from 'tailwindcss/plugin'

export default {
  important: '#root',
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    '../../packages/components/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        ...typography,
      })
    }),
  ],
}
