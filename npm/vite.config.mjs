import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const currentDir = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(currentDir, '..');

export default defineConfig({
  root: projectRoot,
  cacheDir: resolve(currentDir, '.vite'),
  publicDir: false,
  server: {
    open: '/index.html',
  },
  preview: {
    open: '/index.html',
  },
  build: {
    outDir: resolve(currentDir, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(projectRoot, 'index.html'),
        boiler: resolve(projectRoot, 'boiler.html'),
      },
    },
  },
});