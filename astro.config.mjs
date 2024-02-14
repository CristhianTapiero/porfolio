import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.cristhian-tapiero.vercel.app',
  integrations: [tailwind(), icon({
    include: {
      mdi: ["*"],
      "gravity-ui": ["*"],
      humbleicons: ["*"],
      brandico: ["*"],
      "devicon-plain": ["*"]
    }
  }), robotsTxt()],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  },
  output: 'server',
  adapter: vercel({
    imageService: true,
    webAnalytics:{
      enabled: true
    }
  })
});