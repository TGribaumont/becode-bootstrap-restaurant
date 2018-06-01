    var CACHE_NAME = 'my-site-cache-v1';
    var urlsToCache = [
//      '/',
//      '/styles/main.css',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/menu.html',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/gallery.html',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/findus.html',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/contact.html',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/js/jquery-1.12.3.js',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/js/functions.js',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/css/bootstrap.min.css',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/css/style.css',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/images/food-949388_1280.png',
      'https://tgribaumont.github.io/becode-bootstrap-restaurant/images/logo.png'
//      'https://tgribaumont.github.io/becode-bootstrap-restaurant/js/manifest.json'
//      'https://tgribaumont.github.io/becode-bootstrap-restaurant/js/functions.js'
    ];

    self.addEventListener('install', function(event) {
      // Perform install steps
      event.waitUntil(
        caches.open(CACHE_NAME)
          .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
          })
      );
    });
//});


//self.addEventListener('fetch', function(event) {
//  event.respondWith(
//    caches.match(event.request)
//      .then(function(response) {
//        // Cache hit - return response
//        if (response) {
//          return response;
//        }
//        return fetch(event.request);
//      }
//    )
//  );
//});
