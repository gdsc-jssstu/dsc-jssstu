module.exports = {
  siteUrl: "https://dscjssstu.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/resources"],
      },
    ],
  },
};
