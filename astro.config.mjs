import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const GA_ID = 'G-4YKNW7950N';

export default defineConfig({
  site: 'https://EviDiet-Lab.github.io',
  base: '/metabolab',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    define: {
      __GA_ID__: JSON.stringify(GA_ID),
    },
  },
});
