import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  site: "https://andresmgdev.github.io",
  base: "/encrypt",
  server: {
    host: true,
    port: 8000,
    watch: {
      usePolling: true
    }
  }
})
