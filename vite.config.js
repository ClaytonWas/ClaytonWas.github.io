import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    proxy: {
      '/old-path': {
        target: 'https://wasmund.ca', // Your destination URL
        rewrite: (path) => path.replace(/^\/old-path/, '/new-path'),
      },
    },
    // This ensures that Vite handles 404 routes properly and falls back to index.html
    historyApiFallback: true,
  },
});
