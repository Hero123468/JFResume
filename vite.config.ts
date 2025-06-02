import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Replace with your repo name if it's different
  base: '/jfresume/', 
  plugins: [react()],
});
