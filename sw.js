// Service worker: хранит пульт в памяти телефона, чтобы он открывался без интернета
self.window = self;
importScripts('config.js');
const V = (self.PULT_CONFIG && self.PULT_CONFIG.VERSION) || 1;
const SHELL = 'pult-shell-v' + V;
const TRACKS = 'pult-tracks';
const FILES = [
  './', './index.html', './config.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => c.addAll(FILES.map(u => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith('pult-shell-') && k !== SHELL).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') {
    e.respondWith(
      caches.match('./index.html', { ignoreSearch: true }).then(r => r || fetch(req))
    );
    return;
  }
  if (url.pathname.endsWith('/data.json')) { e.respondWith(fetch(req).catch(() => caches.match(req, { ignoreSearch: true }))); return; }
  e.respondWith(
    caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req))
  );
});
