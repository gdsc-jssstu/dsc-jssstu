const withPWA = require("next-pwa");
const withPreact = require("next-plugin-preact");

const runtimeCaching = require("next-pwa/cache");
runtimeCaching[0].handler = "StaleWhileRevalidate";

const prod = process.env.NODE_ENV === "production";

module.exports = withPreact(
  withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: "public",
      register: false,
      skipWaiting: false,
      runtimeCaching,
    },
    experimental: {
      modern: true,
    },
  })
);
