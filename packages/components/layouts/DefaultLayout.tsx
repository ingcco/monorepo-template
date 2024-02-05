import { colors, typography } from '@common/styles'
import { ThemeProvider } from '@emotion/react'
import { Outlet } from 'react-router-dom'

export interface DefaultLayoutProps {
  colors: typeof colors
  typography: typeof typography
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { colors, typography } = props
  return (
    <ThemeProvider theme={{ colors, typography }}>
      <div>
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default DefaultLayout
