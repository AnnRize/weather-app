import {
   VueQueryPlugin,
   type VueQueryPluginOptions,
} from "@tanstack/vue-query";
import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./global.scss";


const vueQueryPluginOptions: VueQueryPluginOptions = {
   queryClientConfig: {
      defaultOptions: {
         queries: {
            refetchOnWindowFocus: false,
         },
      },
   },
};

const app = createApp(App);
const pinia = createPinia();

app.use(VueQueryPlugin, vueQueryPluginOptions);
app.use(router);
app.use(pinia);

app.mount("#app");
