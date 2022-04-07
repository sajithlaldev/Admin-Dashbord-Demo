'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "6b3be45f24b8819ec5c46ad00d684273",
".git/config": "2ec1e1fc89ec6574218e950e911c69b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "63a4e87fd6197615e7618e209db04d02",
".git/HEAD": "36d2e6bfefea098ed28d3260f6fd2002",
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
".git/index": "786eb973d4905ed7da6cbd5cdd56ccee",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "480a5b4de82b3c2dd0d944213a91f1b4",
".git/logs/refs/heads/deploy": "7f8520104bbc8819917f35cdf839192c",
".git/logs/refs/heads/master": "0d718eb86d2b3e9e3857946b1d6f665d",
".git/logs/refs/remotes/origin/deploy": "efca6d2e5e0a5427340671d18e1bda80",
".git/logs/refs/remotes/origin1/master": "bf2e564ed6c2515e1af0ac820638ab9c",
".git/objects/03/9da8a1265a101c00a3898ac17fd8555bf336dc": "216a5e9c553d06e403e67324962bfea3",
".git/objects/04/aee359d15a25682e2dad6016da991a4877e25c": "1dc0a89c08120bbe7aceae088639de20",
".git/objects/05/53bd703116f2bd6443217e16002eec8b049fb3": "f64df1567ab2e7ce29dacc2811fc82a2",
".git/objects/08/10094783252b4c178d7ffe734f745d7d7621ca": "fe998de1bc9e8d7d026715048115584f",
".git/objects/09/ebead82c218606cfaa40b31d6771f1bd88493b": "a8e2869adef49fb6703d085d0782b852",
".git/objects/0b/27c2aa11e7460bed6a866351bdbc6104443897": "30a852183fb1a8a13d94ac0861122568",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/10/444cb4e5535e2f0f9ab9a3c50f7edf2582cdc0": "7876a606c5c5e287ec28d35c2a836fb8",
".git/objects/13/09d66b6ff77f4b4c510ce7a9f85709c3bb5827": "8dfde2ecd25f1a89d55e7db81a4e2b35",
".git/objects/14/5053b59b36a1f570de05bf4d3b2d48b1cf6cb4": "528189afbe89beb3d1f3efd060726ceb",
".git/objects/14/b9140a0fd337976332bfb6066db7c7d775ddcd": "5bce2e8cbe98d1b746061b2b4248dae5",
".git/objects/15/8a9dc3a545693714ac3cbe9ec7d288572bb086": "5fd5bf96edfb7d04e2eca89f425c59c7",
".git/objects/17/c541ab935f2da3e2651c50e3caf057df3d931b": "981715b5a7ed6054f10d190eae15bda6",
".git/objects/1a/8af5296df2521172d1cbc7b64381c4caa93cb1": "16970809892ace67a23f7ef58b1bfaee",
".git/objects/1e/a77534aa78b23efbb6f9c755d54537553a6094": "d3b9f52f4f0d747fc508c32d38512901",
".git/objects/1e/edd07fb5642c59031cbbf60ebc2613c671f6d5": "57973df74d862ee5ad62cc33321c4149",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/c8d8f7bf9e823f3d2b89ed8efaf401baf4b942": "4d5b1ee9c17136dbb102e28f6a428542",
".git/objects/27/e5f604c953aa48124c6c78be796aa43c104664": "4f3ed19ce6d65fccbdf475dd3dcef2e4",
".git/objects/28/d0d5af4fb8ea9e6631fe05cfd1acc20af8a996": "ad62dba07b6da589c712a2e28fe2c82f",
".git/objects/2b/e6e93ef963e455f315f0dc687661fb21e99eb9": "ecfeff56607c28270744d70d1c75184e",
".git/objects/2c/6805079576139498652029c8b72e84b8015abe": "4bcb74d891f78d01bd1c8618ea4233e7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2f/dbf9e40b4c1a848f85558f5766bd905b3980bb": "6955967f9e51281db3a198a5886c9ca6",
".git/objects/31/6d4587ad34b56166f2159e714d0a4abe0ae415": "5429a220ddf5bbcbfae04cf3cf99d3e1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/4d971aaee42fb232931810fa3dcd0f92968a88": "10af3e181318d48483a3d6b6532e3cf5",
".git/objects/36/25d8470c3fbbbea8d5879d383c30578da1aa50": "b0583099be18798fe7388f4bb225338d",
".git/objects/36/a7118c61cc9ebb9f479b107753095e8fbd5233": "8abb766c70c60b5d3f8948cfec770d0e",
".git/objects/38/df1cb23381c9a56076db0bd5d6c59af489df2a": "598ad0e328513b95127880a3e6a16316",
".git/objects/3a/9ba12a967c833e4b8af1f8733092b7c9c2c0d8": "4c69a59a0eb5159fed8e72b525df86a4",
".git/objects/42/74a88da50a13c5c00086a32c2444f468999dc6": "730a711b3c648b491a0e376629453190",
".git/objects/4a/e532e2cbb91507c6a839a2eb47575aecdc44ef": "754f48a8ab9e13ced08e38a8d9ee112a",
".git/objects/4b/1edbff8bcd96e60eb28df9add599b2718a48be": "99a89dd3ebaf87174748a62371df460f",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/61b3a3b97493ebf711bcd3fd590f3911efe69c": "dc0c71f94f0bbece1394c619770d10d5",
".git/objects/51/09765341323184e75782abd3f66a2ce1256e67": "a38dca9be5baf1720871abe13f185410",
".git/objects/54/1b9713ac6641a687bec516ac78de96afac9547": "02032659d466765924a92814dd111b8b",
".git/objects/58/a6fc7f1e4f82645f792e97def15ac84c0f808e": "d1907fc8d5bf7af2241d4b691e80fadf",
".git/objects/5a/3143e8ae4679c35d11796ca595265f97e5a48b": "93055e125823b92301fd38b8c2451d7b",
".git/objects/5a/e6cd038d7e4b1fcc645a77cc589e8ea53c0385": "bada1a90e985463b3a5dc13c90ef4d53",
".git/objects/62/129e0c163887b543f90419ff3d3be867c11ccd": "52f934952b07ccaf1ae4b7a67b00e98d",
".git/objects/63/13538c18da8b706394c0f134423c6660f2285e": "7b687d423b834b3789775cffa424ed46",
".git/objects/64/d1cf9830b73da3b6ad725d0c6ea93f4d2a9367": "9fcda0b3d99ff5da55c952556d2e3a16",
".git/objects/67/25a8d8cd5b002d963228f3cd9d57a9570c9076": "3672a098a415efef4ae8ae2e860b97c5",
".git/objects/68/e5707b19d89cf0da513ed15715abdb85bd9469": "6fa2196c93763436076e8e2fe2fa9955",
".git/objects/6e/90dc25707a1f454b7f1aeb883a43ffa9c3eac1": "b0a2f6bbf985e59087d506b9663f019f",
".git/objects/74/2b2049382bda931942a5f3775ae15a46ea877e": "8e6e12de684b21a752e7145650437e2c",
".git/objects/75/298b60908a74155dfe943e911e0e138a53b75b": "8330473abb2912f04cb96fb7675aab90",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/9c54beefae14c5c40df483b2bcab2ce87dedfe": "b667e5c9d741c1adcad224f83f69458d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/62cc17c32965b6741a96b14a963d9067ffd92a": "8fcb21e7baafb413bf014131b8f0b9db",
".git/objects/7d/92dc526037f461842d64672c9ebebf9cabbbe1": "73e0febc147d7122679e3b1c629595f4",
".git/objects/82/76127f8b90528fc4a59d43e7f084d534829212": "334e6cd1ca0cdebbe118c21117005270",
".git/objects/82/fa9ff4228113f2c5ae96d0d48325192ce9e0ee": "e1b053b57a2dcd1edb138a7104d2433a",
".git/objects/85/3549d1675d9aaff40a83951aaf7af2131edec9": "55a82313807b50e677d89ea9a979fe92",
".git/objects/87/8e248f549f641036cf838bf57dd7b8a00dc1ab": "9ff19c2560752e3a405e587a1d12e7d7",
".git/objects/87/aea162ccac8952706429068274c4f497b8b7ea": "28012231a5d28c9530580d5cce4da2d5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1df37e3cf37b9b8bb74f4abf3894beaf70f034": "a752ad6c157502bb2c88e2c6b1785c00",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/001d514bff64fd9d8ca86cf2aaba056e9dbda4": "888d700a3c8ba56b1df50b4ad8bb8cde",
".git/objects/8f/9304373562cfb22354216e53f8d8b2018c316f": "7ccf5d87d8fc7ff8bf291ee60f4c5fc7",
".git/objects/92/b47371066dcab21bf3d32dae2d7473483723dc": "2a1db9d6102a2ff63c248a379ba293f9",
".git/objects/94/77c3fca769b45f0a9d73fe6cc386958b04f293": "8f655dd8cb0b2dfc22567d78537b9837",
".git/objects/9b/12c3d356150384793670b6851ff5b9ab579532": "cdbab1996b715f86a46086e941afbc94",
".git/objects/9c/7403f7d213c48c2e8785c840e0c1761ace63a1": "1a7239f07912495ddf7de5132e9e8639",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/de4e782c0514854636b30f52b96375ab492493": "b74a3d6f0d16b2358d4f46f894dfcf30",
".git/objects/a4/cf082798934031413a93545c2e99a814af65f5": "40069622cdd30b8cf215b4ac88cbea59",
".git/objects/a5/c9bdd264fc5ea949856c851aaa83d9441f48e5": "672bc997835a9fe2f82964bfd378f8b2",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/c1932ac167ea027d248b729c38d7d72a16f190": "298573e9aa3dadd2010b9e2bc0207301",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/89431d201e6ff9ad4804024286850f43ae3a33": "310b68215fd996aa3b78b78b359c5ca7",
".git/objects/ae/0dca0e70e2f24bde66c57397e7734542cf095c": "8f07e1ee9a4249abecd02235931f6d0b",
".git/objects/b0/ad3f8884ae7ac0e89291b415ad812832bb127d": "411bfc9518fa5dc7630b50eb4624e255",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/01abca4dab59298e770be9f1e0d4c001f87c14": "5a2c3ba805af920fdcd3537c0a126cbf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/2b1b1be2b9314915304cb377647783f8237836": "c771a2a46c57b9e68bcd8e8d8a6f9224",
".git/objects/c1/a0ebd0efd894405137f801dd7b103bf75aff23": "d7c5d7a134f92bc389e47d79d478b786",
".git/objects/c2/26e97bce6f18640518ea00b983f2c477992e4d": "56b208dce591a2a6f265a7bc3c267912",
".git/objects/c5/d014cfc44b2f98f5237cad897738195d50007b": "957344be88569e5052f95347d8e85324",
".git/objects/d0/61a6b727894c472f72f6768926711288c57377": "a2716c75b24ea4caf1b873141ad7b01b",
".git/objects/d1/3b0492dcea13f289338e438ae3549c8990c355": "f3998d296a42a988d71b6d0094abf7bc",
".git/objects/d1/8b3bc20c0ee6dd066eb5a19baf605ef06eceba": "ea0ac24b20641fabc10527a858c3bc31",
".git/objects/d4/3f5600eeb11afeddc07ddb2320feaf4a26ba14": "65290a14ca23493a7de227abff7c83a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/14e80083c399ca5fa1f7860c041b0935b23732": "acd7cd4227fb7d7f7e423eb28e9f6845",
".git/objects/d8/36dcd12e92bf936bae8925cae045eda029832f": "1eea5e8aad51788103c025a17fdec44d",
".git/objects/d8/d2ec090917f5bfd2ae2779b0e47d3f1def2add": "86f605825af79e0f7702d35ddc5346b3",
".git/objects/dd/9595a774211153582a47ea8d129e8fd1891752": "e7753f6bf38966687d6a99f9801791fd",
".git/objects/de/4460638083b64dec0515d8f1749b95deac3d5e": "7c005d81d938f8c1ad2067ffaccd6314",
".git/objects/e0/ed06c118bed15f2aa5d213b661c8d4ff215002": "530c54ee29ae3a604bf3bb58ff12b278",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/b58d660504f510b96573a1a1a9153c85b53c04": "a015e31f9beae1c617d968498558abb0",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/e84be37926683288c5e25fe15e1525e4c2a01d": "d875396aaa035eebd657f467082e0ef5",
".git/objects/ec/492cb43073657335c436a87f2bb4eca0693632": "c1add22b63008fda7396079cda80e4f1",
".git/objects/fb/0ce400cc28fad7af5412c74fe3045e2cf27ffc": "7c44d3ef120386a56ebf5c28f012d143",
".git/objects/fc/00154cf9705cbea98d1b7c1c7e4fdf671d95d8": "ebc3fefa2ddb3afa9df83e989c7b8c4c",
".git/objects/pack/pack-9da7658a051ee0cc4a4bd8f90f8140a4873fcb00.idx": "64b13f18b4f7964ac339d97fb78db111",
".git/objects/pack/pack-9da7658a051ee0cc4a4bd8f90f8140a4873fcb00.pack": "c1541e084325795d5e2618305ef2f365",
".git/ORIG_HEAD": "e85a9e13426e28dcd66c8d8582561050",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/deploy": "cd3301806b6f1b8807259db21899e75d",
".git/refs/heads/master": "46189c551c0b07d20d8a4c3794134311",
".git/refs/remotes/origin/deploy": "cd3301806b6f1b8807259db21899e75d",
".git/refs/remotes/origin1/master": "398f10b3e89e99fac6588cbc1f72edfd",
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
"assets/NOTICES": "48956c9e816f4fd10ba5e6e1dd206617",
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
"index.html": "79f5a6b8c4837e65f5abfd2e9ed1d109",
"/": "79f5a6b8c4837e65f5abfd2e9ed1d109",
"main.dart.js": "1798e1e85e6efbeb3d9e6b5b28c89eb1",
"manifest.json": "29133ef221675d257e65d0d35dbdc758",
"README.md": "47b477e44125b78e46ef06e89ee67ebe",
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
