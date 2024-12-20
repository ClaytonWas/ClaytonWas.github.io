import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    historyApiFallback: true, // route fallback to keep things inside react/vite directly instead of popping .htmls everywhere.
  },
})
