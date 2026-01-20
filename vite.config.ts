import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // Using port 5174 as requested
    host: true, // Enable access from other devices on the network
  },
  build: {
    outDir: 'dist',
  },
});