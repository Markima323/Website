import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// During local `npm run dev`, requests to /api are proxied to the backend.
// In Docker/production, Nginx handles the /api proxying instead.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
