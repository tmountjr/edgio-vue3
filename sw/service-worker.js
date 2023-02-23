import { skipWaiting, clientsClaim } from "workbox-core";
import { precacheAndRoute } from "workbox-precaching";
import { Prefetcher } from "@edgio/prefetch/sw";
import DeepFetchPlugin from "@edgio/prefetch/sw/DeepFetchPlugin";

skipWaiting();
clientsClaim();
precacheAndRoute(self.__WB_MANIFEST || []);

new Prefetcher({
  plugins: [
    new DeepFetchPlugin([
      {
        jsonQuery: ".image",
        maxMatches: 20,
        as: "image",
      },
    ]),
  ],
}).route();
