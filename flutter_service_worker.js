'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8913b41e5e931ad7ccda9a4332a3f59d",
".git/config": "1865e39eba0352ada6971cc54454ef6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b262276e240ad2e444043b0680bcac80",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4802878e9675139537ae8efdb3e73746",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "278078db705ca7f5fe5892b3c2a5aa93",
".git/logs/refs/heads/master": "278078db705ca7f5fe5892b3c2a5aa93",
".git/logs/refs/remotes/origin/HEAD": "f86ec88e5f8f044be4af407e00759d57",
".git/logs/refs/remotes/origin/master": "e4c5fab759b822368f9ae25fae48279a",
".git/objects/0a/bb6de6150c0ce4098ea12c26ecf57877511491": "882bba3e3e0a708a99bc0a76f8fb912f",
".git/objects/0c/10cd6a90b401c7a847aae9cb7415853f2ff1cd": "40c4bde667e7030b0c134c0242d1adc9",
".git/objects/10/5cd4092dd3bfe2a0714f970031021becb1d9e1": "29931fa2924c51cac678ae41b2337a8f",
".git/objects/10/8469d0fe796e0c80bbbd164046be7ce892f2b6": "7de57b80d35c40277ed0cb0520cbb81d",
".git/objects/30/a0bbdcbd65d6296a05102c5d899f6a2dac7012": "cf30c4b0f2987b86b3a9fe259a3347fb",
".git/objects/33/f033562ea6c41745b8c1113667612c896173a3": "7e758210b9b3d76ae5ca5490747aa059",
".git/objects/3f/451ba7bb276211c30945e4c068293fda0918d6": "7ec32c4984d0615ab3673b4cf49dee8c",
".git/objects/46/671c0be6485665693f73f6e2bd89821fbd9dde": "97ecfd2e42e90a31625b658dba9c12c4",
".git/objects/4b/65a9238bfe3b2a01f3fa0ad19dc82c9ab66b74": "ff1f01fb829fcbec9cb1fd45e8a5c79d",
".git/objects/4e/0983c6b559457164cb2c941336b8d752419dba": "2a6408050d84ee5f011462d7dcdda50c",
".git/objects/51/d58bbcc07a18ea256eee8d1c95c08704b8ccd0": "869c80ce41d506621f25eae6e9747844",
".git/objects/52/61db77f85b32d66cdcbd893878e0d25532d895": "df2a6a85db527803a19977605762a3ce",
".git/objects/6c/d1ba98948bf40b174f353d9157dab223434589": "9efd907524ad6ad77b51d64ef8fc090b",
".git/objects/75/94145a97b3d9b7df05e03db7703f2a5e7dea5a": "15bc2fa44259ad9ddc8fd4046e81ccab",
".git/objects/80/6535a9d5fe279a41c889c29454185820d238d7": "ccd75185d944933bd49e3f0cb6c98e13",
".git/objects/86/35ff2402f50db892473303b5967bbe23310c83": "a9ebb05ba92c8a24bdcd7cf01caa220b",
".git/objects/8f/4170060fb8fbe812ecee6402c7b281ad040b80": "b51f551c3775b80dcb920a310b00ad4b",
".git/objects/92/574c88d871292b28df9850172e7c7c38ca2424": "772282ebcea8652c5ba66856974a7b13",
".git/objects/95/b2d3b4a37c3a5594ab6b22800521b9728a3d5e": "92ead9b90de03f11a0e0745f646bfbe3",
".git/objects/95/c9718c0a886865a3a3e85542e6cd3877c4ceee": "4aa54d25d23e9a72c4a9745d9784e7f5",
".git/objects/9f/9294329a3c0cef9f9c353a12c5097fbd2f2163": "c224390fa151dcf81b8b3df2fcc76608",
".git/objects/ac/f4ca8b6e7c318d9d73886b4224dd375e735213": "dfee97666b91ae4be41867f039648c35",
".git/objects/be/df2fa7e96ba025d2d4948b21b8b92834ec692c": "965b2bd74d69e5b81acd556a407971f8",
".git/objects/c6/9c5cdd5dca0e67e553f712df7b87e5666ea4d8": "eca52959b178f8eb25904ed2adcf9466",
".git/objects/d5/803f66137158c7e0f61fa1799dfeee57e14dce": "e0f7622d1bce10a094f5b4bc211293cb",
".git/objects/d6/74946b0b1047d1e8d6b5efa264bc9687b64275": "12ea6edeaae0d3040673fc403054c601",
".git/objects/f7/9ef2cddc1b98f4846ba65af04ca535f04cd1f8": "8011168152eb400bc9b1d732722eeaf3",
".git/objects/pack/pack-0ee633c58b417ea54e0f2d1957b121270b4007ea.idx": "7db36e44a37123f92667e5e6ca7f8572",
".git/objects/pack/pack-0ee633c58b417ea54e0f2d1957b121270b4007ea.pack": "df0c076c032c7463f923c19114a0e259",
".git/objects/pack/pack-0ee633c58b417ea54e0f2d1957b121270b4007ea.rev": "69c9a7c5f5a3882b21651447a9d292a6",
".git/packed-refs": "473768a18f70a13111c946da2b9ad204",
".git/refs/heads/master": "7a56792b6ac60e453f827bdc62c71376",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "7a56792b6ac60e453f827bdc62c71376",
"assets/AssetManifest.bin": "fea0ec03cf4a06a8a4092de613e0604c",
"assets/AssetManifest.bin.json": "263b4134763129b9f957ea6cd2614c09",
"assets/AssetManifest.json": "59371d77c6f0fb9e5c6a27f3700fe3f8",
"assets/assets/bars.png": "0c7d937f85e5353ed44dc2dc5b87aae3",
"assets/assets/cameraman.png": "34a52ca883b4a330856dee9c62ceeba3",
"assets/assets/downloads.png": "fbb8dc4fb9365df38c43fb9f75a8720a",
"assets/assets/ducky.png": "c55b5658db453703c51b65e25209eff7",
"assets/assets/home.png": "977733b0d6d2cddd3792e3cd8b9008f8",
"assets/assets/laptop.jpg": "569da046d4534fb48d37464d42fb7f6c",
"assets/assets/laptop2.png": "141b05a7a01ab1650b9a92c341ab4bb3",
"assets/assets/man.png": "51ea8d9a8a7c11d7b1d2c08aa2dee352",
"assets/assets/pk.png": "68f17694cca581a3d9e22e787cc90ddd",
"assets/assets/shorts.png": "3bd42e6ae1960d914f8aa6bcc79854f1",
"assets/assets/signuppic.jpg": "917ac77b7016548521bb34617dbbb6c7",
"assets/assets/sir.png": "bdd278d0ef7d7ba014cf14107a7d946c",
"assets/assets/sirr.png": "72f167a23c88ef22b2dbe7746a9b60c1",
"assets/assets/subscriptions.png": "272375dfdeb12d3f42a6b17bceb904a3",
"assets/assets/whats.png": "d1f70395f5cab22c0387a6c887d4834e",
"assets/assets/whatspic.png": "9ec3097a6a22345dd79d048fb0795a1c",
"assets/assets/you.png": "70df133cd7644c385601e8f88ede06d1",
"assets/FontManifest.json": "b35255780e866a56d9fb854181d5eeb7",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/fonts/Ubuntu-Bold.ttf": "896a60219f6157eab096825a0c9348a8",
"assets/NOTICES": "7f673730900047942f728fe9f06d3f75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "312d636db1f631df184daf27e723e4b4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "01bccb91c85fea9fd3bc5c99d62bf632",
"/": "01bccb91c85fea9fd3bc5c99d62bf632",
"main.dart.js": "6b98e442495adaa066c14c1db7263c82",
"manifest.json": "1c5fd603809cc1557a783b61ef51a666",
"version.json": "e12d16673f638ed170a5f83edf27c036"};
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
