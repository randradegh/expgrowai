import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { contactPlugin } from './vite-plugin-contact'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactPlugin()],
  appType: 'spa',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    proxy: {
      '/api/hashnode': {
        target: 'https://gql.hashnode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/hashnode/, '/'),
        secure: true,
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            console.log('🔄 Proxy: Enviando petición a Hashnode API...', req.method, req.url)
          })
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            console.log('✅ Proxy: Respuesta recibida de Hashnode', proxyRes.statusCode, req.url)
          })
          proxy.on('error', (err, req, _res) => {
            console.error('❌ Proxy error:', err.message)
          })
        },
      },
    },
  },
  preview: {
    port: 8080,
    host: '0.0.0.0',
  },
})

