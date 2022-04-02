const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
   reactStrictMode: true,
   pwa: {
      dest: 'public',
      scope: '/',
      disable: process.env.NODE_ENV === 'development',
      register: true,
      skipWaiting: true,
      runtimeCaching,
   },
});
