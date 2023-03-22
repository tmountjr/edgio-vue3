import { createApp } from "vue";
import { createPinia } from "pinia";
// import './registerServiceWorker.js'
import install from "@edgio/prefetch/window/install";
import installDevtools from "@edgio/devtools/install";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

install();
installDevtools();
