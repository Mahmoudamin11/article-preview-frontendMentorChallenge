import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/article-preview-frontendMentorChallenge/",
  plugins: [react()],
})

// base: '/article-preview-frontendMentorChallenge/',