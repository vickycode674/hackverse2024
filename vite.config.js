import react from '@vitejs/plugin-react'
import commonjs from '@rollup/plugin-commonjs';
import { defineConfig } from 'vite';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  commonjs

})
