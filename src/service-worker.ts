/// <reference lib="webworker" />

const CACHE_NAME = 'zipcode-red-v1';
const OFFLINE_URL = '/offline.html';

const CACHE_DURATION = 30 * 24 * 60 * 60; // 30 days in seconds

const STATIC_RESOURCES = [
  '/',
  '/index.html',
  '/manifest.json',
  '/vite.svg',
  '/src/index.css',
  '/src/main.tsx',
];

const RUNTIME_CACHE_RULES = [
  {
    pattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com/,
    strategy: 'cache-first',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  {
    pattern: /^https:\/\/public\.tableau\.com/,
    strategy: 'network-first',
    maxAge: 24 * 60 * 60, // 1 day
  },
];

self.addEventListener('install', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_RESOURCES);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event: ExtendableEvent) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((cacheName) => cacheName !== CACHE_NAME)
          .map((cacheName) => caches.delete(cacheName))
      );
    })
  );
});

self.addEventListener('fetch', (event: FetchEvent) => {
  const url = new URL(event.request.url);

  // Handle navigation requests
  if (event.request.mode === 'navigate' || event.request.destination === 'document') {
    event.respondWith(
      networkFirst(event.request)
    );
    return;
  }

})