import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

export default defineConfig({
  plugins: [sveltekit()],
  // allows vite access to ./demons
  server: {
    fs: {
      allow: ['./']
    }
  }
})
