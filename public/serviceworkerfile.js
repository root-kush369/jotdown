const CACHE_NAME = "jotdown-app-cache-v1";
const ASSETS_TO_CACHE = [
  "/", // Maps to day3.1/public/index.html
"/static/js/bundle.js", // JavaScript bundle (development mode)
   "/static/media/loading-logo.6f63f278e2487196ba592a9627598a09.svg",
  "/static/media/AnimeArt.eb2d15a638395eed5531.jpg",
  "/static/media/am.524007b60fdd3f6191d1.jpg",
  "/static/media/am2.f3b1b4552900aa88bef1.jpg",
  "/static/media/am3.5bc4a4ae6fa60a76f638.jpg", // Fixed the missing quote
  "static/media/mb1.5e76bcfa03b16da11c5f.jpg",
  "static/media/mb2.a7ff13b9aa2a058de0f4.jpg",
  "static/media/mb3.283d183c6874ec9c1f5b.jpg",
  "static/media/mb4.6d03b13a1bbbf4282a4a.jpg",
  "static/media/mb5.c90fede0de452b7fc8f6.jpg",
  "static/media/mb6.9dad76b70a4ca9a3b139.jpg",
  "static/media/mb7.19f5d13624cb1c7b3893.jpg",
  "static/media/mb8.8a3cf7f493b41621cb4f.jpg",
  "static/media/mb9.25f86c068df67bbe2284.jpg",
  "static/media/mb10.50328e2af6ba2885d1b8.jpg",
  "static/media/mb11.7299fa921c9375aceaea.jpg",
  "static/media/mb12.2c93754f02fa9f68387d.jpg",
  "static/media/mb13.adff3c610f41137d141d.jpg",
  "/close.png", // Updated path
  "/dlt.png",   // Updated path
  "/edit.png",
  "/favicon.ico", //In day3.1/public
  "/logo192.png", // In day3.1/public/
  "/manifest.json",// In day3.1/public/
  "/logo512.png", // In day3.1/public/
  "/letter-k.png",
        
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});







self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
