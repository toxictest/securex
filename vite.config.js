import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // <-- Fixes blank screen issue on Vercel
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});
