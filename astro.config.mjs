import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://lucashorsman.github.io',
  base: '/',
  build: {
    format: 'directory'
  }
});
