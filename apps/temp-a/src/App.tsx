import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { PublicRouter, AuthRouter } from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { ThemeProvider } from '@emotion/react'
import { colors, typography } from './styles/designToken'

const router = createBrowserRouter(
  createRoutesFromElements([PublicRouter, AuthRouter]),
)

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={{ colors, typography }}>
        <main>
          <RouterProvider router={router} />
        </main>
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
