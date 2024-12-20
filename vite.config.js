import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
    // Manually configure fallback to index.html for routes
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.includes('.') && !req.url.startsWith('/api')) {
          req.url = '/'; // Redirect all non-file requests to the root
        }
        next();
      });
    },
  },
});
