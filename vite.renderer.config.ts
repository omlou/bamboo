import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import { fileURLToPath } from 'node:url'

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});
