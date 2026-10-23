import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  server: {
    port: 5173,
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  preview: {
    headers: {
      'Cross-Origin-Opener-Policy': 'same-origin',
      'Cross-Origin-Embedder-Policy': 'require-corp',
    },
  },
  worker: {
    format: 'es',
  },
  optimizeDeps: {
    exclude: ['vosk-browser', '@sign-mt/browsermt'],
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/@sign-mt/browsermt/build/esm/worker.js',
          dest: 'browsermt',
        },
        {
          src: 'node_modules/@sign-mt/browsermt/build/esm/bergamot-translator-worker.js',
          dest: 'browsermt',
        },
        {
          src: 'node_modules/@sign-mt/browsermt/build/esm/bergamot-translator-worker.wasm',
          dest: 'browsermt',
        },
        {
          src: 'node_modules/vosk-browser/dist/vosk.js',
          dest: 'vosk',
        },
      ],
    }),
  ],
  build: {
    target: 'es2022',
    sourcemap: true,
  },
});