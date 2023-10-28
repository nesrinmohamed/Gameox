/** @format */
// import VueInternationalization from "vue-i18n";
// import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
// import { createI18n, useI18n } from "vue-i18n";
// https://nuxt.com/docs/api/configuration/nuxt-config

const content = `
We offer a wide range of gaming services to integrate with your app or website.
We develop feature-rich turnkey platforms, white label platforms, self-service solutions, and bitcoin casino solutions. Our platform has an advanced loyalty system, along with gaming and gameplay features and unlimited customization options for your choice.
We provide the best games through a single integration. You don't have to spend a lot of time going through long legal discussions to integrate games into your app - we provide you with the necessary games in any chat app or voice room app.
games
app games
chat room apps
chat room app games
ludo
guess
`;
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    // pageTransition: { name: "page", mode: "out-in" },
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {name: 'description', content: content}
      ]
    }
    
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "~/assets/sass/main.scss",
    "animate.css/animate.min.css",
  ],
  modules: ["@pinia/nuxt", "@nuxtjs/i18n"],
  build: {
    transpile: ["vuetify"],
  },
  runtimeConfig: {
    public: {
      baseURL: process.env.BASE_URL || "",
      apiURL: process.env.BASE_URL || "",
      googleLoginURL: process.env.GOOGLE_LOGIN_URL || "",
    },
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/sass/abstracts" as *;
            @use "@/assets/sass/global" as *;
          `,
        },
      },
    },
  },
  i18n: {
    // // customRoutes: 'config',
    // vueI18n: './i18n.config' ,
    // detectBrowserLanguage: false,
    // vueI18n: './i18n.config' ,// if you are using custom path, default
    lazy: true,
    langDir: "lang",
    strategy: "prefix",
    defaultLocale: 'en',
    locales: [
      { code: "ar", iso: "ar", name: "العربية", file: "ar.json", dir: "rtl" },
      { code: "en", iso: "en", name: "English", file: "en.json", dir: "ltr" },
      { code: "fr", iso: "fr", name: "Français", file: "fr.json", dir: "ltr" },
      {
        code: "zhHant",
        iso: "zhHant",
        name: "正體中文",
        file: "zhHant.json",
        dir: "ltr",
      },
    ],
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
});
