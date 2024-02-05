import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/main.scss'

const container = document.getElementById('root')
const root = createRoot(container as Element)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
