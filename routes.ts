// This file was added by edgio init.
// You should commit this file to source control.

import { Router } from "@edgio/core/router";
import { vueRoutes } from "@edgio/vue-cva";

export default new Router()
  .get("/api/coffee", ({ proxy, cache }) => {
    cache({
      browser: {
        maxAgeSeconds: 0,
        serviceWorkerSeconds: 60,
      },
      edge: {
        maxAgeSeconds: 60 * 60,
      },
    });
    proxy("coffee", { path: "/coffee/hot" });
  })
  .use(vueRoutes);
