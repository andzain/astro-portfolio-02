import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://va.021920.xyz",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "hy"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    svelte(),
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-US",
          hy: "hy-AM",
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
