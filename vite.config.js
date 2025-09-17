import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// Replace 'union2' with your repo name if different
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/union2/',
});
