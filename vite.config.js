import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Env-friendly Vite config:
// Set BUILD_TARGET=gh to build with the GitHub Pages base (/AscensionRanchWebsite/).
// Otherwise the base will be '/'.
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
