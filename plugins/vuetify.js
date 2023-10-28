/** @format */

// plugins/vuetify.js
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, fa } from "vuetify/iconsets/fa";
import { mdi } from "vuetify/iconsets/mdi";




const customLightTheme = {
  dark: false,
  colors: {
    background: "#f6f6f6",
    surface: "#FFFFFF",
    "on-surface": "#FFFFFF",
    primary: "#39B4BD",
    "primary-2": "#ff017b",
    "secondary-lighten": "#262228",
    secondary: "#252634",
    "secondary-darken": "#161417",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    "main-text-color-lighten": "#cbcbcb",
    "main-text-color": "#90949c",
    "main-text-color-darken": "#6c6c6c",
  },
};
const customDarkTheme = {
  dark: true,
  colors: {
    background: "#f6f6f6",
    surface: "#FFFFFF",
    "on-surface": "#FFFFFF",
    primary: "#39B4BD",
    "primary-2": "#ff017b",
    "secondary-lighten": "#262228",
    secondary: "#252634",
    "secondary-darken": "#161417",
    error: "#B00020",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    "main-text-color": "#6c6c6c",
    "main-text-color2": "#cbcbcb",
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    locale: {
      // adapter: createVueI18nAdapter({ i18n, useI18n }),

      // locale: 'ar',
      // fallback: 'ar',
      rtl: {
          ar: true
      }
    },
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        fa,
        mdi,
      },
    },
    components,
    directives,
    theme: {
      defaultTheme: "customLightTheme",
      themes: {
        customLightTheme,
        customDarkTheme,
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
