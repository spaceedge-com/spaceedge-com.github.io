const CACHE_NAME = 'multi-search-cache-v1';
const urlsToCache = [
  '/',
  '/search',               // Cache the /search page
  '/index.html',           // Cache the index.html
  '/search.html',          // Add this if you have a separate HTML for search
  '/styles.css',           // Cache your CSS
  '/scripts.js',           // Cache your JS
  '/icons/icon-192.png',   // Cache the icon
  '/icons/icon-512.png'    // Cache the 512px icon
];

// Install service worker and cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate service worker and clean up old caches
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event: Serve assets from cache or fetch from network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return the cached response if available, otherwise fetch from the network
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
  );
});
