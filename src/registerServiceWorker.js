import { registerSW } from "virtual:pwa-register";

if ("serviceWorker" in navigator) {
  registerSW({
    onRegisteredSW: (url) => {
      console.log(`Registered at url ${url}`);
    },
  });
}
