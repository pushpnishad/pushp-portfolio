import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/pushp-portfolio/',
})



// git add .
// git commit -m "Update portfolio"
// git push