'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "ba532025d89af97a00cc8a3ca0339a37",
"assets/AssetManifest.bin.json": "c3944f2121ef9dfa517d7eed77a7cf2d",
"assets/AssetManifest.json": "831bb49d7f6de58374a9bde83b03f3c9",
"assets/assets/customer_icon.png": "29b75b1e3355a19a2f8f74bd9ecce795",
"assets/assets/ecom_delivery_ioc.png": "1c4055486165f0c69cf59f5dced88443",
"assets/assets/express_delivery_Icon.png": "63b551fd037a05eceefe111aee0cfc55",
"assets/assets/icons/box_icon.png": "9b71e4a4ba03f4b33fad870ee1bafc75",
"assets/assets/icons/building_material_icon.png": "98f8c3ffb4e8bd0ddc752739cad2e744",
"assets/assets/icons/cack_flower_icon.png": "8ad6fe69ac20d9fa994a6840e9e1fd4f",
"assets/assets/icons/container_icon.png": "bb7497a72b7d068a032a34e781385412",
"assets/assets/icons/dashboard.png": "cdc25e65eb3019430b1c31ceebcd29ba",
"assets/assets/icons/doc_icon.png": "5258b9a332199e5a7cb88f3f1763322d",
"assets/assets/icons/full_track_icon.png": "ff3889ae10a8a9ed0657a38d607b01a4",
"assets/assets/icons/furnature_icon.png": "4c0305f1694e1f54cdb6f8ceb5299ae1",
"assets/assets/icons/gernal_track_icon.png": "2f3ddede520aaf1e9874bafd8f00ae26",
"assets/assets/icons/laptop_icon.png": "6d64ed980c0f2822e550cb1c661d6b54",
"assets/assets/icons/large_box_icon.png": "b89e47921095b562b0d07199485f7738",
"assets/assets/icons/machin_icon.png": "0b8a9905a904a62f53fdb6b6b2a3d0c2",
"assets/assets/icons/palates_icons.png": "8692841ffc4d7fbf21a98b529f6afb09",
"assets/assets/icons/pay_now.jpg": "a0c56e6ac89a3baab6e4562b6248990f",
"assets/assets/icons/shipman_icon.png": "359ea295232ae82cd3b13ed67386f0df",
"assets/assets/icons/vechle_icon.png": "164d0849864396dbf8f8a21b6508a375",
"assets/assets/images/bag1.png": "6d64ed980c0f2822e550cb1c661d6b54",
"assets/assets/images/checkbox.png": "130ab276b2f611c5339905cb99c6bb3d",
"assets/assets/images/self_paking.png": "9584af666f94eb6dbfc0418430242a6a",
"assets/assets/joinfaimlybckscreen.png": "159e6231011356130868fe61caab9bda",
"assets/assets/joinfaimlyicon.png": "dc20dbbd19b2db5ea4732ff47fe6e3c6",
"assets/assets/logo.png": "f4513f36cb56834560115e68bf281e09",
"assets/assets/logoapp.png": "2d78b059b87c103b8588d9099b9d0db3",
"assets/assets/not_currect_response.png": "e13dffb6b42ce3213e6de71b7ae68d0b",
"assets/assets/pamyntIcons.png": "d2364955ab5b0c8646219bd3cc3c9e4b",
"assets/assets/rider_icon.png": "bb7c38fa87579b41e36ecf9c8d02f0ae",
"assets/assets/trueCirculerIcon.png": "70cce4871cf44b7c04b221ab0731d7a1",
"assets/assets/trueicons.png": "70cce4871cf44b7c04b221ab0731d7a1",
"assets/assets/vajza_tokave_diellit.mp3": "6a532c54b6fc073a2fca991475285bcc",
"assets/assets/waitingIcon.png": "bf71de97f4ef7d56984aee5811a605f6",
"assets/assets/welcomedeliveryIcon.png": "bb4bb15a8f8126409e5e4d3e691d03cc",
"assets/assets/yellowbackground.png": "241e4a22f3f010c14b9048fc7b75f9a8",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a7d4ae1947ec5d9e1eab818fa35982ff",
"assets/NOTICES": "85d6b7f2e725bdfb1a9137a9f0069a55",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase-messaging-sw.js.dart": "88b94eb0bf288a4efe562bc57caea04b",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "834cfe8205e0d205641633a7746e9267",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d0525c7f8eaedeab0a96b50bb975d69a",
"/": "d0525c7f8eaedeab0a96b50bb975d69a",
"main.dart.js": "7a073bfb808ee527183ab7d5d9fe8168",
"manifest.json": "30c8bb06f4ace57502b0da69de9a4cc7",
"version.json": "fdce5f6c0b67c7843b8cdb39d6e85163"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
