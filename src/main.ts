import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";
import App from "./App.vue";
import "@/styles/index.css";

const app = createApp(App);

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

app.use(router);
app.mount("#app");
