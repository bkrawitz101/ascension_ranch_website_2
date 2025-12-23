import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Env-friendly ESM Vite config. Use BUILD_TARGET=gh for GitHub Pages base.
export default defineConfig(() => {
  const ghRepo = process.env.GH_PAGES_REPO || 'ascension_ranch_website_2'
  const base = process.env.BUILD_TARGET === 'gh' ? `/${ghRepo}/` : '/'
  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist'
    }
  }
})
