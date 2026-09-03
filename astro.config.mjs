import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://vahram.aghasyan.net',
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
});
