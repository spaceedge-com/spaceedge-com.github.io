
self.addEventListener('install', function(event) {
  console.log('Service Worker installed');
  // Cache essential files
});

self.addEventListener('activate', function(event) {
  console.log('Service Worker activated');
});
