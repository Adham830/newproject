'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "bc7a49ffb8fb5de9e4e900e2c2c707f6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "8a251bebb24eede2885b50a41e8a4d8a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7cb032e097f260f0cfbc231f4812620d",
".git/logs/refs/heads/main": "1088cc86baa5691e3dd5ce588cb3feb1",
".git/logs/refs/remotes/origin/main": "3721f180a762012f1c0306a52e35672a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/87edccb9777e933649c82b62d636f1cec16f91": "ed367a84aba04d2243b6544282c915ce",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/38a060cd611b865c111f5c708ef5911b203de7": "d4352162fcfeab17232b4ad3caf1e675",
".git/objects/1b/1fe6f357d463139fc7af940f65078043d52e65": "3c44ab2c11cbfc6592ffa93e0924171b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ef58a48ee58bf1f6cdcb0970d4badd9f3865f4": "42c5106fac022141f09f35af1e764845",
".git/objects/22/be88047d3eab9fd7bf0933e2a409658a6e5688": "8a1289392f91805709d0eb93eb2f37f2",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/ef7ef966e207522868c19f569671061dcd4c9a": "aaa4d9d942c9e144caa3fa34b2a6364f",
".git/objects/2b/e6a7d717194f655386d67e215e7e1d8b6c03fd": "a821f6ea9999ab64924dbcc32320f377",
".git/objects/31/12d39fb0c64b4cb626e7e65fc00c2c9d8b089f": "ccc135314f8ff125c534933fa0af0944",
".git/objects/34/18ed64311864b9279f64071693930d24d8e8a2": "d732485cb0f22836232f475ab9cd2436",
".git/objects/34/fa0a1581ff27d71e2076309c4b733de6cfbf57": "cf25bcf63d44490cd57585bcdf97e5a6",
".git/objects/3a/7c97e89919ed39dd0c8ea1b38136c0631cbbd3": "707688f1c2c8672a213cc6ad1f405297",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/89251cf9a08dc0d27cb03793d33989af4c3c54": "5ee4a616e6762adb699a3d2ebd265529",
".git/objects/4e/5b1bd219321ffcf94ce40396f46160626802cb": "66ce78e162d736436a7e23012fef3104",
".git/objects/54/8761fb0a20ee67f91957effb0029b6104c3e3e": "1dbaffd3c0e5cb404bf9a56c531544e2",
".git/objects/61/12a68168d0891b811a6fcd46c047ad84ddf1e0": "916cbd1363f45da983c48f927aba6b76",
".git/objects/62/193d100d36f2b045f4405036e69113bbaa1315": "ab2f05b54537e27a20eed483d8514bd2",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/74/1e50926984df830f58d76a9301cfde41cf4b2b": "3b459daf0ef13470a5072d3d838e776c",
".git/objects/77/3070b52dca5dcdb87d1d2a3640f5c590f29848": "4b64b94bbcc93748839ca62ee68bdec5",
".git/objects/81/c2461fd8e075393c77a24d064c996fb3124b98": "32b0498229b02642250fe818fc6fce22",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/92efd9daab47fcedef01a9c85c4f3af76ca558": "257d5114a232355a89e34685b11c4a81",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/91/076ada8d9bab687bc94f43685dd6564797d4a9": "6759966e2b4f8205fb46c0b65e1cfb92",
".git/objects/94/35f53782e45056fc25c3ec65a285b084eba9b5": "9d5878c3c32032d6e3e6356f7ed76db9",
".git/objects/9d/c522c1ab0c955b96d2607726447ac54075c432": "91116b85f89f7c87cd2d24cd7f480b6c",
".git/objects/a3/0249f19da7affa639d1e8d61138d7092a1d2a9": "aef16da9df3e6cc9f622cc8a71c1e0b2",
".git/objects/a4/1163b071ff817634ea29a59762a8fab96d6e5f": "b8339ae2c32b996ce5a4baceb0b48364",
".git/objects/a8/5c8a635bf5a9424195c746526f891c70fad36c": "4ec56cb326c7df18f46a6875effa0cdd",
".git/objects/b0/ddee0800c790d8c6d61130dd81b9c576cf9adf": "3deab9e10b90ca66b71cb6619e0b3c1d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/62ffec563b2773fbcfcc4bbb9a1bd1ad8a25c5": "4ef3a7f5c2dc4b4a16ad4cd40c4bf674",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c4/ab2a7131581b861b25ed295385f514a15a10ab": "0296dc66e2bb0713ff7d524a58c1bc9b",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d2/23eae19fad727295e7227cde662fba6e0b31e6": "5ccbd364dd699ac2d85556850530a9c4",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/f4c8fb10fec95acafc0d7351f0229f8782de71": "8f80a3dd9dd1b375c468542892d3f024",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/df95c69cc5505ce167d7b2a279762b25fa6b97": "aa95fea0b46a81781f6f1b5dd789c33f",
".git/objects/fd/8ce4d97feacf049a49b4739e12263ad290bf80": "61751b0bfd1e3b4782ebfe665fceb1f4",
".git/refs/heads/main": "db935c645b7c52ee264779a701c43876",
".git/refs/remotes/origin/main": "3a91e2d2e5aa9bf1db90e3043d2dde2f",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c23120d40b1155edfcf9cd170c6d9f5d",
"assets/NOTICES": "ab809633eb0dcbcf57f6ff363cc9672e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "0e65924e06b816dcdfe0d3a5a8b5f3d8",
"canvaskit/canvaskit.wasm": "10df22a3f110ec95a45aaf968507d8e5",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "30d051e7f72eacf0b8650b9421d622a0",
"canvaskit/chromium/canvaskit.wasm": "b12d1771132b1a834642c4b36363183d",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "6bcdbe0d1419dbaa9b57904e46b02671",
"canvaskit/skwasm.wasm": "b2ca31a107d03b090d34d63fe4b51938",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "c948f2b4261af2e4710b8298642803e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e43bac1bbbdbcb9a40c3d3fbcbe09712",
"/": "e43bac1bbbdbcb9a40c3d3fbcbe09712",
"main.dart.js": "786c69cd41b6226f3a3d8c30e6fc71e9",
"manifest.json": "07a31335f31b0d8341cc463d2284db3c",
"version.json": "2b6d3cd1cc2a3068914554081571ea75"};
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
