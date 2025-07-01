import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'

export default defineConfig({
  base: '/JFResume/', 
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/Components'),
    },

  },

  plugins: [react()],
});
