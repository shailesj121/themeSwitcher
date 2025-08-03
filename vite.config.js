import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
  server: {
    historyApiFallback: true // ✅ fallback to index.html for SPA routes during dev
  },
  build: {
    outDir: 'dist'
  }
})
