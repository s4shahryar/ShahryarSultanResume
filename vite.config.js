import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Set this to your GitHub repository name (the part after github.com/username/).
// If deploying to a custom domain or username.github.io root, set base to '/'.
const REPO_NAME = 'ShahryarSultanResume'

export default defineConfig({
  plugins: [react()],
  base: `/${REPO_NAME}/`,
})
