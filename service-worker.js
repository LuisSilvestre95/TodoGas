// service-worker.js
const CACHE_NAME = 'todogas-cache-v2'; // Versión actualizada del caché
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/favicon/apple-touch-icon.png',
    '/assets/favicon/favicon-32x32.png',
    '/assets/favicon/favicon-16x16.png',
    '/assets/favicon/site.webmanifest',
    '/img/Logo 2025.webp',
    '/img/3.webp',
    '/img/31.webp',
    '/img/GN1.webp',
    '/img/32.webp',
    '/img/GLP4.webp',
    '/img/INST3.webp',
    '/img/26.webp',
    '/img/EQUI6.webp',
    '/img/OBRA5.webp',
    '/img/11.webp',
    '/img/7.webp',
    '/img/24.webp',
    '/img/12.webp',
    '/img/2.webp',
    '/img/1.webp',
    '/img/22.webp',
    '/img/enercer.webp',
    '/img/13.webp',
    '/img/14.webp',
    '/img/gober.webp',
    '/img/alacaltunja.webp',
    '/img/GLP2.webp',
    // Si auto-hospedas estas, añádelas aquí:
    // '/css/font-awesome.min.css',
    // '/css/aos.css',
    // '/css/swiper-bundle.min.css',
    // '/js/aos.js',
    // '/js/swiper-bundle.min.js',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Service Worker: Cache abierto');
                return cache.addAll(urlsToCache);
            })
            .catch(error => {
                console.error('Service Worker: Fallo al añadir URLs al cache', error);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Cache hit - return response
                if (response) {
                    return response;
                }
                // No cache hit - fetch from network
                return fetch(event.request).catch(() => {
                    // Si la red falla, podrías devolver una página offline aquí
                    // Por ejemplo: caches.match('/offline.html');
                    console.log('Service Worker: Fallo en la red para:', event.request.url);
                });
            })
    );
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        // Eliminar cachés antiguos
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
