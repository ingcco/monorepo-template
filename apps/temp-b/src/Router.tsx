import { Navigate, Outlet, Route } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import { Cookies } from 'react-cookie'
import AuthPage from './pages/auth/AuthPage'

const cookies = new Cookies()
const AuthGuardRouter = () => {
  if (cookies.get('auth')) {
    return <Outlet />
  }
  return <Navigate to="/home" replace />
}

export const AuthRouter = (
  <Route element={<AuthGuardRouter />}>
    <Route path="auth" element={<AuthPage />} />
  </Route>
)

export const PublicRouter = (
  <Route path="/">
    <Route path="home" element={<HomePage />} />
  </Route>
)
