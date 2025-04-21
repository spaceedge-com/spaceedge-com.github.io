const CACHE_NAME = 'search-cache-v1';
const urlsToCache = [
  '/search',              // Cache the /search page
  '/search.html',         // You might have a separate search page, otherwise just use /search
  '/styles.css',          // Cache search-specific styles
  '/scripts.js',          // Cache search-specific scripts
  '/icons/icon-192.png',  // Cache the icon
  '/icons/icon-512.png'   // Cache the 512px icon
];

// Install the service worker and cache search-specific assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Activate the service worker and clean up old caches
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

// Fetch event: Serve the cached content for /search page
self.addEventListener('fetch', (event) => {
  // Only handle fetches for /search page and associated resources
  if (event.request.url.includes('/search')) {
    event.respondWith(
      caches.match(event.request)
        .then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          return fetch(event.request);
        })
    );
  }
});
