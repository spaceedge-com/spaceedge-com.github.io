/* sw.js service worker  */
var cacheName = 'spaceedge-cool-cache1';
var filesToCache = [
  '/icons/',
  '/images/',
  '/css/'
];

/* Start the service worker and cache assigned content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
