/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","454443f24a743bbe507b56594f2d8a3c"],["contact.html","82addee7e1199a164fe75bc5bfbbb5bc"],["css/bootstrap-grid.css","db438cff680b6d0c029f75647b4b138a"],["css/bootstrap-grid.css.map","622b296beb2afca293e90ab5ba6db14f"],["css/bootstrap-grid.min.css","2206c9fb0197956129137af662b31115"],["css/bootstrap-grid.min.css.map","a79533cec9980bfa1d99928dd3a81d53"],["css/bootstrap-reboot.css","cceed351e3a8401f573988a38e78d3a8"],["css/bootstrap-reboot.css.map","196fde56f0710e83886b21f5c7ee389e"],["css/bootstrap-reboot.min.css","e2b23d34f3fcc9ce074c942e76f25d61"],["css/bootstrap-reboot.min.css.map","dd0692f26351a6c9ef99e9b342a7da6b"],["css/bootstrap.css","82252d754417f95f7779be349acc6361"],["css/bootstrap.css.map","7f22dc40aa22dc514eaf73c8d619e8bd"],["css/bootstrap.min.css","a7022c6fa83d91db67738d6e3cd3252d"],["css/bootstrap.min.css.map","ea6c3c97d126f9996d7cc206f2df625b"],["css/style.css","8102bde3aa2c0ab932a2ec114a7835b9"],["findus.html","ecc8d54b10d6c46102bf3e8d19de4d71"],["gallery.html","9e96059ae49ab3393662582437e4f1cb"],["images/769759_hot_512x512.png","a6ddb0f54f28e75b47987fce5397ccfa"],["images/alcohol-1961542_1280.jpg","f1ae80354889514fb7fed120e2b04a67"],["images/apple.png","3815a9cd927a2994b1854bac0a24522b"],["images/banana.png","76273f793f78677830b9e4e0c07525dd"],["images/bananas-282313_1280.jpg","04a4368b5b94afb32321321661653b93"],["images/belgium-1489362_1280.png","25af47720a6832ba406c1fb416de62a1"],["images/belgium-654233_1280.png","3e4dd8514afedaba0ea5847204bb713d"],["images/burger-1830696_1280.jpg","f4563515682b8803582cdd513269f7e9"],["images/burger-2018627_1920.jpg","e6392f308fb85cf339419374a8790c8d"],["images/burger.png","d5e0582aeb8d24c96f13884f75b45724"],["images/burgers-1976198__480.jpg","71d47e7caa112e58fa51bf2ea4b02c25"],["images/drink-3313605_1280.jpg","8b47b489d625411a854738d9f8ea4f5e"],["images/eszterhazyschnitte-626109_1280.jpg","908a705085adb28d7885fdec9e4b70e6"],["images/food-1529365_1280.jpg","3ddaf188f589c6fc47cc142f7c8042d2"],["images/food-1553300_1280.jpg","d43f7de25e4b261e47a1f5e2fbd4cc7c"],["images/food-2126372_1280.jpg","7b9cf3f13af0fd029ae9b60f46004024"],["images/food-949388_1280.png","c69e6576624de746e54f2d82e9b0bcb1"],["images/ham-2561520_1280.jpg","dc967496c24ec606bcad6c6d7bc730ba"],["images/hamburger-2407991_1920.jpg","6c2a3c9e98c08cc7940b1df1d0cef436"],["images/heart.ico","fd9e39509eec69ad32b20fe88966b7be"],["images/ketchup-617231_1280.jpg","075d65016a7ce349b7cde79d357dd3cb"],["images/logo.png","21d6000d0aa993244848bd97b2056c15"],["images/music.png","74635654c45980c30aa988d06fffb4b3"],["images/pasta.png","ad6511e7a198a54336fe1c85c446f08e"],["images/pepites-magasin-produits-locaux-bio-rixensart.jpg","6d264034c6aae79d03ad84c23bbc2fb5"],["images/red-417101_1280.jpg","bc7e43d34229e20b1cb3b6020b7186ee"],["images/snack-2635035_1920.jpg","c8b643b7aa6ee4eb0ae47613a370d09c"],["images/table-791167_1280.jpg","0a0eeab9924a97f0705c2a74543cf92f"],["images/tea.png","ea1acf00f45823b8de6dbfd8bff4335d"],["images/veggie-2281212_1920.jpg","fb54175138adebfaa2c513eae83cd4b3"],["images/whisky-3313592_1280.jpg","30db8e5e4617f0eac5349a6d169f763b"],["images/writing-pad-3229690.jpg","85c22cf12008292da92cf7bd703e2db5"],["index.html","f172e4f46b47c67cc346fa93fc662c1b"],["js/bootstrap.bundle.js","ee08eb7f44335a3cf385e03d4406e4a5"],["js/bootstrap.bundle.js.map","1d446b0e668ececab31cd3cb5e137d4a"],["js/bootstrap.bundle.min.js","d70c474886678aebe3e9d91965dc8b62"],["js/bootstrap.bundle.min.js.map","c41626cedb5efebbfb7b18e140042613"],["js/bootstrap.js","c2cdb900858c3e63ce8cd9f69171d342"],["js/bootstrap.js.map","1659c6f13c0a9611a9ae186d99184f18"],["js/bootstrap.min.js","eb5fac582a82f296aeb74900b01a2fa3"],["js/bootstrap.min.js.map","97aa185a0946b2aae827ac35ea0bcabb"],["js/functions.js","23057f4b215ec971551b0aa0e1c7cb61"],["js/gallery.json","1f5b2b7266228a9dbc8d0224b36146e4"],["js/jquery-1.12.3.js","9e90cb09942ce79485f6d711b41e9525"],["js/manifest.json","450c6efb7698dc02fe0472fbf8ac81f7"],["js/sw.js","1aacc8ce6503ae191ac10e2fd5ea6801"],["menu.html","6e38dc467c4a2bd47fcb44224e41111c"],["nbproject/private/private.properties","4375013777f99cb2d5edecbf4fb7b0de"],["nbproject/private/private.xml","c9e44782615945723324871ed57d1626"],["nbproject/project.properties","def100f4fe534f2fb58795f771af7721"],["nbproject/project.xml","7051e77398008a1eb1a907ae0df4a504"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







