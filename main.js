window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('./sw.js');
              //
              //clear sw.js cache
              caches.keys().then(function(cacheNames) {
              cacheNames.forEach(function(spaceedge) {
              caches.delete(spaceedge);
    });
  });
  }
}
