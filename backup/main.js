window.onload = () => {
  'use strict';

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
              //
              //clear sw.js cache
              caches.delete(spaceedge);
    });
  });
  }
}
