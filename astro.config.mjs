// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://carrier.express",
  trailingSlash: "ignore",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Asap",
        cssVariable: "--font-asap",
        weights: [400, 600, 700],
      },
    ],
  },
});
