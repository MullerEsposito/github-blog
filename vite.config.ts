import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("src/assets", import.meta.url)),
      "@icons": fileURLToPath(new URL("src/assets/icons", import.meta.url)),
      "@components": fileURLToPath(new URL("src/components", import.meta.url)),
    }
  }
})
