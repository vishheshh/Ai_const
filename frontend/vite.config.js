import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    chunkSizeWarningLimit: 1000,
    outDir: "dist",
  },
  server: {
    fs: {
      strict: true,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
