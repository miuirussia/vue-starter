import "virtual:uno.css";
import "@/style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { PiniaColada } from "@pinia/colada";

import App from "@/App.vue";

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(PiniaColada, {});

app.mount("#app");
