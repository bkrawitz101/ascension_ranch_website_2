import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Story from './pages/Story.jsx'
import './index.css'

const root = createRoot(document.getElementById('root'))
const pathname = window.location.pathname || '/'
const base = import.meta.env.BASE_URL || '/'

const isStory = (
  pathname === `${base}story` ||
  pathname === `${base}story/` ||
  pathname === '/story' ||
  pathname === '/story/'
)

if (isStory) {
  root.render(
    <React.StrictMode>
      <Story />
    </React.StrictMode>
  )
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
