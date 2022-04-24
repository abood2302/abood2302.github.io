self.addEventListener('install', e => {
    console.log('Service worker installed')
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll(["./", "./assets/favicon.png","./assets/logo.webp","./style.css","./index.js","./assets/android-chrome-192x192.png"])
        })
    )
});

self.addEventListener('fetch', e => {
    console.log(`Intercepting Fetch request for ${e.request.url}`);
    e.respondWith(
        caches.match(e.request).then(response => {
            return response || fetch(e.request)
        })
    )
})

