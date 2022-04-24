cacheArray = [
    './assets/android-chrome-192x192.png',
    './assets/apple-touch-icon.png',
    './assets/favicon-16x16.png',
    './assets/favicon-32x32.png',
    './assets/favicon.png',
    './assets/logo.webp',
    './index.html',
    './index.js',
    './style.css',
    './serviceWorker.js',
    './manifest.json',
    './assets/'
]

self.addEventListener('install', e => {
    console.log('Service worker installed')
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(cacheArray)
        })
    )
});

self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});

