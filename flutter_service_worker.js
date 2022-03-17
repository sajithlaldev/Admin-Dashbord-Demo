'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d19cdb54d5b91663defed6852f47bb3b",
".git/config": "b657d85b47e22759c535772bc944583c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "a28cbb1c2b4fa1a1ba2861dbd137ebe8",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "622d261431274289a4e734a616a0f8af",
".git/logs/refs/heads/master": "622d261431274289a4e734a616a0f8af",
".git/logs/refs/remotes/origin/master": "a8aebad50dfdf20bd5e0cd49947d357e",
".git/logs/refs/remotes/origin1/master": "306d31ed97248f8ec9ed545e51c89c33",
".git/objects/05/53bd703116f2bd6443217e16002eec8b049fb3": "f64df1567ab2e7ce29dacc2811fc82a2",
".git/objects/0b/27c2aa11e7460bed6a866351bdbc6104443897": "30a852183fb1a8a13d94ac0861122568",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/444cb4e5535e2f0f9ab9a3c50f7edf2582cdc0": "7876a606c5c5e287ec28d35c2a836fb8",
".git/objects/1a/8af5296df2521172d1cbc7b64381c4caa93cb1": "16970809892ace67a23f7ef58b1bfaee",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/c8d8f7bf9e823f3d2b89ed8efaf401baf4b942": "4d5b1ee9c17136dbb102e28f6a428542",
".git/objects/27/e5f604c953aa48124c6c78be796aa43c104664": "4f3ed19ce6d65fccbdf475dd3dcef2e4",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/6d4587ad34b56166f2159e714d0a4abe0ae415": "5429a220ddf5bbcbfae04cf3cf99d3e1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/36/a7118c61cc9ebb9f479b107753095e8fbd5233": "8abb766c70c60b5d3f8948cfec770d0e",
".git/objects/3a/9ba12a967c833e4b8af1f8733092b7c9c2c0d8": "4c69a59a0eb5159fed8e72b525df86a4",
".git/objects/42/74a88da50a13c5c00086a32c2444f468999dc6": "730a711b3c648b491a0e376629453190",
".git/objects/4a/e532e2cbb91507c6a839a2eb47575aecdc44ef": "754f48a8ab9e13ced08e38a8d9ee112a",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/61b3a3b97493ebf711bcd3fd590f3911efe69c": "dc0c71f94f0bbece1394c619770d10d5",
".git/objects/5a/e6cd038d7e4b1fcc645a77cc589e8ea53c0385": "bada1a90e985463b3a5dc13c90ef4d53",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/64/d1cf9830b73da3b6ad725d0c6ea93f4d2a9367": "9fcda0b3d99ff5da55c952556d2e3a16",
".git/objects/67/25a8d8cd5b002d963228f3cd9d57a9570c9076": "3672a098a415efef4ae8ae2e860b97c5",
".git/objects/68/e5707b19d89cf0da513ed15715abdb85bd9469": "6fa2196c93763436076e8e2fe2fa9955",
".git/objects/74/2b2049382bda931942a5f3775ae15a46ea877e": "8e6e12de684b21a752e7145650437e2c",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/9c54beefae14c5c40df483b2bcab2ce87dedfe": "b667e5c9d741c1adcad224f83f69458d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/82/76127f8b90528fc4a59d43e7f084d534829212": "334e6cd1ca0cdebbe118c21117005270",
".git/objects/82/fa9ff4228113f2c5ae96d0d48325192ce9e0ee": "e1b053b57a2dcd1edb138a7104d2433a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/001d514bff64fd9d8ca86cf2aaba056e9dbda4": "888d700a3c8ba56b1df50b4ad8bb8cde",
".git/objects/8f/9304373562cfb22354216e53f8d8b2018c316f": "7ccf5d87d8fc7ff8bf291ee60f4c5fc7",
".git/objects/94/77c3fca769b45f0a9d73fe6cc386958b04f293": "8f655dd8cb0b2dfc22567d78537b9837",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/de4e782c0514854636b30f52b96375ab492493": "b74a3d6f0d16b2358d4f46f894dfcf30",
".git/objects/a5/c9bdd264fc5ea949856c851aaa83d9441f48e5": "672bc997835a9fe2f82964bfd378f8b2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/89431d201e6ff9ad4804024286850f43ae3a33": "310b68215fd996aa3b78b78b359c5ca7",
".git/objects/b0/ad3f8884ae7ac0e89291b415ad812832bb127d": "411bfc9518fa5dc7630b50eb4624e255",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/26e97bce6f18640518ea00b983f2c477992e4d": "56b208dce591a2a6f265a7bc3c267912",
".git/objects/d0/61a6b727894c472f72f6768926711288c57377": "a2716c75b24ea4caf1b873141ad7b01b",
".git/objects/d1/3b0492dcea13f289338e438ae3549c8990c355": "f3998d296a42a988d71b6d0094abf7bc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/14e80083c399ca5fa1f7860c041b0935b23732": "acd7cd4227fb7d7f7e423eb28e9f6845",
".git/objects/d8/36dcd12e92bf936bae8925cae045eda029832f": "1eea5e8aad51788103c025a17fdec44d",
".git/objects/dd/9595a774211153582a47ea8d129e8fd1891752": "e7753f6bf38966687d6a99f9801791fd",
".git/objects/e0/ed06c118bed15f2aa5d213b661c8d4ff215002": "530c54ee29ae3a604bf3bb58ff12b278",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/492cb43073657335c436a87f2bb4eca0693632": "c1add22b63008fda7396079cda80e4f1",
".git/objects/pack/pack-9da7658a051ee0cc4a4bd8f90f8140a4873fcb00.idx": "64b13f18b4f7964ac339d97fb78db111",
".git/objects/pack/pack-9da7658a051ee0cc4a4bd8f90f8140a4873fcb00.pack": "c1541e084325795d5e2618305ef2f365",
".git/refs/heads/master": "8865eaff58792ed8ae54d037ea87f02b",
".git/refs/remotes/origin/master": "c7804a6c5ac3bb92d2f0f1625ef2a74a",
".git/refs/remotes/origin1/master": "8865eaff58792ed8ae54d037ea87f02b",
"assets/AssetManifest.json": "2249a22a6996619256be7ee4fcf44e40",
"assets/assets/fonts/Proxima%2520Nova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/assets/fonts/Proxima%2520Nova-Light.otf": "e2602b2f2c615d20c880911364b32191",
"assets/assets/fonts/Proxima%2520Nova-Regular.otf": "bf9f5d50c1b928ff21436517a1a95ad9",
"assets/assets/icons/2x/location_pin.png": "51f8aa2ef59c514cde92f8042ef50b4d",
"assets/assets/icons/3x/location_pin.png": "37eca8cf00d961abe004e48fd4d6abf9",
"assets/assets/icons/addphoto.png": "5df84b6ce75adeb814a768ffb25820f5",
"assets/assets/icons/addproducts.png": "c2e0f9d08c23def8c4c7b81d78fe98c5",
"assets/assets/icons/box.png": "ff257fab6a22d76f980cd6a6566bac9d",
"assets/assets/icons/chat.png": "c61c583747c000d87902be7598ac8f4b",
"assets/assets/icons/item.jpg": "1e774e30923848e342b989d76e91cf52",
"assets/assets/icons/list.png": "78156b14a26ae2a52a180890116c89d0",
"assets/assets/icons/location_pin.png": "13e3f4444410e1bac31980501b3d2cb8",
"assets/assets/icons/product.png": "610dfab23011c6ac86a3d13bdab4dbf1",
"assets/assets/icons/products.png": "6e4826424621fcfc442a5ee1345a6759",
"assets/assets/icons/report.png": "c7cf28b53e4020f4183fc78532da957c",
"assets/assets/images/dp.webp": "f514e88c74d56940ff73f54aead729bf",
"assets/assets/images/shop_default.jpg": "a529972e21fe140005f2e3201d5ec6b1",
"assets/FontManifest.json": "69bc1bff0bc61a4c81e7693c86a9002c",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "34e4dfc7aeb6b6b4456845783dee2b7e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"functions.js": "b3539017994b0ce5c53fb6821b51c459",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "12369ed9f89b81d7a6eb65898700aa5d",
"/": "12369ed9f89b81d7a6eb65898700aa5d",
"main.dart.js": "15a2c0a0961b46e054b1b78a4f4ee34a",
"manifest.json": "29133ef221675d257e65d0d35dbdc758",
"version.json": "1038d73b2871ed32f81d135e4d0c7346",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
