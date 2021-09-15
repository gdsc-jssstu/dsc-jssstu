const withPWA = require("next-pwa");
const withPreact = require("next-plugin-preact");

const prod = process.env.NODE_ENV === "production";

module.exports = withPreact(
  withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: "public",
      register: false,
      skipWaiting: false,
    },
    experimental: {
      disableOptimizedLoading: false,
      optimizeImages: true,
      optimizeCss: true,
    },
  })
);
