import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: true,
    port: 3200,
  },
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});
