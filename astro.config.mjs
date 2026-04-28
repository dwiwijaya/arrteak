import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kayuart.id',
  devToolbar: {
    enabled: false,
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
});
