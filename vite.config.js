import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/weather-frontend/',  // 👈 имя твоего репо
  plugins: [react()],
})
