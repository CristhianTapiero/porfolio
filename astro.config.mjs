import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), icon({
    include:{
      mdi: ["*"],
      "gravity-ui": ["*"],
      humbleicons: ["*"],
      brandico: ["*"],
      "devicon-plain": ["*"],
    }
  })],
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'es'
  },
  adapter: vercel({
    imageService: true,
  }),
});