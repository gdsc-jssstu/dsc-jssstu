const withPWA = require("next-pwa");
const withPrefresh = require("@prefresh/next");
const preact = require("preact");
const withPreact = require("next-plugin-preact");

const runtimeCaching = require("next-pwa/cache");
runtimeCaching[0].handler = "StaleWhileRevalidate";

const prod = process.env.NODE_ENV === "production";

module.exports = withPreact(
  withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: "public",
      skipWaiting: false,
      runtimeCaching,
    },
    experimental: {
      modern: true,
    },
  })
);
