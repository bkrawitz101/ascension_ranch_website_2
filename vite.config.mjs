import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ESM Vite config for GitHub Pages
export default defineConfig({
  base: '/AscensionRanchWebsite/',
  plugins: [react()],
  build: {
    outDir: 'dist'
  }
})
