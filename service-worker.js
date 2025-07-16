self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
  e.waitUntil(
    caches.open('amora-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/login.html',
        '/login-form.html',
        '/signup.html',
        '/chat.html',
        '/call-history.html',
        '/menu.html',
        '/userinfo.html',
        '/group-call.html',
        
      

        '/icon.png',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
