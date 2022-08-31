const CACHE_NAME = "static-cache-v2";

const FILES_TO_CACHE = [
    "/",
    "/index.html",
    "/reset.css",
    "/images/express-gym.png",
    "/images/fitness-tracker.PNG",
    "/images/home-screen.PNG",
    "/images/IMG_1105.JPG",
    "/images/mafia-tracker.PNG",
    "/images/sheltr.PNG",
    "/images/tech-blog.png",
    "/images/weather-app.png",
    "/images/wildfire-tracker.PNG"
];

self.addEventListener("install", function (event) {

    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    event.waitUntil(
        caches.keys().then(keyList => {
            return Promise.all(
                keyList.map(key => {
                    if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

