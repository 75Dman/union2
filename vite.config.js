import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'union2' with your repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/union2/',
});
