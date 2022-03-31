/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,

   experiments: {
      topLevelAwait: true,
   },
};

module.exports = nextConfig;
