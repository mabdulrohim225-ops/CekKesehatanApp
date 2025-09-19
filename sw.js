const CACHE_NAME = "cek-gizi-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/sw.js",
  "/assets/icon-192.png",
  "/assets/icon-512.png",
  "/assets/hero.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
