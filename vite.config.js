import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    // vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://172.27.152.80:3333',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  }
}

  }
});