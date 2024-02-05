import '@emotion/react'
import { colors, typography } from '@common/styles'

declare module '@emotion/react' {
  export interface Theme {
    colors: typeof colors
    typography: typeof typography
  }
}

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}
