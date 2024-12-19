import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/StreamSphere/",
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': '/src', // Ensure this points to your 'src' folder
    },
  },
})
