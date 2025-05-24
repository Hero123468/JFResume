import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // 👈 Replace with your repo name if it's different
  plugins: [react()],
+  base: '/vite-deploy-demo/'
});
