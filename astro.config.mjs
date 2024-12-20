import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import compressor from "astro-compressor";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cristhian-tapiero.vercel.app',
  integrations: [tailwind(), icon({
    include: {
      "simple-icons": ["github", "linkedin", "x", "instagram"],
      "humbleicons": ["arrow-go-back", "bars"]
    }
  }), robotsTxt(), compressor({ gzip: true, brotli: false })],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  },
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics: {
      enabled: true
    }
  })
});