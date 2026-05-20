/* Terminal Analyzer — Service Worker v1 */
const CACHE = "ta-v1";
const SHELL = [
  "/",
  "/index.html",
  "/intraday.html",
  "/swing.html",
  "/manifest.json",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
];

/* Install — cache the app shell */
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

/* Activate — delete old caches */
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

/* Fetch strategy:
   - HTML / local assets → cache-first (app shell always loads offline)
   - Yahoo Finance / Google Fonts / CORS proxies → network-first (live data)
*/
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);

  // Always go network for Yahoo Finance and proxy requests
  const isLiveData = url.hostname.includes("yahoo.com") ||
                     url.hostname.includes("corsproxy.io") ||
                     url.hostname.includes("allorigins.win") ||
                     url.hostname.includes("codetabs.com") ||
                     url.hostname.includes("googleapis.com") ||
                     url.hostname.includes("gstatic.com");

  if (isLiveData) {
    e.respondWith(fetch(e.request).catch(() => new Response("", { status: 503 })));
    return;
  }

  // Cache-first for the app shell
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp.ok) {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      });
    })
  );
});
