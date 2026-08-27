import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/profileupdate/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/app-v2.js`,
        chunkFileNames: `assets/app-v2-[name].js`,
        assetFileNames: `assets/app-v2-[name][extname]`,
      },
    },
  },
  server: {
    port: 3000,
    open: true,
    watch: {
      ignored: ['**/Generic CV/**', '**/CV antigravity/**', '**/.git/**'],
    },
  },
});
