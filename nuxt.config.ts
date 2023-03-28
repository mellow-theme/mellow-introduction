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
  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/mellow.svg" },
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
