const CACHE='matchday-202611061800';
const CORE=['./','index.html','manifest.webmanifest','firebase-config.js','apple-touch-icon.png','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('matchday-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET')return;
  const url=new URL(req.url);
  // the app's own files: network first (so updates arrive), cached copy when offline
  if(url.origin===location.origin){
    e.respondWith(fetch(req,{cache:'no-cache'}).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req.mode==='navigate'?'./':req,cp));}return r;})
      .catch(()=>caches.match(req.mode==='navigate'?'./':req).then(r=>r||caches.match('index.html'))));
    return;
  }
  // fonts and the Firebase library: cache first, fill cache on first use (Firestore's own data traffic is left alone)
  if(url.host==='fonts.googleapis.com'||url.host==='fonts.gstatic.com'||(url.host==='www.gstatic.com'&&url.pathname.startsWith('/firebasejs/'))){
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(r=>{if(r.ok||r.type==='opaque'){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return r;})));
  }
});
