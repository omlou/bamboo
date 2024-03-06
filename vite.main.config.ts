import { defineConfig } from 'vite';
import react from "@vitejs/plugin-react";
import { fileURLToPath } from 'node:url'

console.log(123,fileURLToPath(new URL('./src', import.meta.url)), __dirname)
// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    // Some libs that can run in both Web and Node.js, such as `axios`, we need to tell Vite to build them in Node.js.
    browserField: false,
    mainFields: ['module', 'jsnext:main', 'jsnext'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
});
