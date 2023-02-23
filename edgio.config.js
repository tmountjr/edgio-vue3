// eslint-disable-next-line no-undef
module.exports = {
  connector: "@edgio/vue-cva",
  backends: {
    coffee: {
      domainOrIp: "api.sampleapis.com",
      hostHeader: "api.sampleapis.com",
    },
  },
  // The name of the site in Edgio to which this app should be deployed.
  name: "edgio-vue3",
};
