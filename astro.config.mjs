import { defineConfig } from 'astro/config';
export default defineConfig({
  site: 'https://byboop.shop',
  output: 'static',
  build: { inlineStylesheets: 'auto' },
});
