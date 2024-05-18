// https://nuxt.com/docs/api/configuration/nuxt-config
import path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-primevue",
    "@pinia/nuxt",
  ],
  // primevue: {
  //   cssLayerOrder: "tailwind-base, primevue, tailwind-utilities",
  //   components: {
  //     exclude: ["Editor", "Chart"]
  //   }
  // },
  // css: ["primevue/resources/themes/lara-dark-indigo/theme.css"],
  primevue: {
    options: { unstyled: true },
    importPT: { from: path.resolve(__dirname, './presets/wind/') }      //import and apply preset   
  }
})