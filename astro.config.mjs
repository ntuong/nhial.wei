import { defineConfig } from 'astro/config';
import rss from '@astrojs/rss';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // TODO: replace with your real domain
  site: 'https://nhialwei.com',
  integrations: [sitemap()],
});
