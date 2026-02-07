self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("kaspi-pwa").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./load.html",
        "./udo.html",
        "./style.css",
        "./manifest.json"
      ]);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
