import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    allowedHosts: ['.onrender.com'], // ✅ Permitir Render
    proxy: {
      '/mnist': {
        target: 'http://localhost:8000', // 🧪 Solo para dev local
        changeOrigin: true,
      },
    },
  },
})
