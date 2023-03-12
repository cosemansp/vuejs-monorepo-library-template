/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { externalizeDeps } from 'vite-plugin-externalize-deps';
import path from 'path';

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    externalizeDeps({
      deps: false,
    }),
  ],
  build: {
    target: 'es2020',
    minify: false, // let the application bundler do the minification
    sourcemap: true,
    lib: {
      entry: path.resolve(process.cwd(), 'src/index.ts'),
      fileName: (format: string) => `index.${format}.js`,
      formats: ['es'],
    },
  },
  test: {
    environment: 'happy-dom',
    setupFiles: path.resolve(__dirname, 'scripts/setupTests.ts'),
  },
});
