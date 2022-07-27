import { defineConfig } from 'vitest/config';
import autoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  test: {
    include: ['test/**/*.spec.ts'],
  },
  plugins: [
    autoImport({
      imports: 'vitest',
    }),
  ],
});
