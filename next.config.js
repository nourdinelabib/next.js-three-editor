const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
   reactStrictMode: true,
   pwa: {
      dest: 'public',
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === 'development',
      runtimeCaching,
      buildExcludes: [/middleware-build-manifest\.js$/],
   },
   i18n: {
      locales: ['en-US'],
      defaultLocale: 'en-US',
   },
});
