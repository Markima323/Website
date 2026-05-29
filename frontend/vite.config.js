import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// During local `npm run dev`, requests to /api are proxied to the backend.
// In Docker/production, Nginx handles the /api proxying instead.
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // 在 Docker（Windows 宿主 -> Linux 容器）里，普通文件监听常收不到变更，
    // 用轮询保证热更新（HMR）可靠触发。本机直接跑也无妨。
    watch: {
      usePolling: true,
    },
    proxy: {
      '/api': {
        target: process.env.VITE_API_TARGET || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
