// Service worker: хранит пульт в памяти телефона, чтобы он открывался без интернета.
// С интернетом сначала берёт свежую версию с сайта (обновления приходят сами),
// без интернета — из памяти.
self.window = self;
importScripts('config.js');
const V = (self.PULT_CONFIG && self.PULT_CONFIG.VERSION) || 1;
const SHELL = 'pult-shell-v' + V;
const FILES = [
  './', './index.html', './config.js', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'
];
const FRESH = ['index.html', 'config.js', 'manifest.webmanifest'];

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

// сеть с ограничением по времени, потом — память
function networkFirst(req, cacheKey){
  return new Promise(resolve => {
    let done = false;
    const fromCache = () => caches.match(cacheKey || req, { ignoreSearch: true }).then(r => r || fetch(req).catch(() => new Response('Нет сети', { status: 503 })));
    const timer = setTimeout(() => { if (!done) { done = true; resolve(fromCache()); } }, 3500);
    fetch(req, { cache: 'no-store' }).then(r => {
      if (r && r.ok) {
        const copy = r.clone();
        caches.open(SHELL).then(c => c.put(cacheKey || req, copy)).catch(() => {});
        if (!done) { done = true; clearTimeout(timer); resolve(r); }
      } else if (!done) { done = true; clearTimeout(timer); resolve(fromCache()); }
    }).catch(() => { if (!done) { done = true; clearTimeout(timer); resolve(fromCache()); } });
  });
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  if (req.mode === 'navigate') { e.respondWith(networkFirst(req, './index.html')); return; }
  if (url.pathname.endsWith('/data.json')) { e.respondWith(fetch(req).catch(() => caches.match(req, { ignoreSearch: true }))); return; }
  if (FRESH.some(f => url.pathname.endsWith('/' + f))) { e.respondWith(networkFirst(req)); return; }
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(r => r || fetch(req)));
});
