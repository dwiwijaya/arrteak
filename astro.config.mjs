import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kayuart.id',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});
