const CACHE_NAME = 'campus-nodes-v1';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/src/js/main.js',
    '/src/styles/main.scss', // Vite serves this processed, but in prod it will be assets/index.css
    '/data/listings.json',
    '/data/users.json',
    '/data/services.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Opened cache');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', (event) => {
    // Stale-while-revalidate strategy for data
    if (event.request.url.includes('/data/')) {
        event.respondWith(
            caches.open(CACHE_NAME).then((cache) => {
                return cache.match(event.request).then((cachedResponse) => {
                    const fetchPromise = fetch(event.request).then((networkResponse) => {
                        cache.put(event.request, networkResponse.clone());
                        return networkResponse;
                    });
                    return cachedResponse || fetchPromise;
                });
            })
        );
    } else {
        // Cache First for static assets
        event.respondWith(
            caches.match(event.request).then((response) => {
                return response || fetch(event.request);
            })
        );
    }
});
