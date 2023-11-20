import { fileURLToPath, URL } from 'node:url'
import qiankun from 'vite-plugin-qiankun'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), qiankun('vue-vite3-sub', { useDevMode: true })],
  server: {
    headers: {
      'access-control-allow-origin': '*'
    }
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
