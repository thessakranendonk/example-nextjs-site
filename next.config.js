/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;

// module.exports = {
//   // Prefer loading of ES Modules over CommonJS
//   experimental: { esmExternals: true },
// };

// const withTM = require("next-transpile-modules")(["react-leaflet", "leaflet"]);

// module.exports = withTM({ webpack5: false });
