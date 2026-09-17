import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/FinanceWebSite/',
  build: {
    // Broader mobile browser support than Vite's default modern baseline
    target: ['es2019', 'chrome64', 'safari12', 'firefox67', 'edge79'],
    cssTarget: ['chrome64', 'safari12', 'firefox67', 'edge79'],
  },
})
