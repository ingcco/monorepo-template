import axios, { AxiosError } from 'axios'
import { Cookies } from 'react-cookie'

const cookies = new Cookies()

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
})

api.interceptors.request.use(
  config => {
    const accessToken = cookies.get('accessToken')
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    config.timeout = 60 * 1000
    return config
  },
  async error => await Promise.reject(error),
)

api.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    if (error.response?.status === 403) {
      console.log('auth')
    }
    return await Promise.reject(error)
  },
)

export { api }
