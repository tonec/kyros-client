/*eslint-disable */

self.__precacheManifest = [].concat(self.__precacheManifest || []);

workbox.core.setCacheNameDetails({
  prefix: 'app-pwa',
  suffix: 'v1',
  precache: 'install-time',
  runtime: 'run-time',
  googleAnalytics: 'ga',
});

// precache and route asserts built by webpack
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// routing for api
workbox.routing.registerRoute(
  /^https:\/\/dog\.ceo/i,
  new workbox.strategies.NetworkFirst({
    cacheName: 'app-pwa-precache'
  })
);

// routing for cloud served images
workbox.routing.registerRoute(
  /^https:\/\/.+\.(jpe?g|png|gif|svg)$/i,
  new workbox.strategies.CacheFirst({
    cacheName: 'app-pwa-image-cache',
    plugins: [
      new workbox.expiration.Plugin({
        // Only cache requests for a week
        maxAgeSeconds: 7 * 24 * 60 * 60,
        // Only cache 20 requests.
        maxEntries: 20
      }),
      new workbox.cacheableResponse.Plugin({
        statuses: [0, 200]
      })
    ]
  })
);
