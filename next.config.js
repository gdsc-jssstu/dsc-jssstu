const withPWA = require("next-pwa");
const withPrefresh = require("@prefresh/next");
const preact = require("preact");
const withPreact = require("next-plugin-preact");

const prod = process.env.NODE_ENV === "production";

module.exports = withPreact(
  withPWA({
    pwa: {
      disable: prod ? false : true,
      dest: "public",
      skipWaiting: false,
    },
    experimental: {
      modern: true,
    },
    images: {
      domains: ["res.cloudinary.com", "dsc-jssstu.github.io"],
      loader: "cloudinary",
      path: "https://res.cloudinary.com/dscjssstu/",
    },
  })
);
