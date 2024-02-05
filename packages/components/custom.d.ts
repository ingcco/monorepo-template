import '@emotion/react'
import { colors, typography } from '@common/styles'

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors
    typography: typeof typography
  }
}
