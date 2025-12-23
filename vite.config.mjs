import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Env-friendly ESM Vite config. Use BUILD_TARGET=gh for GitHub Pages base.
export default defineConfig(() => {
  const base = process.env.BUILD_TARGET === 'gh' ? '/AscensionRanchWebsite/' : '/'
  return {
    base,
    plugins: [react()],
    build: {
      outDir: 'dist'
    }
  }
})
