import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import stylezero from 'stylezero'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    stylezero(),
    vue(),
    vueDevTools(),
  ],
  resolve:{
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    },
  },
})
