import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/HomieFix/',   // ⭐ VERY IMPORTANT
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})

