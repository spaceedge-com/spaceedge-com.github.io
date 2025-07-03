const CACHE_NAME = 'search-cache-v1';
const urlsToCache = [
  '/search',              // Cache the /search page
  '/search.html',         // You might have a separate search page (use this if needed)
  '/styles.css',          // Cache search-specific styles
  '/scripts.js',          // Cache search-specific scripts
  '/icons/icon-192.png',  // Cache the 192px icon
  '/icons/icon-512.png'   // Cache the 512px icon
];

// Install service worker and cache search page-related assets
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

// Fetch event: Serve the cached content for the /search page and related assets
self.addEventListener('fetch', (event) => {
  // Handle requests only for /search page and its assets
  if (event.request.url.includes('/search')) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          // Return cached response if available
          if (cachedResponse) {
            return cachedResponse;
          }
          // Otherwise, fetch from the network
          return fetch(event.request);
        })
    );
  }
});

