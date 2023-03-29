import { fileURLToPath } from "url";
import { defineNuxtConfig } from "nuxt/config";
import { appDescription } from "./constants/index";

export default defineNuxtConfig({
  target: "static",
  modules: [
    "@unocss/nuxt",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    classSuffix: "",
  },
  alias: {
    css: fileURLToPath(new URL("./assets/css", import.meta.url)),
  },
  css: [
    "css/index.css",
  ],
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/png", href: "/mellow.png" },
      ],
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: appDescription },
        { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      ],
      title: "Mellow Theme",
    },
  },
});
