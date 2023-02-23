import { useRegisterSW } from "virtual:pwa-register/vue";

if ("serviceWorker" in navigator) {
  const { updateServiceWorker } = useRegisterSW({
    onRegisteredSW: (url) => {
      console.log(`Registered at url ${url}`);
    },
    onRegisterError: (error) => {
      console.error("Error registering SW:", error);
    },
  });
  updateServiceWorker();
}
